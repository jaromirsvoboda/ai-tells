# Quiz image integration, 2 November 2026: eight poster pairs

Both builds now contain 43 image sets and 88 pictures (43 human, 45 AI). The new poster round draws one picture from each of nine poster sets: the eight supplied pairs and restored WPA Yellowstone (`s34d252`). The general image round still draws up to 12 sets from all 43. All changes are uncommitted and confined to quiz/ and tests/. No network calls, staging, commits, stashes or pushes were made.

| Build | Sets | Items | Human | AI | Image sets | Images | Poster sets |
|---|---:|---:|---:|---:|---:|---:|---:|
| EN | 122 | 481 | 122 | 359 | 43 | 88 | 9 |
| CS | 98 | 359 | 98 | 261 | 43 | 88 | 9 |

## Inputs and selection

Read-only input root: `/home/jsvoboda/.local/state/ai-tells-quiz3/posters2`. The first five pairs come from `sets/`; the final three come from `held/`. Those three were held because the local Qwen screen recognised their human originals with high confidence. The integration brief explicitly clears them. They are included without claiming that they passed the earlier pair-level Qwen gate.

| Input | Quiz set | Selected AI attempt | Human media | AI media |
|---|---|---:|---|---|
| poster-10382731 | `sb372f6` | 1 | `472fb2ba4592.jpg` | `ca63bd70b923.jpg` |
| poster-143486690 | `s9304ef` | 1 | `6b170808313d.jpg` | `198f185debe3.jpg` |
| poster-31837542 | `s7e474d` | 2 | `6562e5ca68a1.jpg` | `a007cbf1917c.jpg` |
| poster-87274577 | `s2e90c0` | 5 | `3f5a31b845e3.jpg` | `aeccac505b3a.jpg` |
| poster-exhibition | `se25136` | 2 | `02f98e324d00.jpg` | `408ffe4fbb33.jpg` |
| poster-31840775 | `sc821d2` | 2 | `9499734331f8.jpg` | `31ac7b15ef95.jpg` |
| poster-31968704 | `sb706a7` | 1 | `43cd9671676e.jpg` | `be9215e399dd.jpg` |
| poster-swimming | `s03dd34` | 1 | `a150598d39a9.jpg` | `fb1f9539e4d8.jpg` |

Excluded inputs remain excluded: poster-60858571, poster-64912504, poster-96208153, poster-31825751 and poster-60852966. The earlier David Revoy, Dutch digital portrait, woodcutter and CGI exclusions also remain in effect.

Each new AI record states the real selection rule: the first of up to six attempts to pass a full-resolution checklist for hands, lettering, mechanics and names, with its selected attempt number. Prompts and attempt numbers were checked against the selected generation records in `sources/` and the manifests. The supplied EN/CS reveal notes are unchanged. Czech alt text for the citrus label names Santa Claus consistently with its AI partner. Attribution, source links and licences come from the manifests; the modern human design retains CC BY-SA 4.0. No broken links to the preparation directory were published.

The supplied blind results are stated in both About pages: each judge saw only one picture per set; Codex gpt-6.1-sol flagged 3 of 8 AI posters at 60–67 % confidence, Gemini 3.8 Flash flagged none, and neither called any human poster AI. Earlier versions were caught by both judges and regenerated. No new model judgements were made during integration.

## Records, media and credits

New records use the existing base64 JSON format, with a final `_` field containing spaces. Decoded lengths remain 4,560 bytes in EN and 4,656 in CS. The largest new unpadded record is 2,259 bytes in EN and 2,362 in CS, so no old item needed repadding. All existing items, including every text record and its original JSON bytes, are unchanged. Set IDs have six random hex digits after `s`; item IDs have eight random hex digits and are globally unique. The builds share set IDs and media; item IDs differ. Items retain the existing sort order by random ID, and new set member orders are shuffled.

The 16 supplied JPEGs were copied byte for byte under their existing random 12-hex names. Each pair has equal dimensions, quantisation tables, sampling, metadata properties and padded file lengths. There was no image editing or recompression. The three Yellowstone JPEGs and their reveal records are unchanged; only their parent set gained `sub: "poster"`. Earlier art crops remain as documented in the previous integration below.

The [pool manifest](quiz-image-pool.json) records all 43 set IDs, item IDs, media SHA256 values and existing crop boxes. New entries also identify their read-only source manifest, generation record and selected attempt. The restored Yellowstone entry is tagged as a poster.

Both CREDITS.md files were regenerated using the retained [generator](quiz_image_credits.py):

```sh
python3 tests/quiz_image_credits.py
```

