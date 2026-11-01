"""Offline audit: python3 tests/surface_audit.py --output <directory>.

Requires NumPy and Pillow. No source mutation or network. Fresh-browser draw:
equal set weight within a category, 1/2 human + 1/2 uniform AI within a set.
Multi-category rounds use draw()'s round-robin allocation, not pooled item counts.
Mixed text scores condition on drawing text; image metadata is measured separately.
Thresholds, direction, scaling and logistic weights are fitted on training sets only.
The maximum CV feature is descriptive (selection across features is optimistic).
"""
import argparse
import base64
import collections
import json
import re
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]


def decode(item):
    # The committed build uses padded base64 JSON, not XOR (despite the brief).
    return json.loads(base64.b64decode(item['x']))


def features(text, form):
    words = text.split()
    n = max(len(words), 1)
    lines = [line for line in text.splitlines() if line.strip()]
    lexical = re.findall(r"[^\W\d_]+(?:[’'][^\W\d_]+)*", text, re.UNICODE)
    lengths = [len(re.findall(r'\S+', s)) for s in re.split(r'(?<=[.!?…])\s+', text) if s.strip()]
    letters = [c for c in text if c.isalpha()]
    f = {}
    glyphs = {'em dash': '—', 'en dash': '–', 'parentheses': '(', 'semicolon': ';',
              'colon': ':', 'exclamation': '!', 'question': '?', 'comma': ',',
              'Czech open quote': '„', 'curly double quotes': '“”', 'straight double quote': '"',
              'guillemets': '«»', 'curly single quotes/apostrophes': '‘’', 'straight apostrophe': "'"}
    for name, chars in glyphs.items():
        count = sum(text.count(c) for c in chars)
        f[name + '/100w'] = 100 * count / n
        f['any ' + name] = float(count > 0)
    for name, pattern in [('ellipsis glyph', '…'), ('three dots', r'\.\.\.'), ('spaced dots', r'\.\s+\.\s+\.')]:
        count = len(re.findall(pattern, text))
        f[name + '/100w'] = 100 * count / n
        f['any ' + name] = float(count > 0)
    f.update({
        'words': len(words), 'characters': len(text), 'nonempty lines': len(lines),
        'blank lines': sum(not line.strip() for line in text.splitlines()),
        'mean word length': np.mean([len(w) for w in lexical]) if lexical else 0,
        'sentence length variance': np.var(lengths) if lengths else 0,
        'mean sentence length': np.mean(lengths) if lengths else 0,
        'sentences': len(lengths),
        'line-initial capitals': sum(line.lstrip(' „“»«(—…‘’"')[:1].isupper() for line in lines) / max(len(lines), 1),
        'title-case words/100w': 100 * sum(w.istitle() for w in lexical) / n,
        'all-caps words/100w': 100 * sum(w.isupper() and len(w) > 1 for w in lexical) / n,
        'capitals ratio': sum(c.isupper() for c in letters) / max(len(letters), 1),
        'digits/100w': 100 * sum(c.isdigit() for c in text) / n,
        'diacritics ratio': sum(c in 'áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ' for c in letters) / max(len(letters), 1),
        'mean line characters': np.mean([len(line) for line in lines]) if lines else 0,
        'line character variance': np.var([len(line) for line in lines]) if lines else 0,
    })
    return f


def image_features(item, directory):
    path = (directory / item['img']).resolve()
    with Image.open(path) as im:
        return {'width': im.width, 'height': im.height, 'file bytes': path.stat().st_size,
                'bytes/pixel': path.stat().st_size / (im.width * im.height),
                'EXIF entries': len(im.getexif()), 'ICC bytes': len(im.info.get('icc_profile', b'')),
                'comment bytes': len(im.info.get('comment', b'')), 'RGB channels': len(im.getbands()),
                'JFIF unit': im.info.get('jfif_unit', 0), 'JFIF x density': im.info.get('jfif_density', (0, 0))[0],
                'JFIF y density': im.info.get('jfif_density', (0, 0))[1],
                'progressive': float(bool(im.info.get('progressive'))),
                'quantization sum': sum(sum(t) for t in im.quantization.values())}


