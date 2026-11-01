# Human or AI? — sources and methods

This build: 307 items in 65 sets (65 human, 242 AI). No new model calls in this continuation.

What this build still cannot establish
The surface-feature fairness target is not met. In the offline audit, English everyday writing still reached 73.1 % with a logistic classifier using punctuation, length, layout and capitalisation alone, cross-validated by holding out whole sets. Some fitted one-feature rules also exceed 60 % in both languages. These are diagnostic results on a small, repeatedly inspected collection, not evidence that this quiz isolates authorship. Full BEFORE/AFTER measurements and methods: surface audit.
During this continuation, no text was regenerated and no punctuation was added or removed. The inherited build already standardised dash glyphs, quote styles and ellipsis glyphs, and matched stanza breaks. We removed the Austen, Conrad and Dickens sets from the English build because every AI member lacked the apostrophes present in its human original. This reduced the strongest cross-validated literature feature from 67.2 % to 61.5 %, but fitted length/layout rules still do better. We removed the Achenbach shipwreck and Ender sleigh sets from both builds: the reproductions and synthetic paintings also differed in compressed size. Six image sets remain; there is no painting round content in this build. We did not edit the remaining human originals.

The inherited model calibration recognised many originals: the lead reported GPT recognising 32 of 41 in an older build. Its perfect classification score cannot establish stylistic detection, and it was not rerun on these texts.
Gemini had a web-search tool available during generation; the saved output has no links, but tool use cannot be excluded. Earlier web-enabled GPT outputs were superseded according to the lead log; no new model calls were made here.
The original log flags length mismatches for Hardy, Hálek and Mácha. It describes older texts and counts; this snapshot uses later prompts matching punctuation and sentence patterns. Those prompts are shown exactly in the reveals. We did not treat the old calibration as validation of the current collection.
The HC3 2022 answers were not prompted to imitate Wikipedia. Register and formatting habits can still give them away. Commons AI pictures were curated by their uploaders; the Penang human photograph dates from December 2024, after image generators became available.
Source and licence statements are inherited from the saved source data. No source websites or licence pages were rechecked in this offline continuation. The NYT link was not fetched by the lead (403); it is a preference test, not an authorship test. First publication details for some Czech texts remain unverified.
The earlier Opus/Sonnet reviewer did not deliver a final report. A small collection, familiarity with originals, and repeated filtering limit any interpretation of your score.


The inherited build standardised quote, dash and ellipsis glyphs, indentation and stanza layout. This continuation changed no surviving item text. Exact original prompts below remain unchanged. Source URLs and licence claims were checked only against the saved lead data, without new web requests. Full feature tables: [surface audit](../tests/surface-report.md).

Human texts keep their stated public-domain or CC licences. Quiz-generated AI outputs are dedicated to CC0 as recorded in the lead data; this does not relicense Commons imports. Images retain the licence and attribution of their Commons file page. Every image was edge-trimmed, cropped, resized and saved as JPEG; EXIF/ICC metadata was removed. Filename, dimensions and metadata are audited separately from text.

## Sources, licences and prompts for every retained item

### s0cb4a3 — The Czech Wikipedia entry „Kopretina bílá“ — written by Wikipedia editors, or by an AI?