```text
EN image credits: regenerated 43 sections
CS image credits: regenerated 43 sections
Credits regeneration: PASS (idempotent)
```

Every retained image and text credit section was compared byte for byte with the baseline. Sources, exact prompts, optional prompt-route disclosures and selections remain in the same per-set/per-member format. Headers now include the new counts, poster processing and blind results. Exact source prompts are preserved verbatim.

## Round definitions

The shared eligible-set filter now honours an optional round-level `sub`. Rounds without it retain their existing eligibility and draw results. Filtered image rounds honour their own `n`; the general image round retains its cap of 12. The integrity checker and surface audit use the same filter. Existing image-round blurbs already name posters and are unchanged.

### EN

```json
{
  "id": "posters",
  "title": "Posters and print",
  "blurb": "WPA posters, labels, campaign posters and modern graphic design. Human or AI?",
  "cats": [
    "images"
  ],
  "sub": "poster",
  "lang": null,
  "n": 9,
  "tag": "Pictures"
}
```

### CS

```json
{
  "id": "plakaty",
  "title": "Plakáty a tiskoviny",
  "blurb": "Plakáty WPA, etikety, osvětové kampaně i moderní grafické návrhy. Od člověka, nebo od AI?",
  "cats": [
    "images"
  ],
  "sub": "poster",
  "lang": null,
  "n": 9,
  "tag": "obrázky"
}
```

## About changes, verbatim

### EN

```diff
--- EN About before
+++ EN About after
@@ -2 +2 @@
-<p class="lede">The quiz has 465 items in 114 matched sets: 114 made by people and 351 made by AI. Each set groups one human text or picture with AI work of the same kind.</p>
+<p class="lede">The quiz has 481 items in 122 matched sets: 122 made by people and 359 made by AI. Each set groups one human text or picture with AI work of the same kind.</p>
@@ -19 +19 @@
-<p>The human pictures are public-domain works or carry Creative Commons licences. They include photographs of people, streets, animals, interiors and still lifes, Impressionist street scenes and landscapes, posters, drawings and engravings. Every human photograph has a file revision from before 2022. Sources, attribution and licence links are listed in <a href="CREDITS.md">CREDITS.md</a>.</p>
+<p>The human pictures are public-domain works or carry Creative Commons licences. They include photographs of people, streets, animals, interiors and still lifes, Impressionist street scenes and landscapes, WPA posters, labels, campaign and exhibition posters, modern graphic design, drawings and engravings. Every human photograph has a file revision from before 2022. Sources, attribution and licence links are listed in <a href="CREDITS.md">CREDITS.md</a>.</p>
@@ -22 +22,2 @@
-<p>The 34 sets from the candidate pool share the same size, crop rule and JPEG compression settings within each set, with metadata removed and files padded to the same byte length. The restored posters retain their earlier processing: matching dimensions and stripped metadata, with compression quality adjusted per picture to bring file sizes closer. Some generated art was matched to the human picture’s paper colour; the reveals describe the processing. Visible painter signatures and photographed border edges were cropped out, with the same crop applied to the AI partner. The blind model checks preceded those crops; the cropped versions received a visual check.</p>
+<p>In a blind check where each judge saw only one picture per set, Codex gpt-6.1-sol flagged 3 of the 8 AI posters at 60–67 % confidence and Gemini 3.8 Flash flagged none; neither called any human poster AI. Earlier versions of these AI posters were caught by both judges and were regenerated.</p>
+<p>The 34 sets from the original candidate pool and the eight new poster sets share the same size, crop rule and JPEG compression settings within each set, with metadata removed and files padded to the same byte length. The restored posters retain their earlier processing: matching dimensions and stripped metadata, with compression quality adjusted per picture to bring file sizes closer. Some generated art was matched to the human picture’s paper colour; the reveals describe the processing. Visible painter signatures and photographed border edges were cropped out, with the same crop applied to the AI partner. The blind model checks preceded those crops; the cropped versions received a visual check.</p>
@@ -39 +40,2 @@
-<tr><td>Images</td><td>File size (tied at chance)</td><td class="num">50.0 %</td><td class="num">50.0 %</td></tr>
+<tr><td>Images</td><td>File size (tied at chance)</td><td class="num">50.0 %</td><td class="num">49.4 %</td></tr>
+<tr><td>Posters and print</td><td>Width (tied at chance)</td><td class="num">50.0 %</td><td class="num">50.0 %</td></tr>
@@ -41 +43 @@
-<tr><td>Mixed: images only</td><td>File size (tied at chance)</td><td class="num">50.0 %</td><td class="num">50.0 %</td></tr>
+<tr><td>Mixed: images only</td><td>File size (tied at chance)</td><td class="num">50.0 %</td><td class="num">49.4 %</td></tr>
@@ -45 +47 @@
-<p>Earlier exclusions include seven AI images from Commons that looked obviously generated, the Austen <em>Persuasion</em>, Conrad <em>Heart of Darkness</em> and Dickens <em>Great Expectations</em> sets with mismatched apostrophe use, and Achenbach’s shipwreck and Ender’s sleigh with different compressed sizes. The image round draws up to 12 of the 35 image sets. No items were removed or rewritten in response to the measurements above. The <a href="fairness.md">fairness report</a> gives the method and results for both languages, with a link to every measured feature.</p>
+<p>Earlier exclusions include seven AI images from Commons that looked obviously generated, the Austen <em>Persuasion</em>, Conrad <em>Heart of Darkness</em> and Dickens <em>Great Expectations</em> sets with mismatched apostrophe use, and Achenbach’s shipwreck and Ender’s sleigh with different compressed sizes. The image round draws up to 12 of the 43 image sets. Posters and print draws one picture from each of the nine poster sets. No items were removed or rewritten in response to the measurements above. The <a href="fairness.md">fairness report</a> gives the method and results for both languages, with a link to every measured feature.</p>
```