def allocation(round_, sets):
    left = collections.Counter(s['cat'] for s in sets)
    out = collections.Counter()
    while sum(out.values()) < round_['n'] and any(left.values()):
        for cat in round_['cats']:
            if left[cat] and sum(out.values()) < round_['n']:
                out[cat] += 1
                left[cat] -= 1
    return out


def weights(rows, proportions):
    sets_by_cat = collections.defaultdict(set)
    members = collections.Counter((r['set'], r['human']) for r in rows)
    for r in rows:
        sets_by_cat[r['cat']].add(r['set'])
    cat_total = sum(proportions[c] for c in sets_by_cat)
    return np.array([proportions[r['cat']] / cat_total / len(sets_by_cat[r['cat']]) *
                     .5 / members[r['set'], r['human']] for r in rows])


def best_rule(x, y, wt):
    # Constant predictions, then thresholds in ascending order; fixed tie break.
    order = np.argsort(x, kind='stable')
    xs, ys, ws = x[order], y[order], wt[order]
    cuts = np.r_[-np.inf, (xs[:-1] + xs[1:])[xs[:-1] != xs[1:]] / 2, np.inf]
    signed = ws * np.where(ys, -1, 1)
    prefix = np.r_[0, np.cumsum(signed)]
    indices = np.searchsorted(xs, cuts, side='right')
    scores = np.sum(ws * ys) + prefix[indices]  # human iff x > cut
    choices = np.r_[scores, wt.sum() - scores]
    k = int(np.argmax(choices))
    return float(choices[k] / wt.sum()), float(cuts[k % len(cuts)]), k < len(cuts)


def predict(x, cut, above):
    return (x > cut) if above else (x <= cut)


