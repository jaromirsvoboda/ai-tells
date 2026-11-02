> **Update 2026-11-02, image replacement:** the selected pool now has 38 image sets and 77 pictures (38 human, 39 AI). EN: 470 items / 117 sets (117 human, 353 AI). CS: 348 items / 93 sets (93 human, 255 AI). All measured image features and the combined image model score 50.0% LOSO; none exceeds 62%. Text items and text measurements are unchanged. Mixed all-item logistic LOSO is now 50.7% EN and 52.0% CS. Five art pairs were cropped after the blind model checks to remove signatures or photographed border edges; those crops received visual review only. [Full measurements](surface-hard-pool.md). The earlier report below is preserved.

> **Update 2026-11-02:** the quiz includes the round-2 text replacements, 20 additional Czech literature sets and 28 additional image sets. EN: 474 items / 113 sets (113 human, 361 AI). CS: 352 items / 89 sets (89 human, 263 AI). The nine empty text slots were omitted. All 307 chosen text outputs passed the recorded mechanical and cross-family review gates. The table below is the new audit; the older body is preserved after it. Full feature tables and logistic coefficients: [round-2 measurements](surface-round2.md).

| Round/component | Sets | Best fitted feature | Fit | Best CV feature | LOSO | Logistic LOSO |
|---|---:|---|---:|---|---:|---:|
| EN literature (text) | 13 | mean word length | 75.0% | mean word length | 63.5% | 54.8% |
| EN cestina (text) | 55 | mean word length | 60.9% | mean word length | 59.6% | 58.9% |
| EN everyday (text) | 11 | sentence length variance | 69.3% | title-case words/100w | 61.1% | 63.6% |
| EN images (image) | 34 | quantization sum | 61.8% | quantization sum | 58.8% | 58.1% |
| EN mixed (text) | 79 | sentence length variance | 58.1% | mean word length | 58.1% | 59.5% |
| EN mixed (image) | 34 | quantization sum | 61.8% | quantization sum | 58.8% | 58.1% |
| EN mixed (all) | 113 | text: sentence length variance | 55.4% | text: mean word length | 55.4% | 51.4% |
| CS literatura (text) | 40 | mean word length | 63.8% | sentence length variance | 61.3% | 69.6% |
| CS bezne (text) | 15 | diacritics ratio | 65.8% | title-case words/100w | 61.7% | 50.8% |
| CS obrazky (image) | 34 | quantization sum | 61.8% | quantization sum | 58.8% | 58.1% |
| CS mixed (text) | 55 | mean word length | 60.9% | mean word length | 59.6% | 58.9% |
| CS mixed (image) | 34 | quantization sum | 61.8% | quantization sum | 58.8% | 58.1% |
| CS mixed (all) | 89 | text: mean word length | 57.3% | text: mean word length | 56.4% | 51.4% |

Three round results exceed 62% LOSO. English literature reaches 63.5% on mean word length: its weighted human mean is 4.279 letters versus 4.121 for AI. English everyday writing reaches 63.6% with the logistic model. Its largest mean absolute standardised coefficients are all-capital words per 100 words (0.653), any parentheses (0.597), capitalised words per 100 words (0.487) and sentence-length variance (0.454). Czech literature reaches 69.6% with the logistic model, with the largest weights on mean word length (0.769), sentence-length variance (0.423), line-character variance (0.370) and word count (0.324). Human Czech literature has longer words on average (4.759 versus 4.476 letters) and more variable sentence lengths (205.357 versus 78.988).

These are associations in correlated features. Coefficient sizes describe the fitted models, not causal contributions. Neither texts nor set membership were changed in response to this audit. Image single-feature LOSO is 58.8% and logistic LOSO is 58.1%; JPEG quantisation sum is the strongest single feature. Per-image JPEG quality was adjusted during preparation to bring compressed sizes closer, so quantisation tables still vary. All image sets have matching dimensions within each set.

---

# Quiz continuation: surface-feature evidence

> **Update 2026-11-01, later:** seven AI images posted on Commons were removed because they looked generated at a glance (Ideogram, Stable Diffusion 3.5, Reve, FLUX, three DALL-E 2). A re-run of `surface_audit.py` on the result: every text row is unchanged; the image rows (EN/CS images, Mixed image) are now fit 66.7 % (bytes/pixel), CV 50.0 % (width), logistic 25.0 % with one human and one AI picture in each of the six sets. The tables below are the earlier AFTER state.

The lead accepted the quiz for publication. English everyday writing reaches 62.7% single-feature LOSO for sentence-length variance and 73.1% logistic LOSO across 11 sets; the lead accepts sentence rhythm as a stylistic cue. The public explanation is in [quiz/fairness.md](../quiz/fairness.md). A fresh audit reproduced every AFTER value below. One correction to the publication brief: punctuation-only features are at most 58% LOSO in every text round except English literature, where single-quote or apostrophe presence reaches 59.6%. The numeric evidence is unchanged. Scores below 50% also need care: reversing the image model’s predictions gives 62.5%, and six image sets are a small sample.

## Procedure

The BEFORE snapshot is the exact committed data at `061bc85`, read before mutation. The brief/log counts are stale: actual EN = 326 items / 70 sets (70 human, 256 AI); CS = 189 / 43 (43 human, 146 AI). There are **23** committed JPEGs, rather than the 30 stated in the brief/log. Payloads are base64 JSON padded with an underscore field of spaces, **without XOR**. This convention and all surviving IDs are preserved (3,952 encoded characters per EN item, 3,160 per CS item).

Run `OPENBLAS_NUM_THREADS=1 python3 tests/surface_audit.py --output <destination>` with NumPy and Pillow. To repeat BEFORE, extract only the quiz data/media from commit `061bc85` into a scratch directory and use `--data-root <snapshot>`. The script does not run models, fetch sources or change input files. It extends the lead’s `tools/surface.py`; that tool does not handle all requested features or the category weighting of Mixed rounds.

Convention: a fresh browser, equally likely sets within each eligible category; for each set 50% human, 50% a uniformly random AI member. Accuracy is an expectation over this draw, not unweighted accuracy over all AI-heavy items. Replays prefer least-seen AI members and depend on visitor history, so they are not assigned a universal accuracy here. The English Czech round allocates 7 literature and 7 everyday sets; Mixed allocates 5 of each category. Text-only and image-only component scores are conditional on that modality. Mixed **all** follows the entire draw with zero-filled modality-specific features and an image indicator; it does not treat image metadata as text. An 8-item image round becomes 6 after the removals.

Each single-feature rule tries thresholds between consecutive distinct values, both directions, and constants. The tables state the best fitted threshold and its direction (human iff the rule holds), plus leave-one-set-out (LOSO) predictions with threshold/direction fitted solely to the other sets. Fitted scores are optimistic. The maximum over CV features is also a descriptive, selected maximum, not independent validation of a preselected rule. Logistic regression holds out whole sets, fits scaling and the weighted model on the other sets only, uses fixed L2=0.05 and 600 gradient steps of 0.5, and classifies at 0.5. No hyperparameter search was used. These before/after data were inspected to choose removals, so **AFTER is not a pristine holdout**.

Features: punctuation counts per 100 whitespace-separated words, plus presence flags; em/en dashes; opening parentheses (one per pair); semicolons, colons, exclamations, questions and commas; Czech opening „, curly double “”, straight double ", guillemets «», curly single ‘’ (including apostrophes), straight apostrophes; ellipsis glyph …, three adjacent dots and spaced dots independently; words, Unicode characters, nonempty and blank lines; lexical mean word length; sentence-length variance and mean, sentence count; line-initial capitals (all forms), title-case and multi-letter all-caps words; capitals/diacritics ratios and digit rate; mean and variance of line length. Lexical words are Unicode letter sequences with internal apostrophes; sentence boundaries are punctuation followed by whitespace, so abbreviations can be split. These are deliberately shallow measurements, not semantic judgements.

## Applied changes

No surviving text was altered: no punctuation was removed from a human original; no punctuation occurrence was added/removed from an AI text. Dash, quote and ellipsis glyphs were already standardised in the inherited build, so glyph-only editing could not fix the remaining differences in punctuation frequency or sentence structure.

- EN literature: removed entire sets `s0871f3` (Austen, *Persuasion*), `s2dafa9` (Conrad, *Heart of Darkness*) and `s8053c5` (Dickens, *Great Expectations*), 15 items. Every AI member lacked the apostrophes present in its human original. The strongest CV feature fell from 67.2% to 61.5%, and logistic fell from 60.9% to 56.7%; the fitted maximum **rose** from 68.0% to 69.2% (line-length variance). This is a partial improvement only.
- Both image pools: removed `sad9461` (Achenbach shipwreck) and `sb6c829` (Ender sleigh), four items and their four JPEGs. Reproductions vs synthetic paintings had a compression-size cue (human/AI bytes per pixel 0.133/0.244 and 0.140/0.219). These were also the remaining painting sets, so the current quiz has photographs and synthetic photo-like images only. Best bytes-per-pixel fitted accuracy fell 75.0% → 66.7%; best CV feature 71.9% → 50.0%; logistic 58.1% → 37.5%. The fitted maximum still exceeds target; inversion of the final logistic model would be 62.5%, so no claim of absence of image leakage is warranted.
- Additional diagnostic: all 232 subsets retaining at least 8 of the 11 English everyday sets were checked against the largest fitted single-feature score. Its minimum was 71.1%, with CV 61.6% and logistic 74.6% for that selected subset. This trial was not applied; it shows that small removals do not reach target. The search itself is data-dependent and is not independent evidence of fairness.
- Czech literature/everyday and English everyday: retained unchanged, rather than deleting most of a collection to chase unstable fitted thresholds. Their residual problems are shown without omissions. Mixed pools inherit the removals. Replacement generation was prohibited, and no existing replacement set was substituted.

Final inventory: EN 307 items / 65 sets (65 human + 242 AI); CS 185 / 41 (41 human + 144 AI). CS retains all 20 literature sets (20 H + 79 AI), 11 Wikipedia and 4 Wikinews sets (15 H + 52 AI), and 6 image sets with 19 Czech reveals (6 H + 13 AI). Literature includes Mácha, Erben, Neruda (poem and prose), Hálek, Březina, Sova, Gellner, Šrámek, Dyk, Toman, Halas, Orten, Hašek, Čapek, Světlá, Klostermann, Němcová, Wolker and Neumann. Painting content is missing after the documented removals. No audio was present or added.

## Source and provenance checks

All 307 EN and 185 CS decoded origin labels agree with the saved v3 provenance keys. All 59 retained human text items in the EN build and all 35 in CS resolve through the lead’s `gen/v3/id_keys_{en,cs}.json` to `gen/v3/human_all.json`. After replacing paragraph separators with spaces, every text matches the saved source exactly. 49/59 EN and 28/35 CS already match byte for byte; the remaining differences are exclusively paragraph joins inherited from the committed build. No newly verified website/licence claims are made. Every retained item’s source, licence, generator/date and exact prompt (when recorded) appears in its build’s CREDITS.md.

Known inherited doubts: old calibration recognised originals and predates this build; Gemini had a search tool available; some first-publication details are truncated/unverified; Commons images were uploader-selected; Penang’s human photo is from December 2024; NYT primary link returned 403 to the lead; the Opus/Sonnet reviewer never delivered a final report. See both About pages and credits. The older LOG describes 50 sets/235 items and no usable Gemini Mácha; the committed v3 snapshot has 70 sets/326 items and includes a Gemini Mácha output with a recorded tool-free instruction. The old statistics and blind calibration cannot be transferred to this build.

## Image checks

BEFORE: 23 files in 8 matched sets. AFTER: 19 files in 6 sets. All are RGB progressive JPEGs, the Milan set has grayscale-looking pixels in RGB. Every set has identical dimensions and declared width/height for its members. All files share JFIF 1.1, density 72×72, unit=1, one 14-byte APP0/JFIF header and identical quantisation tables. Pillow's APP list has no other application headers (including EXIF, ICC or C2PA APP11); no EXIF entries, ICC payload or comment was found. File sizes range 42,004–216,921 bytes in both snapshots. Sizes/bytes per pixel are **not** equalised, and results below show that limitation. Random hexadecimal filenames contain no generator/origin labels. This is a metadata/dimension audit, not a measurement of image content quality or semantic detection.

## BEFORE

# Surface audit: BEFORE

Fresh visitor; 50% human, 50% uniform AI per set; category weights follow the round-robin draw. Mixed text and image components are reported separately. Feature maxima are descriptive, not a held-out choice of feature. Logistic: fixed L2=0.05, 600 gradient steps, train-only scaling, LOSO by set.

