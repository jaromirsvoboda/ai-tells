# Quiz image integration, 2 November 2026

Four early-CGI sets were removed from both builds by owner decision. Procedural Terragen/Bryce renders labelled human tested the meaning of the label. The WPA Yellowstone poster set was restored from `3db025f`. The current pool has 35 image sets and 72 pictures in each build; all work is uncommitted and confined to quiz/ and tests/. No network calls, staging, commits, stashes or pushes were made.

| Build | Sets | Items | Human | AI | Image sets | Images |
|---|---:|---:|---:|---:|---:|---:|
| EN | 114 | 465 | 114 | 351 | 35 | 72 |
| CS | 90 | 343 | 90 | 253 | 35 | 72 |

Image sets by pool: photo 10; photo2 13; art 3; art2 8; restored WPA poster 1. Pictures: 35 human and 37 AI. The raven and Yellowstone sets each contain three pictures. Both builds use the same image sets and media, with translated contexts, alt text and reveal notes.

| Action | Set | Subject | Media |
|---|---|---|---|
| Removed | `sf78403` | art-cgi-evening-lake | `4bba16977df7.jpg`, `b5807c4c56a8.jpg` |
| Removed | `s259dae` | art-cgi-green-sea | `81ba0e515742.jpg`, `efdc15a7625a.jpg` |
| Removed | `s5650ca` | art-cgi-inlet | `4ba3595d7148.jpg`, `436bdc5bfe0a.jpg` |
| Removed | `sd212c9` | art-cgi-ocean-planet | `e0cd89d39cce.jpg`, `7f67f4cdbc50.jpg` |
| Restored | `s34d252` | WPA Yellowstone poster | `8f451deeda09.jpg`, `9a1bbf97f3a9.jpg`, `b88324c9b42b.jpg` |

The restored set records, member order, item IDs, alt text and complete reveal records match `3db025f`, except for trailing spaces in the final `_` field. All three restored JPEGs are byte-identical to that commit. EN IDs: human `5e2ea2ec`; AI `fb1bf674`, `2fba669d`. CS IDs: human `53f35153`; AI `39e884f5`, `85fb7f3b`.

The restored records fit within the existing common lengths: 4,560 decoded bytes in EN and 4,656 in CS. Their padding was recomputed to those lengths. The longest unpadded records remain text items (3,879 bytes EN and 4,012 CS), so no text record needed repadding. All remaining sets and items are unchanged, including their padded text payloads and original JSON bytes.

Both CREDITS.md files were regenerated in the previous integration’s per-set/per-member structure: source, exact prompt, prompt-route disclosure when present, and selection. Regenerated retained image sections were checked byte for byte against the previous output; text credit sections were preserved byte for byte. The previous integration did not retain a generator script in the repository; its structure was reproduced and checked against all retained sections. The headers now distinguish the 34 screened candidate pool sets from the separately restored posters.

The [pool manifest](quiz-image-pool.json) records all current set IDs, item IDs, media SHA256 values and the five later crop boxes. The restored entry records its source commit. Previous exclusion decisions for four David Revoy sets, the Dutch digital portrait and the woodcutter drawing remain in effect.

## Crops

The previous integration visually inspected all 15 human art candidates, including enlarged corners. Four of those CGI sets have now been removed. Five pairs were reprocessed from their supplied human source JPEG and selected AI generation. Both sources received the original centre crop to the shared aspect, followed by the same proportional inset on every edge. Original output dimensions were retained, with RGB baseline JPEG quality 82, 4:2:0 sampling, 72dpi, stripped metadata and equal zero-padded file lengths within each pair. No signature was added.

| Set | Removed | Inset on each edge | Output | Human source crop (left, top, right, bottom) | AI source crop | Bytes per member |
|---|---|---:|---|---|---|---:|
| art2-autumn-park | border edge | 2% | 1200 × 818 | [26, 17, 1253, 855] | [30, 44, 1454, 1016] | 214873 |
| art2-boulevard-night | signature | 6% | 1200 × 825 | [77, 53, 1203, 827] | [91, 64, 1419, 978] | 357474 |
| art2-cathedral-market | signature | 9% | 512 × 349 | [46, 31, 466, 318] | [139, 93, 1382, 941] | 55940 |
| art2-dusk-fields | gallery-photo border | 4% | 496 × 448 | [20, 18, 476, 430] | [50, 105, 1204, 1148] | 27229 |
| art2-snow-square | signature | 10% | 512 × 392 | [51, 39, 461, 353] | [141, 124, 1271, 989] | 41534 |

