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
- Quiz: load/errors/overflow, media URLs, pre-answer DOM/encoded-length leakage, keyboard round, language links and catalogue targets; all six tests are NOT RUN on the catalogue-only base and skip when quiz/index.html is absent.

The future quiz tests use accessible button names (Human/AI, Start, Next/Finish,
or Czech equivalents), not implementation selectors. The explicit data adapter
accepts an array or `{ items: [...] }` and base64/base64url human/ai labels or
JSON carrying `answer`, `label`, `origin`, `kind`, `isAI` or `is_ai`. A different
encoding fails with a contract error and needs an adapter update when the quiz
is integrated. Per-item DOM checks intercept items.json with one item to avoid
assuming a shuffle algorithm. No quiz files were read to derive this contract.
