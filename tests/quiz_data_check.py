"""Offline quiz integrity checks; --quotes also fails on nonliteral note quotes.

Run with Python, NumPy-free; image decoding needs Pillow. Never fetches sources.
Set IDs intentionally identify the same set across languages; item IDs are global.
"""
import argparse
import base64
import collections
import json
import re
import sys
import unicodedata
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]


def normalise_quote(text):
    # Compare typography and line wrapping without erasing case or punctuation.
    text = unicodedata.normalize('NFC', text)
    return ' '.join(text.translate(str.maketrans({'’': "'", '‘': "'", '—': '–'})).split())


def note_quote_misses(item, record):
    if item['mod'] != 'text':
        return []
    misses = []
    for index, note in enumerate(record['why'], 1):
        for english, czech in re.findall(r'“([^”]+)”|„([^“]+)“', note):
            quote = english or czech
            if normalise_quote(quote) not in normalise_quote(item['text']):
                misses.append({'item': item['id'], 'note': index, 'quote': quote})
    return misses


def check(root=ROOT):
    errors, misses, summaries = [], {}, []
    global_ids, media_by_lang, sets_by_lang, image_sets_by_lang = set(), {}, {}, {}

    def need(condition, message):
        if not condition:
            errors.append(message)

    for lang, rel in [('en', 'quiz/items.json'), ('cs', 'quiz/cs/items.json')]:
        path = root / rel
        d = json.loads(path.read_text())
        credits = (path.parent / 'CREDITS.md').read_text()
        sets = {s['id']: s for s in d['sets']}
        sets_by_lang[lang] = sets
        items = {i['id']: i for i in d['items']}
        records, lengths, encoded_lengths = {}, set(), set()
        misses[lang] = []
        need(len(items) == len(d['items']), f'{lang}: duplicate item IDs')
        need(len(sets) == len(d['sets']), f'{lang}: duplicate set IDs')
        member_ids = [id for s in d['sets'] for id in s['members']]
        need(collections.Counter(member_ids) == collections.Counter(items.keys()), f'{lang}: members do not partition items')
        media_by_lang[lang] = set()
        image_sets_by_lang[lang] = {}
        for i in d['items']:
            id = i['id']
            need(bool(re.fullmatch('[0-9a-f]{8}', id)), f'{lang}/{id}: invalid item ID')
            need(id not in global_ids, f'{lang}/{id}: duplicate across builds')
            global_ids.add(id)
            raw = base64.b64decode(i['x'], validate=True)
            r = json.loads(raw)
            records[id] = r
            lengths.add(len(raw))
            encoded_lengths.add(len(i['x']))
            need(list(r)[-1] == '_' and isinstance(r['_'], str) and not r['_'].strip(' '), f'{lang}/{id}: final field must pad with spaces')
            need(r['kind'] in ['human', 'ai'], f'{lang}/{id}: bad origin')
            need(i['set'] in sets and id in sets[i['set']]['members'], f'{lang}/{id}: missing parent set')
            need(len(r.get('why', [])) == 2 and all(isinstance(n, str) and n.strip() for n in r['why']), f'{lang}/{id}: missing reveal notes')
            need(f'`{id}`' in credits and r['source'] in credits, f'{lang}/{id}: missing credit/source')
            for line in r.get('prompt', '').split('\n'):
                need(not line.strip() or line.rstrip() in credits, f'{lang}/{id}: prompt missing from credits')
            if i['mod'] == 'image':
                image = (path.parent / i['img']).resolve()
                need(image.is_file(), f'{lang}/{id}: missing image {i["img"]}')
                need(image.parent == (root / 'quiz/media').resolve(), f'{lang}/{id}: image outside media/')
                need(bool(re.fullmatch(r'[0-9a-f]{12}\.jpg', image.name)), f'{lang}/{id}: nonrandom media name')
                need(bool(i.get('alt', '').strip()) and i['lang'] == lang, f'{lang}/{id}: missing translated alt')
                with Image.open(image) as im:
                    im.load()
                    need(im.format == 'JPEG' and im.size == (i['w'], i['h']), f'{lang}/{id}: invalid JPEG/dimensions')
                    need(not im.getexif() and not im.info.get('icc_profile') and not im.info.get('comment'), f'{lang}/{id}: unexpected metadata')
                media_by_lang[lang].add(image.name)
                if 'Rapidata' in r['source']:
                    need('CDLA-Permissive-2.0.txt' in r['source'], f'{lang}/{id}: missing CDLA link')
                if 'Casu' in r['source']:
                    need(bool(r.get('study')) and '10.1155/hbe2/9977058' in r['source'], f'{lang}/{id}: missing study result/DOI')
            else:
                text = i['text']
                need(bool(text) and all(line == line.strip() for line in text.splitlines()), f'{lang}/{id}: indentation/empty text')
                need('...' not in text and not re.search(r'\.\s+\.\s+\.', text), f'{lang}/{id}: ellipsis typography')
                need('"' not in text and '«' not in text and '»' not in text, f'{lang}/{id}: quote typography')
                if i['lang'] == 'cs':
                    need('—' not in text, f'{lang}/{id}: Czech em dash')
                if i['form'] == 'prose':
                    need('\n' not in text, f'{lang}/{id}: prose must have one paragraph')
                misses[lang].extend(note_quote_misses(i, r))
                if r['kind'] == 'ai' and '2026' in (r.get('family') or ''):
                    need('xhigh' in r['what'] and ('verdict' in r['selection'] or 'výsledek' in r['selection']), f'{lang}/{id}: missing effort/review')
        need(len(lengths) == len(encoded_lengths) == 1, f'{lang}: payload lengths differ')
        humans = sum(r['kind'] == 'human' for r in records.values())
        ai = len(items) - humans
        about = d['about_html']
        expected_counts = f'{len(items)} items in {len(sets)} matched sets: {humans} made by people and {ai} made by AI' if lang == 'en' else f'{len(items)} položek v {len(sets)} sadách: {humans} od lidí a {ai} od AI'
        need(expected_counts in about, f'{lang}: About counts disagree')
        expected_credits = f'{len(items)} items in {len(sets)} sets ({humans} human, {ai} AI)' if lang == 'en' else f'{len(items)} položek v {len(sets)} sadách ({humans} od lidí, {ai} od AI)'
        need(expected_credits in credits, f'{lang}: CREDITS counts disagree')
        if lang == 'cs':
            need('—' not in about, 'cs: About contains em dash')
        if any('Rapidata' in r['source'] for r in records.values()):
            need('CDLA-Permissive-2.0.txt' in credits, f'{lang}: CREDITS missing licence link')
        for s in d['sets']:
            need(bool(re.fullmatch('s[0-9a-f]{6}', s['id'])), f'{lang}/{s["id"]}: invalid set ID')
            members = [items[id] for id in s['members']]
            need(sum(records[i['id']]['kind'] == 'human' for i in members) == 1, f'{lang}/{s["id"]}: expected one human')
            need(any(records[i['id']]['kind'] == 'ai' for i in members), f'{lang}/{s["id"]}: no AI item')
            if s['cat'] == 'images':
                need(len({(i['w'], i['h']) for i in members}) == 1, f'{lang}/{s["id"]}: dimensions vary within set')
                image_sets_by_lang[lang][s['id']] = {
                    (Path(i['img']).name, records[i['id']]['kind']) for i in members
                }
            else:
                human = next(i for i in members if records[i['id']]['kind'] == 'human')
                if human['form'] == 'poem':
                    pattern = lambda text: [len(stanza.splitlines()) for stanza in text.split('\n\n')]
                    need(all(pattern(i['text']) == pattern(human['text']) for i in members), f'{lang}/{s["id"]}: stanza mismatch')
        for r in d['rounds']:
            eligible = [s for s in d['sets'] if s['cat'] in r['cats'] and (not r.get('lang') or s['lang'] == r['lang'])]
            need(len(eligible) >= r['n'], f'{lang}/{r["id"]}: too few sets')
            if r['cats'] == ['images']:
                need(r['n'] == min(12, len(eligible)), f'{lang}/{r["id"]}: wrong image count')
        summaries.append(f'{lang.upper()}: {len(sets)} sets, {len(items)} items ({humans} human, {ai} AI); {next(iter(lengths))} decoded bytes per record; {len(media_by_lang[lang])} images')
    need(media_by_lang['en'] == media_by_lang['cs'], 'translated image sets differ')
    need(image_sets_by_lang['en'] == image_sets_by_lang['cs'], 'translated image membership differs')
    need({p.name for p in (root / 'quiz/media').iterdir() if p.is_file()} == media_by_lang['en'],
         'media directory contains unreferenced files')
    need(set(sets_by_lang['cs']) <= set(sets_by_lang['en']), 'Czech set missing from English quiz')
    licence = root / 'quiz/licences/CDLA-Permissive-2.0.txt'
    need(licence.is_file() and licence.stat().st_size > 1000, 'CDLA licence missing or truncated')
    return errors, misses, summaries


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--quotes', action='store_true', help='Report nonliteral note quotes and exit 1 if any remain')
    args = ap.parse_args()
    errors, misses, summaries = check()
    print('\n'.join(summaries))
    print(f'Data integrity: {"FAIL" if errors else "PASS"} ({len(errors)} errors)')
    for error in errors:
        print(error)
    if args.quotes:
        count = sum(map(len, misses.values()))
        print(f'Note quote audit: {"FAIL" if count else "PASS"} ({count} nonliteral quotes)')
        for lang, entries in misses.items():
            for m in entries:
                print(f'{lang.upper()} {m["item"]}, note {m["note"]}: {m["quote"]}')
    return bool(errors or args.quotes and any(misses.values()))


if __name__ == '__main__':
    sys.exit(main())