- `1608df85` — **Wikipedisté (autoři české Wikipedie)**. heslo „Kopretina bílá“ na české Wikipedii, verze z 2021-08-05
  Source: [https://cs.wikipedia.org/w/index.php?oldid=20299210](https://cs.wikipedia.org/w/index.php?oldid=20299210). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `21b1c7e8` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Kopretina bílá“, zhruba 64 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 4 slov a nejdelší asi 18 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 3 (rejected before: word count 42 vs human 64; word count 34 vs human 64). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `59cc3034` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Kopretina bílá“, zhruba 64 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 4 slov a nejdelší asi 18 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `5c39c9db` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Kopretina bílá“, zhruba 64 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 4 slov a nejdelší asi 18 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `6c401895` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Kopretina bílá“, zhruba 64 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 4 slov a nejdelší asi 18 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s13cd76 — The Czech Wikipedia entry „Perník“ — written by Wikipedia editors, or by an AI?

- `f0a42cc0` — **Wikipedisté (autoři české Wikipedie)**. heslo „Perník“ na české Wikipedii, verze z 2021-12-18
  Source: [https://cs.wikipedia.org/w/index.php?oldid=20738120](https://cs.wikipedia.org/w/index.php?oldid=20738120). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `0b0bbf1f` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Perník“, zhruba 91 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 8 slov a nejdelší asi 20 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 2 (rejected before: word count 57 vs human 91). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `15ca7faf` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Perník“, zhruba 91 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 8 slov a nejdelší asi 20 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `1c7386f5` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Perník“, zhruba 91 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 8 slov a nejdelší asi 20 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `ed3c9de4` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Perník“, zhruba 91 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 8 slov a nejdelší asi 20 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s235379 — The Czech Wikipedia entry „Rohlík“ — written by Wikipedia editors, or by an AI?

- `b5f40678` — **Wikipedisté (autoři české Wikipedie)**. heslo „Rohlík“ na české Wikipedii, verze z 2021-11-25
  Source: [https://cs.wikipedia.org/w/index.php?oldid=20670200](https://cs.wikipedia.org/w/index.php?oldid=20670200). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `0ef4d23c` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Rohlík“, zhruba 105 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 33 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `bd14fd95` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Rohlík“, zhruba 105 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 33 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `d19deaa5` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Rohlík“, zhruba 105 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 33 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `e1d5e7a3` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Rohlík“, zhruba 105 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 33 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s2c435e — The opening of an encyclopedia article on “Bill Joy”: from Wikipedia, or written by an AI?

- `b0a48440` — **Wikipedia contributors**. opening of the Wikipedia article “Bill Joy” (text as collected in the HC3 corpus, 2022)
  Source: [https://en.wikipedia.org/wiki/Bill_Joy](https://en.wikipedia.org/wiki/Bill_Joy). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) (Wikipedia text, 2022; redistributed in HC3 under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)). Spacing before punctuation and footnote markers removed (HC3 scrape).

- `8cd76d20` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Bill Joy” in the register and conventions of a Wikipedia lead (about 116 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 6 commas, 0 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 1 quotation marks (pairs). Sentence rhythm to match: about 5 sentences, the shortest about 15 words and the longest about 30 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `93ac4fec` — **ChatGPT — AI**. ChatGPT (OpenAI), December 2022 research preview, as recorded in the HC3 corpus, 2022-12; writing for the same slot
  Source: [HC3 corpus](https://huggingface.co/datasets/Hello-SimpleAI/HC3) (Guo et al. 2023), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) (HC3, Guo et al. 2023, arXiv:2301.07597).

  Exact original prompt:

  > Please explain what is "Bill Joy"

  The first ChatGPT answer recorded in HC3 for this question, unedited (spacing before punctuation tidied).

- `b3a34979` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Bill Joy” in the register and conventions of a Wikipedia lead (about 116 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 6 commas, 0 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 1 quotation marks (pairs). Sentence rhythm to match: about 5 sentences, the shortest about 15 words and the longest about 30 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `d9f4dd84` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Bill Joy” in the register and conventions of a Wikipedia lead (about 116 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 6 commas, 0 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 1 quotation marks (pairs). Sentence rhythm to match: about 5 sentences, the shortest about 15 words and the longest about 30 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 2 (rejected before: shares 2 12-gram(s) with the original: nelson joy born november 8 1954 is an american computer engineer and). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s46dd39 — The opening of an encyclopedia article on “Punched cards”: from Wikipedia, or written by an AI?

- `528f45b9` — **Wikipedia contributors**. opening of the Wikipedia article “Punched cards” (text as collected in the HC3 corpus, 2022)
  Source: [https://en.wikipedia.org/wiki/Punched_cards](https://en.wikipedia.org/wiki/Punched_cards). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) (Wikipedia text, 2022; redistributed in HC3 under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)). Spacing before punctuation and footnote markers removed (HC3 scrape).

- `2f6b6e99` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Punched cards” in the register and conventions of a Wikipedia lead (about 143 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 7 commas, 0 em dashes (—), 1 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 7 sentences, the shortest about 7 words and the longest about 39 words — mix short and long sentences as a human writer of this kind does. Use 1 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `4cfc56b6` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Punched cards” in the register and conventions of a Wikipedia lead (about 143 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 7 commas, 0 em dashes (—), 1 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 7 sentences, the shortest about 7 words and the longest about 39 words — mix short and long sentences as a human writer of this kind does. Use 1 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `9466034d` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Punched cards” in the register and conventions of a Wikipedia lead (about 143 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 7 commas, 0 em dashes (—), 1 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 7 sentences, the shortest about 7 words and the longest about 39 words — mix short and long sentences as a human writer of this kind does. Use 1 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `94a4a1a3` — **ChatGPT — AI**. ChatGPT (OpenAI), December 2022 research preview, as recorded in the HC3 corpus, 2022-12; writing for the same slot
  Source: [HC3 corpus](https://huggingface.co/datasets/Hello-SimpleAI/HC3) (Guo et al. 2023), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) (HC3, Guo et al. 2023, arXiv:2301.07597).

  Exact original prompt:

  > Please explain what is "Punched cards"

  The first ChatGPT answer recorded in HC3 for this question, unedited (spacing before punctuation tidied).

- `edeacf9f` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Punched cards” in the register and conventions of a Wikipedia lead (about 143 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 7 commas, 0 em dashes (—), 1 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 7 sentences, the shortest about 7 words and the longest about 39 words — mix short and long sentences as a human writer of this kind does. Use 1 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s4e6955 — The Czech Wikipedia entry „Ježek západní“ — written by Wikipedia editors, or by an AI?

- `9ed39811` — **Wikipedisté (autoři české Wikipedie)**. heslo „Ježek západní“ na české Wikipedii, verze z 2021-11-21
  Source: [https://cs.wikipedia.org/w/index.php?oldid=20658466](https://cs.wikipedia.org/w/index.php?oldid=20658466). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `175cfc9c` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Ježek západní“, zhruba 65 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 9 slov a nejdelší asi 22 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `5c1fa2d2` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Ježek západní“, zhruba 65 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 9 slov a nejdelší asi 22 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `9c647e7f` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Ježek západní“, zhruba 65 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 9 slov a nejdelší asi 22 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s5706be — The opening of an encyclopedia article on “Psychedelic art”: from Wikipedia, or written by an AI?

- `0fdcb3e4` — **Wikipedia contributors**. opening of the Wikipedia article “Psychedelic art” (text as collected in the HC3 corpus, 2022)
  Source: [https://en.wikipedia.org/wiki/Psychedelic_art](https://en.wikipedia.org/wiki/Psychedelic_art). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) (Wikipedia text, 2022; redistributed in HC3 under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)). Spacing before punctuation and footnote markers removed (HC3 scrape).

- `11fb493e` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Psychedelic art” in the register and conventions of a Wikipedia lead (about 160 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 16 commas, 0 em dashes (—), 3 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 4 quotation marks (pairs). Sentence rhythm to match: about 6 sentences, the shortest about 10 words and the longest about 46 words — mix short and long sentences as a human writer of this kind does. Use 3 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `684f408d` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Psychedelic art” in the register and conventions of a Wikipedia lead (about 160 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 16 commas, 0 em dashes (—), 3 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 4 quotation marks (pairs). Sentence rhythm to match: about 6 sentences, the shortest about 10 words and the longest about 46 words — mix short and long sentences as a human writer of this kind does. Use 3 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `84a91d9d` — **ChatGPT — AI**. ChatGPT (OpenAI), December 2022 research preview, as recorded in the HC3 corpus, 2022-12; writing for the same slot
  Source: [HC3 corpus](https://huggingface.co/datasets/Hello-SimpleAI/HC3) (Guo et al. 2023), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) (HC3, Guo et al. 2023, arXiv:2301.07597).

  Exact original prompt:

  > Please explain what is "Psychedelic art"

  The first ChatGPT answer recorded in HC3 for this question, unedited (spacing before punctuation tidied).

- `cf12f27b` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Psychedelic art” in the register and conventions of a Wikipedia lead (about 160 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 16 commas, 0 em dashes (—), 3 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 4 quotation marks (pairs). Sentence rhythm to match: about 6 sentences, the shortest about 10 words and the longest about 46 words — mix short and long sentences as a human writer of this kind does. Use 3 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s60fa46 — The Czech Wikipedia entry „Pomlázka“ — written by Wikipedia editors, or by an AI?

- `187b6ca2` — **Wikipedisté (autoři české Wikipedie)**. heslo „Pomlázka“ na české Wikipedii, verze z 2021-04-06
  Source: [https://cs.wikipedia.org/w/index.php?oldid=19684436](https://cs.wikipedia.org/w/index.php?oldid=19684436). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `03f6ca47` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Pomlázka“, zhruba 127 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 1 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 4 uvozovek (párů). Rytmus vět: zhruba 8 vět, nejkratší asi 7 slov a nejdelší asi 34 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 1× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `1e237aee` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Pomlázka“, zhruba 127 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 1 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 4 uvozovek (párů). Rytmus vět: zhruba 8 vět, nejkratší asi 7 slov a nejdelší asi 34 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 1× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `630cfa4f` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Pomlázka“, zhruba 127 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 1 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 4 uvozovek (párů). Rytmus vět: zhruba 8 vět, nejkratší asi 7 slov a nejdelší asi 34 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 1× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `a0ae6283` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Pomlázka“, zhruba 127 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 1 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 4 uvozovek (párů). Rytmus vět: zhruba 8 vět, nejkratší asi 7 slov a nejdelší asi 34 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 1× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s61681d — An answer to “Is there actually such a thing as a ripe green pepper?” on Stack Exchange — by a community member, or by an AI?

- `7a6047da` — **J. Musser (Stack Exchange user)**. answer on Gardening & Landscaping Stack Exchange, 2015: “Is there actually such a thing as a ripe green pepper?”
  Source: [https://gardening.stackexchange.com/a/17917](https://gardening.stackexchange.com/a/17917). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `8d108c9e` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Gardening & Landscaping Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 116 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 10 commas, 0 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 7 sentences, the shortest about 5 words and the longest about 34 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Is there actually such a thing as a ripe green pepper?
  >
  > I grew what I thought was a green bell pepper (it was) from seeds that I grabbed out of a store bought green bell pepper but it ended up ripening to orange bell pepper.
  >
  > While doing some research trying to find the best time to harvest I was usually met with a "When the pepper changes color is when it is technically ripest" but this didn't account for a pepper that didn't change color. (Which is what I thought I had)
  >
  > So maybe I've just been a fool in thinking green peppers were ever a thing but from what I gathered, they aren't, technically. They are just under-ripe peppers?
  >
  > Is this true?

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `b66609f1` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Gardening & Landscaping Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 116 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 10 commas, 0 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 7 sentences, the shortest about 5 words and the longest about 34 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Is there actually such a thing as a ripe green pepper?
  >
  > I grew what I thought was a green bell pepper (it was) from seeds that I grabbed out of a store bought green bell pepper but it ended up ripening to orange bell pepper.
  >
  > While doing some research trying to find the best time to harvest I was usually met with a "When the pepper changes color is when it is technically ripest" but this didn't account for a pepper that didn't change color. (Which is what I thought I had)
  >
  > So maybe I've just been a fool in thinking green peppers were ever a thing but from what I gathered, they aren't, technically. They are just under-ripe peppers?
  >
  > Is this true?

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `c47c8798` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Gardening & Landscaping Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 116 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 10 commas, 0 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 7 sentences, the shortest about 5 words and the longest about 34 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Is there actually such a thing as a ripe green pepper?
  >
  > I grew what I thought was a green bell pepper (it was) from seeds that I grabbed out of a store bought green bell pepper but it ended up ripening to orange bell pepper.
  >
  > While doing some research trying to find the best time to harvest I was usually met with a "When the pepper changes color is when it is technically ripest" but this didn't account for a pepper that didn't change color. (Which is what I thought I had)
  >
  > So maybe I've just been a fool in thinking green peppers were ever a thing but from what I gathered, they aren't, technically. They are just under-ripe peppers?
  >
  > Is this true?

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 2 (rejected before: word count 57 vs human 116). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `dc16fb31` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Gardening & Landscaping Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 116 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 10 commas, 0 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 7 sentences, the shortest about 5 words and the longest about 34 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Is there actually such a thing as a ripe green pepper?
  >
  > I grew what I thought was a green bell pepper (it was) from seeds that I grabbed out of a store bought green bell pepper but it ended up ripening to orange bell pepper.
  >
  > While doing some research trying to find the best time to harvest I was usually met with a "When the pepper changes color is when it is technically ripest" but this didn't account for a pepper that didn't change color. (Which is what I thought I had)
  >
  > So maybe I've just been a fool in thinking green peppers were ever a thing but from what I gathered, they aren't, technically. They are just under-ripe peppers?
  >
  > Is this true?
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s6404e7 — The opening of an encyclopedia article on “Tony Hoare”: from Wikipedia, or written by an AI?

- `81bb647c` — **Wikipedia contributors**. opening of the Wikipedia article “Tony Hoare” (text as collected in the HC3 corpus, 2022)
  Source: [https://en.wikipedia.org/wiki/Tony_Hoare](https://en.wikipedia.org/wiki/Tony_Hoare). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) (Wikipedia text, 2022; redistributed in HC3 under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)). Spacing before punctuation and footnote markers removed (HC3 scrape).

- `011ecad7` — **ChatGPT — AI**. ChatGPT (OpenAI), December 2022 research preview, as recorded in the HC3 corpus, 2022-12; writing for the same slot
  Source: [HC3 corpus](https://huggingface.co/datasets/Hello-SimpleAI/HC3) (Guo et al. 2023), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) (HC3, Guo et al. 2023, arXiv:2301.07597).

  Exact original prompt:

  > Please explain what is "Tony Hoare"

  The first ChatGPT answer recorded in HC3 for this question, unedited (spacing before punctuation tidied).

- `03e4a94e` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Tony Hoare” in the register and conventions of a Wikipedia lead (about 145 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 12 commas, 0 em dashes (—), 4 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 10 sentences, the shortest about 1 words and the longest about 31 words — mix short and long sentences as a human writer of this kind does. Use 4 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `23276d71` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Tony Hoare” in the register and conventions of a Wikipedia lead (about 145 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 12 commas, 0 em dashes (—), 4 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 10 sentences, the shortest about 1 words and the longest about 31 words — mix short and long sentences as a human writer of this kind does. Use 4 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `4f491158` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Tony Hoare” in the register and conventions of a Wikipedia lead (about 145 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 12 commas, 0 em dashes (—), 4 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 10 sentences, the shortest about 1 words and the longest about 31 words — mix short and long sentences as a human writer of this kind does. Use 4 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `53d7479b` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Tony Hoare” in the register and conventions of a Wikipedia lead (about 145 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 12 commas, 0 em dashes (—), 4 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 10 sentences, the shortest about 1 words and the longest about 31 words — mix short and long sentences as a human writer of this kind does. Use 4 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s651712 — An answer to “Why do Contractor Levels have two vials with the same orientation?” on Stack Exchange — by a community member, or by an AI?

- `d6ad91a6` — **user20637 (Stack Exchange user)**. answer on Home Improvement Stack Exchange, 2018: “Why do Contractor Levels have two vials with the same orientation?”
  Source: [https://diy.stackexchange.com/a/148466](https://diy.stackexchange.com/a/148466). Licence: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

- `13ae3da3` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Home Improvement Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 85 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 1 commas, 2 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 2 quotation marks (pairs). Sentence rhythm to match: about 4 sentences, the shortest about 16 words and the longest about 30 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Why do Contractor Levels have two vials with the same orientation?
  >
  > It seems to me that having multiple vials in the same orientation is redundant, but many levels seems to include this feature.  What am I missing?  There has to be some reason.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 3 (rejected before: word count 44 vs human 85; word count 41 vs human 85). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `78af1fdf` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Home Improvement Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 85 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 1 commas, 2 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 2 quotation marks (pairs). Sentence rhythm to match: about 4 sentences, the shortest about 16 words and the longest about 30 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Why do Contractor Levels have two vials with the same orientation?
  >
  > It seems to me that having multiple vials in the same orientation is redundant, but many levels seems to include this feature.  What am I missing?  There has to be some reason.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `9b8c0e44` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Home Improvement Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 85 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 1 commas, 2 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 2 quotation marks (pairs). Sentence rhythm to match: about 4 sentences, the shortest about 16 words and the longest about 30 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Why do Contractor Levels have two vials with the same orientation?
  >
  > It seems to me that having multiple vials in the same orientation is redundant, but many levels seems to include this feature.  What am I missing?  There has to be some reason.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `a008a018` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Home Improvement Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 85 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 1 commas, 2 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 2 quotation marks (pairs). Sentence rhythm to match: about 4 sentences, the shortest about 16 words and the longest about 30 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Why do Contractor Levels have two vials with the same orientation?
  >
  > It seems to me that having multiple vials in the same orientation is redundant, but many levels seems to include this feature.  What am I missing?  There has to be some reason.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s7293fb — The Czech Wikipedia entry „Vánočka“ — written by Wikipedia editors, or by an AI?

- `f8d2dc05` — **Wikipedisté (autoři české Wikipedie)**. heslo „Vánočka“ na české Wikipedii, verze z 2021-05-16
  Source: [https://cs.wikipedia.org/w/index.php?oldid=19895643](https://cs.wikipedia.org/w/index.php?oldid=19895643). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `323245e7` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Vánočka“, zhruba 78 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 2 vět, nejkratší asi 32 slov a nejdelší asi 46 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `bcee330a` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Vánočka“, zhruba 78 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 2 vět, nejkratší asi 32 slov a nejdelší asi 46 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `e72434de` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Vánočka“, zhruba 78 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 2 vět, nejkratší asi 32 slov a nejdelší asi 46 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s79015e — The opening of an encyclopedia article on “Samuel Butler (novelist)”: from Wikipedia, or written by an AI?

- `7b34f48b` — **Wikipedia contributors**. opening of the Wikipedia article “Samuel Butler (novelist)” (text as collected in the HC3 corpus, 2022)
  Source: [https://en.wikipedia.org/wiki/Samuel_Butler_(novelist)](https://en.wikipedia.org/wiki/Samuel_Butler_(novelist)). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) (Wikipedia text, 2022; redistributed in HC3 under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)). Spacing before punctuation and footnote markers removed (HC3 scrape).

- `8e751ade` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Samuel Butler (novelist)” in the register and conventions of a Wikipedia lead (about 93 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 6 commas, 1 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 3 sentences, the shortest about 10 words and the longest about 58 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `c868efaf` — **ChatGPT — AI**. ChatGPT (OpenAI), December 2022 research preview, as recorded in the HC3 corpus, 2022-12; writing for the same slot
  Source: [HC3 corpus](https://huggingface.co/datasets/Hello-SimpleAI/HC3) (Guo et al. 2023), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) (HC3, Guo et al. 2023, arXiv:2301.07597).

  Exact original prompt:

  > Please explain what is "Samuel Butler (novelist)"

  The first ChatGPT answer recorded in HC3 for this question, unedited (spacing before punctuation tidied).

- `d75ecc7b` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Samuel Butler (novelist)” in the register and conventions of a Wikipedia lead (about 93 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 6 commas, 1 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 3 sentences, the shortest about 10 words and the longest about 58 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 2 (rejected before: shares 1 12-gram(s) with the original: 1902 was an english novelist and critic best known for the satirical). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s80e081 — The opening of an encyclopedia article on “Lee Sedol”: from Wikipedia, or written by an AI?

- `49af10c4` — **Wikipedia contributors**. opening of the Wikipedia article “Lee Sedol” (text as collected in the HC3 corpus, 2022)
  Source: [https://en.wikipedia.org/wiki/Lee_Sedol](https://en.wikipedia.org/wiki/Lee_Sedol). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) (Wikipedia text, 2022; redistributed in HC3 under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)). Spacing before punctuation and footnote markers removed (HC3 scrape).

- `0953377a` — **ChatGPT — AI**. ChatGPT (OpenAI), December 2022 research preview, as recorded in the HC3 corpus, 2022-12; writing for the same slot
  Source: [HC3 corpus](https://huggingface.co/datasets/Hello-SimpleAI/HC3) (Guo et al. 2023), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) (HC3, Guo et al. 2023, arXiv:2301.07597).

  Exact original prompt:

  > Please explain what is "Lee Sedol"

  The first ChatGPT answer recorded in HC3 for this question, unedited (spacing before punctuation tidied).

- `2bba88f2` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Lee Sedol” in the register and conventions of a Wikipedia lead (about 148 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 9 commas, 0 em dashes (—), 9 parentheses, 0 ellipses (…), 1 semicolons, 1 colons, 0 exclamation marks, 0 question marks, 3 quotation marks (pairs). Sentence rhythm to match: about 7 sentences, the shortest about 7 words and the longest about 44 words — mix short and long sentences as a human writer of this kind does. Use 9 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `5d797efc` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Lee Sedol” in the register and conventions of a Wikipedia lead (about 148 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 9 commas, 0 em dashes (—), 9 parentheses, 0 ellipses (…), 1 semicolons, 1 colons, 0 exclamation marks, 0 question marks, 3 quotation marks (pairs). Sentence rhythm to match: about 7 sentences, the shortest about 7 words and the longest about 44 words — mix short and long sentences as a human writer of this kind does. Use 9 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 2 (rejected before: word count 108 vs human 148). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `5d7b3615` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Lee Sedol” in the register and conventions of a Wikipedia lead (about 148 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 9 commas, 0 em dashes (—), 9 parentheses, 0 ellipses (…), 1 semicolons, 1 colons, 0 exclamation marks, 0 question marks, 3 quotation marks (pairs). Sentence rhythm to match: about 7 sentences, the shortest about 7 words and the longest about 44 words — mix short and long sentences as a human writer of this kind does. Use 9 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `6a406807` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Lee Sedol” in the register and conventions of a Wikipedia lead (about 148 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 9 commas, 0 em dashes (—), 9 parentheses, 0 ellipses (…), 1 semicolons, 1 colons, 0 exclamation marks, 0 question marks, 3 quotation marks (pairs). Sentence rhythm to match: about 7 sentences, the shortest about 7 words and the longest about 44 words — mix short and long sentences as a human writer of this kind does. Use 9 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### sa4e33e — An answer to “Why does diluted half & half not make a substitute for whole milk?” on Stack Exchange — by a community member, or by an AI?

- `ba55a866` — **logophobe (Stack Exchange user)**. answer on Seasoned Advice (cooking) Stack Exchange, 2018: “Why does diluted half & half not make a substitute for whole milk?”
  Source: [https://cooking.stackexchange.com/a/88199](https://cooking.stackexchange.com/a/88199). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `0e8f6f22` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Seasoned Advice (cooking) Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 128 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 8 commas, 0 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 6 sentences, the shortest about 4 words and the longest about 33 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Why does diluted half & half not make a substitute for whole milk?
  >
  > I noticed that cutting half & half with water does not make it taste like whole milk. What is the reason for this?
  >
  > I'm trying to apply some systems thinking to my understanding of ingredients.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `3f3aed5a` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Seasoned Advice (cooking) Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 128 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 8 commas, 0 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 6 sentences, the shortest about 4 words and the longest about 33 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Why does diluted half & half not make a substitute for whole milk?
  >
  > I noticed that cutting half & half with water does not make it taste like whole milk. What is the reason for this?
  >
  > I'm trying to apply some systems thinking to my understanding of ingredients.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `53c25e84` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Seasoned Advice (cooking) Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 128 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 8 commas, 0 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 6 sentences, the shortest about 4 words and the longest about 33 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Why does diluted half & half not make a substitute for whole milk?
  >
  > I noticed that cutting half & half with water does not make it taste like whole milk. What is the reason for this?
  >
  > I'm trying to apply some systems thinking to my understanding of ingredients.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `ec65725b` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Seasoned Advice (cooking) Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 128 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 8 commas, 0 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Sentence rhythm to match: about 6 sentences, the shortest about 4 words and the longest about 33 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Why does diluted half & half not make a substitute for whole milk?
  >
  > I noticed that cutting half & half with water does not make it taste like whole milk. What is the reason for this?
  >
  > I'm trying to apply some systems thinking to my understanding of ingredients.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### sa73b2f — The Czech Wikipedia entry „Masopust“ — written by Wikipedia editors, or by an AI?

- `001af775` — **Wikipedisté (autoři české Wikipedie)**. heslo „Masopust“ na české Wikipedii, verze z 2021-05-08
  Source: [https://cs.wikipedia.org/w/index.php?oldid=19806629](https://cs.wikipedia.org/w/index.php?oldid=19806629). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `109bb195` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Masopust“, zhruba 121 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 5 slov a nejdelší asi 32 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `26bc1c04` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Masopust“, zhruba 121 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 5 slov a nejdelší asi 32 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `a23a16c8` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Masopust“, zhruba 121 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 5 slov a nejdelší asi 32 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `d7cea60c` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Masopust“, zhruba 121 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 5 slov a nejdelší asi 32 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### safe7df — The opening of an encyclopedia article on “Handwriting recognition”: from Wikipedia, or written by an AI?

- `c482c21e` — **Wikipedia contributors**. opening of the Wikipedia article “Handwriting recognition” (text as collected in the HC3 corpus, 2022)
  Source: [https://en.wikipedia.org/wiki/Handwriting_recognition](https://en.wikipedia.org/wiki/Handwriting_recognition). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) (Wikipedia text, 2022; redistributed in HC3 under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)). Spacing before punctuation and footnote markers removed (HC3 scrape).

- `36072a7f` — **ChatGPT — AI**. ChatGPT (OpenAI), December 2022 research preview, as recorded in the HC3 corpus, 2022-12; writing for the same slot
  Source: [HC3 corpus](https://huggingface.co/datasets/Hello-SimpleAI/HC3) (Guo et al. 2023), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) (HC3, Guo et al. 2023, arXiv:2301.07597).

  Exact original prompt:

  > Please explain what is "Handwriting recognition"

  The first ChatGPT answer recorded in HC3 for this question, unedited (spacing before punctuation tidied).

- `76429003` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Handwriting recognition” in the register and conventions of a Wikipedia lead (about 107 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 9 commas, 0 em dashes (—), 3 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 2 quotation marks (pairs). Sentence rhythm to match: about 4 sentences, the shortest about 17 words and the longest about 34 words — mix short and long sentences as a human writer of this kind does. Use 3 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `909517af` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Handwriting recognition” in the register and conventions of a Wikipedia lead (about 107 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 9 commas, 0 em dashes (—), 3 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 2 quotation marks (pairs). Sentence rhythm to match: about 4 sentences, the shortest about 17 words and the longest about 34 words — mix short and long sentences as a human writer of this kind does. Use 3 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `90c3c1b6` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Handwriting recognition” in the register and conventions of a Wikipedia lead (about 107 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 9 commas, 0 em dashes (—), 3 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 2 quotation marks (pairs). Sentence rhythm to match: about 4 sentences, the shortest about 17 words and the longest about 34 words — mix short and long sentences as a human writer of this kind does. Use 3 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 2 (rejected before: word count 70 vs human 107). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `b5c92bb5` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write, in your own words, the opening paragraph of an encyclopedia article on “Handwriting recognition” in the register and conventions of a Wikipedia lead (about 107 words, plain text, no citation markers, headings or lists). Do not reproduce the actual Wikipedia text. Punctuation habits to match — a Wikipedia opening of this length uses about: 9 commas, 0 em dashes (—), 3 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 2 quotation marks (pairs). Sentence rhythm to match: about 4 sentences, the shortest about 17 words and the longest about 34 words — mix short and long sentences as a human writer of this kind does. Use 3 parenthetical asides in round brackets (for example dates, alternative names or short explanations).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### sbc1589 — The Czech Wikipedia entry „Pravčická brána“ — written by Wikipedia editors, or by an AI?

- `f5922b44` — **Wikipedisté (autoři české Wikipedie)**. heslo „Pravčická brána“ na české Wikipedii, verze z 2021-12-18
  Source: [https://cs.wikipedia.org/w/index.php?oldid=20737692](https://cs.wikipedia.org/w/index.php?oldid=20737692). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `58ecb81f` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Pravčická brána“, zhruba 128 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 1 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 10 vět, nejkratší asi 1 slov a nejdelší asi 20 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `ccd3823b` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Pravčická brána“, zhruba 128 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 1 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 10 vět, nejkratší asi 1 slov a nejdelší asi 20 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `d1d96f85` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Pravčická brána“, zhruba 128 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 1 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 10 vět, nejkratší asi 1 slov a nejdelší asi 20 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### scbee10 — The Czech Wikipedia entry „Hrnek“ — written by Wikipedia editors, or by an AI?

- `d3572694` — **Wikipedisté (autoři české Wikipedie)**. heslo „Hrnek“ na české Wikipedii, verze z 2021-10-17
  Source: [https://cs.wikipedia.org/w/index.php?oldid=20554999](https://cs.wikipedia.org/w/index.php?oldid=20554999). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `18f7aeb0` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Hrnek“, zhruba 70 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 8 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 8 slov a nejdelší asi 25 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `44f44a6c` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Hrnek“, zhruba 70 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 8 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 8 slov a nejdelší asi 25 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `8a27c78b` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Hrnek“, zhruba 70 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 8 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 8 slov a nejdelší asi 25 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### scf8965 — The Czech Wikipedia entry „Bramborák“ — written by Wikipedia editors, or by an AI?

- `c6f78643` — **Wikipedisté (autoři české Wikipedie)**. heslo „Bramborák“ na české Wikipedii, verze z 2021-05-25
  Source: [https://cs.wikipedia.org/w/index.php?oldid=19929820](https://cs.wikipedia.org/w/index.php?oldid=19929820). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `20720127` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Bramborák“, zhruba 113 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 13 čárek, 0 pomlček (—), 5 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 6 slov a nejdelší asi 28 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 5× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `f1591cda` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Bramborák“, zhruba 113 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 13 čárek, 0 pomlček (—), 5 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 6 slov a nejdelší asi 28 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 5× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `f1728f3b` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Bramborák“, zhruba 113 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 13 čárek, 0 pomlček (—), 5 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 6 slov a nejdelší asi 28 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 5× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### sd9af64 — A Czech Wikinews report, „Trojská lávka se zřítila do Vltavy“ — written by a person, or by an AI?

- `216f5746` — **Autoři Wikizpráv**. článek Wikizpráv „Trojská lávka se zřítila do Vltavy“
  Source: [https://cs.wikinews.org/w/index.php?oldid=71532](https://cs.wikinews.org/w/index.php?oldid=71532). Licence: [CC BY 2.5](https://creativecommons.org/licenses/by/2.5/).

- `2ca6a476` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 90 slov, prostý text bez titulku a bez markdownu, o této události:
  > Lávka v Troji spojující Trojský zámek s Císařským ostrovem se zřítila do Vltavy. Zraněni čtyři lidé, dva vážně (šedesátiletý muž a třiašedesátiletá žena). Lávka postavena 1984 místo původní stržené povodní 1981, délka 260 m, poškozena povodní 2002 a od té doby pravidelně kontrolována. Hasiči vyslali tři jednotky, lodní doprava zastavena, další zranění se nenašli.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 2 (rejected before: word count 60 vs human 90). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `3b2f9db1` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 90 slov, prostý text bez titulku a bez markdownu, o této události:
  > Lávka v Troji spojující Trojský zámek s Císařským ostrovem se zřítila do Vltavy. Zraněni čtyři lidé, dva vážně (šedesátiletý muž a třiašedesátiletá žena). Lávka postavena 1984 místo původní stržené povodní 1981, délka 260 m, poškozena povodní 2002 a od té doby pravidelně kontrolována. Hasiči vyslali tři jednotky, lodní doprava zastavena, další zranění se nenašli.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `618fe878` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 90 slov, prostý text bez titulku a bez markdownu, o této události:
  > Lávka v Troji spojující Trojský zámek s Císařským ostrovem se zřítila do Vltavy. Zraněni čtyři lidé, dva vážně (šedesátiletý muž a třiašedesátiletá žena). Lávka postavena 1984 místo původní stržené povodní 1981, délka 260 m, poškozena povodní 2002 a od té doby pravidelně kontrolována. Hasiči vyslali tři jednotky, lodní doprava zastavena, další zranění se nenašli.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `e66c1058` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 90 slov, prostý text bez titulku a bez markdownu, o této události:
  > Lávka v Troji spojující Trojský zámek s Císařským ostrovem se zřítila do Vltavy. Zraněni čtyři lidé, dva vážně (šedesátiletý muž a třiašedesátiletá žena). Lávka postavena 1984 místo původní stržené povodní 1981, délka 260 m, poškozena povodní 2002 a od té doby pravidelně kontrolována. Hasiči vyslali tři jednotky, lodní doprava zastavena, další zranění se nenašli.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### se9b855 — A Czech Wikinews report, „Česko postihla sněhová kalamita“ — written by a person, or by an AI?

- `99203876` — **Autoři Wikizpráv**. článek Wikizpráv „Česko postihla sněhová kalamita“
  Source: [https://cs.wikinews.org/w/index.php?oldid=70706](https://cs.wikinews.org/w/index.php?oldid=70706). Licence: [CC BY 2.5](https://creativecommons.org/licenses/by/2.5/).

- `2fdcf33a` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 138 slov, prostý text bez titulku a bez markdownu, o této události:
  > Po víkendovém sněžení postihla Česko sněhová kalamita: v nížinách za čtyři dny napadlo 15–35 cm sněhu. Na železnici byl v noci přerušen provoz u Kolína na koridoru Praha – Česká Třebová (expresy do Brna, Ostravy, Rakouska, na Slovensko); kolem 7. hodiny obnoven provizorně po jedné koleji. Večer měly vlaky hodinová zpoždění, např. EC 147 Praha–Žilina 207 minut, vlak 111 Praha–Varšava 170 minut. Problémy i na lokálních tratích na Ostravsku a u Prahy; večer všechny tratě sjízdné, zpoždění trvají.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 4 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 9 slov a nejdelší asi 32 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `3cdfe4e5` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 138 slov, prostý text bez titulku a bez markdownu, o této události:
  > Po víkendovém sněžení postihla Česko sněhová kalamita: v nížinách za čtyři dny napadlo 15–35 cm sněhu. Na železnici byl v noci přerušen provoz u Kolína na koridoru Praha – Česká Třebová (expresy do Brna, Ostravy, Rakouska, na Slovensko); kolem 7. hodiny obnoven provizorně po jedné koleji. Večer měly vlaky hodinová zpoždění, např. EC 147 Praha–Žilina 207 minut, vlak 111 Praha–Varšava 170 minut. Problémy i na lokálních tratích na Ostravsku a u Prahy; večer všechny tratě sjízdné, zpoždění trvají.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 4 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 9 slov a nejdelší asi 32 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `6b9b5148` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 138 slov, prostý text bez titulku a bez markdownu, o této události:
  > Po víkendovém sněžení postihla Česko sněhová kalamita: v nížinách za čtyři dny napadlo 15–35 cm sněhu. Na železnici byl v noci přerušen provoz u Kolína na koridoru Praha – Česká Třebová (expresy do Brna, Ostravy, Rakouska, na Slovensko); kolem 7. hodiny obnoven provizorně po jedné koleji. Večer měly vlaky hodinová zpoždění, např. EC 147 Praha–Žilina 207 minut, vlak 111 Praha–Varšava 170 minut. Problémy i na lokálních tratích na Ostravsku a u Prahy; večer všechny tratě sjízdné, zpoždění trvají.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 4 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 9 slov a nejdelší asi 32 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### sf17914 — A Czech Wikinews report, „V ostravské zoo se narodila mláďata levhartů“ — written by a person, or by an AI?

- `48abdb67` — **Autoři Wikizpráv**. článek Wikizpráv „V ostravské zoo se narodila mláďata levhartů“
  Source: [https://cs.wikinews.org/w/index.php?oldid=63259](https://cs.wikinews.org/w/index.php?oldid=63259). Licence: [CC BY 2.5](https://creativecommons.org/licenses/by/2.5/).

- `22ebfef4` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 139 slov, prostý text bez titulku a bez markdownu, o této události:
  > V ostravské zoo se po sedmnácti letech narodila mláďata levharta cejlonského (1. července; zoo to oznámila až později, protože kvůli plaché matce Mince z nizozemské zoo byla část pavilonu šelem zavřená). Otec: samec Dandilion z francouzské zoo. Zoo chová tyto levharty od roku 1977, odchovala 13 mláďat, poslední v roce 1991. Mluvčí Stanislav Derlich: hledání vhodného páru trvalo roky; samec je oddělen, výchova je na matce; druh je kvůli pytlákům a úbytku prostředí na pokraji vyhubení.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 3 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 11 vět, nejkratší asi 7 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `4afde5c2` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 139 slov, prostý text bez titulku a bez markdownu, o této události:
  > V ostravské zoo se po sedmnácti letech narodila mláďata levharta cejlonského (1. července; zoo to oznámila až později, protože kvůli plaché matce Mince z nizozemské zoo byla část pavilonu šelem zavřená). Otec: samec Dandilion z francouzské zoo. Zoo chová tyto levharty od roku 1977, odchovala 13 mláďat, poslední v roce 1991. Mluvčí Stanislav Derlich: hledání vhodného páru trvalo roky; samec je oddělen, výchova je na matce; druh je kvůli pytlákům a úbytku prostředí na pokraji vyhubení.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 3 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 11 vět, nejkratší asi 7 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `bd09bd18` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 139 slov, prostý text bez titulku a bez markdownu, o této události:
  > V ostravské zoo se po sedmnácti letech narodila mláďata levharta cejlonského (1. července; zoo to oznámila až později, protože kvůli plaché matce Mince z nizozemské zoo byla část pavilonu šelem zavřená). Otec: samec Dandilion z francouzské zoo. Zoo chová tyto levharty od roku 1977, odchovala 13 mláďat, poslední v roce 1991. Mluvčí Stanislav Derlich: hledání vhodného páru trvalo roky; samec je oddělen, výchova je na matce; druh je kvůli pytlákům a úbytku prostředí na pokraji vyhubení.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 3 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 11 vět, nejkratší asi 7 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 2 (rejected before: word count 89 vs human 139). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `bf2ad533` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 139 slov, prostý text bez titulku a bez markdownu, o této události:
  > V ostravské zoo se po sedmnácti letech narodila mláďata levharta cejlonského (1. července; zoo to oznámila až později, protože kvůli plaché matce Mince z nizozemské zoo byla část pavilonu šelem zavřená). Otec: samec Dandilion z francouzské zoo. Zoo chová tyto levharty od roku 1977, odchovala 13 mláďat, poslední v roce 1991. Mluvčí Stanislav Derlich: hledání vhodného páru trvalo roky; samec je oddělen, výchova je na matce; druh je kvůli pytlákům a úbytku prostředí na pokraji vyhubení.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 3 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 11 vět, nejkratší asi 7 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### sf2de01 — An answer to “Is tipping mandatory at Restaurants and Bars in Germany?” on Stack Exchange — by a community member, or by an AI?

- `a5b4d1f3` — **Hagen von Eitzen (Stack Exchange user)**. answer on Travel Stack Exchange, 2018: “Is tipping mandatory at Restaurants and Bars in Germany?”
  Source: [https://travel.stackexchange.com/a/124723](https://travel.stackexchange.com/a/124723). Licence: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

- `3a095174` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Travel Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 148 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 5 commas, 1 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 2 quotation marks (pairs). Sentence rhythm to match: about 4 sentences, the shortest about 25 words and the longest about 51 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Is tipping mandatory at Restaurants and Bars in Germany?
  >
  > In Bavaria, I paid for my drink, I asked her for "Ruckgeld", but only got the integer part of the money back, the rest of it, she kept it for tip! I looked her in the eye and she understood that I wasn't happy with that "initiative", but wouldn't blink an eye!
  >
  > My company advised me to let it go, mentioning that if I was going to ask for the change, she would swear.
  >
  > Notice how she didn't return me the correct amount back and then stare at me, demanding for tip, but she would decide for me!
  >
  > Since, I will be around for a week or so, I was thinking of paying the exact amount of money next time. Will I get in an uncomfortable situation of having the waiter stare at me, demanding a tip? In other words, is tipping mandatory in Germany?
  >
  >
  >
  > PS: Having experienced the tipping-cruelty in USA, and having tipped generously waiters across the Mediterranean for their supreme behavior, this Saturday night came as a shock, since I had the impression that this awful habit was only a USA-thing (you know, just like the fake audience laughing they have in USA TV series :) ).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `69bc16ab` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Travel Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 148 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 5 commas, 1 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 2 quotation marks (pairs). Sentence rhythm to match: about 4 sentences, the shortest about 25 words and the longest about 51 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Is tipping mandatory at Restaurants and Bars in Germany?
  >
  > In Bavaria, I paid for my drink, I asked her for "Ruckgeld", but only got the integer part of the money back, the rest of it, she kept it for tip! I looked her in the eye and she understood that I wasn't happy with that "initiative", but wouldn't blink an eye!
  >
  > My company advised me to let it go, mentioning that if I was going to ask for the change, she would swear.
  >
  > Notice how she didn't return me the correct amount back and then stare at me, demanding for tip, but she would decide for me!
  >
  > Since, I will be around for a week or so, I was thinking of paying the exact amount of money next time. Will I get in an uncomfortable situation of having the waiter stare at me, demanding a tip? In other words, is tipping mandatory in Germany?
  >
  >
  >
  > PS: Having experienced the tipping-cruelty in USA, and having tipped generously waiters across the Mediterranean for their supreme behavior, this Saturday night came as a shock, since I had the impression that this awful habit was only a USA-thing (you know, just like the fake audience laughing they have in USA TV series :) ).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `a5e92df4` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Travel Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 148 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 5 commas, 1 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 2 quotation marks (pairs). Sentence rhythm to match: about 4 sentences, the shortest about 25 words and the longest about 51 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Is tipping mandatory at Restaurants and Bars in Germany?
  >
  > In Bavaria, I paid for my drink, I asked her for "Ruckgeld", but only got the integer part of the money back, the rest of it, she kept it for tip! I looked her in the eye and she understood that I wasn't happy with that "initiative", but wouldn't blink an eye!
  >
  > My company advised me to let it go, mentioning that if I was going to ask for the change, she would swear.
  >
  > Notice how she didn't return me the correct amount back and then stare at me, demanding for tip, but she would decide for me!
  >
  > Since, I will be around for a week or so, I was thinking of paying the exact amount of money next time. Will I get in an uncomfortable situation of having the waiter stare at me, demanding a tip? In other words, is tipping mandatory in Germany?
  >
  >
  >
  > PS: Having experienced the tipping-cruelty in USA, and having tipped generously waiters across the Mediterranean for their supreme behavior, this Saturday night came as a shock, since I had the impression that this awful habit was only a USA-thing (you know, just like the fake audience laughing they have in USA TV series :) ).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `d0e96758` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Here is a question posted on the Travel Stack Exchange site. Write an answer as a knowledgeable member of that community would, in about 148 words of plain text (no headings, lists or markdown). Punctuation habits to match — a typical answer of this length uses about: 5 commas, 1 em dashes (—), 2 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 2 quotation marks (pairs). Sentence rhythm to match: about 4 sentences, the shortest about 25 words and the longest about 51 words — mix short and long sentences as a human writer of this kind does. Use 2 parenthetical asides in round brackets (for example dates, alternative names or short explanations).
  >
  > Title: Is tipping mandatory at Restaurants and Bars in Germany?
  >
  > In Bavaria, I paid for my drink, I asked her for "Ruckgeld", but only got the integer part of the money back, the rest of it, she kept it for tip! I looked her in the eye and she understood that I wasn't happy with that "initiative", but wouldn't blink an eye!
  >
  > My company advised me to let it go, mentioning that if I was going to ask for the change, she would swear.
  >
  > Notice how she didn't return me the correct amount back and then stare at me, demanding for tip, but she would decide for me!
  >
  > Since, I will be around for a week or so, I was thinking of paying the exact amount of money next time. Will I get in an uncomfortable situation of having the waiter stare at me, demanding a tip? In other words, is tipping mandatory in Germany?
  >
  >
  >
  > PS: Having experienced the tipping-cruelty in USA, and having tipped generously waiters across the Mediterranean for their supreme behavior, this Saturday night came as a shock, since I had the impression that this awful habit was only a USA-thing (you know, just like the fake audience laughing they have in USA TV series :) ).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### sf69b46 — The Czech Wikipedia entry „Hořické trubičky“ — written by Wikipedia editors, or by an AI?

- `c601ee5b` — **Wikipedisté (autoři české Wikipedie)**. heslo „Hořické trubičky“ na české Wikipedii, verze z 2021-03-02
  Source: [https://cs.wikipedia.org/w/index.php?oldid=19567149](https://cs.wikipedia.org/w/index.php?oldid=19567149). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `5c8944cd` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Hořické trubičky“, zhruba 81 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 2 čárek, 0 pomlček (—), 1 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 12 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 1× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `7fe78a2a` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Hořické trubičky“, zhruba 81 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 2 čárek, 0 pomlček (—), 1 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 12 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 1× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `ad2e204a` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš úvodní část hesla české Wikipedie „Hořické trubičky“, zhruba 81 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 2 čárek, 0 pomlček (—), 1 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 12 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 1× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### sfdaf8c — A Czech Wikinews report, „Muzeum uspořádalo padělatelskou soutěž pro děti i dospělé“ — written by a person, or by an AI?

- `cd7050a4` — **Autoři Wikizpráv**. článek Wikizpráv „Muzeum uspořádalo padělatelskou soutěž pro děti i dospělé“
  Source: [https://cs.wikinews.org/w/index.php?oldid=62409](https://cs.wikinews.org/w/index.php?oldid=62409). Licence: [CC BY 2.5](https://creativecommons.org/licenses/by/2.5/).

- `001bbf67` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 143 slov, prostý text bez titulku a bez markdownu, o této události:
  > Jihočeské muzeum v Českých Budějovicích uspořádalo soutěž „Padělej si svou bankovku“ ve třech kategoriích (do 10 let, nad 10 let, dospělí): účastníci domalovali druhou polovinu předtištěné historické bankovky. Soutěž upozorňovala na výstavu padělků. Vyhráli sedmiletý Jakub Štefl z Českých Budějovic, jedenáctiletá Marie Zajíčková z Třeboně a její otec Karel Zajíček (Marie pracovala tři dny, otec tři hodiny). Ceny (certifikát padělatele, rulička rozemletých bankovek) předával i policista Miloš Maršík z odboru hospodářské kriminality, který žertoval. Výstava potrvá do 15. dubna.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 10 vět, nejkratší asi 1 slov a nejdelší asi 24 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `1a215fe1` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 143 slov, prostý text bez titulku a bez markdownu, o této události:
  > Jihočeské muzeum v Českých Budějovicích uspořádalo soutěž „Padělej si svou bankovku“ ve třech kategoriích (do 10 let, nad 10 let, dospělí): účastníci domalovali druhou polovinu předtištěné historické bankovky. Soutěž upozorňovala na výstavu padělků. Vyhráli sedmiletý Jakub Štefl z Českých Budějovic, jedenáctiletá Marie Zajíčková z Třeboně a její otec Karel Zajíček (Marie pracovala tři dny, otec tři hodiny). Ceny (certifikát padělatele, rulička rozemletých bankovek) předával i policista Miloš Maršík z odboru hospodářské kriminality, který žertoval. Výstava potrvá do 15. dubna.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 10 vět, nejkratší asi 1 slov a nejdelší asi 24 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `41e8b6f0` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; writing for the same slot
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 143 slov, prostý text bez titulku a bez markdownu, o této události:
  > Jihočeské muzeum v Českých Budějovicích uspořádalo soutěž „Padělej si svou bankovku“ ve třech kategoriích (do 10 let, nad 10 let, dospělí): účastníci domalovali druhou polovinu předtištěné historické bankovky. Soutěž upozorňovala na výstavu padělků. Vyhráli sedmiletý Jakub Štefl z Českých Budějovic, jedenáctiletá Marie Zajíčková z Třeboně a její otec Karel Zajíček (Marie pracovala tři dny, otec tři hodiny). Ceny (certifikát padělatele, rulička rozemletých bankovek) předával i policista Miloš Maršík z odboru hospodářské kriminality, který žertoval. Výstava potrvá do 15. dubna.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 10 vět, nejkratší asi 1 slov a nejdelší asi 24 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 12-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s249244 — A glass ball reflecting a landscape: a photograph, or an AI image?

- `eb7b3bb1` — **Mixel23**. Flussaue Oderberg Lebus lensball (2019-05-19)
  Image: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Flussaue_Oderberg_Lebus_lensball.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Author/uploader: Mixel23. Cropped, resized and re-encoded for the quiz.
  File: `media/58a75f2b3a89.jpg`.

- `86aa5268` — **OpenAI image generation — AI**. OpenAI image generation (the image_gen tool in Codex CLI; model version not reported), generated 2026-11-01 for this quiz
  Generated for this quiz on 2026-11-01 from a written description of the human picture (the model never saw it); the first image produced was used. CC0.
  File: `media/9c33ce48be4e.jpg`.

  Exact original prompt:

  > A photograph of a clear glass lensball held in front of a green countryside landscape, the ball showing a sharp upside-down reflection of fields, trees and blue sky; the background out of focus; bright daylight.

  Prompt written by the quiz lead to describe the human picture’s subject, composition and medium.

### s362e2a — An old black-and-white photograph of Milan: real, or AI?

- `54ebdbd6` — **Zygmunt Szczotkowski**. Mediolan14-1 (Taken in May 1931)
  Image: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mediolan14-1.jpg), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Author/uploader: Zygmunt Szczotkowski. Cropped, resized and re-encoded for the quiz.
  File: `media/0bbb204f3b17.jpg`.

- `192bbb8b` — **OpenAI image generation — AI**. OpenAI image generation (the image_gen tool in Codex CLI; model version not reported), generated 2026-11-01 for this quiz
  Generated for this quiz on 2026-11-01 from a written description of the human picture (the model never saw it); the first image produced was used. CC0.
  File: `media/bfbcf620fce0.jpg`.

  Exact original prompt:

  > A black-and-white photograph taken in Milan in 1931: the Piazza del Duomo with the gothic cathedral in the background, pedestrians in 1930s coats and hats walking across the square, some blurred by motion, a building corner on the right; grainy film, slight vignetting.

  Prompt written by the quiz lead to describe the human picture’s subject, composition and medium.

- `c7a42ecb` — **DALL-E 2 — AI**. posted on Wikimedia Commons in 2023: “Milan photo ai generated”
  Image: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Milan_photo_ai_generated.png), Public domain. Author/uploader: ashoppio. Cropped, resized and re-encoded for the quiz.
  File: `media/b9303f02e59c.jpg`.

### s44c840 — A street in Penang, Malaysia: a photograph, or an AI image?

- `bfae756d` — ***angys***. Jalan Machang Bubok (south) (241226) (2024-12-26 17:35:19)
  Image: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Jalan_Machang_Bubok_(south)_(241226).jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Author/uploader: *angys*. Cropped, resized and re-encoded for the quiz.
  File: `media/f6c39ea6183d.jpg`.

- `63d840d0` — **OpenAI image generation — AI**. OpenAI image generation (the image_gen tool in Codex CLI; model version not reported), generated 2026-11-01 for this quiz
  Generated for this quiz on 2026-11-01 from a written description of the human picture (the model never saw it); the first image produced was used. CC0.
  File: `media/03d798abd422.jpg`.

  Exact original prompt:

  > A photograph of a wide, almost empty street in George Town, Penang, Malaysia, on a bright afternoon: tall palm trees along the right side, low shophouses and a yellow-painted building on the left, a few parked cars, wispy clouds in a blue sky; taken from the pavement at eye level.

  Prompt written by the quiz lead to describe the human picture’s subject, composition and medium.

- `a5748c66` — **DALL-E 2 — AI**. posted on Wikimedia Commons in 2022: “DALL-E Generated images of a empty street in Penang”
  Image: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:DALL-E_Generated_images_of_a_empty_street_in_Penang.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Author/uploader: Dall-E. Cropped, resized and re-encoded for the quiz.
  File: `media/fc63de19aa6b.jpg`.

### s753366 — A mountain valley in the afternoon: a photograph, or an AI image?

- `a10599e7` — **Rolenc**. Val Mora - panoramio (Taken on 23 June 2009)
  Image: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Val_Mora_-_panoramio.jpg), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Author/uploader: Rolenc. Cropped, resized and re-encoded for the quiz.
  File: `media/6873f7bee40c.jpg`.

- `027c4c25` — **Ideogram 2.0 — AI**. posted on Wikimedia Commons in 2024: “Scenic Valley in the Afternoon (Ideogram 2.0)”
  Image: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Scenic_Valley_in_the_Afternoon_(Ideogram_2.0).webp), Public domain. Author/uploader: VulcanSphere. Cropped, resized and re-encoded for the quiz.
  File: `media/d08fb16398ef.jpg`.

- `1da2ba68` — **OpenAI image generation — AI**. OpenAI image generation (the image_gen tool in Codex CLI; model version not reported), generated 2026-11-01 for this quiz
  Generated for this quiz on 2026-11-01 from a written description of the human picture (the model never saw it); the first image produced was used. CC0.
  File: `media/9cabbc8f465f.jpg`.

  Exact original prompt:

  > A photograph of a wide alpine valley in summer: a broad pale gravel riverbed winding through green meadow in the foreground, dense dark-green conifer forest on the slopes, grey rocky mountains with a few snow patches under a hazy sky; taken with an ordinary digital camera, landscape orientation.

  Prompt written by the quiz lead to describe the human picture’s subject, composition and medium.

- `929d8367` — **Stable Diffusion 3.5 Large — AI**. posted on Wikimedia Commons in 2024: “Late Afternoon Cloudy Valley (SD3.5)”
  Image: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Late_Afternoon_Cloudy_Valley_(SD3.5).webp), Public domain. Author/uploader: VulcanSphere. Cropped, resized and re-encoded for the quiz.
  File: `media/d8b4a2482a01.jpg`.

- `b9a4763a` — **Reve Image — AI**. posted on Wikimedia Commons in 2025: “Scenic Valley in the Afternoon (Reve Image)”
  Image: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Scenic_Valley_in_the_Afternoon_(Reve_Image).webp), Public domain. Author/uploader: VulcanSphere. Cropped, resized and re-encoded for the quiz.
  File: `media/772cab8912f8.jpg`.

- `edc6306e` — **FLUX 1.1 Pro — AI**. posted on Wikimedia Commons in 2024: “Sunset Valley (FLUX 1.1 Pro Raw)”
  Image: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sunset_Valley_(FLUX_1.1_Pro_Raw).webp), Public domain. Author/uploader: VulcanSphere. Cropped, resized and re-encoded for the quiz.
  File: `media/713e1acfda4e.jpg`.

### s9d17e9 — A plate of grilled fish and salad: a photograph, or an AI image?

- `8d1761c6` — **Bdieu**. Salad with fish (Taken on 6 August 2008, 10:33)
  Image: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Salad_with_fish.jpg), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Author/uploader: Bdieu. Cropped, resized and re-encoded for the quiz.
  File: `media/c3419b1def64.jpg`.

- `6d13aefe` — **OpenAI image generation — AI**. OpenAI image generation (the image_gen tool in Codex CLI; model version not reported), generated 2026-11-01 for this quiz
  Generated for this quiz on 2026-11-01 from a written description of the human picture (the model never saw it); the first image produced was used. CC0.
  File: `media/fbf4c65dbbf5.jpg`.

  Exact original prompt:

  > A snapshot photograph, taken with on-camera flash in a restaurant, of a white plate with a grilled fish fillet and a mixed salad with olives, tomatoes, onion, lettuce, hard-boiled egg and lime wedges, seen from above at an angle; dark background.

  Prompt written by the quiz lead to describe the human picture’s subject, composition and medium.

### saab77f — A water drop on a flower petal: a macro photograph, or an AI image?

- `3a3aee2b` — **cogdogblog**. 2011-365-99 Precious Drop (5604857847) (2011-04-09 13:22:30)
  Image: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2011-365-99_Precious_Drop_(5604857847).jpg), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/). Author/uploader: cogdogblog. Cropped, resized and re-encoded for the quiz.
  File: `media/fe7d0cee619f.jpg`.

- `564f902f` — **OpenAI image generation — AI**. OpenAI image generation (the image_gen tool in Codex CLI; model version not reported), generated 2026-11-01 for this quiz
  Generated for this quiz on 2026-11-01 from a written description of the human picture (the model never saw it); the first image produced was used. CC0.
  File: `media/d3a15a702870.jpg`.

  Exact original prompt:

  > A macro photograph of a single clear water drop sitting on a pink tulip petal, soft pale grey-green background, shallow depth of field.

  Prompt written by the quiz lead to describe the human picture’s subject, composition and medium.

- `80f55b48` — **DALL-E 2 — AI**. posted on Wikimedia Commons in 2022: “DALL·E 2022-07-29 15.49.15 - macro photograph of a water drop on a flower”
  Image: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:DALL%C2%B7E_2022-07-29_15.49.15_-_macro_photograph_of_a_water_drop_on_a_flower.png), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Author/uploader: Madelgarius. Cropped, resized and re-encoded for the quiz.
  File: `media/d6ad0a8d3180.jpg`.

### s0037f8 — A poem by Karel Toman (1877–1946) — or an AI imitation?

- `850eb393` — **Karel Toman (1877–1946)**. Almanach na rok MCM, „V tvou korunu, živote…“, 1899/1900 (WS source: Almanach na rok MCM, Moderní revue 1899, pp. 79–80)
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=253595). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `6fd5370f` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Karel Toman
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Karel Toman (1877–1946), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 16 veršů ve čtyřech čtyřverších, volný tříslabičný přízvučný verš, rým ve druhém a čtvrtém verši. Téma: básník obětuje svou bolest životu a ženě jako krvavé korále. Dekadentní obraznost jako u Karla Tomana. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 65 slov, 2–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 14 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 16 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `77107564` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Karel Toman
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Karel Toman (1877–1946), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 16 veršů ve čtyřech čtyřverších, volný tříslabičný přízvučný verš, rým ve druhém a čtvrtém verši. Téma: básník obětuje svou bolest životu a ženě jako krvavé korále. Dekadentní obraznost jako u Karla Tomana. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 65 slov, 2–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 14 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 16 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `a1840ad6` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Karel Toman
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Karel Toman (1877–1946), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 16 veršů ve čtyřech čtyřverších, volný tříslabičný přízvučný verš, rým ve druhém a čtvrtém verši. Téma: básník obětuje svou bolest životu a ženě jako krvavé korále. Dekadentní obraznost jako u Karla Tomana. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 65 slov, 2–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 14 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 16 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s0da181 — A poem by William Shakespeare (1564–1616) — or an AI imitation?

- `88ca56a1` — **William Shakespeare (1564–1616)**. *Sonnet 52*, Sonnets, 1609
  Text: [Project Gutenberg](https://www.gutenberg.org/ebooks/1041). Public domain (author died before 1956; Project Gutenberg text).

- `1023d81f` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating William Shakespeare
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of William Shakespeare (1564–1616), as if it were a lesser-known poem by William Shakespeare. Form: a Shakespearean sonnet: exactly 14 lines of iambic pentameter, rhyme ABAB CDCD EFEF GG. Theme: why rare meetings with the beloved are more precious than constant ones, through an extended comparison with treasure. Modernised spelling of current editions of the 1609 Sonnets, with elisions such as ’d where the metre needs them. Length: about 109 words in total, 6–10 words per line. Punctuation habits to match — a poem like this uses about: 14 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 1 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `1ce699e9` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating William Shakespeare
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of William Shakespeare (1564–1616), as if it were a lesser-known poem by William Shakespeare. Form: a Shakespearean sonnet: exactly 14 lines of iambic pentameter, rhyme ABAB CDCD EFEF GG. Theme: why rare meetings with the beloved are more precious than constant ones, through an extended comparison with treasure. Modernised spelling of current editions of the 1609 Sonnets, with elisions such as ’d where the metre needs them. Length: about 109 words in total, 6–10 words per line. Punctuation habits to match — a poem like this uses about: 14 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 1 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `58698e0c` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating William Shakespeare
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of William Shakespeare (1564–1616), as if it were a lesser-known poem by William Shakespeare. Form: a Shakespearean sonnet: exactly 14 lines of iambic pentameter, rhyme ABAB CDCD EFEF GG. Theme: why rare meetings with the beloved are more precious than constant ones, through an extended comparison with treasure. Modernised spelling of current editions of the 1609 Sonnets, with elisions such as ’d where the metre needs them. Length: about 109 words in total, 6–10 words per line. Punctuation habits to match — a poem like this uses about: 14 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 1 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `f94860e6` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating William Shakespeare
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of William Shakespeare (1564–1616), as if it were a lesser-known poem by William Shakespeare. Form: a Shakespearean sonnet: exactly 14 lines of iambic pentameter, rhyme ABAB CDCD EFEF GG. Theme: why rare meetings with the beloved are more precious than constant ones, through an extended comparison with treasure. Modernised spelling of current editions of the 1609 Sonnets, with elisions such as ’d where the metre needs them. Length: about 109 words in total, 6–10 words per line. Punctuation habits to match — a poem like this uses about: 14 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 1 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s1acc62 — A passage from Virginia Woolf’s Jacob’s Room — or an AI imitation?

- `49a9b7ec` — **Virginia Woolf (1882–1941)**. Jacob’s Room, ch. 3, 1922
  Text: [Project Gutenberg](https://www.gutenberg.org/ebooks/5670). Public domain (US: published 1922; EU: author died 1941).

- `14fecb12` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Virginia Woolf
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original passage of about 101 words in the style of Virginia Woolf’s Jacob’s Room, as if it were an unquoted passage from that book. Content: a meditation on the sky above an old university town and a procession of gowned figures going into chapel. Punctuation habits to match — a passage like this uses about: 12 commas, 2 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 2 question marks, 0 quotation marks (pairs). Do not quote or closely paraphrase any existing text. Output only the passage as one paragraph: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `77ad0e41` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Virginia Woolf
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original passage of about 101 words in the style of Virginia Woolf’s Jacob’s Room, as if it were an unquoted passage from that book. Content: a meditation on the sky above an old university town and a procession of gowned figures going into chapel. Punctuation habits to match — a passage like this uses about: 12 commas, 2 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 2 question marks, 0 quotation marks (pairs). Do not quote or closely paraphrase any existing text. Output only the passage as one paragraph: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `7ea648eb` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Virginia Woolf
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original passage of about 101 words in the style of Virginia Woolf’s Jacob’s Room, as if it were an unquoted passage from that book. Content: a meditation on the sky above an old university town and a procession of gowned figures going into chapel. Punctuation habits to match — a passage like this uses about: 12 commas, 2 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 2 question marks, 0 quotation marks (pairs). Do not quote or closely paraphrase any existing text. Output only the passage as one paragraph: no title, no commentary, no markdown.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `d718f096` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Virginia Woolf
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original passage of about 101 words in the style of Virginia Woolf’s Jacob’s Room, as if it were an unquoted passage from that book. Content: a meditation on the sky above an old university town and a procession of gowned figures going into chapel. Punctuation habits to match — a passage like this uses about: 12 commas, 2 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 2 question marks, 0 quotation marks (pairs). Do not quote or closely paraphrase any existing text. Output only the passage as one paragraph: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s1d20b2 — A poem by Jiří Wolker (1900–1924) — or an AI imitation?

- `34d68162` — **Jiří Wolker (1900–1924)**. Host do domu, „Háj“, 1921
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=295583). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `2f88e86f` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Jiří Wolker
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Jiří Wolker (1900–1924), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů volného verše s občasným rýmem, jedna sloka. Téma: mladý muž sní o budoucím rodinném životě s obrazy přírody a venkovské zbožnosti. Naivní obraznost jako ve sbírce Host do domu. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 4–11 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `4be484ab` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Jiří Wolker
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Jiří Wolker (1900–1924), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů volného verše s občasným rýmem, jedna sloka. Téma: mladý muž sní o budoucím rodinném životě s obrazy přírody a venkovské zbožnosti. Naivní obraznost jako ve sbírce Host do domu. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 4–11 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `71be83a1` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Jiří Wolker
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Jiří Wolker (1900–1924), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů volného verše s občasným rýmem, jedna sloka. Téma: mladý muž sní o budoucím rodinném životě s obrazy přírody a venkovské zbožnosti. Naivní obraznost jako ve sbírce Host do domu. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 4–11 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `7f5add5d` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Jiří Wolker
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Jiří Wolker (1900–1924), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů volného verše s občasným rýmem, jedna sloka. Téma: mladý muž sní o budoucím rodinném životě s obrazy přírody a venkovské zbožnosti. Naivní obraznost jako ve sbírce Host do domu. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 4–11 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s2cee25 — A passage from Jan Neruda’s Povídky malostranské — or an AI imitation?

- `7531905b` — **Jan Neruda (1834–1891)**. Povídky malostranské, „Večerní šplechty“, 1877 (Povídky malostranské, book edition 1878); WS text from literatura.rychnovsky.cz
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=343709). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `016ef0b6` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Jan Neruda
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 120 slov ve stylu díla Povídky malostranské (Jan Neruda), jako by šlo o necitovaný úryvek z této knihy. Obsah: měsíc svítí na spletité střechy malostranských domů; podrobný popis střech, žlabů a vikýřů s vtipným přirovnáním. Interpunkce jako v originále tohoto druhu, zhruba: 14 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `1f8bad84` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Jan Neruda
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 120 slov ve stylu díla Povídky malostranské (Jan Neruda), jako by šlo o necitovaný úryvek z této knihy. Obsah: měsíc svítí na spletité střechy malostranských domů; podrobný popis střech, žlabů a vikýřů s vtipným přirovnáním. Interpunkce jako v originále tohoto druhu, zhruba: 14 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `dbe93117` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Jan Neruda
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 120 slov ve stylu díla Povídky malostranské (Jan Neruda), jako by šlo o necitovaný úryvek z této knihy. Obsah: měsíc svítí na spletité střechy malostranských domů; podrobný popis střech, žlabů a vikýřů s vtipným přirovnáním. Interpunkce jako v originále tohoto druhu, zhruba: 14 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `e905f750` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Jan Neruda
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 120 slov ve stylu díla Povídky malostranské (Jan Neruda), jako by šlo o necitovaný úryvek z této knihy. Obsah: měsíc svítí na spletité střechy malostranských domů; podrobný popis střech, žlabů a vikýřů s vtipným přirovnáním. Interpunkce jako v originále tohoto druhu, zhruba: 14 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s2e4d43 — A poem by Edna St. Vincent Millay (1892–1950) — or an AI imitation?

- `93ea0950` — **Edna St. Vincent Millay (1892–1950)**. *Still will I harvest beauty*, The Harp-Weaver and Other Poems, 1923
  Text: [Project Gutenberg](https://www.gutenberg.org/ebooks/59474). Public domain (US: published 1923; EU: author died 1950).

- `5a0f5723` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Edna St. Vincent Millay
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Edna St. Vincent Millay (1892–1950), as if it were a lesser-known poem by Edna St. Vincent Millay. Form: a Petrarchan sonnet: exactly 14 lines of iambic pentameter, octave ABBAABBA, sestet CDECED. Theme: finding beauty in ugly, neglected places, and scorn for timid people who look away. Spelling as in the 1923 edition (e.g. coloured). Length: about 104 words in total, 5–9 words per line. Punctuation habits to match — a poem like this uses about: 4 commas, 0 em dashes (—), 0 parentheses, 1 ellipses (…), 2 semicolons, 1 colons, 1 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `5b4cca83` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Edna St. Vincent Millay
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Edna St. Vincent Millay (1892–1950), as if it were a lesser-known poem by Edna St. Vincent Millay. Form: a Petrarchan sonnet: exactly 14 lines of iambic pentameter, octave ABBAABBA, sestet CDECED. Theme: finding beauty in ugly, neglected places, and scorn for timid people who look away. Spelling as in the 1923 edition (e.g. coloured). Length: about 104 words in total, 5–9 words per line. Punctuation habits to match — a poem like this uses about: 4 commas, 0 em dashes (—), 0 parentheses, 1 ellipses (…), 2 semicolons, 1 colons, 1 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `65ac4763` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Edna St. Vincent Millay
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Edna St. Vincent Millay (1892–1950), as if it were a lesser-known poem by Edna St. Vincent Millay. Form: a Petrarchan sonnet: exactly 14 lines of iambic pentameter, octave ABBAABBA, sestet CDECED. Theme: finding beauty in ugly, neglected places, and scorn for timid people who look away. Spelling as in the 1923 edition (e.g. coloured). Length: about 104 words in total, 5–9 words per line. Punctuation habits to match — a poem like this uses about: 4 commas, 0 em dashes (—), 0 parentheses, 1 ellipses (…), 2 semicolons, 1 colons, 1 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `a2848b53` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Edna St. Vincent Millay
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Edna St. Vincent Millay (1892–1950), as if it were a lesser-known poem by Edna St. Vincent Millay. Form: a Petrarchan sonnet: exactly 14 lines of iambic pentameter, octave ABBAABBA, sestet CDECED. Theme: finding beauty in ugly, neglected places, and scorn for timid people who look away. Spelling as in the 1923 edition (e.g. coloured). Length: about 104 words in total, 5–9 words per line. Punctuation habits to match — a poem like this uses about: 4 commas, 0 em dashes (—), 0 parentheses, 1 ellipses (…), 2 semicolons, 1 colons, 1 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s38584f — A passage from Karel Klostermann’s Ze světa lesních samot — or an AI imitation?

- `f36e536c` — **Karel Klostermann (1848–1923)**. Ze světa lesních samot, kap. V (mid-chapter), 1894 (WS source: Jos. R. Vilímek 1894, s. 87–108)
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=343497). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `0d08a828` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Karel Klostermann
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 146 slov ve stylu díla Ze světa lesních samot (Karel Klostermann), jako by šlo o necitovaný úryvek z této knihy. Obsah: pozdní podzim na šumavské samotě: mraky, déšť a sníh, a v noci bludičky nad bažinou. Interpunkce jako v originále tohoto druhu, zhruba: 25 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `4a3078b9` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Karel Klostermann
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 146 slov ve stylu díla Ze světa lesních samot (Karel Klostermann), jako by šlo o necitovaný úryvek z této knihy. Obsah: pozdní podzim na šumavské samotě: mraky, déšť a sníh, a v noci bludičky nad bažinou. Interpunkce jako v originále tohoto druhu, zhruba: 25 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `cea41adb` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Karel Klostermann
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 146 slov ve stylu díla Ze světa lesních samot (Karel Klostermann), jako by šlo o necitovaný úryvek z této knihy. Obsah: pozdní podzim na šumavské samotě: mraky, déšť a sníh, a v noci bludičky nad bažinou. Interpunkce jako v originále tohoto druhu, zhruba: 25 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `d1a51d49` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Karel Klostermann
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 146 slov ve stylu díla Ze světa lesních samot (Karel Klostermann), jako by šlo o necitovaný úryvek z této knihy. Obsah: pozdní podzim na šumavské samotě: mraky, déšť a sníh, a v noci bludičky nad bažinou. Interpunkce jako v originále tohoto druhu, zhruba: 25 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s3f4c62 — A poem by W. B. Yeats (1865–1939) — or an AI imitation?

- `f0b763ed` — **W. B. Yeats (1865–1939)**. *Fallen Majesty*, Responsibilities, 1914
  Text: [Project Gutenberg](https://www.gutenberg.org/ebooks/36865). Public domain (US: published 1914; EU: author died 1939).

- `02e5de82` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating W. B. Yeats
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of W. B. Yeats (1865–1939), as if it were a lesser-known poem by W. B. Yeats. Form: exactly 8 lines in two quatrains of long six-beat lines, rhyme ABAB. Theme: an old poet recording the faded glory of a once-celebrated beautiful woman. Spelling as in Responsibilities (1914). Length: about 75 words in total, 7–10 words per line. Punctuation habits to match — a poem like this uses about: 10 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `32501c81` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating W. B. Yeats
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of W. B. Yeats (1865–1939), as if it were a lesser-known poem by W. B. Yeats. Form: exactly 8 lines in two quatrains of long six-beat lines, rhyme ABAB. Theme: an old poet recording the faded glory of a once-celebrated beautiful woman. Spelling as in Responsibilities (1914). Length: about 75 words in total, 7–10 words per line. Punctuation habits to match — a poem like this uses about: 10 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `52ec8a88` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating W. B. Yeats
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of W. B. Yeats (1865–1939), as if it were a lesser-known poem by W. B. Yeats. Form: exactly 8 lines in two quatrains of long six-beat lines, rhyme ABAB. Theme: an old poet recording the faded glory of a once-celebrated beautiful woman. Spelling as in Responsibilities (1914). Length: about 75 words in total, 7–10 words per line. Punctuation habits to match — a poem like this uses about: 10 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `723bd997` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating W. B. Yeats
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of W. B. Yeats (1865–1939), as if it were a lesser-known poem by W. B. Yeats. Form: exactly 8 lines in two quatrains of long six-beat lines, rhyme ABAB. Theme: an old poet recording the faded glory of a once-celebrated beautiful woman. Spelling as in Responsibilities (1914). Length: about 75 words in total, 7–10 words per line. Punctuation habits to match — a poem like this uses about: 10 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s4fa639 — A poem by William Blake (1757–1827) — or an AI imitation?

- `cd20a9b1` — **William Blake (1757–1827)**. *My Pretty Rose Tree*, Songs of Experience, 1794
  Text: [Project Gutenberg](https://www.gutenberg.org/ebooks/1934). Public domain (author died before 1956; Project Gutenberg text).

- `0b774e5f` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating William Blake
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of William Blake (1757–1827), as if it were a lesser-known poem by William Blake. Form: exactly 8 lines in two quatrains, anapaestic trimeter, rhyme ABAB. Theme: a small domestic choice in love — refusing one flower out of loyalty to another — and its bitter consequence. Spelling of a modern reprint of Songs of Experience; direct speech in single quotation marks. Length: about 58 words in total, 6–8 words per line. Punctuation habits to match — a poem like this uses about: 5 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 2 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `2c0e2e4f` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating William Blake
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of William Blake (1757–1827), as if it were a lesser-known poem by William Blake. Form: exactly 8 lines in two quatrains, anapaestic trimeter, rhyme ABAB. Theme: a small domestic choice in love — refusing one flower out of loyalty to another — and its bitter consequence. Spelling of a modern reprint of Songs of Experience; direct speech in single quotation marks. Length: about 58 words in total, 6–8 words per line. Punctuation habits to match — a poem like this uses about: 5 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 2 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `3fde0293` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating William Blake
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of William Blake (1757–1827), as if it were a lesser-known poem by William Blake. Form: exactly 8 lines in two quatrains, anapaestic trimeter, rhyme ABAB. Theme: a small domestic choice in love — refusing one flower out of loyalty to another — and its bitter consequence. Spelling of a modern reprint of Songs of Experience; direct speech in single quotation marks. Length: about 58 words in total, 6–8 words per line. Punctuation habits to match — a poem like this uses about: 5 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 2 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 2 (rejected before: line count 0 != 8). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `cb03595e` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating William Blake
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of William Blake (1757–1827), as if it were a lesser-known poem by William Blake. Form: exactly 8 lines in two quatrains, anapaestic trimeter, rhyme ABAB. Theme: a small domestic choice in love — refusing one flower out of loyalty to another — and its bitter consequence. Spelling of a modern reprint of Songs of Experience; direct speech in single quotation marks. Length: about 58 words in total, 6–8 words per line. Punctuation habits to match — a poem like this uses about: 5 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 2 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s503f93 — A poem by Christina Rossetti (1830–1894) — or an AI imitation?

- `b2c813b2` — **Christina Rossetti (1830–1894)**. *Rest*, Goblin Market and Other Poems, 1862
  Text: [Project Gutenberg](https://www.gutenberg.org/ebooks/19188). Public domain (author died before 1956; Project Gutenberg text).

- `4e62f190` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Christina Rossetti
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Christina Rossetti (1830–1894), as if it were a lesser-known poem by Christina Rossetti. Form: a Petrarchan-style sonnet: exactly 14 lines of iambic pentameter, octave ABBAABBA, sestet with irregular rhyme. Theme: an address to the earth over the grave of a woman who has found rest. Spelling as in an 1862 edition of her poems. Length: about 110 words in total, 5–10 words per line. Punctuation habits to match — a poem like this uses about: 7 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 6 semicolons, 1 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `a28e0b6b` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Christina Rossetti
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Christina Rossetti (1830–1894), as if it were a lesser-known poem by Christina Rossetti. Form: a Petrarchan-style sonnet: exactly 14 lines of iambic pentameter, octave ABBAABBA, sestet with irregular rhyme. Theme: an address to the earth over the grave of a woman who has found rest. Spelling as in an 1862 edition of her poems. Length: about 110 words in total, 5–10 words per line. Punctuation habits to match — a poem like this uses about: 7 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 6 semicolons, 1 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `aafae26d` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Christina Rossetti
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Christina Rossetti (1830–1894), as if it were a lesser-known poem by Christina Rossetti. Form: a Petrarchan-style sonnet: exactly 14 lines of iambic pentameter, octave ABBAABBA, sestet with irregular rhyme. Theme: an address to the earth over the grave of a woman who has found rest. Spelling as in an 1862 edition of her poems. Length: about 110 words in total, 5–10 words per line. Punctuation habits to match — a poem like this uses about: 7 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 6 semicolons, 1 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `d7618759` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Christina Rossetti
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Christina Rossetti (1830–1894), as if it were a lesser-known poem by Christina Rossetti. Form: a Petrarchan-style sonnet: exactly 14 lines of iambic pentameter, octave ABBAABBA, sestet with irregular rhyme. Theme: an address to the earth over the grave of a woman who has found rest. Spelling as in an 1862 edition of her poems. Length: about 110 words in total, 5–10 words per line. Punctuation habits to match — a poem like this uses about: 7 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 6 semicolons, 1 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s5185da — A passage from Herman Melville’s Moby-Dick — or an AI imitation?

- `cbc95451` — **Herman Melville (1819–1891)**. Moby-Dick, ch. 58 “Brit”, 1851
  Text: [Project Gutenberg](https://www.gutenberg.org/ebooks/2701). Public domain (author died before 1956; Project Gutenberg text).

- `1f390964` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Herman Melville
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original passage of about 104 words in the style of Herman Melville’s Moby-Dick, as if it were an unquoted passage from that book. Content: the ship sails through a sea full of tiny plankton on which whales feed, and the whales are seen feeding; an extended comparison with farm work. Punctuation habits to match — a passage like this uses about: 12 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Do not quote or closely paraphrase any existing text. Output only the passage as one paragraph: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `8a99bb31` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Herman Melville
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original passage of about 104 words in the style of Herman Melville’s Moby-Dick, as if it were an unquoted passage from that book. Content: the ship sails through a sea full of tiny plankton on which whales feed, and the whales are seen feeding; an extended comparison with farm work. Punctuation habits to match — a passage like this uses about: 12 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Do not quote or closely paraphrase any existing text. Output only the passage as one paragraph: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `b577e38f` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Herman Melville
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original passage of about 104 words in the style of Herman Melville’s Moby-Dick, as if it were an unquoted passage from that book. Content: the ship sails through a sea full of tiny plankton on which whales feed, and the whales are seen feeding; an extended comparison with farm work. Punctuation habits to match — a passage like this uses about: 12 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Do not quote or closely paraphrase any existing text. Output only the passage as one paragraph: no title, no commentary, no markdown.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `d407ecb5` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Herman Melville
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original passage of about 104 words in the style of Herman Melville’s Moby-Dick, as if it were an unquoted passage from that book. Content: the ship sails through a sea full of tiny plankton on which whales feed, and the whales are seen feeding; an extended comparison with farm work. Punctuation habits to match — a passage like this uses about: 12 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Do not quote or closely paraphrase any existing text. Output only the passage as one paragraph: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s635a65 — A poem by Viktor Dyk (1877–1931) — or an AI imitation?

- `1521142d` — **Viktor Dyk (1877–1931)**. Devátá vlna, „Sestřička Starost“, 1930 (cs.wikipedia); WS text from Fr. Lukavský, Česká Třebová, 1931
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=218936). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `41e60008` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Viktor Dyk
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Viktor Dyk (1877–1931), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů: blok 18 veršů ve sdružených rýmech AABB různé délky a dvouveršová koda. Téma: starost jako sestřička, která nás všude doprovází, a krátké chvíle, kdy jí utečeme do přírody. Ironicky melancholický tón Viktora Dyka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 107 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 2 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 7 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `464efc0f` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Viktor Dyk
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Viktor Dyk (1877–1931), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů: blok 18 veršů ve sdružených rýmech AABB různé délky a dvouveršová koda. Téma: starost jako sestřička, která nás všude doprovází, a krátké chvíle, kdy jí utečeme do přírody. Ironicky melancholický tón Viktora Dyka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 107 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 2 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 7 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `8be7fc9c` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Viktor Dyk
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Viktor Dyk (1877–1931), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů: blok 18 veršů ve sdružených rýmech AABB různé délky a dvouveršová koda. Téma: starost jako sestřička, která nás všude doprovází, a krátké chvíle, kdy jí utečeme do přírody. Ironicky melancholický tón Viktora Dyka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 107 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 2 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 7 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `bff1e7c0` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Viktor Dyk
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Viktor Dyk (1877–1931), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů: blok 18 veršů ve sdružených rýmech AABB různé délky a dvouveršová koda. Téma: starost jako sestřička, která nás všude doprovází, a krátké chvíle, kdy jí utečeme do přírody. Ironicky melancholický tón Viktora Dyka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 107 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 2 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 7 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s655398 — A poem by Otokar Březina (1868–1929) — or an AI imitation?

- `adc832cf` — **Otokar Březina (1868–1929)**. Tajemné dálky, „Siesta“, 1895 (WS text from the first edition, Moderní revue 1895, p. 20)
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=233940). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `1d560c1a` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Otokar Březina
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Otokar Březina (1868–1929), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, dlouhé jambické verše o 12–14 slabikách, střídavý rým ABAB. Téma: zimní krajina v poledním klidu, světlo a stíny na sněhu a duchovní myšlenka nad ní. Symbolistní slovník Otokara Březiny. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 89 slov, 5–9 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 10 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `9a755257` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Otokar Březina
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Otokar Březina (1868–1929), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, dlouhé jambické verše o 12–14 slabikách, střídavý rým ABAB. Téma: zimní krajina v poledním klidu, světlo a stíny na sněhu a duchovní myšlenka nad ní. Symbolistní slovník Otokara Březiny. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 89 slov, 5–9 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 10 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `ce3050e0` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Otokar Březina
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Otokar Březina (1868–1929), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, dlouhé jambické verše o 12–14 slabikách, střídavý rým ABAB. Téma: zimní krajina v poledním klidu, světlo a stíny na sněhu a duchovní myšlenka nad ní. Symbolistní slovník Otokara Březiny. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 89 slov, 5–9 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 10 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `f23e68c9` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Otokar Březina
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Otokar Březina (1868–1929), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, dlouhé jambické verše o 12–14 slabikách, střídavý rým ABAB. Téma: zimní krajina v poledním klidu, světlo a stíny na sněhu a duchovní myšlenka nad ní. Symbolistní slovník Otokara Březiny. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 89 slov, 5–9 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 10 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s68e531 — A poem by Karel Hynek Mácha (1810–1836) — or an AI imitation?

- `fb42189d` — **Karel Hynek Mácha (1810–1836)**. Ohlas písní národních, „Z temna lesa žežhulička“, written 1831–1832 (WS „Vydáno“ field); first printing not verified
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=196351). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `0ea930b5` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Karel Hynek Mácha
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Karel Hynek Mácha (1810–1836), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů v jedné sloce, lidový trochejský verš (převážně osmislabičný), bez rýmu; kukačka naříká v přímé řeči nad zříceným hradem. Téma: kukačka v lese naříká nad pustým českým hradem a zašlou slávou. Ohlas lidové písně jako u Máchy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 36 slov, 2–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 3 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 0 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `4afe78b4` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Karel Hynek Mácha
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Karel Hynek Mácha (1810–1836), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů v jedné sloce, lidový trochejský verš (převážně osmislabičný), bez rýmu; kukačka naříká v přímé řeči nad zříceným hradem. Téma: kukačka v lese naříká nad pustým českým hradem a zašlou slávou. Ohlas lidové písně jako u Máchy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 36 slov, 2–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 3 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 0 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 2 (rejected before: word count 50 vs human 36). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `681b644c` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Karel Hynek Mácha
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Karel Hynek Mácha (1810–1836), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů v jedné sloce, lidový trochejský verš (převážně osmislabičný), bez rýmu; kukačka naříká v přímé řeči nad zříceným hradem. Téma: kukačka v lese naříká nad pustým českým hradem a zašlou slávou. Ohlas lidové písně jako u Máchy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 36 slov, 2–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 3 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 0 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `a15c6a68` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Karel Hynek Mácha
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Karel Hynek Mácha (1810–1836), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů v jedné sloce, lidový trochejský verš (převážně osmislabičný), bez rýmu; kukačka naříká v přímé řeči nad zříceným hradem. Téma: kukačka v lese naříká nad pustým českým hradem a zašlou slávou. Ohlas lidové písně jako u Máchy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 36 slov, 2–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 3 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 0 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s6b21a8 — A poem by Fráňa Šrámek (1877–1952) — or an AI imitation?

- `1789e685` — **Fráňa Šrámek (1877–1952)**. Splav, „Má bába“, 1916 (WS text from the first edition, Fr. Borový 1916)
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=299014). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `0852c885` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Fráňa Šrámek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Fráňa Šrámek (1877–1952), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, volně trochejský verš, nepravidelný rým, věty přebíhají přes hranice slok. Téma: pohřeb velmi staré babičky, která se se životem dávno rozloučila a jen čekala, až pro ni přijedou. Prostý, citlivý tón Fráni Šrámka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 4–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 0 pomlček (—), 0 závorek, 1 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 1 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `471906c3` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Fráňa Šrámek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Fráňa Šrámek (1877–1952), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, volně trochejský verš, nepravidelný rým, věty přebíhají přes hranice slok. Téma: pohřeb velmi staré babičky, která se se životem dávno rozloučila a jen čekala, až pro ni přijedou. Prostý, citlivý tón Fráni Šrámka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 4–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 0 pomlček (—), 0 závorek, 1 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 1 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `72d92ddb` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Fráňa Šrámek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Fráňa Šrámek (1877–1952), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, volně trochejský verš, nepravidelný rým, věty přebíhají přes hranice slok. Téma: pohřeb velmi staré babičky, která se se životem dávno rozloučila a jen čekala, až pro ni přijedou. Prostý, citlivý tón Fráni Šrámka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 4–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 0 pomlček (—), 0 závorek, 1 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 1 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `8b87b01e` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Fráňa Šrámek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Fráňa Šrámek (1877–1952), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, volně trochejský verš, nepravidelný rým, věty přebíhají přes hranice slok. Téma: pohřeb velmi staré babičky, která se se životem dávno rozloučila a jen čekala, až pro ni přijedou. Prostý, citlivý tón Fráni Šrámka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 4–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 0 pomlček (—), 0 závorek, 1 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 1 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s722e34 — A poem by Vítězslav Hálek (1835–1874) — or an AI imitation?

- `9c42e0ad` — **Vítězslav Hálek (1835–1874)**. Večerní písně, č. 3, 1858–1859; WS text from I. L. Kober 1923 edition
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=295892). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `47220738` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Vítězslav Hálek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Vítězslav Hálek (1835–1874), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, rým ve druhém a čtvrtém verši. Téma: tichý večer v přírodě a smutek v srdci mluvčího. Písňový tón Hálkových Večerních písní. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 57 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `80a59fc3` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Vítězslav Hálek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Vítězslav Hálek (1835–1874), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, rým ve druhém a čtvrtém verši. Téma: tichý večer v přírodě a smutek v srdci mluvčího. Písňový tón Hálkových Večerních písní. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 57 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 3 (rejected before: word count 37 vs human 57; word count 42 vs human 57). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `9a321cb7` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Vítězslav Hálek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Vítězslav Hálek (1835–1874), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, rým ve druhém a čtvrtém verši. Téma: tichý večer v přírodě a smutek v srdci mluvčího. Písňový tón Hálkových Večerních písní. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 57 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `ce5b369d` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Vítězslav Hálek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Vítězslav Hálek (1835–1874), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, rým ve druhém a čtvrtém verši. Téma: tichý večer v přírodě a smutek v srdci mluvčího. Písňový tón Hálkových Večerních písní. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 57 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s76a936 — A poem by Karel Jaromír Erben (1811–1870) — or an AI imitation?

- `51281590` — **Karel Jaromír Erben (1811–1870)**. Sirotkovo lůžko (first four of six stanzas), year of first publication not verified; WS text from F. Bílý
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=228902). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `0bde96f0` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Karel Jaromír Erben
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Karel Jaromír Erben (1811–1870), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 16 veršů ve čtyřech čtyřverších, desetislabičný verš, střídavý rým ABAB; uprostřed přímá řeč dítěte k mrtvé matce. Téma: sirotek v zimní noci na matčině hrobě si stěžuje na zlou macechu. Jako u Erbena: zdrobněliny, přímá řeč v uvozovkách » «. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 101 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 4 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 4 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 16 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `a6d14501` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Karel Jaromír Erben
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Karel Jaromír Erben (1811–1870), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 16 veršů ve čtyřech čtyřverších, desetislabičný verš, střídavý rým ABAB; uprostřed přímá řeč dítěte k mrtvé matce. Téma: sirotek v zimní noci na matčině hrobě si stěžuje na zlou macechu. Jako u Erbena: zdrobněliny, přímá řeč v uvozovkách » «. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 101 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 4 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 4 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 16 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `c600b032` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Karel Jaromír Erben
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Karel Jaromír Erben (1811–1870), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 16 veršů ve čtyřech čtyřverších, desetislabičný verš, střídavý rým ABAB; uprostřed přímá řeč dítěte k mrtvé matce. Téma: sirotek v zimní noci na matčině hrobě si stěžuje na zlou macechu. Jako u Erbena: zdrobněliny, přímá řeč v uvozovkách » «. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 101 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 4 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 4 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 16 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `c6706cd1` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Karel Jaromír Erben
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Karel Jaromír Erben (1811–1870), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 16 veršů ve čtyřech čtyřverších, desetislabičný verš, střídavý rým ABAB; uprostřed přímá řeč dítěte k mrtvé matce. Téma: sirotek v zimní noci na matčině hrobě si stěžuje na zlou macechu. Jako u Erbena: zdrobněliny, přímá řeč v uvozovkách » «. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 101 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 4 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 4 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 16 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s7e97a6 — A poem by Stanislav Kostka Neumann (1875–1947) — or an AI imitation?

- `c3baf6a1` — **Stanislav Kostka Neumann (1875–1947)**. Kniha lesů, vod a strání, „Ocúny“, 1914
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=297326). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `029d7fec` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Stanislav Kostka Neumann
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Stanislav Kostka Neumann (1875–1947), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů v pěti čtyřverších, volně rytmizované verše, rým ve druhém a čtvrtém verši, refrénový verš se vrací. Téma: podzimní květiny na lukách a myšlenka na smrt a znovuzrození. Jazyk Knihy lesů, vod a strání. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 115 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 2 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 12 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `5ab31ee7` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Stanislav Kostka Neumann
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Stanislav Kostka Neumann (1875–1947), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů v pěti čtyřverších, volně rytmizované verše, rým ve druhém a čtvrtém verši, refrénový verš se vrací. Téma: podzimní květiny na lukách a myšlenka na smrt a znovuzrození. Jazyk Knihy lesů, vod a strání. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 115 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 2 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 12 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `6242f1fb` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Stanislav Kostka Neumann
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Stanislav Kostka Neumann (1875–1947), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů v pěti čtyřverších, volně rytmizované verše, rým ve druhém a čtvrtém verši, refrénový verš se vrací. Téma: podzimní květiny na lukách a myšlenka na smrt a znovuzrození. Jazyk Knihy lesů, vod a strání. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 115 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 2 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 12 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `ced16829` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Stanislav Kostka Neumann
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Stanislav Kostka Neumann (1875–1947), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů v pěti čtyřverších, volně rytmizované verše, rým ve druhém a čtvrtém verši, refrénový verš se vrací. Téma: podzimní květiny na lukách a myšlenka na smrt a znovuzrození. Jazyk Knihy lesů, vod a strání. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 115 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 2 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 12 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s834ba6 — A poem by Antonín Sova (1864–1928) — or an AI imitation?

- `12d6c7bb` — **Antonín Sova (1864–1928)**. Z mého kraje, „Rybníky“, 1893 (WS text from 2nd edition, Havlíčkův Brod 1957, s. 55)
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=296416). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `b8842933` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Antonín Sova
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Antonín Sova (1864–1928), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů bez dělení do slok, jambický jedenáctislabičný verš, střídavý rým ABAB. Téma: jihočeské rybníky v létě, ptáci a vůně luk a tichý stesk krajiny. Impresionistický popis jako u Antonína Sovy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 75 slov, 5–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `c82a6a36` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Antonín Sova
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Antonín Sova (1864–1928), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů bez dělení do slok, jambický jedenáctislabičný verš, střídavý rým ABAB. Téma: jihočeské rybníky v létě, ptáci a vůně luk a tichý stesk krajiny. Impresionistický popis jako u Antonína Sovy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 75 slov, 5–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `d95d4b3a` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Antonín Sova
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Antonín Sova (1864–1928), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů bez dělení do slok, jambický jedenáctislabičný verš, střídavý rým ABAB. Téma: jihočeské rybníky v létě, ptáci a vůně luk a tichý stesk krajiny. Impresionistický popis jako u Antonína Sovy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 75 slov, 5–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `e71179a6` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Antonín Sova
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Antonín Sova (1864–1928), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů bez dělení do slok, jambický jedenáctislabičný verš, střídavý rým ABAB. Téma: jihočeské rybníky v létě, ptáci a vůně luk a tichý stesk krajiny. Impresionistický popis jako u Antonína Sovy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 75 slov, 5–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s867409 — A passage from Karolina Světlá’s Poslední paní Hlohovská — or an AI imitation?

- `7515c686` — **Karolina Světlá (1830–1899)**. Poslední paní Hlohovská, kap. II (mid-chapter), first-publication year not verified; WS text from Nová osvěta, Praha 1949, pp. 37–46
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=285530). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `9efc8865` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Karolina Světlá
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 139 slov ve stylu díla Poslední paní Hlohovská (Karolina Světlá), jako by šlo o necitovaný úryvek z této knihy. Obsah: mladá šlechtična ujíždí na koni v čele družiny jarním ránem, zamyšlená a lhostejná ke všemu kolem. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `cf877f90` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Karolina Světlá
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 139 slov ve stylu díla Poslední paní Hlohovská (Karolina Světlá), jako by šlo o necitovaný úryvek z této knihy. Obsah: mladá šlechtična ujíždí na koni v čele družiny jarním ránem, zamyšlená a lhostejná ke všemu kolem. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `ee2b2421` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Karolina Světlá
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 139 slov ve stylu díla Poslední paní Hlohovská (Karolina Světlá), jako by šlo o necitovaný úryvek z této knihy. Obsah: mladá šlechtična ujíždí na koni v čele družiny jarním ránem, zamyšlená a lhostejná ke všemu kolem. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `f0c57c74` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Karolina Světlá
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 139 slov ve stylu díla Poslední paní Hlohovská (Karolina Světlá), jako by šlo o necitovaný úryvek z této knihy. Obsah: mladá šlechtična ujíždí na koni v čele družiny jarním ránem, zamyšlená a lhostejná ke všemu kolem. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s87452c — A poem by František Gellner (1881–1914) — or an AI imitation?

- `eb70df78` — **František Gellner (1881–1914)**. Po nás ať přijde potopa, „Píseň“, 1901 (WS text from the first edition, Nový kult 1901, s. 30)
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=225263). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `01780564` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating František Gellner
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora František Gellner (1881–1914), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický čtyřstopý verš, sdružený rým AABB. Téma: ironické sebepředstavení skeptického bohéma, který se vysmívá vlastním citům i názoru okolí. Hovorový a ironický tón Františka Gellnera. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 62 slov, 3–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 2 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `59cebd08` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating František Gellner
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora František Gellner (1881–1914), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický čtyřstopý verš, sdružený rým AABB. Téma: ironické sebepředstavení skeptického bohéma, který se vysmívá vlastním citům i názoru okolí. Hovorový a ironický tón Františka Gellnera. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 62 slov, 3–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 2 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `9347d6dd` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating František Gellner
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora František Gellner (1881–1914), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický čtyřstopý verš, sdružený rým AABB. Téma: ironické sebepředstavení skeptického bohéma, který se vysmívá vlastním citům i názoru okolí. Hovorový a ironický tón Františka Gellnera. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 62 slov, 3–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 2 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `d82eee9b` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating František Gellner
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora František Gellner (1881–1914), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický čtyřstopý verš, sdružený rým AABB. Téma: ironické sebepředstavení skeptického bohéma, který se vysmívá vlastním citům i názoru okolí. Hovorový a ironický tón Františka Gellnera. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 62 slov, 3–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 2 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s8b6429 — A poem by Thomas Hardy (1840–1928) — or an AI imitation?

- `64ad9c47` — **Thomas Hardy (1840–1928)**. *Her Dilemma*, Wessex Poems, 1898
  Text: [Project Gutenberg](https://www.gutenberg.org/ebooks/3167). Public domain (author died before 1956; Project Gutenberg text). Source prints the first word in capitals (“THE”); normalised to “The”.

- `2b791528` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Thomas Hardy
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Thomas Hardy (1840–1928), as if it were a lesser-known poem by Thomas Hardy. Form: exactly 16 lines in four quatrains, iambic pentameter, rhyme ABAB. Theme: a dying man asks a woman in an old church to say she loves him, and the moral cost of her kind lie. Spelling as in Wessex Poems (1898). Length: about 122 words in total, 5–10 words per line. Punctuation habits to match — a poem like this uses about: 13 commas, 3 em dashes (—), 0 parentheses, 0 ellipses (…), 1 semicolons, 0 colons, 1 exclamation marks, 0 question marks, 2 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `8b52a3f9` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Thomas Hardy
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Thomas Hardy (1840–1928), as if it were a lesser-known poem by Thomas Hardy. Form: exactly 16 lines in four quatrains, iambic pentameter, rhyme ABAB. Theme: a dying man asks a woman in an old church to say she loves him, and the moral cost of her kind lie. Spelling as in Wessex Poems (1898). Length: about 122 words in total, 5–10 words per line. Punctuation habits to match — a poem like this uses about: 13 commas, 3 em dashes (—), 0 parentheses, 0 ellipses (…), 1 semicolons, 0 colons, 1 exclamation marks, 0 question marks, 2 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 2 (rejected before: line count 0 != 16). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `8f912f03` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Thomas Hardy
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Thomas Hardy (1840–1928), as if it were a lesser-known poem by Thomas Hardy. Form: exactly 16 lines in four quatrains, iambic pentameter, rhyme ABAB. Theme: a dying man asks a woman in an old church to say she loves him, and the moral cost of her kind lie. Spelling as in Wessex Poems (1898). Length: about 122 words in total, 5–10 words per line. Punctuation habits to match — a poem like this uses about: 13 commas, 3 em dashes (—), 0 parentheses, 0 ellipses (…), 1 semicolons, 0 colons, 1 exclamation marks, 0 question marks, 2 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `a86f957c` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Thomas Hardy
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Thomas Hardy (1840–1928), as if it were a lesser-known poem by Thomas Hardy. Form: exactly 16 lines in four quatrains, iambic pentameter, rhyme ABAB. Theme: a dying man asks a woman in an old church to say she loves him, and the moral cost of her kind lie. Spelling as in Wessex Poems (1898). Length: about 122 words in total, 5–10 words per line. Punctuation habits to match — a poem like this uses about: 13 commas, 3 em dashes (—), 0 parentheses, 0 ellipses (…), 1 semicolons, 0 colons, 1 exclamation marks, 0 question marks, 2 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s8be5d4 — A poem by Jan Neruda (1834–1891) — or an AI imitation?

- `24231aff` — **Jan Neruda (1834–1891)**. Prosté motivy, Zimní XI, 1883 (book); WS text from Mladá fronta 1956 edition
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=232686). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `84996232` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Jan Neruda
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Jan Neruda (1834–1891), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, trochej, střídání osmi- a šestislabičných veršů, rým ve druhém a čtvrtém verši. Téma: starý strom u stavení, který se má porazit, a otázka kdy; přirovnání ke starému člověku. Prostý jazyk Nerudových Prostých motivů. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 2–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 6 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `94994722` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Jan Neruda
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Jan Neruda (1834–1891), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, trochej, střídání osmi- a šestislabičných veršů, rým ve druhém a čtvrtém verši. Téma: starý strom u stavení, který se má porazit, a otázka kdy; přirovnání ke starému člověku. Prostý jazyk Nerudových Prostých motivů. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 2–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 6 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `b11a26d1` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Jan Neruda
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Jan Neruda (1834–1891), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, trochej, střídání osmi- a šestislabičných veršů, rým ve druhém a čtvrtém verši. Téma: starý strom u stavení, který se má porazit, a otázka kdy; přirovnání ke starému člověku. Prostý jazyk Nerudových Prostých motivů. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 2–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 6 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `bd690869` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Jan Neruda
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Jan Neruda (1834–1891), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, trochej, střídání osmi- a šestislabičných veršů, rým ve druhém a čtvrtém verši. Téma: starý strom u stavení, který se má porazit, a otázka kdy; přirovnání ke starému člověku. Prostý jazyk Nerudových Prostých motivů. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 2–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 6 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s9adfdf — A poem by Wilfred Owen (1893–1918) — or an AI imitation?

- `a3f4d475` — **Wilfred Owen (1893–1918)**. *Arms and the Boy*, Poems, 1918 (publ. 1920)
  Text: [Project Gutenberg](https://www.gutenberg.org/ebooks/1034). Public domain (author died before 1956; Project Gutenberg text).

- `77cc2edb` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Wilfred Owen
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Wilfred Owen (1893–1918), as if it were a lesser-known poem by Wilfred Owen. Form: exactly 12 lines in three quatrains, iambic pentameter with half-rhymes (pararhyme) in couplets rather than full rhymes. Theme: a young soldier and the weapons he is handed, contrasted with his boyish innocence. Spelling as in the 1920 Poems. Length: about 99 words in total, 7–10 words per line. Punctuation habits to match — a poem like this uses about: 5 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 3 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `8da53295` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Wilfred Owen
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Wilfred Owen (1893–1918), as if it were a lesser-known poem by Wilfred Owen. Form: exactly 12 lines in three quatrains, iambic pentameter with half-rhymes (pararhyme) in couplets rather than full rhymes. Theme: a young soldier and the weapons he is handed, contrasted with his boyish innocence. Spelling as in the 1920 Poems. Length: about 99 words in total, 7–10 words per line. Punctuation habits to match — a poem like this uses about: 5 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 3 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `94e560ae` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Wilfred Owen
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Wilfred Owen (1893–1918), as if it were a lesser-known poem by Wilfred Owen. Form: exactly 12 lines in three quatrains, iambic pentameter with half-rhymes (pararhyme) in couplets rather than full rhymes. Theme: a young soldier and the weapons he is handed, contrasted with his boyish innocence. Spelling as in the 1920 Poems. Length: about 99 words in total, 7–10 words per line. Punctuation habits to match — a poem like this uses about: 5 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 3 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 2 (rejected before: word count 57 vs human 99). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `b2e33207` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Wilfred Owen
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Wilfred Owen (1893–1918), as if it were a lesser-known poem by Wilfred Owen. Form: exactly 12 lines in three quatrains, iambic pentameter with half-rhymes (pararhyme) in couplets rather than full rhymes. Theme: a young soldier and the weapons he is handed, contrasted with his boyish innocence. Spelling as in the 1920 Poems. Length: about 99 words in total, 7–10 words per line. Punctuation habits to match — a poem like this uses about: 5 commas, 0 em dashes (—), 0 parentheses, 0 ellipses (…), 3 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### s9b7485 — A poem by Percy Bysshe Shelley (1792–1822) — or an AI imitation?

- `cc995af8` — **Percy Bysshe Shelley (1792–1822)**. *To-morrow*, Posthumous Poems, 1821 (publ. 1824)
  Text: [Project Gutenberg](https://www.gutenberg.org/ebooks/4800). Public domain (author died before 1956; Project Gutenberg text).

- `08de8055` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Percy Bysshe Shelley
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Percy Bysshe Shelley (1792–1822), as if it were a lesser-known poem by Percy Bysshe Shelley. Form: exactly 6 lines in one stanza, trochaic/iambic tetrameter, rhyme ABABCC. Theme: longing for tomorrow and finding only today. Spelling as in Mary Shelley’s editions (e.g. To-morrow). Length: about 36 words in total, 4–8 words per line. Punctuation habits to match — a poem like this uses about: 6 commas, 3 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 2 exclamation marks, 1 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `7706db2a` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Percy Bysshe Shelley
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Percy Bysshe Shelley (1792–1822), as if it were a lesser-known poem by Percy Bysshe Shelley. Form: exactly 6 lines in one stanza, trochaic/iambic tetrameter, rhyme ABABCC. Theme: longing for tomorrow and finding only today. Spelling as in Mary Shelley’s editions (e.g. To-morrow). Length: about 36 words in total, 4–8 words per line. Punctuation habits to match — a poem like this uses about: 6 commas, 3 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 2 exclamation marks, 1 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `a31deaf7` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Percy Bysshe Shelley
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Percy Bysshe Shelley (1792–1822), as if it were a lesser-known poem by Percy Bysshe Shelley. Form: exactly 6 lines in one stanza, trochaic/iambic tetrameter, rhyme ABABCC. Theme: longing for tomorrow and finding only today. Spelling as in Mary Shelley’s editions (e.g. To-morrow). Length: about 36 words in total, 4–8 words per line. Punctuation habits to match — a poem like this uses about: 6 commas, 3 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 2 exclamation marks, 1 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `d9fe45df` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Percy Bysshe Shelley
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Percy Bysshe Shelley (1792–1822), as if it were a lesser-known poem by Percy Bysshe Shelley. Form: exactly 6 lines in one stanza, trochaic/iambic tetrameter, rhyme ABABCC. Theme: longing for tomorrow and finding only today. Spelling as in Mary Shelley’s editions (e.g. To-morrow). Length: about 36 words in total, 4–8 words per line. Punctuation habits to match — a poem like this uses about: 6 commas, 3 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 2 exclamation marks, 1 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### sb778de — A poem by Walt Whitman (1819–1892) — or an AI imitation?

- `17327036` — **Walt Whitman (1819–1892)**. *Sparkles from the Wheel*, Leaves of Grass, 1871/1881
  Text: [Project Gutenberg](https://www.gutenberg.org/ebooks/1322). Public domain (author died before 1956; Project Gutenberg text).

- `450ca378` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Walt Whitman
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Walt Whitman (1819–1892), as if it were a lesser-known poem by Walt Whitman. Form: exactly 16 lines of free verse in three stanzas (2 + 6 + 8 lines), cumulative lines of varying length, the last line a short refrain-like phrase. Theme: a street scene in a big city: the speaker pauses beside children watching a craftsman at work, and loses himself in the sights and sounds. The 1881 Leaves of Grass conventions (elided past tenses like measur’d). Length: about 163 words in total, 4–14 words per line. Punctuation habits to match — a poem like this uses about: 28 commas, 0 em dashes (—), 1 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `572331ad` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Walt Whitman
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Walt Whitman (1819–1892), as if it were a lesser-known poem by Walt Whitman. Form: exactly 16 lines of free verse in three stanzas (2 + 6 + 8 lines), cumulative lines of varying length, the last line a short refrain-like phrase. Theme: a street scene in a big city: the speaker pauses beside children watching a craftsman at work, and loses himself in the sights and sounds. The 1881 Leaves of Grass conventions (elided past tenses like measur’d). Length: about 163 words in total, 4–14 words per line. Punctuation habits to match — a poem like this uses about: 28 commas, 0 em dashes (—), 1 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `72e28e46` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Walt Whitman
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Walt Whitman (1819–1892), as if it were a lesser-known poem by Walt Whitman. Form: exactly 16 lines of free verse in three stanzas (2 + 6 + 8 lines), cumulative lines of varying length, the last line a short refrain-like phrase. Theme: a street scene in a big city: the speaker pauses beside children watching a craftsman at work, and loses himself in the sights and sounds. The 1881 Leaves of Grass conventions (elided past tenses like measur’d). Length: about 163 words in total, 4–14 words per line. Punctuation habits to match — a poem like this uses about: 28 commas, 0 em dashes (—), 1 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### sbc4e33 — A poem by John Keats (1795–1821) — or an AI imitation?

- `3e6ad1b5` — **John Keats (1795–1821)**. *To My Brothers*, Poems, 1816 (publ. 1817)
  Text: [Project Gutenberg](https://www.gutenberg.org/ebooks/8209). Public domain (author died before 1956; Project Gutenberg text).

- `09020e07` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating John Keats
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of John Keats (1795–1821), as if it were a lesser-known poem by John Keats. Form: a Petrarchan sonnet: exactly 14 lines of iambic pentameter, octave ABBAABBA, sestet CDCDCD. Theme: a quiet evening by the fire with brothers on one brother’s birthday, wishing for many more such evenings before death. Spelling as in Keats’s Poems (1817), elisions like o’er. Length: about 110 words in total, 6–9 words per line. Punctuation habits to match — a poem like this uses about: 14 commas, 1 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `464a9d33` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating John Keats
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of John Keats (1795–1821), as if it were a lesser-known poem by John Keats. Form: a Petrarchan sonnet: exactly 14 lines of iambic pentameter, octave ABBAABBA, sestet CDCDCD. Theme: a quiet evening by the fire with brothers on one brother’s birthday, wishing for many more such evenings before death. Spelling as in Keats’s Poems (1817), elisions like o’er. Length: about 110 words in total, 6–9 words per line. Punctuation habits to match — a poem like this uses about: 14 commas, 1 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `84c4ca10` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating John Keats
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of John Keats (1795–1821), as if it were a lesser-known poem by John Keats. Form: a Petrarchan sonnet: exactly 14 lines of iambic pentameter, octave ABBAABBA, sestet CDCDCD. Theme: a quiet evening by the fire with brothers on one brother’s birthday, wishing for many more such evenings before death. Spelling as in Keats’s Poems (1817), elisions like o’er. Length: about 110 words in total, 6–9 words per line. Punctuation habits to match — a poem like this uses about: 14 commas, 1 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `dd67276e` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating John Keats
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of John Keats (1795–1821), as if it were a lesser-known poem by John Keats. Form: a Petrarchan sonnet: exactly 14 lines of iambic pentameter, octave ABBAABBA, sestet CDCDCD. Theme: a quiet evening by the fire with brothers on one brother’s birthday, wishing for many more such evenings before death. Spelling as in Keats’s Poems (1817), elisions like o’er. Length: about 110 words in total, 6–9 words per line. Punctuation habits to match — a poem like this uses about: 14 commas, 1 em dashes (—), 0 parentheses, 0 ellipses (…), 0 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### sc0a85e — A passage from Božena Němcová’s Divá Bára — or an AI imitation?

- `bac87d1a` — **Božena Němcová (1820–1862)**. Divá Bára, kap. I (mid-chapter; not the opening), 1855 (calendar Česká pokladnice na rok 1856, per cs.wikipedia)
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=276581). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `38b16e93` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Božena Němcová
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 93 slov ve stylu díla Divá Bára (Božena Němcová), jako by šlo o necitovaný úryvek z této knihy. Obsah: venkovská dívka je šťastná na faře, kde je všeho dostatek: pokoje, zahrada, dobytek, hračky. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 2 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `4be71e38` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Božena Němcová
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 93 slov ve stylu díla Divá Bára (Božena Němcová), jako by šlo o necitovaný úryvek z této knihy. Obsah: venkovská dívka je šťastná na faře, kde je všeho dostatek: pokoje, zahrada, dobytek, hračky. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 2 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `cdec6603` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Božena Němcová
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 93 slov ve stylu díla Divá Bára (Božena Němcová), jako by šlo o necitovaný úryvek z této knihy. Obsah: venkovská dívka je šťastná na faře, kde je všeho dostatek: pokoje, zahrada, dobytek, hračky. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 2 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `ddc6727d` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Božena Němcová
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 93 slov ve stylu díla Divá Bára (Božena Němcová), jako by šlo o necitovaný úryvek z této knihy. Obsah: venkovská dívka je šťastná na faře, kde je všeho dostatek: pokoje, zahrada, dobytek, hračky. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 2 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### sc591fb — A passage from Karel Čapek’s Zahradníkův rok — or an AI imitation?

- `307543ba` — **Karel Čapek (1890–1938)**. Zahradníkův rok, „Zahradníkův březen“ (mid-chapter), 1929
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=225380). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `6971d50f` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Karel Čapek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 136 slov ve stylu díla Zahradníkův rok (Karel Čapek), jako by šlo o necitovaný úryvek z této knihy. Obsah: jak se zahradníci poznávají mezi lidmi ve společnosti a o čem spolu hned začnou mluvit. Interpunkce jako v originále tohoto druhu, zhruba: 24 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 3 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 2 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `7de2afaa` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Karel Čapek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 136 slov ve stylu díla Zahradníkův rok (Karel Čapek), jako by šlo o necitovaný úryvek z této knihy. Obsah: jak se zahradníci poznávají mezi lidmi ve společnosti a o čem spolu hned začnou mluvit. Interpunkce jako v originále tohoto druhu, zhruba: 24 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 3 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 2 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 2 (rejected before: word count 213 vs human 136). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `f46dc545` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Karel Čapek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 136 slov ve stylu díla Zahradníkův rok (Karel Čapek), jako by šlo o necitovaný úryvek z této knihy. Obsah: jak se zahradníci poznávají mezi lidmi ve společnosti a o čem spolu hned začnou mluvit. Interpunkce jako v originále tohoto druhu, zhruba: 24 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 3 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 2 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `f85c1d38` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Karel Čapek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 136 slov ve stylu díla Zahradníkův rok (Karel Čapek), jako by šlo o necitovaný úryvek z této knihy. Obsah: jak se zahradníci poznávají mezi lidmi ve společnosti a o čem spolu hned začnou mluvit. Interpunkce jako v originále tohoto druhu, zhruba: 24 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 3 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 2 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### sc736cb — A poem by František Halas (1901–1949) — or an AI imitation?

- `6017f83d` — **František Halas (1901–1949)**. Hořec, „Listopad“, 1933 per WS source (Nákladem Erny Janské, Praha 1933, s. 32)
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=267169). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `3ad5c0b5` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating František Halas
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora František Halas (1901–1949), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický verš, střídavý rým ABAB, úplně bez interpunkce. Téma: listopadové loučení dvou milenců a pozdější žal. Úsporný jazyk Františka Halase. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 61 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 0 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `7386e513` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating František Halas
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora František Halas (1901–1949), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický verš, střídavý rým ABAB, úplně bez interpunkce. Téma: listopadové loučení dvou milenců a pozdější žal. Úsporný jazyk Františka Halase. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 61 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 0 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `86155e76` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating František Halas
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora František Halas (1901–1949), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický verš, střídavý rým ABAB, úplně bez interpunkce. Téma: listopadové loučení dvou milenců a pozdější žal. Úsporný jazyk Františka Halase. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 61 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 0 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 2 (rejected before: word count 44 vs human 61). Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `b72a4857` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating František Halas
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora František Halas (1901–1949), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický verš, střídavý rým ABAB, úplně bez interpunkce. Téma: listopadové loučení dvou milenců a pozdější žal. Úsporný jazyk Františka Halase. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 61 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 0 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### sdb66fc — A poem by Emily Dickinson (1830–1886) — or an AI imitation?

- `a0901aa2` — **Emily Dickinson (1830–1886)**. *A little road not made of man*, Poems, Third Series (published posthumously), 1896
  Text: [Project Gutenberg](https://www.gutenberg.org/ebooks/12242). Public domain (author died before 1956; Project Gutenberg text).

- `0b8c7e80` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Emily Dickinson
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Emily Dickinson (1830–1886), as if it were a lesser-known poem by Emily Dickinson. Form: exactly 8 lines in two quatrains, common metre (alternating 4- and 3-beat lines), slant rhyme on lines 2 and 4. Theme: an imagined road or path that only the mind can travel, and the speaker’s inability to follow it. Spelling of the 1890s printed editions (e.g. ’T is). Length: about 43 words in total, 4–7 words per line. Punctuation habits to match — a poem like this uses about: 6 commas, 1 em dashes (—), 0 parentheses, 0 ellipses (…), 1 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `36f43cce` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Emily Dickinson
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Emily Dickinson (1830–1886), as if it were a lesser-known poem by Emily Dickinson. Form: exactly 8 lines in two quatrains, common metre (alternating 4- and 3-beat lines), slant rhyme on lines 2 and 4. Theme: an imagined road or path that only the mind can travel, and the speaker’s inability to follow it. Spelling of the 1890s printed editions (e.g. ’T is). Length: about 43 words in total, 4–7 words per line. Punctuation habits to match — a poem like this uses about: 6 commas, 1 em dashes (—), 0 parentheses, 0 ellipses (…), 1 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `7069ee52` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Emily Dickinson
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Emily Dickinson (1830–1886), as if it were a lesser-known poem by Emily Dickinson. Form: exactly 8 lines in two quatrains, common metre (alternating 4- and 3-beat lines), slant rhyme on lines 2 and 4. Theme: an imagined road or path that only the mind can travel, and the speaker’s inability to follow it. Spelling of the 1890s printed editions (e.g. ’T is). Length: about 43 words in total, 4–7 words per line. Punctuation habits to match — a poem like this uses about: 6 commas, 1 em dashes (—), 0 parentheses, 0 ellipses (…), 1 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `c5b76b91` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Emily Dickinson
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Write an original poem in the style of Emily Dickinson (1830–1886), as if it were a lesser-known poem by Emily Dickinson. Form: exactly 8 lines in two quatrains, common metre (alternating 4- and 3-beat lines), slant rhyme on lines 2 and 4. Theme: an imagined road or path that only the mind can travel, and the speaker’s inability to follow it. Spelling of the 1890s printed editions (e.g. ’T is). Length: about 43 words in total, 4–7 words per line. Punctuation habits to match — a poem like this uses about: 6 commas, 1 em dashes (—), 0 parentheses, 0 ellipses (…), 1 semicolons, 0 colons, 0 exclamation marks, 0 question marks, 0 quotation marks (pairs). Capitalise the first word of every line. Do not quote or paraphrase any existing poem. Output only the poem text: no title, no commentary, no markdown.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### secdc3c — A passage from Jaroslav Hašek’s Osudy dobrého vojáka Švejka — or an AI imitation?

- `ddef5efc` — **Jaroslav Hašek (1883–1923)**. Osudy dobrého vojáka Švejka, díl II, kap. 1 „Švejkovy nehody ve vlaku“ (mid-chapter), 1922 (díl II „Na frontě“); WS text per the 32nd edition, Československý spisovatel, Praha 1983
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=191047). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `50eff538` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Jaroslav Hašek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 118 slov ve stylu díla Osudy dobrého vojáka Švejka (Jaroslav Hašek), jako by šlo o necitovaný úryvek z této knihy. Obsah: nádražní restaurace plná vojáků různých národností, kteří jedou zpátky na frontu; vypravěč s hořkou ironií domýšlí jejich osud. Interpunkce jako v originále tohoto druhu, zhruba: 12 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `611a68ae` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Jaroslav Hašek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 118 slov ve stylu díla Osudy dobrého vojáka Švejka (Jaroslav Hašek), jako by šlo o necitovaný úryvek z této knihy. Obsah: nádražní restaurace plná vojáků různých národností, kteří jedou zpátky na frontu; vypravěč s hořkou ironií domýšlí jejich osud. Interpunkce jako v originále tohoto druhu, zhruba: 12 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `6ea0f884` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Jaroslav Hašek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 118 slov ve stylu díla Osudy dobrého vojáka Švejka (Jaroslav Hašek), jako by šlo o necitovaný úryvek z této knihy. Obsah: nádražní restaurace plná vojáků různých národností, kteří jedou zpátky na frontu; vypravěč s hořkou ironií domýšlí jejich osud. Interpunkce jako v originále tohoto druhu, zhruba: 12 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `ac380126` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Jaroslav Hašek
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní úryvek o rozsahu zhruba 118 slov ve stylu díla Osudy dobrého vojáka Švejka (Jaroslav Hašek), jako by šlo o necitovaný úryvek z této knihy. Obsah: nádražní restaurace plná vojáků různých národností, kteří jedou zpátky na frontu; vypravěč s hořkou ironií domýšlí jejich osud. Interpunkce jako v originále tohoto druhu, zhruba: 12 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

### sf1a555 — A poem by Jiří Orten (1919–1941) — or an AI imitation?

- `8eaa3419` — **Jiří Orten (1919–1941)**. „Něžný sníh“ (newspaper poem), Lidové noviny, 9 Dec 1939 (WS „Vydáno“); WS text from Dílo Jiřího Ortena, Václav Petr, Praha 1947, p. 314
  Text: [Czech Wikisource](https://cs.wikisource.org/w/index.php?oldid=242570). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `d4cbca96` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash, high thinking (Google), via the Antigravity CLI, 2026-11-01; imitating Jiří Orten
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Jiří Orten (1919–1941), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, střídavý rým ABAB. Téma: padající sníh jako něžné dotyky a touha rozplynout se. Lyrický tón Jiřího Ortena. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 5 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `d7b478c1` — **GPT-6.1 — AI**. GPT-6.1 “sol” (OpenAI), via the Codex CLI with web access off, medium reasoning effort, 2026-11-01; imitating Jiří Orten
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Jiří Orten (1919–1941), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, střídavý rým ABAB. Téma: padající sníh jako něžné dotyky a touha rozplynout se. Lyrický tón Jiřího Ortena. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 5 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `ee46dfca` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba Qwen team; open-weights model run locally), 2026-11-01; imitating Jiří Orten
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Jiří Orten (1919–1941), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, střídavý rým ABAB. Téma: padající sníh jako něžné dotyky a touha rozplynout se. Lyrický tón Jiřího Ortena. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 5 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

- `fad1ecff` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), via Claude Code in print mode with a neutral system prompt and no tools, 2026-11-01; imitating Jiří Orten
  Generated for this quiz on 2026-11-01; released under CC0.

  Exact original prompt:

  > Napiš původní báseň ve stylu autora Jiří Orten (1919–1941), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, střídavý rým ABAB. Téma: padající sníh jako něžné dotyky a touha rozplynout se. Lyrický tón Jiřího Ortena. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 5 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Selection rule: the first output that passed the mechanical checks (exact line count for poems; length within 25 % of the original; no 8-word run shared with the original). This was attempt 1. Not edited beyond the typesetting applied to every text (quotes, dashes, ellipses, no indentation, stanza breaks as in the original, prose as one paragraph).

## Studies shown with the results

- Porter & Machery, *Scientific Reports* 2024: 1,634 people judged poems by 10 famous English-language poets and ChatGPT-3.5 imitations and were right **46.6 %** of the time — below chance. In a second experiment (696 people) the AI poems were rated higher on most qualities. [Paper](https://www.nature.com/articles/s41598-024-76900-1)
- Scott Alexander’s AI Art Turing Test, Nov 2024: about 11,000 people, 50 images (strong AI images were deliberately chosen); median score **60 %**. [Results](https://www.astralcodexten.com/p/how-did-you-do-on-the-ai-art-turing)
- Microsoft AI for Good “Real or Not” game, 2024: over 12,500 people and about 287,000 image judgements; **62 %** right overall. [arXiv:2507.18640](https://arxiv.org/abs/2507.18640)
- AI21 “Human or Not”, 2023: over 1.5 million people chatted for two minutes and guessed whether their partner was human; **68 %** right overall, **60 %** when the partner was a bot. [arXiv:2305.20010](https://arxiv.org/abs/2305.20010)
- Jakesch et al., *PNAS* 2023: 4,600 participants could not tell AI-written self-presentations (dating, hospitality, job profiles) from human ones above chance. [arXiv:2206.07271](https://arxiv.org/abs/2206.07271)
- Nightingale & Farid, *PNAS* 2022: StyleGAN2 faces were classified correctly **48 %** of the time — and rated more trustworthy than real faces. [Paper](https://www.pnas.org/doi/10.1073/pnas.2120481119)
- New York Times “Who’s a Better Writer: A.I. or Humans?”, March 2026: over 86,000 readers; **54 %** preferred the AI-written passages. (A preference test, not detection.) [Quiz](https://www.nytimes.com/interactive/2026/03/09/business/ai-writing-quiz.html)