The three signatures were on the boulevard, cathedral-market and snowy-square pictures. The source records credit Konstantin Korovin for the boulevard and Eugène Galien-Laloue for both snowy street scenes. The panel’s Hervé attribution was not copied. The woodland oil is credited by its supplied source to Bohuslav Dvořák; no visible N. Diaz signature was found in its JPEG, including the enlarged corners. The drawn border and lettering in the school illustration are part of the illustration, rather than a photographed frame.

The five cropped pairs received visual review after processing. Their local-model and frontier-model checks preceded the crops. No new model judgement is claimed; the records, About and fairness report disclose this limit.

## About and round copy, verbatim diffs

About changes include both build counts, 35 available image sets, posters in the source list, selection limits for the restored set and its original compression processing. The English image fairness rows now name file size; all CV image features still tie at 50.0%. The Czech rows already name the first measured CV maximum, width, so their labels and values remain correct.

### EN About

```diff
--- EN About before
+++ EN About after
@@ -2 +2 @@
-<p class="lede">The quiz has 470 items in 117 matched sets: 117 made by people and 353 made by AI. Each set groups one human text or picture with AI work of the same kind.</p>
+<p class="lede">The quiz has 465 items in 114 matched sets: 114 made by people and 351 made by AI. Each set groups one human text or picture with AI work of the same kind.</p>
@@ -19 +19 @@
-<p>The human pictures are public-domain works or carry Creative Commons licences. They include photographs of people, streets, animals, interiors and still lifes, Impressionist street scenes and landscapes, early computer graphics, drawings and engravings. Every human photograph has a file revision from before 2022. Sources, attribution and licence links are listed in <a href="CREDITS.md">CREDITS.md</a>.</p>
+<p>The human pictures are public-domain works or carry Creative Commons licences. They include photographs of people, streets, animals, interiors and still lifes, Impressionist street scenes and landscapes, posters, drawings and engravings. Every human photograph has a file revision from before 2022. Sources, attribution and licence links are listed in <a href="CREDITS.md">CREDITS.md</a>.</p>
@@ -21,2 +21,2 @@
-<p>We kept image sets that passed a blind screen by a local Qwen model and review by two frontier models judging pictures blind. Across all 81 candidate pictures, Codex gpt-6.1-sol identified 9 of 41 AI pictures and wrongly called 12 of 40 human pictures AI, while Gemini 3.8 Flash identified 2 of 41 and wrongly called 14 of 40. These results guided selection; they do not measure how well people will do.</p>
-<p>Pictures in each set share the same size, crop rule and JPEG compression settings, with metadata removed and files padded to the same byte length. Some generated art was matched to the human picture’s paper colour; the reveals describe the processing. Visible painter signatures and photographed border edges were cropped out, with the same crop applied to the AI partner. The blind model checks preceded those crops; the cropped versions received a visual check.</p>
+<p>The 34 sets retained from the candidate pool passed a blind screen by a local Qwen model and review by two frontier models judging pictures blind. Across all 81 candidate pictures, Codex gpt-6.1-sol identified 9 of 41 AI pictures and wrongly called 12 of 40 human pictures AI, while Gemini 3.8 Flash identified 2 of 41 and wrongly called 14 of 40. These results guided selection; they do not measure how well people will do. The restored WPA Yellowstone poster set was selected separately and was not part of those checks.</p>
+<p>The 34 sets from the candidate pool share the same size, crop rule and JPEG compression settings within each set, with metadata removed and files padded to the same byte length. The restored posters retain their earlier processing: matching dimensions and stripped metadata, with compression quality adjusted per picture to bring file sizes closer. Some generated art was matched to the human picture’s paper colour; the reveals describe the processing. Visible painter signatures and photographed border edges were cropped out, with the same crop applied to the AI partner. The blind model checks preceded those crops; the cropped versions received a visual check.</p>
@@ -39 +39 @@
-<tr><td>Images</td><td>Width (tied at chance)</td><td class="num">50.0 %</td><td class="num">50.0 %</td></tr>
+<tr><td>Images</td><td>File size (tied at chance)</td><td class="num">50.0 %</td><td class="num">50.0 %</td></tr>
@@ -41 +41 @@
-<tr><td>Mixed: images only</td><td>Width (tied at chance)</td><td class="num">50.0 %</td><td class="num">50.0 %</td></tr>
+<tr><td>Mixed: images only</td><td>File size (tied at chance)</td><td class="num">50.0 %</td><td class="num">50.0 %</td></tr>
@@ -45 +45 @@
-<p>Earlier exclusions include seven AI images from Commons that looked obviously generated, the Austen <em>Persuasion</em>, Conrad <em>Heart of Darkness</em> and Dickens <em>Great Expectations</em> sets with mismatched apostrophe use, and Achenbach’s shipwreck and Ender’s sleigh with different compressed sizes. The image round draws up to 12 of the 38 image sets. No items were removed or rewritten in response to the measurements above. The <a href="fairness.md">fairness report</a> gives the method and results for both languages, with a link to every measured feature.</p>
+<p>Earlier exclusions include seven AI images from Commons that looked obviously generated, the Austen <em>Persuasion</em>, Conrad <em>Heart of Darkness</em> and Dickens <em>Great Expectations</em> sets with mismatched apostrophe use, and Achenbach’s shipwreck and Ender’s sleigh with different compressed sizes. The image round draws up to 12 of the 35 image sets. No items were removed or rewritten in response to the measurements above. The <a href="fairness.md">fairness report</a> gives the method and results for both languages, with a link to every measured feature.</p>
```