| Round/component | Sets | Best fitted feature | Fit | Best CV feature | LOSO | Logistic LOSO |
|---|---:|---|---:|---|---:|---:|
| EN literature (text) | 16 | curly single quotes/apostrophes/100w | 68.0% | any curly single quotes/apostrophes | 67.2% | 60.9% |
| EN cestina (text) | 35 | sentence length variance | 63.3% | diacritics ratio | 58.3% | 58.8% |
| EN everyday (text) | 11 | sentence length variance | 74.5% | sentence length variance | 62.7% | 73.1% |
| EN images (image) | 8 | bytes/pixel | 75.0% | bytes/pixel | 71.9% | 58.1% |
| EN mixed (text) | 62 | sentence length variance | 64.5% | sentence length variance | 63.1% | 61.3% |
| EN mixed (image) | 8 | bytes/pixel | 75.0% | bytes/pixel | 71.9% | 58.1% |
| EN mixed (all) | 70 | text: sentence length variance | 59.6% | text: sentence length variance | 58.7% | 54.7% |
| CS literatura (text) | 20 | sentence length variance | 69.2% | sentence length variance | 60.2% | 58.7% |
| CS bezne (text) | 15 | mean word length | 64.4% | digits/100w | 58.9% | 58.6% |
| CS obrazky (image) | 8 | bytes/pixel | 75.0% | bytes/pixel | 71.9% | 58.1% |
| CS mixed (text) | 35 | sentence length variance | 63.3% | diacritics ratio | 58.3% | 58.8% |
| CS mixed (image) | 8 | bytes/pixel | 75.0% | bytes/pixel | 71.9% | 58.1% |
| CS mixed (all) | 43 | text: sentence length variance | 58.8% | image: bytes/pixel | 57.3% | 54.3% |

## EN literature (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 1.12947 | 0.946792 | > 0.904996 | 57.0% | 54.7% |
| any em dash | 0.4375 | 0.34375 | > 0.5 | 54.7% | 54.7% |
| en dash/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any en dash | 0 | 0 | > -inf | 50.0% | 50.0% |
| parentheses/100w | 0.0776517 | 0.0673474 | > 0.609779 | 52.6% | 52.6% |
| any parentheses | 0.125 | 0.109375 | > 0.5 | 50.8% | 50.0% |
| semicolon/100w | 1.44588 | 1.56493 | > 1.84701 | 53.9% | 50.0% |
| any semicolon | 0.625 | 0.609375 | > 0.5 | 50.8% | 50.0% |
| colon/100w | 0.116914 | 0.0843528 | > 0.904996 | 54.7% | 51.6% |
| any colon | 0.125 | 0.09375 | > 0.5 | 51.6% | 51.6% |
| exclamation/100w | 0.458548 | 0.438157 | > 0.809836 | 53.1% | 50.0% |
| any exclamation | 0.1875 | 0.171875 | > 0.5 | 50.8% | 50.0% |
| question/100w | 0.336682 | 0.330353 | > 2.74024 | 52.3% | 50.0% |
| any question | 0.1875 | 0.1875 | > -inf | 50.0% | 50.0% |
| comma/100w | 10.6577 | 11.1795 | ≤ 17.2309 | 54.2% | 48.4% |
| any comma | 1 | 0.984375 | > 0.5 | 50.8% | 50.0% |
| Czech open quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any Czech open quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| curly double quotes/100w | 0.519383 | 0.498504 | > 3.23934 | 53.1% | 50.0% |
| any curly double quotes | 0.125 | 0.125 | > -inf | 50.0% | 50.0% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any guillemets | 0 | 0 | > -inf | 50.0% | 50.0% |
| curly single quotes/apostrophes/100w | 1.87403 | 1.01874 | > 0.757836 | 68.0% | 64.1% |
| any curly single quotes/apostrophes | 0.75 | 0.40625 | > 0.5 | 67.2% | 67.2% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0.0600962 | 0.0435179 | > 0.911804 | 51.6% | 50.0% |
| any ellipsis glyph | 0.0625 | 0.046875 | > 0.5 | 50.8% | 50.0% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 101.688 | 103.927 | ≤ 110.5 | 60.9% | 60.9% |
| characters | 569.875 | 580.161 | ≤ 629.5 | 57.0% | 53.9% |
| nonempty lines | 8.4375 | 8.4375 | > -inf | 50.0% | 50.0% |
| blank lines | 0.625 | 0.625 | > -inf | 50.0% | 50.0% |
| mean word length | 4.27518 | 4.32882 | > 4.24468 | 61.2% | 49.5% |
| sentence length variance | 156.389 | 96.7032 | > 33.5694 | 67.2% | 61.7% |
| mean sentence length | 28.3424 | 30.4001 | > 16.5595 | 57.0% | 42.7% |
| sentences | 3.9375 | 4.16667 | ≤ 4.5 | 55.7% | 53.4% |
| line-initial capitals | 1 | 1 | > -inf | 50.0% | 50.0% |
| title-case words/100w | 13.6394 | 13.4376 | > 6.93482 | 59.4% | 50.0% |
| all-caps words/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| capitals ratio | 0.0329821 | 0.0330209 | > 0.0233145 | 61.5% | 59.4% |
| digits/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| diacritics ratio | 0 | 0 | > -inf | 50.0% | 50.0% |
| mean line characters | 238.685 | 256.359 | > 43.2679 | 56.2% | 50.0% |
| line character variance | 30.7377 | 15.061 | > 9.3069 | 65.6% | 55.5% |

## EN cestina (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0.531934 | 0.46639 | > 0.682602 | 52.9% | 51.7% |
| any em dash | 0.241667 | 0.202083 | > 0.5 | 52.0% | 52.0% |
| en dash/100w | 0.0895337 | 0 | > 0.390625 | 53.3% | 51.7% |
| any en dash | 0.0666667 | 0 | > 0.5 | 53.3% | 53.3% |
| parentheses/100w | 0.944039 | 0.890509 | > 1.21252 | 52.2% | 50.4% |
| any parentheses | 0.325 | 0.302083 | > 0.5 | 51.1% | 51.1% |
| semicolon/100w | 0.382126 | 0.27941 | > 0.862133 | 53.5% | 52.6% |
| any semicolon | 0.258333 | 0.19375 | > 0.5 | 53.2% | 53.2% |
| colon/100w | 0.309663 | 0.230139 | > 0.682602 | 53.8% | 52.5% |
| any colon | 0.25 | 0.19375 | > 0.5 | 52.8% | 52.8% |
| exclamation/100w | 0.460501 | 0.363075 | > 1.52681 | 52.5% | 51.2% |
| any exclamation | 0.15 | 0.122917 | > 0.5 | 51.4% | 51.4% |
| question/100w | 0.387471 | 0.377462 | > 11.4296 | 50.9% | 49.4% |
| any question | 0.05 | 0.05625 | ≤ 0.5 | 50.3% | 50.0% |
| comma/100w | 10.1954 | 10.1133 | > 7.78222 | 54.7% | 53.0% |
| any comma | 0.975 | 0.954167 | > 0.5 | 51.0% | 51.0% |
| Czech open quote/100w | 0.376175 | 0.342887 | > 1.41851 | 52.5% | 50.8% |
| any Czech open quote | 0.241667 | 0.225 | > 0.5 | 50.8% | 50.8% |
| curly double quotes/100w | 0.376175 | 0.342887 | > 1.41851 | 52.5% | 50.8% |
| any curly double quotes | 0.241667 | 0.225 | > 0.5 | 50.8% | 50.8% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0.0742574 | 0.0367958 | > 2.50556 | 51.3% | 50.0% |
| any guillemets | 0.025 | 0.01875 | > 0.5 | 50.3% | 50.0% |
| curly single quotes/apostrophes/100w | 0.046729 | 0 | > 0.934579 | 51.2% | 50.0% |
| any curly single quotes/apostrophes | 0.025 | 0 | > 0.5 | 51.2% | 50.0% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0.0446429 | 0.0330973 | > 1.75493 | 50.6% | 50.0% |
| any ellipsis glyph | 0.025 | 0.01875 | > 0.5 | 50.3% | 50.0% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 95.1667 | 93.5924 | > 137.5 | 53.1% | 49.7% |
| characters | 589.525 | 579.053 | > 745.5 | 53.6% | 49.0% |
| nonempty lines | 5.3 | 5.3 | > -inf | 50.0% | 50.0% |
| blank lines | 0.625 | 0.625 | > -inf | 50.0% | 50.0% |
| mean word length | 4.96089 | 4.91824 | > 4.1162 | 57.9% | 50.9% |
| sentence length variance | 144.429 | 36.7642 | > 17.1565 | 63.3% | 53.3% |
| mean sentence length | 21.7643 | 19.8505 | > 15.2679 | 55.7% | 50.4% |
| sentences | 5.725 | 5.96875 | ≤ 3.5 | 52.6% | 48.1% |
| line-initial capitals | 0.760382 | 0.776007 | ≤ 0.447222 | 51.6% | 50.3% |
| title-case words/100w | 9.54614 | 9.13909 | > 10.1702 | 56.4% | 47.5% |
| all-caps words/100w | 0.135111 | 0.0502916 | > 0.892857 | 53.9% | 52.2% |
| capitals ratio | 0.0199533 | 0.0192657 | > 0.0292619 | 55.9% | 46.7% |
| digits/100w | 3.4325 | 1.88161 | > 9.16511 | 56.7% | 54.4% |
| diacritics ratio | 0.159186 | 0.155549 | > 0.153478 | 58.6% | 58.3% |
| mean line characters | 461.444 | 458.761 | > 745.5 | 53.6% | 49.6% |
| line character variance | 8.65002 | 3.81212 | > 14.0853 | 58.0% | 54.6% |

## EN everyday (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0.373081 | 0.316084 | > 0.673408 | 56.1% | 52.7% |
| any em dash | 0.272727 | 0.215152 | > 0.5 | 52.9% | 52.9% |
| en dash/100w | 0.124121 | 0.0989831 | > 0.337838 | 55.5% | 47.3% |
| any en dash | 0.181818 | 0.0712121 | > 0.5 | 55.5% | 55.5% |
| parentheses/100w | 2.2803 | 1.88213 | > 1.34682 | 60.8% | 57.4% |
| any parentheses | 1 | 0.874242 | > 0.5 | 56.3% | 56.3% |
| semicolon/100w | 0.0614251 | 0.0363086 | > 0.658351 | 52.7% | 50.0% |
| any semicolon | 0.0909091 | 0.0545455 | > 0.5 | 51.8% | 50.0% |
| colon/100w | 0.0614251 | 0.0363086 | > 0.658351 | 52.7% | 50.0% |
| any colon | 0.0909091 | 0.0545455 | > 0.5 | 51.8% | 50.0% |
| exclamation/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any exclamation | 0 | 0 | > -inf | 50.0% | 50.0% |
| question/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any question | 0 | 0 | > -inf | 50.0% | 50.0% |
| comma/100w | 6.24662 | 5.16549 | > 6.04806 | 61.5% | 56.3% |
| any comma | 1 | 0.940909 | > 0.5 | 53.0% | 53.0% |
| Czech open quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any Czech open quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| curly double quotes/100w | 1.99319 | 1.66104 | > 2.69363 | 58.0% | 55.8% |
| any curly double quotes | 0.545455 | 0.489394 | > 0.5 | 52.8% | 52.8% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any guillemets | 0 | 0 | > -inf | 50.0% | 50.0% |
| curly single quotes/apostrophes/100w | 0.484107 | 0.26704 | > 0.844258 | 62.5% | 58.0% |
| any curly single quotes/apostrophes | 0.363636 | 0.213636 | > 0.5 | 57.5% | 57.5% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any ellipsis glyph | 0 | 0 | > -inf | 50.0% | 50.0% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 126.273 | 122.85 | > 114.5 | 56.6% | 50.0% |
| characters | 782.545 | 804.058 | ≤ 999.5 | 56.6% | 46.4% |
| nonempty lines | 1 | 1 | > -inf | 50.0% | 50.0% |
| blank lines | 0 | 0 | > -inf | 50.0% | 50.0% |
| mean word length | 4.96801 | 5.36995 | ≤ 5.2137 | 65.5% | 51.7% |
| sentence length variance | 121.151 | 66.0395 | > 96.0687 | 74.5% | 62.7% |
| mean sentence length | 23.6221 | 21.9367 | > 21.0714 | 58.4% | 48.4% |
| sentences | 5.72727 | 6.25758 | ≤ 7.5 | 56.1% | 56.1% |
| line-initial capitals | 1 | 1 | > -inf | 50.0% | 50.0% |
| title-case words/100w | 11.538 | 10.723 | ≤ 6.12273 | 66.1% | 53.4% |
| all-caps words/100w | 1.01142 | 0.368199 | > 0.652303 | 69.1% | 57.3% |
| capitals ratio | 0.0317334 | 0.0230575 | > 0.0492937 | 64.3% | 58.9% |
| digits/100w | 9.12316 | 4.9818 | > 14.8189 | 64.1% | 60.5% |
| diacritics ratio | 0 | 0 | > -inf | 50.0% | 50.0% |
| mean line characters | 782.545 | 804.058 | ≤ 999.5 | 56.6% | 46.4% |
| line character variance | 0 | 0 | > -inf | 50.0% | 50.0% |