### CS

```diff
--- CS About before
+++ CS About after
@@ -2 +2 @@
-<p class="lede">Kvíz má 343 položek v 90 sadách: 90 od lidí a 253 od AI. Každá sada spojuje jeden lidský text nebo obrázek s výtvory AI stejného druhu.</p>
+<p class="lede">Kvíz má 359 položek v 98 sadách: 98 od lidí a 261 od AI. Každá sada spojuje jeden lidský text nebo obrázek s výtvory AI stejného druhu.</p>
@@ -18 +18 @@
-<p>Lidské obrázky jsou volná díla nebo mají licenci Creative Commons. Najdete tu fotografie lidí, ulic, zvířat, interiérů a zátiší, impresionistické pouliční scény a krajiny, plakáty, kresby a rytiny. Každá lidská fotografie má doloženou verzi souboru z doby před rokem 2022. Zdroje, autorství a odkazy na licence uvádíme v <a href="CREDITS.md">CREDITS.md</a>.</p>
+<p>Lidské obrázky jsou volná díla nebo mají licenci Creative Commons. Najdete tu fotografie lidí, ulic, zvířat, interiérů a zátiší, impresionistické pouliční scény a krajiny, plakáty WPA, etikety, osvětové a výstavní plakáty i moderní grafické návrhy, kresby a rytiny. Každá lidská fotografie má doloženou verzi souboru z doby před rokem 2022. Zdroje, autorství a odkazy na licence uvádíme v <a href="CREDITS.md">CREDITS.md</a>.</p>
@@ -21 +21,2 @@
-<p>Ve 34 sadách z kandidátního souboru mají obrázky v každé sadě stejnou velikost, pravidlo ořezu a nastavení komprese JPEG; metadata jsme odstranili a soubory doplnili na stejný počet bajtů. Obnovené plakáty si ponechaly dřívější zpracování: stejné rozměry a odstraněná metadata, s kvalitou komprese upravenou u každého obrázku tak, aby si velikosti souborů byly bližší. U některých výtvarných obrázků od AI jsme barvu přizpůsobili papíru lidské předlohy; postup popisujeme po odpovědi. Viditelné podpisy malířů a vyfotografované okraje rámů jsme ořízli a stejný ořez použili u protějšku od AI. Slepé kontroly modely proběhly před těmito ořezy; oříznuté verze jsme zkontrolovali vizuálně.</p>
+<p>Při slepé kontrole, v níž každý hodnotitel viděl jen jeden obrázek z každé sady, označil Codex gpt-6.1-sol za AI 3 z 8 plakátů od AI s jistotou 60–67 % a Gemini 3.8 Flash žádný; žádný z nich neoznačil lidský plakát za AI. Dřívější verze těchto plakátů od AI oba hodnotitelé rozpoznali a následovalo nové generování.</p>
+<p>Ve 34 sadách z původního kandidátního souboru a v osmi nových plakátových sadách mají obrázky v každé sadě stejnou velikost, pravidlo ořezu a nastavení komprese JPEG; metadata jsme odstranili a soubory doplnili na stejný počet bajtů. Obnovené plakáty si ponechaly dřívější zpracování: stejné rozměry a odstraněná metadata, s kvalitou komprese upravenou u každého obrázku tak, aby si velikosti souborů byly bližší. U některých výtvarných obrázků od AI jsme barvu přizpůsobili papíru lidské předlohy; postup popisujeme po odpovědi. Viditelné podpisy malířů a vyfotografované okraje rámů jsme ořízli a stejný ořez použili u protějšku od AI. Slepé kontroly modely proběhly před těmito ořezy; oříznuté verze jsme zkontrolovali vizuálně.</p>
@@ -37,0 +39 @@
+<tr><td>Plakáty a tiskoviny</td><td>Šířka (shodně na úrovni náhody)</td><td class="num">50,0 %</td><td class="num">50,0 %</td></tr>
@@ -43 +45 @@
-<p>Dříve jsme vyřadili sedm obrázků od AI z Commons, které na první pohled vypadaly uměle, sady s díly Austenové (<em>Persuasion</em>), Conrada (<em>Heart of Darkness</em>) a Dickense (<em>Great Expectations</em>) s rozdílným užíváním apostrofů a Achenbachovo ztroskotání s Enderovými saněmi kvůli rozdílné velikosti komprimovaných souborů. Obrazové kolo vybírá nejvýš 12 z 35 obrazových sad. Kvůli výše uvedeným měřením jsme žádné položky nevyřadili ani nepřepisovali. <a href="../fairness.md">Zpráva o férovosti (anglicky)</a> popisuje postup a výsledky obou jazyků a odkazuje na měření všech znaků.</p>
+<p>Dříve jsme vyřadili sedm obrázků od AI z Commons, které na první pohled vypadaly uměle, sady s díly Austenové (<em>Persuasion</em>), Conrada (<em>Heart of Darkness</em>) a Dickense (<em>Great Expectations</em>) s rozdílným užíváním apostrofů a Achenbachovo ztroskotání s Enderovými saněmi kvůli rozdílné velikosti komprimovaných souborů. Obrazové kolo vybírá nejvýš 12 ze 43 obrazových sad. Kolo Plakáty a tiskoviny vybírá po jednom obrázku ze všech devíti plakátových sad. Kvůli výše uvedeným měřením jsme žádné položky nevyřadili ani nepřepisovali. <a href="../fairness.md">Zpráva o férovosti (anglicky)</a> popisuje postup a výsledky obou jazyků a odkazuje na měření všech znaků.</p>
```

