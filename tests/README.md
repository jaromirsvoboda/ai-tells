# Browser regressions

Run from the repository root with Node.js LTS:

```sh
npm ci
npx playwright install chromium
npx playwright test
```

The server starts automatically at http://127.0.0.1:4173 (`PORT` can override it).
Ten Chromium projects cover 360x740, 390x844, 768x1024, 1280x800 and
1440x900, each with light and dark system preferences. Two workers keep load
bounded. Use `--project=1280x800-light` for a focused run, `--list` to list tests,
and `npx playwright show-report` to inspect the HTML report. Failure traces and
screenshots are retained in `test-results/`.

- Catalogue anchors: every rendered in-page link, including lazy permalinks and duplicate hrefs, clears live sticky/fixed elements; no link sampling.
- Direct hashes: 20 evenly spaced entries plus all sections, modality groups, eras and anchored headings land visibly after a fresh navigation.
- Overflow: closed entries, expanded entries and print layout stay within the viewport, allowing explicit horizontal scroll containers.
- Console/network/links: every page test watches browser errors, request failures and non-200 same-origin responses; external links require HTTPS and safe blank targets.
- Data/ids: unique ids, resolvable fragment links, each entry exactly once, and full inline-data equality with catalogue.json.
- Filters: every option, status subset, medium/theme/evidence combinations, search, reset and hidden-entry deep links match JSON-derived entry sets and counts.
- Themes/contrast: system preference, toggle and saved choice work; computed body/link/filter-label colors meet 4.5:1 in both themes, with alpha compositing and explicit failure on unresolved backgrounds.
- Keyboard: Tab reaches filter controls and every summary in order with visible focus; Enter and Space toggle entries.
- Stability/print: opening an entry leaves the filter box stable; print hides filters and expands entries.
- Quiz: both EN and CS load and run with shared CSS/JS; all retained items are checked for pre-answer DOM/class/data leakage and equal encoded payload length. Single-item fixtures include only the matching set and a valid round. Public hash routing isolates each fixture; a unique query forces a fresh document load.
- Quiz integrity: complete set membership, one human plus AI per set, complete item/source/prompt credits, consistent translated image paths and non-empty reveal notes.
- Quiz smoke: every round by keyboard (advertised H/A and 1–3 shortcuts, Tab/Enter for navigation), every referenced image decoded, no external requests or horizontal overflow at home/item/reveal/results/About. Runs in both languages under `/ai-tells/`, at all ten configured viewport/theme combinations, including the required 360/390/1280 widths. Language links work in both directions; storage denial and shortcut focus scope are checked.

Offline surface measurements use the installed Python NumPy and Pillow packages (no model calls or web access):

```sh
OPENBLAS_NUM_THREADS=1 python3 tests/surface_audit.py --output /path/to/report
```

The audit decodes the actual padded base64 JSON. It gives equal probability to human and AI within a set, with uniform AI selection for a fresh browser, and follows the quiz's category allocation. It reports feature means, the best fitted threshold/direction, leave-one-set-out thresholds and logistic predictions. Image metadata is measured separately; Mixed text results condition on text. See [surface-report.md](surface-report.md) for the saved BEFORE/AFTER tables, definitions, image checks and measurement limits. Maximum single-feature CV values still involve feature selection on these data; they are not an independent test of a preselected feature. The lead accepted publication with the measured sentence-rhythm signal disclosed; the public explanation is in [quiz/fairness.md](../quiz/fairness.md).