## EN images (image)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| width | 1000 | 1000 | > -inf | 50.0% | 50.0% |
| height | 830.75 | 830.75 | > -inf | 50.0% | 50.0% |
| file bytes | 120310 | 132794 | ≤ 114774 | 65.6% | 45.6% |
| bytes/pixel | 0.149866 | 0.170483 | ≤ 0.169045 | 75.0% | 71.9% |
| EXIF entries | 0 | 0 | > -inf | 50.0% | 50.0% |
| ICC bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| comment bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| RGB channels | 3 | 3 | > -inf | 50.0% | 50.0% |
| JFIF unit | 1 | 1 | > -inf | 50.0% | 50.0% |
| JFIF x density | 72 | 72 | > -inf | 50.0% | 50.0% |
| JFIF y density | 72 | 72 | > -inf | 50.0% | 50.0% |
| progressive | 1 | 1 | > -inf | 50.0% | 50.0% |
| quantization sum | 3326 | 3326 | > -inf | 50.0% | 50.0% |

## EN mixed (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0.626506 | 0.537451 | > 0.673408 | 53.8% | 52.8% |
| any em dash | 0.290598 | 0.235595 | > 0.5 | 52.8% | 52.8% |
| en dash/100w | 0.0779104 | 0.0209387 | > 0.337838 | 53.1% | 53.1% |
| any en dash | 0.0769231 | 0.0150641 | > 0.5 | 53.1% | 53.1% |
| parentheses/100w | 1.04348 | 0.926559 | > 1.34682 | 53.2% | 52.7% |
| any parentheses | 0.426282 | 0.38312 | > 0.5 | 52.2% | 52.2% |
| semicolon/100w | 0.547385 | 0.511287 | > 0.658351 | 52.6% | 51.6% |
| any semicolon | 0.30235 | 0.255128 | > 0.5 | 52.4% | 52.4% |
| colon/100w | 0.212866 | 0.15567 | > 0.658351 | 52.7% | 52.1% |
| any colon | 0.188034 | 0.141613 | > 0.5 | 52.3% | 52.3% |
| exclamation/100w | 0.357733 | 0.299076 | > 0.809836 | 51.4% | 50.8% |
| any exclamation | 0.125 | 0.106481 | > 0.5 | 50.9% | 50.9% |
| question/100w | 0.29008 | 0.283113 | ≤ 2.0002 | 50.5% | 49.8% |
| any question | 0.0694444 | 0.0729167 | ≤ 0.5 | 50.2% | 50.0% |
| comma/100w | 9.4412 | 9.27536 | > 6.04806 | 54.5% | 51.9% |
| any comma | 0.986111 | 0.958387 | > 0.5 | 51.4% | 51.4% |
| Czech open quote/100w | 0.21437 | 0.19503 | > 1.41851 | 51.4% | 50.5% |
| any Czech open quote | 0.137821 | 0.128205 | > 0.5 | 50.5% | 50.5% |
| curly double quotes/100w | 0.751425 | 0.657181 | > 2.69363 | 52.5% | 51.2% |
| any curly double quotes | 0.280983 | 0.259509 | > 0.5 | 51.1% | 51.1% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0.0412541 | 0.0204421 | > 2.50556 | 50.7% | 50.0% |
| any guillemets | 0.0138889 | 0.0104167 | > 0.5 | 50.2% | 50.0% |
| curly single quotes/apostrophes/100w | 0.544819 | 0.282875 | > 0.757836 | 57.1% | 55.7% |
| any curly single quotes/apostrophes | 0.257479 | 0.13547 | > 0.5 | 56.1% | 56.1% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0.0381563 | 0.028058 | > 0.911804 | 50.5% | 50.2% |
| any ellipsis glyph | 0.0277778 | 0.0208333 | > 0.5 | 50.3% | 50.3% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 103.285 | 102.157 | > 88.5 | 52.4% | 49.1% |
| characters | 626.89 | 627.947 | > 561 | 53.0% | 51.3% |
| nonempty lines | 5.04167 | 5.04167 | > -inf | 50.0% | 50.0% |
| blank lines | 0.486111 | 0.486111 | > -inf | 50.0% | 50.0% |
| mean word length | 4.81424 | 4.8895 | ≤ 5.53651 | 57.1% | 56.1% |
| sentence length variance | 141.079 | 56.2579 | > 50.9271 | 64.5% | 63.1% |
| mean sentence length | 23.5626 | 22.5923 | > 14.2929 | 55.5% | 52.0% |
| sentences | 5.33974 | 5.64076 | ≤ 7.5 | 53.2% | 53.2% |
| line-initial capitals | 0.866879 | 0.875559 | ≤ 0.447222 | 50.9% | 50.2% |
| title-case words/100w | 10.9064 | 10.4529 | > 10.1702 | 54.5% | 46.3% |
| all-caps words/100w | 0.291904 | 0.106903 | > 1.3167 | 55.9% | 53.3% |
| capitals ratio | 0.0253907 | 0.023149 | > 0.0167536 | 55.8% | 48.0% |
| digits/100w | 3.91019 | 2.13938 | > 15.1205 | 55.1% | 52.6% |
| diacritics ratio | 0.0901595 | 0.0880524 | > 0.153478 | 54.9% | 54.7% |
| mean line characters | 482.136 | 489.163 | ≤ 640 | 52.5% | 47.1% |
| line character variance | 11.6362 | 5.46474 | > 9.3069 | 57.8% | 57.6% |

## EN mixed (image)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| width | 1000 | 1000 | > -inf | 50.0% | 50.0% |
| height | 830.75 | 830.75 | > -inf | 50.0% | 50.0% |
| file bytes | 120310 | 132794 | ≤ 114774 | 65.6% | 45.6% |
| bytes/pixel | 0.149866 | 0.170483 | ≤ 0.169045 | 75.0% | 71.9% |
| EXIF entries | 0 | 0 | > -inf | 50.0% | 50.0% |
| ICC bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| comment bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| RGB channels | 3 | 3 | > -inf | 50.0% | 50.0% |
| JFIF unit | 1 | 1 | > -inf | 50.0% | 50.0% |
| JFIF x density | 72 | 72 | > -inf | 50.0% | 50.0% |
| JFIF y density | 72 | 72 | > -inf | 50.0% | 50.0% |
| progressive | 1 | 1 | > -inf | 50.0% | 50.0% |
| quantization sum | 3326 | 3326 | > -inf | 50.0% | 50.0% |

## EN mixed (all)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| image: EXIF entries | 0 | 0 | > -inf | 50.0% | 50.0% |
| image: ICC bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| image: JFIF unit | 0.333333 | 0.333333 | > -inf | 50.0% | 50.0% |
| image: JFIF x density | 24 | 24 | > -inf | 50.0% | 50.0% |
| image: JFIF y density | 24 | 24 | > -inf | 50.0% | 50.0% |
| image: RGB channels | 1 | 1 | > -inf | 50.0% | 50.0% |
| image: bytes/pixel | 0.0499554 | 0.0568276 | ≤ 0.169045 | 58.3% | 57.3% |
| image: comment bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| image: file bytes | 40103.5 | 44264.5 | ≤ 114774 | 55.2% | 48.5% |
| image: height | 276.917 | 276.917 | > -inf | 50.0% | 50.0% |
| image: progressive | 0.333333 | 0.333333 | > -inf | 50.0% | 50.0% |
| image: quantization sum | 1108.67 | 1108.67 | > -inf | 50.0% | 50.0% |
| image: width | 333.333 | 333.333 | > -inf | 50.0% | 50.0% |
| text: Czech open quote/100w | 0.142913 | 0.13002 | > 1.41851 | 51.0% | 50.3% |
| text: all-caps words/100w | 0.194603 | 0.0712684 | > 1.3167 | 53.9% | 52.2% |
| text: any Czech open quote | 0.0918803 | 0.0854701 | > 0.5 | 50.3% | 50.3% |
| text: any colon | 0.125356 | 0.0944088 | > 0.5 | 51.5% | 51.5% |
| text: any comma | 0.657407 | 0.638925 | > 0.5 | 50.9% | 50.9% |
| text: any curly double quotes | 0.187322 | 0.173006 | > 0.5 | 50.7% | 50.7% |
| text: any curly single quotes/apostrophes | 0.171652 | 0.0903134 | > 0.5 | 54.1% | 54.1% |
| text: any ellipsis glyph | 0.0185185 | 0.0138889 | > 0.5 | 50.2% | 50.2% |
| text: any em dash | 0.193732 | 0.157063 | > 0.5 | 51.8% | 51.8% |
| text: any en dash | 0.0512821 | 0.0100427 | > 0.5 | 52.1% | 52.1% |
| text: any exclamation | 0.0833333 | 0.0709877 | > 0.5 | 50.6% | 50.6% |
| text: any guillemets | 0.00925926 | 0.00694444 | > 0.5 | 50.1% | 50.0% |
| text: any parentheses | 0.284188 | 0.255413 | > 0.5 | 51.4% | 51.4% |
| text: any question | 0.0462963 | 0.0486111 | ≤ 0.5 | 50.1% | 50.0% |
| text: any semicolon | 0.201567 | 0.170085 | > 0.5 | 51.6% | 51.6% |
| text: any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| text: any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| text: any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| text: any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| text: blank lines | 0.324074 | 0.324074 | > -inf | 50.0% | 50.0% |
| text: capitals ratio | 0.0169271 | 0.0154327 | > 0.0167536 | 53.9% | 48.6% |
| text: characters | 417.927 | 418.632 | > 561 | 52.0% | 50.8% |
| text: colon/100w | 0.141911 | 0.10378 | > 0.658351 | 51.8% | 51.4% |
| text: comma/100w | 6.29413 | 6.18357 | > 6.04806 | 53.0% | 51.3% |
| text: curly double quotes/100w | 0.50095 | 0.438121 | > 2.69363 | 51.6% | 50.8% |
| text: curly single quotes/apostrophes/100w | 0.363213 | 0.188584 | > 0.757836 | 54.7% | 53.8% |
| text: diacritics ratio | 0.0601063 | 0.0587016 | > 0.153478 | 53.2% | 53.1% |
| text: digits/100w | 2.60679 | 1.42626 | > 15.1205 | 53.4% | 51.5% |
| text: ellipsis glyph/100w | 0.0254375 | 0.0187054 | > 0.911804 | 50.3% | 50.1% |
| text: em dash/100w | 0.417671 | 0.358301 | > 0.673408 | 52.5% | 51.9% |
| text: en dash/100w | 0.0519403 | 0.0139592 | > 0.337838 | 52.1% | 52.1% |
| text: exclamation/100w | 0.238489 | 0.199384 | > 0.809836 | 51.0% | 50.5% |
| text: guillemets/100w | 0.0275028 | 0.0136281 | > 2.50556 | 50.5% | 50.0% |
| text: line character variance | 7.75744 | 3.64316 | > 9.3069 | 55.2% | 55.1% |
| text: line-initial capitals | 0.577919 | 0.583706 | ≤ 0.447222 | 50.6% | 50.1% |
| text: mean line characters | 321.424 | 326.108 | ≤ 640 | 51.6% | 48.1% |
| text: mean sentence length | 15.7084 | 15.0615 | > 14.2929 | 53.7% | 51.3% |
| text: mean word length | 3.20949 | 3.25967 | ≤ 5.53651 | 54.7% | 54.1% |
| text: nonempty lines | 3.36111 | 3.36111 | > -inf | 50.0% | 50.0% |
| text: parentheses/100w | 0.695654 | 0.617706 | > 1.34682 | 52.2% | 51.8% |
| text: question/100w | 0.193387 | 0.188742 | > 11.4296 | 50.3% | 49.9% |
| text: semicolon/100w | 0.364923 | 0.340858 | > 0.658351 | 51.7% | 51.1% |
| text: sentence length variance | 94.0528 | 37.5052 | > 50.9271 | 59.6% | 58.7% |
| text: sentences | 3.55983 | 3.76051 | ≤ 7.5 | 52.2% | 52.2% |
| text: spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| text: straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| text: straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| text: three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| text: title-case words/100w | 7.27091 | 6.9686 | > 10.1702 | 53.0% | 47.5% |
| text: words | 68.8568 | 68.1045 | > 88.5 | 51.6% | 49.4% |
| is image | 0.333333 | 0.333333 | > -inf | 50.0% | 50.0% |