def audit(rows, proportions):
    names = list(rows[0]['f'])
    X = np.array([[r['f'][n] for n in names] for r in rows], float)
    y = np.array([r['human'] for r in rows])
    wt = weights(rows, proportions)
    singles = []
    cv = np.zeros_like(X, dtype=bool)
    logpred = np.zeros(len(rows), dtype=bool)
    for held in sorted({r['set'] for r in rows}):
        tr = np.array([r['set'] != held for r in rows])
        train_rows = [r for r, keep in zip(rows, tr) if keep]
        tw = weights(train_rows, proportions)
        for j, name in enumerate(names):
            _, cut, above = best_rule(X[tr, j], y[tr], tw)
            cv[~tr, j] = predict(X[~tr, j], cut, above)
        mu = np.average(X[tr], axis=0, weights=tw)
        sd = np.sqrt(np.average((X[tr] - mu) ** 2, axis=0, weights=tw))
        sd[sd < 1e-9] = 1
        Z = (X - mu) / sd
        w, b = np.zeros(X.shape[1]), 0.
        for _ in range(600):
            p = 1 / (1 + np.exp(-np.clip(Z[tr] @ w + b, -40, 40)))
            err = tw * (p - y[tr])
            w -= .5 * (Z[tr].T @ err + .05 * w)
            b -= .5 * err.sum()
        logpred[~tr] = (Z[~tr] @ w + b) > 0
    for j, name in enumerate(names):
        fit, cut, above = best_rule(X[:, j], y, wt)
        singles.append({'feature': name, 'human_mean': float(np.average(X[y, j], weights=wt[y])),
                        'AI_mean': float(np.average(X[~y, j], weights=wt[~y])), 'fit': fit,
                        'cut': cut if np.isfinite(cut) else str(cut), 'human_above': bool(above),
                        'cv': float(wt @ (cv[:, j] == y))})
    return {'sets': len({r['set'] for r in rows}), 'items': len(rows),
            'single': singles, 'logistic': float(wt @ (logpred == y))}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--output', type=Path, required=True)
    ap.add_argument('--data-root', type=Path, default=ROOT, help='Snapshot directory containing quiz/')
    args = ap.parse_args()
    out = {}
    for lang, path in [('EN', args.data_root / 'quiz/items.json'), ('CS', args.data_root / 'quiz/cs/items.json')]:
        d = json.loads(path.read_text())
        sets = {s['id']: s for s in d['sets']}
        rows = []
        for i in d['items']:
            s = sets[i['set']]
            rows.append({'set': i['set'], 'cat': s['cat'], 'lang': s['lang'],
                         'human': decode(i)['kind'] == 'human', 'mod': i['mod'],
                         'f': features(i['text'], i['form']) if i['mod'] == 'text' else image_features(i, path.parent)})
        for r in d['rounds']:
            eligible = [s for s in d['sets'] if s['cat'] in r['cats'] and (not r.get('lang') or s['lang'] == r['lang'])]
            chosen = {s['id'] for s in eligible}
            proportions = allocation(r, eligible)
            for mod in ['text', 'image', 'all']:
                if mod == 'all' and not ('images' in r['cats'] and len(r['cats']) > 1):
                    continue
                rs = [row for row in rows if row['set'] in chosen and (mod == 'all' or row['mod'] == mod)]
                if mod == 'all':
                    # A full Mixed-round model sees both modalities. Missing
                    # modality-specific features are zero, with an indicator.
                    # Image metadata is never passed off as text typography.
                    names = sorted({row['mod'] + ': ' + n for row in rs for n in row['f']})
                    rs = [{**row, 'f': {**{n: row['f'].get(n.removeprefix(row['mod'] + ': '), 0)
                            if n.startswith(row['mod'] + ': ') else 0 for n in names},
                            'is image': float(row['mod'] == 'image')}} for row in rs]
                if rs:
                    key = f"{lang} {r['id']} ({mod})"
                    out[key] = audit(rs, proportions)
                    bestfit = max(out[key]['single'], key=lambda f: f['fit'])
                    bestcv = max(out[key]['single'], key=lambda f: f['cv'])
                    print(f"{key}: {out[key]['sets']} sets; fit {bestfit['fit']:.1%} ({bestfit['feature']}); CV {bestcv['cv']:.1%} ({bestcv['feature']}); logistic {out[key]['logistic']:.1%}", flush=True)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.with_suffix('.json').write_text(json.dumps(out, ensure_ascii=False, indent=2) + '\n')
    lines = ['# Surface audit', '', 'Fresh visitor; 50% human, 50% uniform AI per set; category weights follow the round-robin draw. Mixed text and image components are reported separately. Feature maxima are descriptive, not a held-out choice of feature. Logistic: fixed L2=0.05, 600 gradient steps, train-only scaling, LOSO by set.', '', '| Round/component | Sets | Best fitted feature | Fit | Best CV feature | LOSO | Logistic LOSO |', '|---|---:|---|---:|---|---:|---:|']
    for key, a in out.items():
        bf, bc = max(a['single'], key=lambda f: f['fit']), max(a['single'], key=lambda f: f['cv'])
        lines.append(f"| {key} | {a['sets']} | {bf['feature']} | {bf['fit']:.1%} | {bc['feature']} | {bc['cv']:.1%} | {a['logistic']:.1%} |")
    for key, a in out.items():
        lines.extend(['', '## ' + key, '', '| Feature | Human mean | AI mean | Human rule | Fit | LOSO |', '|---|---:|---:|---|---:|---:|'])
        for f in a['single']:
            cut = f['cut'] if isinstance(f['cut'], str) else f"{f['cut']:.6g}"
            lines.append(f"| {f['feature']} | {f['human_mean']:.6g} | {f['AI_mean']:.6g} | {'>' if f['human_above'] else '≤'} {cut} | {f['fit']:.1%} | {f['cv']:.1%} |")
    args.output.with_suffix('.md').write_text('\n'.join(lines) + '\n')


if __name__ == '__main__':
    main()