### EN image round blurb

```diff
-Photographs of people, streets, animals, interiors and still lifes; Impressionist streets and landscapes; early CGI; drawings and engravings. Human or AI?
+Photographs of people, streets, animals, interiors and still lifes; Impressionist streets and landscapes; posters, drawings and engravings. Human or AI?
```

### CS About

```diff
--- CS About before
+++ CS About after
@@ -2 +2 @@
-<p class="lede">Kvíz má 348 položek v 93 sadách: 93 od lidí a 255 od AI. Každá sada spojuje jeden lidský text nebo obrázek s výtvory AI stejného druhu.</p>
+<p class="lede">Kvíz má 343 položek v 90 sadách: 90 od lidí a 253 od AI. Každá sada spojuje jeden lidský text nebo obrázek s výtvory AI stejného druhu.</p>
@@ -18 +18 @@
-<p>Lidské obrázky jsou volná díla nebo mají licenci Creative Commons. Najdete tu fotografie lidí, ulic, zvířat, interiérů a zátiší, impresionistické pouliční scény a krajiny, ranou počítačovou grafiku, kresby a rytiny. Každá lidská fotografie má doloženou verzi souboru z doby před rokem 2022. Zdroje, autorství a odkazy na licence uvádíme v <a href="CREDITS.md">CREDITS.md</a>.</p>
+<p>Lidské obrázky jsou volná díla nebo mají licenci Creative Commons. Najdete tu fotografie lidí, ulic, zvířat, interiérů a zátiší, impresionistické pouliční scény a krajiny, plakáty, kresby a rytiny. Každá lidská fotografie má doloženou verzi souboru z doby před rokem 2022. Zdroje, autorství a odkazy na licence uvádíme v <a href="CREDITS.md">CREDITS.md</a>.</p>
@@ -20,2 +20,2 @@
-<p>Ponechali jsme obrazové sady, které prošly slepou kontrolou místním modelem Qwen a posouzením dvěma špičkovými modely, které neznaly původ obrázků. Ze všech 81 kandidátních obrázků Codex gpt-6.1-sol rozpoznal 9 ze 41 výtvorů AI a mylně označil za AI 12 ze 40 lidských obrázků, zatímco Gemini 3.8 Flash rozpoznal 2 ze 41 a mylně označil 14 ze 40. Podle těchto výsledků jsme vybírali – neříkají, jak úspěšní budou lidé.</p>
-<p>Obrázky v sadě mají stejnou velikost, pravidlo ořezu a nastavení komprese JPEG; metadata jsme odstranili a soubory doplnili na stejný počet bajtů. U některých výtvarných obrázků od AI jsme barvu přizpůsobili papíru lidské předlohy; postup popisujeme po odpovědi. Viditelné podpisy malířů a vyfotografované okraje rámů jsme ořízli a stejný ořez použili u protějšku od AI. Slepé kontroly modely proběhly před těmito ořezy; oříznuté verze jsme zkontrolovali vizuálně.</p>
+<p>Z kandidátního souboru jsme ponechali 34 sad, které prošly slepou kontrolou místním modelem Qwen a posouzením dvěma špičkovými modely, které neznaly původ obrázků. Ze všech 81 kandidátních obrázků Codex gpt-6.1-sol rozpoznal 9 ze 41 výtvorů AI a mylně označil za AI 12 ze 40 lidských obrázků, zatímco Gemini 3.8 Flash rozpoznal 2 ze 41 a mylně označil 14 ze 40. Podle těchto výsledků jsme vybírali – neříkají, jak úspěšní budou lidé. Obnovenou sadu plakátu WPA z Yellowstonu jsme vybrali samostatně; těmito kontrolami neprošla.</p>
+<p>Ve 34 sadách z kandidátního souboru mají obrázky v každé sadě stejnou velikost, pravidlo ořezu a nastavení komprese JPEG; metadata jsme odstranili a soubory doplnili na stejný počet bajtů. Obnovené plakáty si ponechaly dřívější zpracování: stejné rozměry a odstraněná metadata, s kvalitou komprese upravenou u každého obrázku tak, aby si velikosti souborů byly bližší. U některých výtvarných obrázků od AI jsme barvu přizpůsobili papíru lidské předlohy; postup popisujeme po odpovědi. Viditelné podpisy malířů a vyfotografované okraje rámů jsme ořízli a stejný ořez použili u protějšku od AI. Slepé kontroly modely proběhly před těmito ořezy; oříznuté verze jsme zkontrolovali vizuálně.</p>
@@ -43 +43 @@
-<p>Dříve jsme vyřadili sedm obrázků od AI z Commons, které na první pohled vypadaly uměle, sady s díly Austenové (<em>Persuasion</em>), Conrada (<em>Heart of Darkness</em>) a Dickense (<em>Great Expectations</em>) s rozdílným užíváním apostrofů a Achenbachovo ztroskotání s Enderovými saněmi kvůli rozdílné velikosti komprimovaných souborů. Obrazové kolo vybírá nejvýš 12 z 38 obrazových sad. Kvůli výše uvedeným měřením jsme žádné položky nevyřadili ani nepřepisovali. <a href="../fairness.md">Zpráva o férovosti (anglicky)</a> popisuje postup a výsledky obou jazyků a odkazuje na měření všech znaků.</p>
+<p>Dříve jsme vyřadili sedm obrázků od AI z Commons, které na první pohled vypadaly uměle, sady s díly Austenové (<em>Persuasion</em>), Conrada (<em>Heart of Darkness</em>) a Dickense (<em>Great Expectations</em>) s rozdílným užíváním apostrofů a Achenbachovo ztroskotání s Enderovými saněmi kvůli rozdílné velikosti komprimovaných souborů. Obrazové kolo vybírá nejvýš 12 z 35 obrazových sad. Kvůli výše uvedeným měřením jsme žádné položky nevyřadili ani nepřepisovali. <a href="../fairness.md">Zpráva o férovosti (anglicky)</a> popisuje postup a výsledky obou jazyků a odkazuje na měření všech znaků.</p>
```