## CS literatura (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0.963475 | 0.831333 | > 0.682602 | 55.8% | 53.3% |
| any em dash | 0.35 | 0.270833 | > 0.5 | 54.0% | 54.0% |
| en dash/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any en dash | 0 | 0 | > -inf | 50.0% | 50.0% |
| parentheses/100w | 0.0735294 | 0.0285612 | > 1.14513 | 52.5% | 50.0% |
| any parentheses | 0.05 | 0.0375 | > 0.5 | 50.6% | 50.0% |
| semicolon/100w | 0.690178 | 0.501081 | > 0.862133 | 56.2% | 54.4% |
| any semicolon | 0.45 | 0.3375 | > 0.5 | 55.6% | 55.6% |
| colon/100w | 0.445612 | 0.330292 | > 0.682602 | 55.0% | 52.5% |
| any colon | 0.3 | 0.2375 | > 0.5 | 53.1% | 53.1% |
| exclamation/100w | 0.921002 | 0.72615 | > 1.52681 | 55.0% | 52.5% |
| any exclamation | 0.3 | 0.245833 | > 0.5 | 52.7% | 52.7% |
| question/100w | 0.774943 | 0.754924 | > 11.4296 | 51.9% | 48.7% |
| any question | 0.1 | 0.1125 | ≤ 0.5 | 50.6% | 50.0% |
| comma/100w | 12.219 | 12.756 | > 9.5696 | 53.8% | 44.8% |
| any comma | 0.95 | 0.925 | > 0.5 | 51.2% | 51.2% |
| Czech open quote/100w | 0.24839 | 0.261157 | ≤ 0.722031 | 51.9% | 48.8% |
| any Czech open quote | 0.15 | 0.15 | > -inf | 50.0% | 48.8% |
| curly double quotes/100w | 0.24839 | 0.261157 | ≤ 0.722031 | 51.9% | 48.8% |
| any curly double quotes | 0.15 | 0.15 | > -inf | 50.0% | 48.8% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0.148515 | 0.0735916 | > 2.50556 | 52.5% | 50.0% |
| any guillemets | 0.05 | 0.0375 | > 0.5 | 50.6% | 50.0% |
| curly single quotes/apostrophes/100w | 0.0934579 | 0 | > 0.934579 | 52.5% | 50.0% |
| any curly single quotes/apostrophes | 0.05 | 0 | > 0.5 | 52.5% | 50.0% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0.0892857 | 0.0661946 | > 1.75493 | 51.2% | 50.0% |
| any ellipsis glyph | 0.05 | 0.0375 | > 0.5 | 50.6% | 50.0% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 86.8 | 86.2292 | ≤ 65.5 | 53.5% | 48.5% |
| characters | 505.25 | 480.667 | > 288 | 56.5% | 53.3% |
| nonempty lines | 9.6 | 9.6 | > -inf | 50.0% | 50.0% |
| blank lines | 1.25 | 1.25 | > -inf | 50.0% | 50.0% |
| mean word length | 4.56577 | 4.29152 | > 4.1162 | 65.8% | 54.6% |
| sentence length variance | 245.852 | 38.5383 | > 51.1905 | 69.2% | 60.2% |
| mean sentence length | 27.0538 | 23.9605 | > 55 | 57.5% | 50.0% |
| sentences | 4.65 | 4.90417 | ≤ 3.5 | 55.2% | 44.4% |
| line-initial capitals | 0.520764 | 0.552014 | ≤ 0.447222 | 53.1% | 50.6% |
| title-case words/100w | 6.80713 | 6.93764 | > 7.00877 | 56.0% | 46.7% |
| all-caps words/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| capitals ratio | 0.0152568 | 0.0169697 | ≤ 0.0112544 | 54.6% | 39.8% |
| digits/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| diacritics ratio | 0.157096 | 0.157944 | > 0.153478 | 61.5% | 44.6% |
| mean line characters | 249.087 | 240.084 | > 24.2083 | 56.9% | 54.4% |
| line character variance | 17.3 | 7.62425 | > 14.0853 | 66.0% | 59.2% |

## CS bezne (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0.100393 | 0.101446 | ≤ 0.727282 | 52.2% | 50.0% |
| any em dash | 0.133333 | 0.133333 | > -inf | 50.0% | 50.0% |
| en dash/100w | 0.179067 | 0 | > 0.390625 | 56.7% | 53.3% |
| any en dash | 0.133333 | 0 | > 0.5 | 56.7% | 56.7% |
| parentheses/100w | 1.81455 | 1.75246 | > 2.83702 | 54.2% | 50.8% |
| any parentheses | 0.6 | 0.566667 | > 0.5 | 51.7% | 51.7% |
| semicolon/100w | 0.0740741 | 0.0577396 | ≤ 1.13695 | 51.7% | 50.0% |
| any semicolon | 0.0666667 | 0.05 | > 0.5 | 50.8% | 50.0% |
| colon/100w | 0.173715 | 0.129987 | > 0.714322 | 53.3% | 51.7% |
| any colon | 0.2 | 0.15 | > 0.5 | 52.5% | 52.5% |
| exclamation/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any exclamation | 0 | 0 | > -inf | 50.0% | 50.0% |
| question/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any question | 0 | 0 | > -inf | 50.0% | 50.0% |
| comma/100w | 8.17182 | 7.47064 | > 7.78222 | 57.5% | 54.2% |
| any comma | 1 | 0.983333 | > 0.5 | 50.8% | 50.0% |
| Czech open quote/100w | 0.50396 | 0.424617 | > 1.41851 | 55.0% | 51.7% |
| any Czech open quote | 0.333333 | 0.3 | > 0.5 | 51.7% | 51.7% |
| curly double quotes/100w | 0.50396 | 0.424617 | > 1.41851 | 55.0% | 51.7% |
| any curly double quotes | 0.333333 | 0.3 | > 0.5 | 51.7% | 51.7% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any guillemets | 0 | 0 | > -inf | 50.0% | 50.0% |
| curly single quotes/apostrophes/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any curly single quotes/apostrophes | 0 | 0 | > -inf | 50.0% | 50.0% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any ellipsis glyph | 0 | 0 | > -inf | 50.0% | 50.0% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 103.533 | 100.956 | > 137.5 | 55.0% | 50.0% |
| characters | 673.8 | 677.439 | ≤ 444 | 56.1% | 48.1% |
| nonempty lines | 1 | 1 | > -inf | 50.0% | 50.0% |
| blank lines | 0 | 0 | > -inf | 50.0% | 50.0% |
| mean word length | 5.35602 | 5.54495 | ≤ 5.66548 | 64.4% | 56.9% |
| sentence length variance | 43.0061 | 34.9901 | > 17.1565 | 59.4% | 47.5% |
| mean sentence length | 16.4747 | 15.7405 | > 12.596 | 58.9% | 52.2% |
| sentences | 6.8 | 7.03333 | ≤ 11.5 | 52.8% | 49.2% |
| line-initial capitals | 1 | 1 | > -inf | 50.0% | 50.0% |
| title-case words/100w | 12.2851 | 11.3405 | > 7.09256 | 57.8% | 45.0% |
| all-caps words/100w | 0.270223 | 0.100583 | > 0.892857 | 57.8% | 54.4% |
| capitals ratio | 0.0246498 | 0.0215616 | > 0.0292619 | 61.1% | 53.3% |
| digits/100w | 6.86501 | 3.76322 | > 9.16511 | 63.3% | 58.9% |
| diacritics ratio | 0.161275 | 0.153155 | > 0.185845 | 58.9% | 47.8% |
| mean line characters | 673.8 | 677.439 | ≤ 444 | 56.1% | 48.1% |
| line character variance | 0 | 0 | > -inf | 50.0% | 50.0% |

## CS obrazky (image)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| width | 1000 | 1000 | > -inf | 50.0% | 50.0% |
| height | 830.75 | 830.75 | > -inf | 50.0% | 50.0% |
| file bytes | 120310 | 132794 | ≤ 114774 | 65.6% | 45.6% |
| bytes/pixel | 0.149866 | 0.170483 | ≤ 0.169045 | 75.0% | 71.9% |
| EXIF entries | 0 | 0 | > -inf | 50.0% | 50.0% |
| ICC bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| comment bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| RGB channels | 3 | 3 | > -inf | 50.0% | 50.0% |
| JFIF unit | 1 | 1 | > -inf | 50.0% | 50.0% |
| JFIF x density | 72 | 72 | > -inf | 50.0% | 50.0% |
| JFIF y density | 72 | 72 | > -inf | 50.0% | 50.0% |
| progressive | 1 | 1 | > -inf | 50.0% | 50.0% |
| quantization sum | 3326 | 3326 | > -inf | 50.0% | 50.0% |

## CS mixed (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0.531934 | 0.46639 | > 0.682602 | 52.9% | 51.7% |
| any em dash | 0.241667 | 0.202083 | > 0.5 | 52.0% | 52.0% |
| en dash/100w | 0.0895337 | 0 | > 0.390625 | 53.3% | 51.7% |
| any en dash | 0.0666667 | 0 | > 0.5 | 53.3% | 53.3% |
| parentheses/100w | 0.944039 | 0.890509 | > 1.21252 | 52.2% | 50.4% |
| any parentheses | 0.325 | 0.302083 | > 0.5 | 51.1% | 51.1% |
| semicolon/100w | 0.382126 | 0.27941 | > 0.862133 | 53.5% | 52.6% |
| any semicolon | 0.258333 | 0.19375 | > 0.5 | 53.2% | 53.2% |
| colon/100w | 0.309663 | 0.230139 | > 0.682602 | 53.8% | 52.5% |
| any colon | 0.25 | 0.19375 | > 0.5 | 52.8% | 52.8% |
| exclamation/100w | 0.460501 | 0.363075 | > 1.52681 | 52.5% | 51.2% |
| any exclamation | 0.15 | 0.122917 | > 0.5 | 51.4% | 51.4% |
| question/100w | 0.387471 | 0.377462 | > 11.4296 | 50.9% | 49.4% |
| any question | 0.05 | 0.05625 | ≤ 0.5 | 50.3% | 50.0% |
| comma/100w | 10.1954 | 10.1133 | > 7.78222 | 54.7% | 53.0% |
| any comma | 0.975 | 0.954167 | > 0.5 | 51.0% | 51.0% |
| Czech open quote/100w | 0.376175 | 0.342887 | > 1.41851 | 52.5% | 50.8% |
| any Czech open quote | 0.241667 | 0.225 | > 0.5 | 50.8% | 50.8% |
| curly double quotes/100w | 0.376175 | 0.342887 | > 1.41851 | 52.5% | 50.8% |
| any curly double quotes | 0.241667 | 0.225 | > 0.5 | 50.8% | 50.8% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0.0742574 | 0.0367958 | > 2.50556 | 51.3% | 50.0% |
| any guillemets | 0.025 | 0.01875 | > 0.5 | 50.3% | 50.0% |
| curly single quotes/apostrophes/100w | 0.046729 | 0 | > 0.934579 | 51.3% | 50.0% |
| any curly single quotes/apostrophes | 0.025 | 0 | > 0.5 | 51.3% | 50.0% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0.0446429 | 0.0330973 | > 1.75493 | 50.6% | 50.0% |
| any ellipsis glyph | 0.025 | 0.01875 | > 0.5 | 50.3% | 50.0% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 95.1667 | 93.5924 | > 137.5 | 53.1% | 49.7% |
| characters | 589.525 | 579.053 | > 745.5 | 53.6% | 49.0% |
| nonempty lines | 5.3 | 5.3 | > -inf | 50.0% | 50.0% |
| blank lines | 0.625 | 0.625 | > -inf | 50.0% | 50.0% |
| mean word length | 4.96089 | 4.91824 | > 4.1162 | 57.9% | 50.9% |
| sentence length variance | 144.429 | 36.7642 | > 17.1565 | 63.3% | 53.3% |
| mean sentence length | 21.7643 | 19.8505 | > 15.2679 | 55.7% | 50.4% |
| sentences | 5.725 | 5.96875 | ≤ 3.5 | 52.6% | 48.1% |
| line-initial capitals | 0.760382 | 0.776007 | ≤ 0.447222 | 51.6% | 50.3% |
| title-case words/100w | 9.54614 | 9.13909 | > 10.1702 | 56.4% | 47.5% |
| all-caps words/100w | 0.135111 | 0.0502916 | > 0.892857 | 53.9% | 52.2% |
| capitals ratio | 0.0199533 | 0.0192657 | > 0.0292619 | 55.9% | 46.7% |
| digits/100w | 3.4325 | 1.88161 | > 9.16511 | 56.7% | 54.4% |
| diacritics ratio | 0.159186 | 0.155549 | > 0.153478 | 58.6% | 58.3% |
| mean line characters | 461.444 | 458.761 | > 745.5 | 53.6% | 49.6% |
| line character variance | 8.65002 | 3.81212 | > 14.0853 | 58.0% | 54.6% |

## CS mixed (image)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| width | 1000 | 1000 | > -inf | 50.0% | 50.0% |
| height | 830.75 | 830.75 | > -inf | 50.0% | 50.0% |
| file bytes | 120310 | 132794 | ≤ 114774 | 65.6% | 45.6% |
| bytes/pixel | 0.149866 | 0.170483 | ≤ 0.169045 | 75.0% | 71.9% |
| EXIF entries | 0 | 0 | > -inf | 50.0% | 50.0% |
| ICC bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| comment bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| RGB channels | 3 | 3 | > -inf | 50.0% | 50.0% |
| JFIF unit | 1 | 1 | > -inf | 50.0% | 50.0% |
| JFIF x density | 72 | 72 | > -inf | 50.0% | 50.0% |
| JFIF y density | 72 | 72 | > -inf | 50.0% | 50.0% |
| progressive | 1 | 1 | > -inf | 50.0% | 50.0% |
| quantization sum | 3326 | 3326 | > -inf | 50.0% | 50.0% |