## Surface audit

Executed offline, using a worktree-local uv cache copied from already cached NumPy and Pillow wheels. The first cache copy did not preserve uv's archive paths and wheel symlinks, so uv failed before starting the audit with “Network connectivity is disabled, but the requested data wasn't found in the cache”. Preserving those paths fixed it; no dependency was downloaded.

```sh
UV_OFFLINE=1 UV_PYTHON_DOWNLOADS=never UV_CACHE_DIR="$PWD/tests/.quiz-posters-work/uv-cache" UV_LINK_MODE=copy OPENBLAS_NUM_THREADS=1 uv run --with numpy --with pillow python3 tests/surface_audit.py --output tests/.quiz-posters-work/surface-posters
```

Exit 0. Final artifacts: [surface-posters.md](surface-posters.md) and [surface-posters.json](surface-posters.json). Exact summary lines from the final, sorted item order:

```text
EN literature (text): 13 sets; fit 75.0% (mean word length); CV 63.5% (mean word length); logistic 54.8%
EN cestina (text): 55 sets; fit 60.9% (mean word length); CV 59.6% (mean word length); logistic 58.9%
EN everyday (text): 11 sets; fit 69.3% (sentence length variance); CV 61.1% (title-case words/100w); logistic 63.6%
EN images (image): 43 sets; fit 51.2% (file bytes); CV 50.0% (file bytes); logistic 49.4%
EN posters (image): 9 sets; fit 55.6% (file bytes); CV 50.0% (width); logistic 50.0%
EN mixed (text): 79 sets; fit 58.1% (sentence length variance); CV 58.1% (mean word length); logistic 59.5%
EN mixed (image): 43 sets; fit 51.2% (file bytes); CV 50.0% (file bytes); logistic 49.4%
EN mixed (all): 122 sets; fit 55.4% (text: sentence length variance); CV 55.4% (text: mean word length); logistic 50.7%
CS literatura (text): 40 sets; fit 63.8% (mean word length); CV 61.3% (sentence length variance); logistic 69.6%
CS bezne (text): 15 sets; fit 65.8% (diacritics ratio); CV 61.7% (title-case words/100w); logistic 50.8%
CS obrazky (image): 43 sets; fit 51.2% (file bytes); CV 50.0% (width); logistic 50.0%
CS plakaty (image): 9 sets; fit 55.6% (file bytes); CV 50.0% (width); logistic 50.0%
CS mixed (text): 55 sets; fit 60.9% (mean word length); CV 59.6% (mean word length); logistic 58.9%
CS mixed (image): 43 sets; fit 51.2% (file bytes); CV 50.0% (width); logistic 50.0%
CS mixed (all): 98 sets; fit 57.3% (text: mean word length); CV 56.4% (text: mean word length); logistic 52.0%
```

