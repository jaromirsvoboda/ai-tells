"""Regenerate image credit sections from items.json; preserve text sections verbatim."""
import base64
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def image_section(group, items, czech):
    parts = [f"### {group['id']} – {group['context']}\n\n"]
    for id in group['members']:
        record = json.loads(base64.b64decode(items[id]['x']))
        parts.append(f"- `{id}` – **{record['who']}**. {record['what']}\n  {record['source']}\n\n")
        if record.get('prompt'):
            title = 'Přesné původní zadání' if czech else 'Exact original prompt'
            parts.append(f'  {title}:\n\n')
            parts.append('\n'.join('  > ' + line for line in record['prompt'].splitlines()) + '\n\n')
        if record.get('prompt_route'):
            parts.append('  ' + record['prompt_route'] + '\n\n')
        title = 'Výběr' if czech else 'Selection'
        parts.append(f"  {title}: {record['selection']}\n\n")
    return ''.join(parts)


def main():
    for path in [ROOT / 'quiz/items.json', ROOT / 'quiz/cs/items.json']:
        data = json.loads(path.read_text())
        czech = data['lang'] == 'cs'
        credits = path.with_name('CREDITS.md')
        header, *sections = re.split(r'(?=^### )', credits.read_text(), flags=re.M)
        sections = {section.split()[1]: section for section in sections}
        items = {item['id']: item for item in data['items']}
        humans = len(data['sets'])
        count = len(items)
        pattern = r'Kvíz má \d+ položek v \d+ sadách \(\d+ od lidí, \d+ od AI\)' if czech else r'This quiz: \d+ items in \d+ sets \(\d+ human, \d+ AI\)'
        counts = f'Kvíz má {count} položek v {humans} sadách ({humans} od lidí, {count - humans} od AI)' if czech else f'This quiz: {count} items in {humans} sets ({humans} human, {count - humans} AI)'
        header = re.sub(pattern, counts, header)
        for group in data['sets']:
            if group['cat'] == 'images':
                sections[group['id']] = image_section(group, items, czech)
        credits.write_text(header + ''.join(sections[id] for id in sorted(sections)))
        print(f"{data['lang'].upper()} image credits: regenerated {sum(s['cat'] == 'images' for s in data['sets'])} sections")


if __name__ == '__main__':
    main()