## CS mixed (all)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| image: EXIF entries | 0 | 0 | > inf | 50.0% | 50.0% |
| image: ICC bytes | 0 | 0 | > inf | 50.0% | 50.0% |
| image: JFIF unit | 0.333333 | 0.333333 | > -inf | 50.0% | 50.0% |
| image: JFIF x density | 24 | 24 | > -inf | 50.0% | 50.0% |
| image: JFIF y density | 24 | 24 | > -inf | 50.0% | 50.0% |
| image: RGB channels | 1 | 1 | > -inf | 50.0% | 50.0% |
| image: bytes/pixel | 0.0499554 | 0.0568276 | ≤ 0.169045 | 58.3% | 57.3% |
| image: comment bytes | 0 | 0 | > inf | 50.0% | 50.0% |
| image: file bytes | 40103.5 | 44264.5 | ≤ 114774 | 55.2% | 48.5% |
| image: height | 276.917 | 276.917 | > -inf | 50.0% | 50.0% |
| image: progressive | 0.333333 | 0.333333 | > -inf | 50.0% | 50.0% |
| image: quantization sum | 1108.67 | 1108.67 | > -inf | 50.0% | 50.0% |
| image: width | 333.333 | 333.333 | > -inf | 50.0% | 50.0% |
| text: Czech open quote/100w | 0.250783 | 0.228592 | > 1.41851 | 51.7% | 50.6% |
| text: all-caps words/100w | 0.0900743 | 0.0335277 | > 0.892857 | 52.6% | 51.5% |
| text: any Czech open quote | 0.161111 | 0.15 | > 0.5 | 50.6% | 50.6% |
| text: any colon | 0.166667 | 0.129167 | > 0.5 | 51.9% | 51.9% |
| text: any comma | 0.65 | 0.636111 | > 0.5 | 50.7% | 50.7% |
| text: any curly double quotes | 0.161111 | 0.15 | > 0.5 | 50.6% | 50.6% |
| text: any curly single quotes/apostrophes | 0.0166667 | 0 | > 0.5 | 50.8% | 50.0% |
| text: any ellipsis glyph | 0.0166667 | 0.0125 | > 0.5 | 50.2% | 50.0% |
| text: any em dash | 0.161111 | 0.134722 | > 0.5 | 51.3% | 51.3% |
| text: any en dash | 0.0444444 | 0 | > 0.5 | 52.2% | 52.2% |
| text: any exclamation | 0.1 | 0.0819444 | > 0.5 | 50.9% | 50.9% |
| text: any guillemets | 0.0166667 | 0.0125 | > 0.5 | 50.2% | 50.0% |
| text: any parentheses | 0.216667 | 0.201389 | > 0.5 | 50.8% | 50.8% |
| text: any question | 0.0333333 | 0.0375 | ≤ 0.5 | 50.2% | 50.0% |
| text: any semicolon | 0.172222 | 0.129167 | > 0.5 | 52.2% | 52.2% |
| text: any spaced dots | 0 | 0 | > inf | 50.0% | 50.0% |
| text: any straight apostrophe | 0 | 0 | > inf | 50.0% | 50.0% |
| text: any straight double quote | 0 | 0 | > inf | 50.0% | 50.0% |
| text: any three dots | 0 | 0 | > inf | 50.0% | 50.0% |
| text: blank lines | 0.416667 | 0.416667 | > -inf | 50.0% | 50.0% |
| text: capitals ratio | 0.0133022 | 0.0128438 | > 0.0292619 | 53.9% | 47.8% |
| text: characters | 393.017 | 386.035 | > 745.5 | 52.4% | 49.4% |
| text: colon/100w | 0.206442 | 0.153426 | > 0.682602 | 52.5% | 51.7% |
| text: comma/100w | 6.79694 | 6.74222 | > 7.78222 | 53.1% | 52.0% |
| text: curly double quotes/100w | 0.250783 | 0.228592 | > 1.41851 | 51.7% | 50.6% |
| text: curly single quotes/apostrophes/100w | 0.0311526 | 0 | > 0.934579 | 50.8% | 50.0% |
| text: diacritics ratio | 0.106124 | 0.103699 | > 0.153478 | 55.8% | 55.6% |
| text: digits/100w | 2.28834 | 1.25441 | > 9.16511 | 54.4% | 53.0% |
| text: ellipsis glyph/100w | 0.0297619 | 0.0220649 | > 1.75493 | 50.4% | 50.0% |
| text: em dash/100w | 0.354623 | 0.310926 | > 0.682602 | 51.9% | 51.1% |
| text: en dash/100w | 0.0596892 | 0 | > 0.390625 | 52.2% | 51.1% |
| text: exclamation/100w | 0.307001 | 0.24205 | > 1.52681 | 51.7% | 50.8% |
| text: guillemets/100w | 0.049505 | 0.0245305 | > 2.50556 | 50.8% | 50.0% |
| text: line character variance | 5.76668 | 2.54142 | > 14.0853 | 55.3% | 53.1% |
| text: line-initial capitals | 0.506921 | 0.517338 | ≤ 0.447222 | 51.0% | 50.2% |
| text: mean line characters | 307.629 | 305.841 | > 745.5 | 52.4% | 49.7% |
| text: mean sentence length | 14.5095 | 13.2337 | > 15.2679 | 53.8% | 50.3% |
| text: mean word length | 3.30726 | 3.27882 | > 4.1162 | 55.3% | 50.6% |
| text: nonempty lines | 3.53333 | 3.53333 | > -inf | 50.0% | 50.0% |
| text: parentheses/100w | 0.629359 | 0.593673 | > 1.21252 | 51.5% | 50.3% |
| text: question/100w | 0.258314 | 0.251641 | > 11.4296 | 50.6% | 49.6% |
| text: semicolon/100w | 0.254751 | 0.186274 | > 0.862133 | 52.4% | 51.7% |
| text: sentence length variance | 96.286 | 24.5095 | > 17.1565 | 58.8% | 52.2% |
| text: sentences | 3.81667 | 3.97917 | ≤ 3.5 | 51.7% | 48.7% |
| text: spaced dots/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: straight apostrophe/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: straight double quote/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: three dots/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: title-case words/100w | 6.36409 | 6.09273 | > 10.1702 | 54.3% | 48.4% |
| text: words | 63.4444 | 62.3949 | > 137.5 | 52.1% | 49.8% |
| is image | 0.333333 | 0.333333 | > -inf | 50.0% | 50.0% |

## AFTER

# Surface audit: AFTER

Fresh visitor; 50% human, 50% uniform AI per set; category weights follow the round-robin draw. Mixed text and image components are reported separately. Feature maxima are descriptive, not a held-out choice of feature. Logistic: fixed L2=0.05, 600 gradient steps, train-only scaling, LOSO by set.

| Round/component | Sets | Best fitted feature | Fit | Best CV feature | LOSO | Logistic LOSO |
|---|---:|---|---:|---|---:|---:|
| EN literature (text) | 13 | line character variance | 69.2% | words | 61.5% | 56.7% |
| EN cestina (text) | 35 | sentence length variance | 63.3% | diacritics ratio | 58.3% | 58.8% |
| EN everyday (text) | 11 | sentence length variance | 74.5% | sentence length variance | 62.7% | 73.1% |
| EN images (image) | 6 | bytes/pixel | 66.7% | width | 50.0% | 37.5% |
| EN mixed (text) | 59 | sentence length variance | 64.3% | sentence length variance | 63.6% | 60.6% |
| EN mixed (image) | 6 | bytes/pixel | 66.7% | width | 50.0% | 37.5% |
| EN mixed (all) | 65 | text: sentence length variance | 59.6% | text: sentence length variance | 59.1% | 54.3% |
| CS literatura (text) | 20 | sentence length variance | 69.2% | sentence length variance | 60.2% | 58.7% |
| CS bezne (text) | 15 | mean word length | 64.4% | digits/100w | 58.9% | 58.6% |
| CS obrazky (image) | 6 | bytes/pixel | 66.7% | width | 50.0% | 37.5% |
| CS mixed (text) | 35 | sentence length variance | 63.3% | diacritics ratio | 58.3% | 58.8% |
| CS mixed (image) | 6 | bytes/pixel | 66.7% | width | 50.0% | 37.5% |
| CS mixed (all) | 41 | text: sentence length variance | 58.8% | text: diacritics ratio | 55.6% | 54.3% |

## EN literature (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 1.23132 | 1.05938 | > 0.904996 | 56.7% | 52.9% |
| any em dash | 0.384615 | 0.307692 | > 0.5 | 53.8% | 53.8% |
| en dash/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any en dash | 0 | 0 | > -inf | 50.0% | 50.0% |
| parentheses/100w | 0.0471921 | 0.0470985 | > 0.609779 | 51.3% | 50.0% |
| any parentheses | 0.0769231 | 0.0769231 | > -inf | 50.0% | 50.0% |
| semicolon/100w | 1.37838 | 1.55269 | ≤ 3.54232 | 53.8% | 50.0% |
| any semicolon | 0.538462 | 0.519231 | > 0.5 | 51.0% | 50.0% |
| colon/100w | 0.143895 | 0.103819 | > 0.904996 | 55.8% | 51.9% |
| any colon | 0.153846 | 0.115385 | > 0.5 | 51.9% | 51.9% |
| exclamation/100w | 0.564367 | 0.53927 | > 0.809836 | 53.8% | 50.0% |
| any exclamation | 0.230769 | 0.211538 | > 0.5 | 51.0% | 50.0% |
| question/100w | 0.365998 | 0.359212 | > 2.74024 | 52.9% | 50.0% |
| any question | 0.153846 | 0.153846 | > -inf | 50.0% | 50.0% |
| comma/100w | 11.1276 | 11.7035 | ≤ 17.2309 | 55.1% | 48.1% |
| any comma | 1 | 0.980769 | > 0.5 | 51.0% | 50.0% |
| Czech open quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any Czech open quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| curly double quotes/100w | 0.252207 | 0.21137 | > 3.23934 | 53.8% | 50.0% |
| any curly double quotes | 0.0769231 | 0.0769231 | > -inf | 50.0% | 50.0% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any guillemets | 0 | 0 | > -inf | 50.0% | 50.0% |
| curly single quotes/apostrophes/100w | 2.0294 | 1.25383 | > 1.97049 | 63.8% | 52.9% |
| any curly single quotes/apostrophes | 0.692308 | 0.5 | > 0.5 | 59.6% | 59.6% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0.0739645 | 0.0535605 | > 0.911804 | 51.9% | 50.0% |
| any ellipsis glyph | 0.0769231 | 0.0576923 | > 0.5 | 51.0% | 50.0% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 94.9231 | 96.4103 | ≤ 110.5 | 61.5% | 61.5% |
| characters | 536 | 530.064 | ≤ 623 | 55.8% | 48.1% |
| nonempty lines | 10.1538 | 10.1538 | > -inf | 50.0% | 50.0% |
| blank lines | 0.769231 | 0.769231 | > -inf | 50.0% | 50.0% |
| mean word length | 4.27942 | 4.25114 | > 4.24468 | 65.7% | 60.9% |
| sentence length variance | 120.657 | 93.6583 | > 33.0694 | 66.3% | 51.9% |
| mean sentence length | 27.5423 | 31.3185 | ≤ 36.8333 | 61.2% | 50.6% |
| sentences | 3.61538 | 3.80128 | ≤ 4.5 | 57.1% | 47.1% |
| line-initial capitals | 1 | 1 | > -inf | 50.0% | 50.0% |
| title-case words/100w | 15.433 | 15.2759 | > 11.0093 | 60.9% | 47.4% |
| all-caps words/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| capitals ratio | 0.0369388 | 0.0379118 | > 0.0233145 | 60.3% | 50.0% |
| digits/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| diacritics ratio | 0 | 0 | > -inf | 50.0% | 50.0% |
| mean line characters | 128.381 | 131.538 | > 43.2679 | 57.7% | 52.9% |
| line character variance | 37.831 | 18.5366 | > 9.3069 | 69.2% | 56.7% |