Every measured image feature scores 50.0% LOSO. Image logistic LOSO is 49.4% EN and 50.0% CS; both poster rounds score 50.0%. An earlier run before restoring the normal item sort reported 50.0% English image logistic accuracy; the final artifacts and public tables use the measured 49.4%. No image feature exceeds 62%. All text measurements are unchanged within floating-point tolerance, as are mixed all-item logistic scores (50.7% EN, 52.0% CS). The audit measures file properties, not visible content or human accuracy.

## Checks and remaining verification

The initial integrity check failed with `en/posters: wrong image count` and `cs/plakaty: wrong image count`: its round check assumed every image round drew up to 12 sets. The checker now applies `sub` before checking a poster round's count. The final checks below are after that fix.

`python3 tests/quiz_data_check.py`: exit 0.

```text
EN: 122 sets, 481 items (122 human, 359 AI); 4560 decoded bytes per record; 88 images
CS: 98 sets, 359 items (98 human, 261 AI); 4656 decoded bytes per record; 88 images
Data integrity: PASS (0 errors)
```

`python3 tests/quiz_data_check.py --quotes`: exit 1.

```text
EN: 122 sets, 481 items (122 human, 359 AI); 4560 decoded bytes per record; 88 images
CS: 98 sets, 359 items (98 human, 261 AI); 4656 decoded bytes per record; 88 images
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

`python3 tests/.quiz-posters-work/check.py`: exit 0.

```text
EN preservation: PASS (79 text sets, 393 text items; byte-identical JSON and x payloads; all existing items and credit sections unchanged)
EN posters: PASS (8 supplied pairs, exact prompts and attempts, translated notes, 9 tagged sets including Yellowstone)
CS preservation: PASS (55 text sets, 271 text items; byte-identical JSON and x payloads; all existing items and credit sections unchanged)
CS posters: PASS (8 supplied pairs, exact prompts and attempts, translated notes, 9 tagged sets including Yellowstone)
Poster JPEG parity: PASS (8 pairs; dimensions, quantization, sampling, metadata and file length)
Surface audit: PASS (text measurements unchanged; image/poster single-feature LOSO 50.0%; image logistic 49.4% EN / 50.0% CS; poster logistic 50.0%)
Historical surface report: PASS (byte-identical suffix)
Quote baseline: PASS (same 21 findings, no additions)
Image existence, no orphan media, unique IDs and bilingual image membership: PASS (43 sets, 88 files)
```

`node tests/.quiz-posters-work/draw-check.js`: exit 0.

```text
EN draw: PASS (100 seeds; all 9 poster sets, unchanged unfiltered rounds; filtered n honoured above 12)
CS draw: PASS (100 seeds; all 9 poster sets, unchanged unfiltered rounds; filtered n honoured above 12)
```

`node --check quiz/quiz.js`: exit 0.

No output.

`node --check tests/quiz.spec.js`: exit 0.

No output.

`git diff --check`: exit 0.

No output.

The quote audit remains a failure with the same 21 baseline text-note findings and no additions. A 100-seed draw check exercised the production helpers in Node's VM for each language, checked all nine poster sets, compared every unfiltered round with the previous production helpers, and verified a 14-set filtered fixture honours its `n`. Its first invocation failed because the sandbox refused Node's `spawnSync git` with EPERM; reading a baseline file prepared by the shell allowed the check to run. The temporary verification scripts and uv cache were removed after the checks.

The Playwright test in `tests/quiz.spec.js` runs for both language paths. It checks the round title and menu count, `n` against the poster-set count, Yellowstone membership, every drawn image's set, no duplicate sets and completion after exactly nine items. It was written and syntax-checked but was not run: the brief says Playwright cannot run in this sandbox. No browser runtime result is claimed.

EN and CS copy was reviewed against the shared writing rules. New English prose contains no em dashes; Czech pauses use spaced en dashes. Final changed-path scope is quiz/ and tests/ only, with no staged changes.

## Previous integration record, before the eight new pairs

The following is the earlier CGI removal and Yellowstone restoration record. Its counts and audit results describe that earlier state.

### CGI removal and Yellowstone restoration, 2 November 2026

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