### CS image round blurb

```diff
-Fotografie lidí, ulic, zvířat, interiérů a zátiší; impresionistické ulice a krajiny; raná počítačová grafika; kresby a rytiny. Od člověka, nebo od AI?
+Fotografie lidí, ulic, zvířat, interiérů a zátiší; impresionistické ulice a krajiny; plakáty, kresby a rytiny. Od člověka, nebo od AI?
```

## Surface audit

Executed offline with a worktree-local copy of cached NumPy and Pillow wheels and one BLAS thread. No dependency was downloaded. The initial cache preparation omitted uv’s index metadata; that invocation failed before the audit started. Copying the existing simple-index metadata into the local cache resolved it.

```sh
UV_OFFLINE=1 UV_PYTHON_DOWNLOADS=never UV_CACHE_DIR="$PWD/tests/.quiz-cgi-work/uv-cache" UV_LINK_MODE=copy OPENBLAS_NUM_THREADS=1 uv run --with numpy --with pillow python3 tests/surface_audit.py --output tests/.quiz-cgi-work/surface-final
```

Exit 0. Full output is retained as [surface-cgi-yellowstone.md](surface-cgi-yellowstone.md) and [surface-cgi-yellowstone.json](surface-cgi-yellowstone.json). The temporary cache and scratch scripts were removed after verification.

Exact audit summary lines:

```text
EN literature (text): 13 sets; fit 75.0% (mean word length); CV 63.5% (mean word length); logistic 54.8%
EN cestina (text): 55 sets; fit 60.9% (mean word length); CV 59.6% (mean word length); logistic 58.9%
EN everyday (text): 11 sets; fit 69.3% (sentence length variance); CV 61.1% (title-case words/100w); logistic 63.6%
EN images (image): 35 sets; fit 51.4% (file bytes); CV 50.0% (file bytes); logistic 50.0%
EN mixed (text): 79 sets; fit 58.1% (sentence length variance); CV 58.1% (mean word length); logistic 59.5%
EN mixed (image): 35 sets; fit 51.4% (file bytes); CV 50.0% (file bytes); logistic 50.0%
EN mixed (all): 114 sets; fit 55.4% (text: sentence length variance); CV 55.4% (text: mean word length); logistic 50.7%
CS literatura (text): 40 sets; fit 63.8% (mean word length); CV 61.3% (sentence length variance); logistic 69.6%
CS bezne (text): 15 sets; fit 65.8% (diacritics ratio); CV 61.7% (title-case words/100w); logistic 50.8%
CS obrazky (image): 35 sets; fit 51.4% (bytes/pixel); CV 50.0% (width); logistic 50.0%
CS mixed (text): 55 sets; fit 60.9% (mean word length); CV 59.6% (mean word length); logistic 58.9%
CS mixed (image): 35 sets; fit 51.4% (bytes/pixel); CV 50.0% (width); logistic 50.0%
CS mixed (all): 90 sets; fit 57.3% (text: mean word length); CV 56.4% (text: mean word length); logistic 52.0%
```

| Round/component | Sets | Best fitted feature | Fit | Best CV feature | LOSO | Logistic LOSO |
|---|---:|---|---:|---|---:|---:|
| EN literature (text) | 13 | mean word length | 75.0% | mean word length | 63.5% | 54.8% |
| EN cestina (text) | 55 | mean word length | 60.9% | mean word length | 59.6% | 58.9% |
| EN everyday (text) | 11 | sentence length variance | 69.3% | title-case words/100w | 61.1% | 63.6% |
| EN images (image) | 35 | file bytes | 51.4% | file bytes | 50.0% | 50.0% |
| EN mixed (text) | 79 | sentence length variance | 58.1% | mean word length | 58.1% | 59.5% |
| EN mixed (image) | 35 | file bytes | 51.4% | file bytes | 50.0% | 50.0% |
| EN mixed (all) | 114 | text: sentence length variance | 55.4% | text: mean word length | 55.4% | 50.7% |
| CS literatura (text) | 40 | mean word length | 63.8% | sentence length variance | 61.3% | 69.6% |
| CS bezne (text) | 15 | diacritics ratio | 65.8% | title-case words/100w | 61.7% | 50.8% |
| CS obrazky (image) | 35 | bytes/pixel | 51.4% | width | 50.0% | 50.0% |
| CS mixed (text) | 55 | mean word length | 60.9% | mean word length | 59.6% | 58.9% |
| CS mixed (image) | 35 | bytes/pixel | 51.4% | width | 50.0% | 50.0% |
| CS mixed (all) | 90 | text: mean word length | 57.3% | text: mean word length | 56.4% | 52.0% |

All measured image features and the combined image model score 50.0% LOSO. File size, bytes per pixel and quantisation sum each reach 51.4% fitted accuracy. No image feature exceeds 62% LOSO. The 34 candidate pool sets retain equal dimensions, encoding properties and file lengths within each set. The restored posters retain their earlier differences, as required:

```text
Yellowstone ai b88324c9b42b.jpg: 800x1200, 177441 bytes, quantization sum 4065
Yellowstone human 8f451deeda09.jpg: 800x1200, 175469 bytes, quantization sum 2775
Yellowstone ai 9a1bbf97f3a9.jpg: 800x1200, 178318 bytes, quantization sum 3698
```

All text measurements are unchanged within floating-point tolerance. Mixed all-item logistic LOSO remains 50.7% EN and 52.0% CS. The three existing text results above 62% remain disclosed. The image audit measures file properties, not visible content or human accuracy.

## Checks

The requested checks and final Git evidence follow below. The scratch update initially stopped on the raven’s extra prompt-route disclosure while verifying regenerated credits; the generator was corrected to preserve that field and all retained sections then matched. A data check during that partial update failed on media still referenced by the untranslated CS build. After both builds were updated, all final integrity and preservation checks passed.

Playwright was not run: the brief states it cannot run in this sandbox. No browser-rendering or human-playtest result is claimed. No new model calls were made; the restored posters were not added to the earlier blind screens, and the five cropped pairs have not been screened again.