## EN cestina (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0.531934 | 0.46639 | > 0.682602 | 52.9% | 51.7% |
| any em dash | 0.241667 | 0.202083 | > 0.5 | 52.0% | 52.0% |
| en dash/100w | 0.0895337 | 0 | > 0.390625 | 53.3% | 51.7% |
| any en dash | 0.0666667 | 0 | > 0.5 | 53.3% | 53.3% |
| parentheses/100w | 0.944039 | 0.890509 | > 1.21252 | 52.2% | 50.4% |
| any parentheses | 0.325 | 0.302083 | > 0.5 | 51.1% | 51.1% |
| semicolon/100w | 0.382126 | 0.27941 | > 0.862133 | 53.5% | 52.6% |
| any semicolon | 0.258333 | 0.19375 | > 0.5 | 53.2% | 53.2% |
| colon/100w | 0.309663 | 0.230139 | > 0.682602 | 53.8% | 52.5% |
| any colon | 0.25 | 0.19375 | > 0.5 | 52.8% | 52.8% |
| exclamation/100w | 0.460501 | 0.363075 | > 1.52681 | 52.5% | 51.2% |
| any exclamation | 0.15 | 0.122917 | > 0.5 | 51.4% | 51.4% |
| question/100w | 0.387471 | 0.377462 | > 11.4296 | 50.9% | 49.4% |
| any question | 0.05 | 0.05625 | ≤ 0.5 | 50.3% | 50.0% |
| comma/100w | 10.1954 | 10.1133 | > 7.78222 | 54.7% | 53.0% |
| any comma | 0.975 | 0.954167 | > 0.5 | 51.0% | 51.0% |
| Czech open quote/100w | 0.376175 | 0.342887 | > 1.41851 | 52.5% | 50.8% |
| any Czech open quote | 0.241667 | 0.225 | > 0.5 | 50.8% | 50.8% |
| curly double quotes/100w | 0.376175 | 0.342887 | > 1.41851 | 52.5% | 50.8% |
| any curly double quotes | 0.241667 | 0.225 | > 0.5 | 50.8% | 50.8% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0.0742574 | 0.0367958 | > 2.50556 | 51.3% | 50.0% |
| any guillemets | 0.025 | 0.01875 | > 0.5 | 50.3% | 50.0% |
| curly single quotes/apostrophes/100w | 0.046729 | 0 | > 0.934579 | 51.2% | 50.0% |
| any curly single quotes/apostrophes | 0.025 | 0 | > 0.5 | 51.2% | 50.0% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0.0446429 | 0.0330973 | > 1.75493 | 50.6% | 50.0% |
| any ellipsis glyph | 0.025 | 0.01875 | > 0.5 | 50.3% | 50.0% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 95.1667 | 93.5924 | > 137.5 | 53.1% | 49.7% |
| characters | 589.525 | 579.053 | > 745.5 | 53.6% | 49.0% |
| nonempty lines | 5.3 | 5.3 | > -inf | 50.0% | 50.0% |
| blank lines | 0.625 | 0.625 | > -inf | 50.0% | 50.0% |
| mean word length | 4.96089 | 4.91824 | > 4.1162 | 57.9% | 50.9% |
| sentence length variance | 144.429 | 36.7642 | > 17.1565 | 63.3% | 53.3% |
| mean sentence length | 21.7643 | 19.8505 | > 15.2679 | 55.7% | 50.4% |
| sentences | 5.725 | 5.96875 | ≤ 3.5 | 52.6% | 48.1% |
| line-initial capitals | 0.760382 | 0.776007 | ≤ 0.447222 | 51.6% | 50.3% |
| title-case words/100w | 9.54614 | 9.13909 | > 10.1702 | 56.4% | 47.5% |
| all-caps words/100w | 0.135111 | 0.0502916 | > 0.892857 | 53.9% | 52.2% |
| capitals ratio | 0.0199533 | 0.0192657 | > 0.0292619 | 55.9% | 46.7% |
| digits/100w | 3.4325 | 1.88161 | > 9.16511 | 56.7% | 54.4% |
| diacritics ratio | 0.159186 | 0.155549 | > 0.153478 | 58.6% | 58.3% |
| mean line characters | 461.444 | 458.761 | > 745.5 | 53.6% | 49.6% |
| line character variance | 8.65002 | 3.81212 | > 14.0853 | 58.0% | 54.6% |

## EN everyday (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0.373081 | 0.316084 | > 0.673408 | 56.1% | 52.7% |
| any em dash | 0.272727 | 0.215152 | > 0.5 | 52.9% | 52.9% |
| en dash/100w | 0.124121 | 0.0989831 | > 0.337838 | 55.5% | 47.3% |
| any en dash | 0.181818 | 0.0712121 | > 0.5 | 55.5% | 55.5% |
| parentheses/100w | 2.2803 | 1.88213 | > 1.34682 | 60.8% | 57.4% |
| any parentheses | 1 | 0.874242 | > 0.5 | 56.3% | 56.3% |
| semicolon/100w | 0.0614251 | 0.0363086 | > 0.658351 | 52.7% | 50.0% |
| any semicolon | 0.0909091 | 0.0545455 | > 0.5 | 51.8% | 50.0% |
| colon/100w | 0.0614251 | 0.0363086 | > 0.658351 | 52.7% | 50.0% |
| any colon | 0.0909091 | 0.0545455 | > 0.5 | 51.8% | 50.0% |
| exclamation/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any exclamation | 0 | 0 | > -inf | 50.0% | 50.0% |
| question/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any question | 0 | 0 | > -inf | 50.0% | 50.0% |
| comma/100w | 6.24662 | 5.16549 | > 6.04806 | 61.5% | 56.3% |
| any comma | 1 | 0.940909 | > 0.5 | 53.0% | 53.0% |
| Czech open quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any Czech open quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| curly double quotes/100w | 1.99319 | 1.66104 | > 2.69363 | 58.0% | 55.8% |
| any curly double quotes | 0.545455 | 0.489394 | > 0.5 | 52.8% | 52.8% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any guillemets | 0 | 0 | > -inf | 50.0% | 50.0% |
| curly single quotes/apostrophes/100w | 0.484107 | 0.26704 | > 0.844258 | 62.5% | 58.0% |
| any curly single quotes/apostrophes | 0.363636 | 0.213636 | > 0.5 | 57.5% | 57.5% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any ellipsis glyph | 0 | 0 | > -inf | 50.0% | 50.0% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 126.273 | 122.85 | > 114.5 | 56.6% | 50.0% |
| characters | 782.545 | 804.058 | ≤ 999.5 | 56.6% | 46.4% |
| nonempty lines | 1 | 1 | > -inf | 50.0% | 50.0% |
| blank lines | 0 | 0 | > -inf | 50.0% | 50.0% |
| mean word length | 4.96801 | 5.36995 | ≤ 5.2137 | 65.5% | 51.7% |
| sentence length variance | 121.151 | 66.0395 | > 96.0687 | 74.5% | 62.7% |
| mean sentence length | 23.6221 | 21.9367 | > 21.0714 | 58.4% | 48.4% |
| sentences | 5.72727 | 6.25758 | ≤ 7.5 | 56.1% | 56.1% |
| line-initial capitals | 1 | 1 | > -inf | 50.0% | 50.0% |
| title-case words/100w | 11.538 | 10.723 | ≤ 6.12273 | 66.1% | 53.4% |
| all-caps words/100w | 1.01142 | 0.368199 | > 0.652303 | 69.1% | 57.3% |
| capitals ratio | 0.0317334 | 0.0230575 | > 0.0492937 | 64.3% | 58.9% |
| digits/100w | 9.12316 | 4.9818 | > 14.8189 | 64.1% | 60.5% |
| diacritics ratio | 0 | 0 | > -inf | 50.0% | 50.0% |
| mean line characters | 782.545 | 804.058 | ≤ 999.5 | 56.6% | 46.4% |
| line character variance | 0 | 0 | > -inf | 50.0% | 50.0% |

## EN images (image)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| width | 1000 | 1000 | > -inf | 50.0% | 50.0% |
| height | 889 | 889 | ≤ -inf | 50.0% | 50.0% |
| file bytes | 130626 | 126029 | > 109711 | 62.5% | 25.0% |
| bytes/pixel | 0.154234 | 0.150102 | ≤ 0.169045 | 66.7% | 45.8% |
| EXIF entries | 0 | 0 | > -inf | 50.0% | 50.0% |
| ICC bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| comment bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| RGB channels | 3 | 3 | > -inf | 50.0% | 50.0% |
| JFIF unit | 1 | 1 | > -inf | 50.0% | 50.0% |
| JFIF x density | 72 | 72 | > -inf | 50.0% | 50.0% |
| JFIF y density | 72 | 72 | > -inf | 50.0% | 50.0% |
| progressive | 1 | 1 | > -inf | 50.0% | 50.0% |
| quantization sum | 3326 | 3326 | > -inf | 50.0% | 50.0% |

## EN mixed (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0.642376 | 0.556713 | > 0.673408 | 53.4% | 52.5% |
| any em dash | 0.277972 | 0.226651 | > 0.5 | 52.6% | 52.6% |
| en dash/100w | 0.0779104 | 0.0209387 | > 0.337838 | 53.1% | 53.1% |
| any en dash | 0.0769231 | 0.0150641 | > 0.5 | 53.1% | 53.1% |
| parentheses/100w | 1.03738 | 0.921591 | > 1.34682 | 53.3% | 52.8% |
| any parentheses | 0.414918 | 0.374913 | > 0.5 | 52.0% | 52.0% |
| semicolon/100w | 0.515004 | 0.482013 | > 0.658351 | 52.7% | 52.1% |
| any semicolon | 0.280886 | 0.230507 | > 0.5 | 52.5% | 52.5% |
| colon/100w | 0.226481 | 0.165714 | > 0.658351 | 52.8% | 52.2% |
| any colon | 0.198135 | 0.149505 | > 0.5 | 52.4% | 52.4% |
| exclamation/100w | 0.390255 | 0.326265 | > 0.809836 | 51.6% | 50.8% |
| any exclamation | 0.136364 | 0.116162 | > 0.5 | 51.0% | 51.0% |
| question/100w | 0.306922 | 0.299519 | ≤ 2.0002 | 50.6% | 49.8% |
| any question | 0.0606061 | 0.0643939 | ≤ 0.5 | 50.2% | 50.0% |
| comma/100w | 9.57319 | 9.41839 | > 7.78222 | 54.6% | 52.1% |
| any comma | 0.984848 | 0.956177 | > 0.5 | 51.4% | 51.4% |
| Czech open quote/100w | 0.220643 | 0.201624 | > 1.41851 | 51.4% | 50.5% |
| any Czech open quote | 0.141608 | 0.131993 | > 0.5 | 50.5% | 50.5% |
| curly double quotes/100w | 0.691956 | 0.594631 | > 2.69363 | 52.5% | 51.2% |
| any curly double quotes | 0.272145 | 0.25067 | > 0.5 | 51.1% | 51.1% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0.0450045 | 0.0223005 | > 2.50556 | 50.8% | 50.0% |
| any guillemets | 0.0151515 | 0.0113636 | > 0.5 | 50.2% | 50.0% |
| curly single quotes/apostrophes/100w | 0.530457 | 0.303456 | > 0.847701 | 55.9% | 55.1% |
| any curly single quotes/apostrophes | 0.228438 | 0.143677 | > 0.5 | 54.2% | 54.2% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0.041625 | 0.0306088 | > 0.911804 | 50.6% | 50.2% |
| any ellipsis glyph | 0.030303 | 0.0227273 | > 0.5 | 50.4% | 50.4% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 101.577 | 100.229 | > 137.5 | 52.6% | 49.4% |
| characters | 618.586 | 615.567 | > 561 | 53.0% | 50.6% |
| nonempty lines | 5.40909 | 5.40909 | > -inf | 50.0% | 50.0% |
| blank lines | 0.530303 | 0.530303 | > -inf | 50.0% | 50.0% |
| mean word length | 4.82241 | 4.87326 | > 4.17068 | 57.1% | 49.3% |
| sentence length variance | 136.3 | 54.1893 | > 50.9271 | 64.3% | 63.6% |
| mean sentence length | 23.3724 | 22.6105 | > 14.2929 | 55.5% | 51.9% |
| sentences | 5.29429 | 5.58741 | ≤ 7.5 | 53.0% | 53.0% |
| line-initial capitals | 0.854777 | 0.864247 | ≤ 0.447222 | 50.9% | 50.2% |
| title-case words/100w | 11.0871 | 10.6508 | > 10.1702 | 54.8% | 47.4% |
| all-caps words/100w | 0.291904 | 0.106903 | > 1.3167 | 55.9% | 53.3% |
| capitals ratio | 0.0257224 | 0.0237071 | > 0.0290458 | 55.6% | 46.7% |
| digits/100w | 3.91019 | 2.13938 | > 15.1205 | 55.1% | 52.3% |
| diacritics ratio | 0.0941265 | 0.0920409 | > 0.153478 | 55.2% | 55.0% |
| mean line characters | 460.672 | 464.166 | ≤ 605.5 | 52.4% | 48.2% |
| line character variance | 12.694 | 5.96153 | > 9.3069 | 58.5% | 58.3% |

## EN mixed (image)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| width | 1000 | 1000 | > -inf | 50.0% | 50.0% |
| height | 889 | 889 | ≤ -inf | 50.0% | 50.0% |
| file bytes | 130626 | 126029 | > 109711 | 62.5% | 25.0% |
| bytes/pixel | 0.154234 | 0.150102 | ≤ 0.169045 | 66.7% | 45.8% |
| EXIF entries | 0 | 0 | > -inf | 50.0% | 50.0% |
| ICC bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| comment bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| RGB channels | 3 | 3 | > -inf | 50.0% | 50.0% |
| JFIF unit | 1 | 1 | > -inf | 50.0% | 50.0% |
| JFIF x density | 72 | 72 | > -inf | 50.0% | 50.0% |
| JFIF y density | 72 | 72 | > -inf | 50.0% | 50.0% |
| progressive | 1 | 1 | > -inf | 50.0% | 50.0% |
| quantization sum | 3326 | 3326 | > -inf | 50.0% | 50.0% |

## EN mixed (all)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| image: EXIF entries | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| image: ICC bytes | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| image: JFIF unit | 0.333333 | 0.333333 | > 0.5 | 50.0% | 50.0% |
| image: JFIF x density | 24 | 24 | > 36 | 50.0% | 50.0% |
| image: JFIF y density | 24 | 24 | > 36 | 50.0% | 50.0% |
| image: RGB channels | 1 | 1 | > 1.5 | 50.0% | 50.0% |
| image: bytes/pixel | 0.0514114 | 0.0500341 | ≤ 0.169045 | 55.6% | 48.6% |
| image: comment bytes | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| image: file bytes | 43541.8 | 42009.6 | > 109711 | 54.2% | 41.7% |
| image: height | 296.333 | 296.333 | > 333.5 | 50.0% | 50.0% |
| image: progressive | 0.333333 | 0.333333 | > 0.5 | 50.0% | 50.0% |
| image: quantization sum | 1108.67 | 1108.67 | > 1663 | 50.0% | 50.0% |
| image: width | 333.333 | 333.333 | > 500 | 50.0% | 50.0% |
| text: Czech open quote/100w | 0.147095 | 0.134416 | > 1.41851 | 51.0% | 50.3% |
| text: all-caps words/100w | 0.194603 | 0.0712684 | > 1.3167 | 53.9% | 52.2% |
| text: any Czech open quote | 0.0944056 | 0.0879953 | > 0.5 | 50.3% | 50.3% |
| text: any colon | 0.13209 | 0.0996698 | > 0.5 | 51.6% | 51.6% |
| text: any comma | 0.656566 | 0.637451 | > 0.5 | 51.0% | 51.0% |
| text: any curly double quotes | 0.18143 | 0.167113 | > 0.5 | 50.7% | 50.7% |
| text: any curly single quotes/apostrophes | 0.152292 | 0.0957848 | > 0.5 | 52.8% | 52.8% |
| text: any ellipsis glyph | 0.020202 | 0.0151515 | > 0.5 | 50.3% | 50.3% |
| text: any em dash | 0.185315 | 0.151101 | > 0.5 | 51.7% | 51.7% |
| text: any en dash | 0.0512821 | 0.0100427 | > 0.5 | 52.1% | 52.1% |
| text: any exclamation | 0.0909091 | 0.0774411 | > 0.5 | 50.7% | 50.7% |
| text: any guillemets | 0.010101 | 0.00757576 | > 0.5 | 50.1% | 50.0% |
| text: any parentheses | 0.276612 | 0.249942 | > 0.5 | 51.3% | 51.3% |
| text: any question | 0.040404 | 0.0429293 | ≤ 0.5 | 50.1% | 50.1% |
| text: any semicolon | 0.187257 | 0.153671 | > 0.5 | 51.7% | 51.7% |
| text: any spaced dots | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| text: any straight apostrophe | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| text: any straight double quote | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| text: any three dots | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| text: blank lines | 0.353535 | 0.353535 | ≤ 0.5 | 50.0% | 50.0% |
| text: capitals ratio | 0.0171483 | 0.0158047 | > 0.0290458 | 53.7% | 47.8% |
| text: characters | 412.39 | 410.378 | > 561 | 52.0% | 50.4% |
| text: colon/100w | 0.150987 | 0.110476 | > 0.658351 | 51.9% | 51.5% |
| text: comma/100w | 6.38213 | 6.27893 | > 7.78222 | 53.1% | 51.4% |
| text: curly double quotes/100w | 0.461304 | 0.396421 | > 2.69363 | 51.7% | 50.8% |
| text: curly single quotes/apostrophes/100w | 0.353638 | 0.202304 | > 0.847701 | 53.9% | 53.4% |
| text: diacritics ratio | 0.062751 | 0.0613606 | > 0.153478 | 53.4% | 53.3% |
| text: digits/100w | 2.60679 | 1.42626 | > 15.1205 | 53.4% | 51.5% |
| text: ellipsis glyph/100w | 0.02775 | 0.0204058 | > 0.911804 | 50.4% | 50.1% |
| text: em dash/100w | 0.428251 | 0.371142 | > 0.673408 | 52.3% | 51.6% |
| text: en dash/100w | 0.0519403 | 0.0139592 | > 0.337838 | 52.1% | 52.1% |
| text: exclamation/100w | 0.26017 | 0.21751 | > 0.809836 | 51.1% | 50.5% |
| text: guillemets/100w | 0.030003 | 0.014867 | > 2.50556 | 50.5% | 50.0% |
| text: line character variance | 8.46266 | 3.97435 | > 9.3069 | 55.6% | 55.5% |
| text: line-initial capitals | 0.569851 | 0.576164 | ≤ 0.447222 | 50.6% | 50.1% |
| text: mean line characters | 307.115 | 309.444 | ≤ 605.5 | 51.6% | 48.8% |
| text: mean sentence length | 15.5816 | 15.0737 | > 14.2929 | 53.7% | 51.3% |
| text: mean word length | 3.21494 | 3.24884 | > 4.17068 | 54.8% | 49.6% |
| text: nonempty lines | 3.60606 | 3.60606 | ≤ -inf | 50.0% | 50.0% |
| text: parentheses/100w | 0.691584 | 0.614394 | > 1.34682 | 52.2% | 51.9% |
| text: question/100w | 0.204614 | 0.199679 | ≤ 2.0002 | 50.4% | 49.9% |
| text: semicolon/100w | 0.343336 | 0.321342 | > 0.658351 | 51.8% | 51.4% |
| text: sentence length variance | 90.8667 | 36.1262 | > 50.9271 | 59.6% | 59.1% |
| text: sentences | 3.52953 | 3.72494 | ≤ 7.5 | 52.0% | 52.0% |
| text: spaced dots/100w | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| text: straight apostrophe/100w | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| text: straight double quote/100w | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| text: three dots/100w | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| text: title-case words/100w | 7.39142 | 7.10056 | > 10.1702 | 53.2% | 48.3% |
| text: words | 67.7179 | 66.8195 | > 137.5 | 51.7% | 49.6% |
| is image | 0.333333 | 0.333333 | > 0.5 | 50.0% | 50.0% |

## CS literatura (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0.963475 | 0.831333 | > 0.682602 | 55.8% | 53.3% |
| any em dash | 0.35 | 0.270833 | > 0.5 | 54.0% | 54.0% |
| en dash/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any en dash | 0 | 0 | > -inf | 50.0% | 50.0% |
| parentheses/100w | 0.0735294 | 0.0285612 | > 1.14513 | 52.5% | 50.0% |
| any parentheses | 0.05 | 0.0375 | > 0.5 | 50.6% | 50.0% |
| semicolon/100w | 0.690178 | 0.501081 | > 0.862133 | 56.2% | 54.4% |
| any semicolon | 0.45 | 0.3375 | > 0.5 | 55.6% | 55.6% |
| colon/100w | 0.445612 | 0.330292 | > 0.682602 | 55.0% | 52.5% |
| any colon | 0.3 | 0.2375 | > 0.5 | 53.1% | 53.1% |
| exclamation/100w | 0.921002 | 0.72615 | > 1.52681 | 55.0% | 52.5% |
| any exclamation | 0.3 | 0.245833 | > 0.5 | 52.7% | 52.7% |
| question/100w | 0.774943 | 0.754924 | > 11.4296 | 51.9% | 48.7% |
| any question | 0.1 | 0.1125 | ≤ 0.5 | 50.6% | 50.0% |
| comma/100w | 12.219 | 12.756 | > 9.5696 | 53.8% | 44.8% |
| any comma | 0.95 | 0.925 | > 0.5 | 51.2% | 51.2% |
| Czech open quote/100w | 0.24839 | 0.261157 | ≤ 0.722031 | 51.9% | 48.8% |
| any Czech open quote | 0.15 | 0.15 | > -inf | 50.0% | 48.8% |
| curly double quotes/100w | 0.24839 | 0.261157 | ≤ 0.722031 | 51.9% | 48.8% |
| any curly double quotes | 0.15 | 0.15 | > -inf | 50.0% | 48.8% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0.148515 | 0.0735916 | > 2.50556 | 52.5% | 50.0% |
| any guillemets | 0.05 | 0.0375 | > 0.5 | 50.6% | 50.0% |
| curly single quotes/apostrophes/100w | 0.0934579 | 0 | > 0.934579 | 52.5% | 50.0% |
| any curly single quotes/apostrophes | 0.05 | 0 | > 0.5 | 52.5% | 50.0% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0.0892857 | 0.0661946 | > 1.75493 | 51.2% | 50.0% |
| any ellipsis glyph | 0.05 | 0.0375 | > 0.5 | 50.6% | 50.0% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 86.8 | 86.2292 | ≤ 65.5 | 53.5% | 48.5% |
| characters | 505.25 | 480.667 | > 288 | 56.5% | 53.3% |
| nonempty lines | 9.6 | 9.6 | > -inf | 50.0% | 50.0% |
| blank lines | 1.25 | 1.25 | > -inf | 50.0% | 50.0% |
| mean word length | 4.56577 | 4.29152 | > 4.1162 | 65.8% | 54.6% |
| sentence length variance | 245.852 | 38.5383 | > 51.1905 | 69.2% | 60.2% |
| mean sentence length | 27.0538 | 23.9605 | > 55 | 57.5% | 50.0% |
| sentences | 4.65 | 4.90417 | ≤ 3.5 | 55.2% | 44.4% |
| line-initial capitals | 0.520764 | 0.552014 | ≤ 0.447222 | 53.1% | 50.6% |
| title-case words/100w | 6.80713 | 6.93764 | > 7.00877 | 56.0% | 46.7% |
| all-caps words/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| capitals ratio | 0.0152568 | 0.0169697 | ≤ 0.0112544 | 54.6% | 39.8% |
| digits/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| diacritics ratio | 0.157096 | 0.157944 | > 0.153478 | 61.5% | 44.6% |
| mean line characters | 249.087 | 240.084 | > 24.2083 | 56.9% | 54.4% |
| line character variance | 17.3 | 7.62425 | > 14.0853 | 66.0% | 59.2% |

## CS bezne (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0.100393 | 0.101446 | ≤ 0.727282 | 52.2% | 50.0% |
| any em dash | 0.133333 | 0.133333 | > -inf | 50.0% | 50.0% |
| en dash/100w | 0.179067 | 0 | > 0.390625 | 56.7% | 53.3% |
| any en dash | 0.133333 | 0 | > 0.5 | 56.7% | 56.7% |
| parentheses/100w | 1.81455 | 1.75246 | > 2.83702 | 54.2% | 50.8% |
| any parentheses | 0.6 | 0.566667 | > 0.5 | 51.7% | 51.7% |
| semicolon/100w | 0.0740741 | 0.0577396 | ≤ 1.13695 | 51.7% | 50.0% |
| any semicolon | 0.0666667 | 0.05 | > 0.5 | 50.8% | 50.0% |
| colon/100w | 0.173715 | 0.129987 | > 0.714322 | 53.3% | 51.7% |
| any colon | 0.2 | 0.15 | > 0.5 | 52.5% | 52.5% |
| exclamation/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any exclamation | 0 | 0 | > -inf | 50.0% | 50.0% |
| question/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any question | 0 | 0 | > -inf | 50.0% | 50.0% |
| comma/100w | 8.17182 | 7.47064 | > 7.78222 | 57.5% | 54.2% |
| any comma | 1 | 0.983333 | > 0.5 | 50.8% | 50.0% |
| Czech open quote/100w | 0.50396 | 0.424617 | > 1.41851 | 55.0% | 51.7% |
| any Czech open quote | 0.333333 | 0.3 | > 0.5 | 51.7% | 51.7% |
| curly double quotes/100w | 0.50396 | 0.424617 | > 1.41851 | 55.0% | 51.7% |
| any curly double quotes | 0.333333 | 0.3 | > 0.5 | 51.7% | 51.7% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any guillemets | 0 | 0 | > -inf | 50.0% | 50.0% |
| curly single quotes/apostrophes/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any curly single quotes/apostrophes | 0 | 0 | > -inf | 50.0% | 50.0% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any ellipsis glyph | 0 | 0 | > -inf | 50.0% | 50.0% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 103.533 | 100.956 | > 137.5 | 55.0% | 50.0% |
| characters | 673.8 | 677.439 | ≤ 444 | 56.1% | 48.1% |
| nonempty lines | 1 | 1 | > -inf | 50.0% | 50.0% |
| blank lines | 0 | 0 | > -inf | 50.0% | 50.0% |
| mean word length | 5.35602 | 5.54495 | ≤ 5.66548 | 64.4% | 56.9% |
| sentence length variance | 43.0061 | 34.9901 | > 17.1565 | 59.4% | 47.5% |
| mean sentence length | 16.4747 | 15.7405 | > 12.596 | 58.9% | 52.2% |
| sentences | 6.8 | 7.03333 | ≤ 11.5 | 52.8% | 49.2% |
| line-initial capitals | 1 | 1 | > -inf | 50.0% | 50.0% |
| title-case words/100w | 12.2851 | 11.3405 | > 7.09256 | 57.8% | 45.0% |
| all-caps words/100w | 0.270223 | 0.100583 | > 0.892857 | 57.8% | 54.4% |
| capitals ratio | 0.0246498 | 0.0215616 | > 0.0292619 | 61.1% | 53.3% |
| digits/100w | 6.86501 | 3.76322 | > 9.16511 | 63.3% | 58.9% |
| diacritics ratio | 0.161275 | 0.153155 | > 0.185845 | 58.9% | 47.8% |
| mean line characters | 673.8 | 677.439 | ≤ 444 | 56.1% | 48.1% |
| line character variance | 0 | 0 | > -inf | 50.0% | 50.0% |