The new copy was checked against writing.md. Exact restored records, quoted source names and prompts retain their original wording. Existing em dashes in retained English source text were preserved.

Open doubts: browser rendering and human performance remain unmeasured; the five later crops and the separately restored Yellowstone set have no new blind model check. There are no missing or unreferenced media, unresolved integrity failures or additional quote-audit failures.

Next verification command: `python3 tests/quiz_data_check.py`.

`python3 tests/quiz_data_check.py`: exit 0.

```text
EN: 114 sets, 465 items (114 human, 351 AI); 4560 decoded bytes per record; 72 images
CS: 90 sets, 343 items (90 human, 253 AI); 4656 decoded bytes per record; 72 images
Data integrity: PASS (0 errors)
```

`python3 tests/quiz_data_check.py --quotes`: exit 1. Data integrity passes; the same 21 text-note findings remain. The findings were compared with the baseline and no entry changed.

```text
EN: 114 sets, 465 items (114 human, 351 AI); 4560 decoded bytes per record; 72 images
CS: 90 sets, 343 items (90 human, 253 AI); 4656 decoded bytes per record; 72 images
Data integrity: PASS (0 errors)
Note quote audit: FAIL (21 nonliteral quotes)
EN 0953377a, note 2: His performance against AlphaGo was highly praised and he was praised
EN 17327036, note 1: the low hoarse purr
EN 36072a7f, note 2: Convert handwritten signatures into digital form
EN 7a6047da, note 1: Don’t have the food storage for long storage
EN 7a6047da, note 2: If the pepper is green, it’s not ripe
EN 81bb647c, note 1: Development (and later criticism) of the null pointer
EN 93ac4fec, note 2: Numerous awards and honors
EN a5b4d1f3, note 2: The service personnel does not rely on tips
EN accfbf5d, note 1: Another
EN b0a48440, note 2: Played an integral role
EN ba55a866, note 1: Flat and flabby
EN c482c21e, note 1: A generally easier task as there are more clues available
EN c482c21e, note 2: A pen-based computer screen surface
EN c868efaf, note 1: The lives of three generations of a family
EN c868efaf, note 2: Radical and ahead of its time
EN d6ad91a6, note 2: The upper one works
EN ed8b5d53, note 2: Would
CS 06e359a4, note 1: zvyklí / neunikli
CS 06e359a4, note 1: lidé / přijde
CS 3bbf422c, note 1: bába
CS db4a109b, note 2: Páteřního koridoru
```

Additional executed preservation and media checks, exit 0:

```text
EN text preservation: PASS (79 sets, 393 items; byte-identical JSON and x payloads)
EN Yellowstone restoration: PASS (set, member order, IDs, notes, alts, full records except padding; 3 byte-identical historical JPEGs)
EN text credit sections: PASS (byte-identical)
EN pool mapping, media hashes, retained records and About copy: PASS (35 sets, 72 pictures)
CS text preservation: PASS (55 sets, 271 items; byte-identical JSON and x payloads)
CS Yellowstone restoration: PASS (set, member order, IDs, notes, alts, full records except padding; 3 byte-identical historical JPEGs)
CS text credit sections: PASS (byte-identical)
CS pool mapping, media hashes, retained records and About copy: PASS (35 sets, 72 pictures)
Image existence, no orphan media and translated image membership/truth: PASS (35 sets, 72 files)
Candidate-pool JPEG parity: PASS (34 sets; dimensions, quantization, metadata, sampling and file length)
Yellowstone ai b88324c9b42b.jpg: 800x1200, 177441 bytes, quantization sum 4065
Yellowstone human 8f451deeda09.jpg: 800x1200, 175469 bytes, quantization sum 2775
Yellowstone ai 9a1bbf97f3a9.jpg: 800x1200, 178318 bytes, quantization sum 3698
Text surface measurements: PASS (all text components unchanged within floating-point tolerance)
Quote baseline comparison: PASS (same 21 findings, no additions)
Historical surface-report body: PASS (byte-identical suffix)
EN image fairness rows: PASS (all features and logistic LOSO 50.0%)
CS image fairness rows: PASS (all features and logistic LOSO 50.0%)
Changed path scope: PASS (quiz/ and tests/ only)
```

`git diff --check`: exit 0, no output. No files were staged. Final `git status --short` and `git diff --stat` are included in the delivery message; untracked restored JPEGs and audit files appear in status rather than the tracked diff stat.