## CS obrazky (image)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| width | 1000 | 1000 | > inf | 50.0% | 50.0% |
| height | 889 | 889 | ≤ -inf | 50.0% | 50.0% |
| file bytes | 130626 | 126029 | > 109711 | 62.5% | 25.0% |
| bytes/pixel | 0.154234 | 0.150102 | ≤ 0.169045 | 66.7% | 45.8% |
| EXIF entries | 0 | 0 | > inf | 50.0% | 50.0% |
| ICC bytes | 0 | 0 | > inf | 50.0% | 50.0% |
| comment bytes | 0 | 0 | > inf | 50.0% | 50.0% |
| RGB channels | 3 | 3 | > inf | 50.0% | 50.0% |
| JFIF unit | 1 | 1 | > inf | 50.0% | 50.0% |
| JFIF x density | 72 | 72 | > inf | 50.0% | 50.0% |
| JFIF y density | 72 | 72 | > inf | 50.0% | 50.0% |
| progressive | 1 | 1 | > inf | 50.0% | 50.0% |
| quantization sum | 3326 | 3326 | > inf | 50.0% | 50.0% |

## CS mixed (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0.531934 | 0.46639 | > 0.682602 | 52.9% | 51.7% |
| any em dash | 0.241667 | 0.202083 | > 0.5 | 52.0% | 52.0% |
| en dash/100w | 0.0895337 | 0 | > 0.390625 | 53.3% | 51.7% |
| any en dash | 0.0666667 | 0 | > 0.5 | 53.3% | 53.3% |
| parentheses/100w | 0.944039 | 0.890509 | > 1.21252 | 52.2% | 50.4% |
| any parentheses | 0.325 | 0.302083 | > 0.5 | 51.1% | 51.1% |
| semicolon/100w | 0.382126 | 0.27941 | > 0.862133 | 53.5% | 52.6% |
| any semicolon | 0.258333 | 0.19375 | > 0.5 | 53.2% | 53.2% |
| colon/100w | 0.309663 | 0.230139 | > 0.682602 | 53.8% | 52.5% |
| any colon | 0.25 | 0.19375 | > 0.5 | 52.8% | 52.8% |
| exclamation/100w | 0.460501 | 0.363075 | > 1.52681 | 52.5% | 51.2% |
| any exclamation | 0.15 | 0.122917 | > 0.5 | 51.4% | 51.4% |
| question/100w | 0.387471 | 0.377462 | > 11.4296 | 50.9% | 49.4% |
| any question | 0.05 | 0.05625 | ≤ 0.5 | 50.3% | 50.0% |
| comma/100w | 10.1954 | 10.1133 | > 7.78222 | 54.7% | 53.0% |
| any comma | 0.975 | 0.954167 | > 0.5 | 51.0% | 51.0% |
| Czech open quote/100w | 0.376175 | 0.342887 | > 1.41851 | 52.5% | 50.8% |
| any Czech open quote | 0.241667 | 0.225 | > 0.5 | 50.8% | 50.8% |
| curly double quotes/100w | 0.376175 | 0.342887 | > 1.41851 | 52.5% | 50.8% |
| any curly double quotes | 0.241667 | 0.225 | > 0.5 | 50.8% | 50.8% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0.0742574 | 0.0367958 | > 2.50556 | 51.3% | 50.0% |
| any guillemets | 0.025 | 0.01875 | > 0.5 | 50.3% | 50.0% |
| curly single quotes/apostrophes/100w | 0.046729 | 0 | > 0.934579 | 51.3% | 50.0% |
| any curly single quotes/apostrophes | 0.025 | 0 | > 0.5 | 51.3% | 50.0% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0.0446429 | 0.0330973 | > 1.75493 | 50.6% | 50.0% |
| any ellipsis glyph | 0.025 | 0.01875 | > 0.5 | 50.3% | 50.0% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 95.1667 | 93.5924 | > 137.5 | 53.1% | 49.7% |
| characters | 589.525 | 579.053 | > 745.5 | 53.6% | 49.0% |
| nonempty lines | 5.3 | 5.3 | > -inf | 50.0% | 50.0% |
| blank lines | 0.625 | 0.625 | > -inf | 50.0% | 50.0% |
| mean word length | 4.96089 | 4.91824 | > 4.1162 | 57.9% | 50.9% |
| sentence length variance | 144.429 | 36.7642 | > 17.1565 | 63.3% | 53.3% |
| mean sentence length | 21.7643 | 19.8505 | > 15.2679 | 55.7% | 50.4% |
| sentences | 5.725 | 5.96875 | ≤ 3.5 | 52.6% | 48.1% |
| line-initial capitals | 0.760382 | 0.776007 | ≤ 0.447222 | 51.6% | 50.3% |
| title-case words/100w | 9.54614 | 9.13909 | > 10.1702 | 56.4% | 47.5% |
| all-caps words/100w | 0.135111 | 0.0502916 | > 0.892857 | 53.9% | 52.2% |
| capitals ratio | 0.0199533 | 0.0192657 | > 0.0292619 | 55.9% | 46.7% |
| digits/100w | 3.4325 | 1.88161 | > 9.16511 | 56.7% | 54.4% |
| diacritics ratio | 0.159186 | 0.155549 | > 0.153478 | 58.6% | 58.3% |
| mean line characters | 461.444 | 458.761 | > 745.5 | 53.6% | 49.6% |
| line character variance | 8.65002 | 3.81212 | > 14.0853 | 58.0% | 54.6% |

## CS mixed (image)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| width | 1000 | 1000 | > inf | 50.0% | 50.0% |
| height | 889 | 889 | ≤ -inf | 50.0% | 50.0% |
| file bytes | 130626 | 126029 | > 109711 | 62.5% | 25.0% |
| bytes/pixel | 0.154234 | 0.150102 | ≤ 0.169045 | 66.7% | 45.8% |
| EXIF entries | 0 | 0 | > inf | 50.0% | 50.0% |
| ICC bytes | 0 | 0 | > inf | 50.0% | 50.0% |
| comment bytes | 0 | 0 | > inf | 50.0% | 50.0% |
| RGB channels | 3 | 3 | > inf | 50.0% | 50.0% |
| JFIF unit | 1 | 1 | > inf | 50.0% | 50.0% |
| JFIF x density | 72 | 72 | > inf | 50.0% | 50.0% |
| JFIF y density | 72 | 72 | > inf | 50.0% | 50.0% |
| progressive | 1 | 1 | > inf | 50.0% | 50.0% |
| quantization sum | 3326 | 3326 | > inf | 50.0% | 50.0% |

## CS mixed (all)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| image: EXIF entries | 0 | 0 | > inf | 50.0% | 50.0% |
| image: ICC bytes | 0 | 0 | > inf | 50.0% | 50.0% |
| image: JFIF unit | 0.333333 | 0.333333 | > -inf | 50.0% | 50.0% |
| image: JFIF x density | 24 | 24 | > -inf | 50.0% | 50.0% |
| image: JFIF y density | 24 | 24 | > -inf | 50.0% | 50.0% |
| image: RGB channels | 1 | 1 | > -inf | 50.0% | 50.0% |
| image: bytes/pixel | 0.0514114 | 0.0500341 | ≤ 0.169045 | 55.6% | 48.6% |
| image: comment bytes | 0 | 0 | > inf | 50.0% | 50.0% |
| image: file bytes | 43541.8 | 42009.6 | > 109711 | 54.2% | 40.3% |
| image: height | 296.333 | 296.333 | > -inf | 50.0% | 50.0% |
| image: progressive | 0.333333 | 0.333333 | > -inf | 50.0% | 50.0% |
| image: quantization sum | 1108.67 | 1108.67 | > -inf | 50.0% | 50.0% |
| image: width | 333.333 | 333.333 | > -inf | 50.0% | 50.0% |
| text: Czech open quote/100w | 0.250783 | 0.228592 | > 1.41851 | 51.7% | 50.6% |
| text: all-caps words/100w | 0.0900743 | 0.0335277 | > 0.892857 | 52.6% | 51.5% |
| text: any Czech open quote | 0.161111 | 0.15 | > 0.5 | 50.6% | 50.6% |
| text: any colon | 0.166667 | 0.129167 | > 0.5 | 51.9% | 51.9% |
| text: any comma | 0.65 | 0.636111 | > 0.5 | 50.7% | 50.7% |
| text: any curly double quotes | 0.161111 | 0.15 | > 0.5 | 50.6% | 50.6% |
| text: any curly single quotes/apostrophes | 0.0166667 | 0 | > 0.5 | 50.8% | 50.0% |
| text: any ellipsis glyph | 0.0166667 | 0.0125 | > 0.5 | 50.2% | 50.0% |
| text: any em dash | 0.161111 | 0.134722 | > 0.5 | 51.3% | 51.3% |
| text: any en dash | 0.0444444 | 0 | > 0.5 | 52.2% | 52.2% |
| text: any exclamation | 0.1 | 0.0819444 | > 0.5 | 50.9% | 50.9% |
| text: any guillemets | 0.0166667 | 0.0125 | > 0.5 | 50.2% | 50.0% |
| text: any parentheses | 0.216667 | 0.201389 | > 0.5 | 50.8% | 50.8% |
| text: any question | 0.0333333 | 0.0375 | ≤ 0.5 | 50.2% | 50.0% |
| text: any semicolon | 0.172222 | 0.129167 | > 0.5 | 52.2% | 52.2% |
| text: any spaced dots | 0 | 0 | > inf | 50.0% | 50.0% |
| text: any straight apostrophe | 0 | 0 | > inf | 50.0% | 50.0% |
| text: any straight double quote | 0 | 0 | > inf | 50.0% | 50.0% |
| text: any three dots | 0 | 0 | > inf | 50.0% | 50.0% |
| text: blank lines | 0.416667 | 0.416667 | > -inf | 50.0% | 50.0% |
| text: capitals ratio | 0.0133022 | 0.0128438 | > 0.0292619 | 53.9% | 47.8% |
| text: characters | 393.017 | 386.035 | > 745.5 | 52.4% | 49.4% |
| text: colon/100w | 0.206442 | 0.153426 | > 0.682602 | 52.5% | 51.7% |
| text: comma/100w | 6.79694 | 6.74222 | > 7.78222 | 53.1% | 52.0% |
| text: curly double quotes/100w | 0.250783 | 0.228592 | > 1.41851 | 51.7% | 50.6% |
| text: curly single quotes/apostrophes/100w | 0.0311526 | 0 | > 0.934579 | 50.8% | 50.0% |
| text: diacritics ratio | 0.106124 | 0.103699 | > 0.153478 | 55.8% | 55.6% |
| text: digits/100w | 2.28834 | 1.25441 | > 9.16511 | 54.4% | 53.0% |
| text: ellipsis glyph/100w | 0.0297619 | 0.0220649 | > 1.75493 | 50.4% | 50.0% |
| text: em dash/100w | 0.354623 | 0.310926 | > 0.682602 | 51.9% | 51.1% |
| text: en dash/100w | 0.0596892 | 0 | > 0.390625 | 52.2% | 51.1% |
| text: exclamation/100w | 0.307001 | 0.24205 | > 1.52681 | 51.7% | 50.8% |
| text: guillemets/100w | 0.049505 | 0.0245305 | > 2.50556 | 50.8% | 50.0% |
| text: line character variance | 5.76668 | 2.54142 | > 14.0853 | 55.3% | 53.1% |
| text: line-initial capitals | 0.506921 | 0.517338 | ≤ 0.447222 | 51.0% | 50.2% |
| text: mean line characters | 307.629 | 305.841 | > 745.5 | 52.4% | 49.7% |
| text: mean sentence length | 14.5095 | 13.2337 | > 15.2679 | 53.8% | 50.3% |
| text: mean word length | 3.30726 | 3.27882 | > 4.1162 | 55.3% | 50.6% |
| text: nonempty lines | 3.53333 | 3.53333 | > -inf | 50.0% | 50.0% |
| text: parentheses/100w | 0.629359 | 0.593673 | > 1.21252 | 51.5% | 50.3% |
| text: question/100w | 0.258314 | 0.251641 | > 11.4296 | 50.6% | 49.6% |
| text: semicolon/100w | 0.254751 | 0.186274 | > 0.862133 | 52.4% | 51.7% |
| text: sentence length variance | 96.286 | 24.5095 | > 17.1565 | 58.8% | 52.2% |
| text: sentences | 3.81667 | 3.97917 | ≤ 3.5 | 51.7% | 48.7% |
| text: spaced dots/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: straight apostrophe/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: straight double quote/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: three dots/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: title-case words/100w | 6.36409 | 6.09273 | > 10.1702 | 54.3% | 48.4% |
| text: words | 63.4444 | 62.3949 | > 137.5 | 52.1% | 49.8% |
| is image | 0.333333 | 0.333333 | > -inf | 50.0% | 50.0% |
