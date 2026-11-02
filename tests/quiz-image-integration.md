# Quiz image integration, 2 November 2026

The selected 38 image sets are integrated in both language versions. All changes are uncommitted and confined to quiz/ and tests/. No network calls, staging, commits, stashes or pushes were made.

| Build | Sets | Items | Human | AI | Image sets | Images |
|---|---:|---:|---:|---:|---:|---:|
| EN | 117 | 470 | 117 | 353 | 38 | 77 |
| CS | 93 | 348 | 93 | 255 | 38 | 77 |

Image sets by pool, identical in both languages: photo 10; photo2 13; art 7; art2 8. Images: 38 human and 39 AI. The raven set has three pictures. Four David Revoy sets, the Dutch digital portrait and the woodcutter drawing are excluded.

Lensball and valley retain their existing set IDs, item IDs, provenance and original JPEG encoding. Their files received only zero padding after the JPEG end marker. Pool contexts, alt text and notes were applied; licence links, family labels, screening and processing details were added to the reveal records. Cat and mountain retain their human item IDs; the raven retains all three item IDs. Their processed art-pool JPEGs were imported.

New IDs came from secrets.token_hex; existing IDs were reused only for retained subjects. Members were shuffled with secrets.SystemRandom. Items are sorted by random ID, so array order does not group pictures by origin. The final underscore field was repadded after record changes. EN records remain 4,560 decoded bytes and CS records 4,656, allowing all text payloads to stay byte-identical.

The pool mapping, IDs, media SHA256 values and crop coordinates are in [quiz-image-pool.json](quiz-image-pool.json). Exact generated prompts, source attribution, licences and selection records are in the two CREDITS.md files and in the padded reveal records.

## Crops

All 15 selected human art pictures were visually inspected, including enlarged corners. Five pairs were reprocessed from their supplied human source JPEG and selected AI generation. Both sources received the original centre crop to the shared aspect, followed by the same proportional inset on every edge. Original output dimensions were retained, with RGB baseline JPEG quality 82, 4:2:0 sampling, 72dpi, stripped metadata and equal zero-padded file lengths within each pair. No signature was added.

| Set | Removed | Inset on each edge | Output | Human source crop (left, top, right, bottom) | AI source crop | Bytes per member |
|---|---|---:|---|---|---|---:|
| art2-autumn-park | border edge | 2% | 1200 × 818 | [26, 17, 1253, 855] | [30, 44, 1454, 1016] | 214873 |
| art2-boulevard-night | signature | 6% | 1200 × 825 | [77, 53, 1203, 827] | [91, 64, 1419, 978] | 357474 |
| art2-cathedral-market | signature | 9% | 512 × 349 | [46, 31, 466, 318] | [139, 93, 1382, 941] | 55940 |
| art2-dusk-fields | gallery-photo border | 4% | 496 × 448 | [20, 18, 476, 430] | [50, 105, 1204, 1148] | 27229 |
| art2-snow-square | signature | 10% | 512 × 392 | [51, 39, 461, 353] | [141, 124, 1271, 989] | 41534 |

The three signatures were on the boulevard, cathedral-market and snowy-square pictures. The source records credit Konstantin Korovin for the boulevard and Eugène Galien-Laloue for both snowy street scenes. The panel’s Hervé attribution was not copied. The woodland oil is credited by its supplied source to Bohuslav Dvořák; no visible N. Diaz signature was found in its JPEG, including the enlarged corners. The drawn border and lettering in the school illustration are part of the illustration, rather than a photographed frame.

The five cropped pairs received visual review after processing. Their local-model and frontier-model checks preceded the crops. No new model judgement is claimed; the records, About and fairness report disclose this limit.

## About image section, verbatim English

```html
<h2>Where the pictures come from</h2>
<p>The human pictures are public-domain works or carry Creative Commons licences. They include photographs of people, streets, animals, interiors and still lifes, Impressionist street scenes and landscapes, early computer graphics, drawings and engravings. Every human photograph has a file revision from before 2022. Sources, attribution and licence links are listed in <a href="CREDITS.md">CREDITS.md</a>.</p>
<p>The AI pictures were generated for the quiz with OpenAI image generation through the Codex CLI. The model received written descriptions, without reference images. For works by living artists, the descriptions specified a genre rather than asking for that artist’s style. Each reveal gives the exact prompt and the selection rule; the image-model version was not reported.</p>
<p>We kept image sets that passed a blind screen by a local Qwen model and review by two frontier models judging pictures blind. Across all 81 candidate pictures, Codex gpt-6.1-sol identified 9 of 41 AI pictures and wrongly called 12 of 40 human pictures AI, while Gemini 3.8 Flash identified 2 of 41 and wrongly called 14 of 40. These results guided selection; they do not measure how well people will do.</p>
<p>Pictures in each set share the same size, crop rule and JPEG compression settings, with metadata removed and files padded to the same byte length. Some generated art was matched to the human picture’s paper colour; the reveals describe the processing. Visible painter signatures and photographed border edges were cropped out, with the same crop applied to the AI partner. The blind model checks preceded those crops; the cropped versions received a visual check.</p>
```

## About image section, verbatim Czech

```html
<h2>Odkud jsou obrázky</h2>
<p>Lidské obrázky jsou volná díla nebo mají licenci Creative Commons. Najdete tu fotografie lidí, ulic, zvířat, interiérů a zátiší, impresionistické pouliční scény a krajiny, ranou počítačovou grafiku, kresby a rytiny. Každá lidská fotografie má doloženou verzi souboru z doby před rokem 2022. Zdroje, autorství a odkazy na licence uvádíme v <a href="CREDITS.md">CREDITS.md</a>.</p>
<p>Obrázky od AI vznikly pro kvíz generátorem obrázků OpenAI přes Codex CLI. Model dostal slovní popisy bez obrazových předloh. U děl žijících výtvarníků jsme zadávali žánr, bez požadavku na styl konkrétního autora. Po odpovědi najdete přesné zadání i pravidlo výběru; verzi obrazového modelu nástroj neuvedl.</p>
<p>Ponechali jsme obrazové sady, které prošly slepou kontrolou místním modelem Qwen a posouzením dvěma špičkovými modely, které neznaly původ obrázků. Ze všech 81 kandidátních obrázků Codex gpt-6.1-sol rozpoznal 9 ze 41 výtvorů AI a mylně označil za AI 12 ze 40 lidských obrázků, zatímco Gemini 3.8 Flash rozpoznal 2 ze 41 a mylně označil 14 ze 40. Podle těchto výsledků jsme vybírali – neříkají, jak úspěšní budou lidé.</p>
<p>Obrázky v sadě mají stejnou velikost, pravidlo ořezu a nastavení komprese JPEG; metadata jsme odstranili a soubory doplnili na stejný počet bajtů. U některých výtvarných obrázků od AI jsme barvu přizpůsobili papíru lidské předlohy; postup popisujeme po odpovědi. Viditelné podpisy malířů a vyfotografované okraje rámů jsme ořízli a stejný ořez použili u protějšku od AI. Slepé kontroly modely proběhly před těmito ořezy; oříznuté verze jsme zkontrolovali vizuálně.</p>
```

The new image copy was checked against writing.md: no English em dashes, no Czech em dashes, Czech spaced en dash, no workflow jargon. Exact prompts and quoted source names retain their original wording.

## Surface audit

Executed offline from a worktree-local uv cache, with one BLAS thread:

```sh
UV_OFFLINE=1 UV_PYTHON_DOWNLOADS=never UV_CACHE_DIR="$PWD/tests/.quiz-img-work/uv-cache" UV_LINK_MODE=copy OPENBLAS_NUM_THREADS=1 uv run --with numpy --with pillow python3 tests/surface_audit.py --output tests/.quiz-img-work/surface-final
```

Exit 0. The final output is retained as [surface-hard-pool.md](surface-hard-pool.md) and [surface-hard-pool.json](surface-hard-pool.json). The temporary cache and scratch images were removed. The audit used NumPy 2.5.4 and Pillow 13.0.0 from existing cached wheels. No dependency was downloaded.

| Round/component | Sets | Best fitted feature | Fit | Best CV feature | LOSO | Logistic LOSO |
|---|---:|---|---:|---|---:|---:|
| EN images (image) | 38 | width | 50.0% | width | 50.0% | 50.0% |
| EN mixed (image) | 38 | width | 50.0% | width | 50.0% | 50.0% |
| CS obrazky (image) | 38 | width | 50.0% | width | 50.0% | 50.0% |
| CS mixed (image) | 38 | width | 50.0% | width | 50.0% | 50.0% |

Every measured image feature ties at 50.0% fitted accuracy and 50.0% LOSO. No image feature is above 62% LOSO. This measures file properties, not visible content or human performance. Mixed all-item logistic LOSO is 50.7% EN and 52.0% CS. Text measurements are unchanged. The three existing text results above 62% remain disclosed.

Exact audit summary lines:

```text
EN literature (text): 13 sets; fit 75.0% (mean word length); CV 63.5% (mean word length); logistic 54.8%
EN cestina (text): 55 sets; fit 60.9% (mean word length); CV 59.6% (mean word length); logistic 58.9%
EN everyday (text): 11 sets; fit 69.3% (sentence length variance); CV 61.1% (title-case words/100w); logistic 63.6%
EN images (image): 38 sets; fit 50.0% (width); CV 50.0% (width); logistic 50.0%
EN mixed (text): 79 sets; fit 58.1% (sentence length variance); CV 58.1% (mean word length); logistic 59.5%
EN mixed (image): 38 sets; fit 50.0% (width); CV 50.0% (width); logistic 50.0%
EN mixed (all): 117 sets; fit 55.4% (text: sentence length variance); CV 55.4% (text: mean word length); logistic 50.7%
CS literatura (text): 40 sets; fit 63.8% (mean word length); CV 61.3% (sentence length variance); logistic 69.6%
CS bezne (text): 15 sets; fit 65.8% (diacritics ratio); CV 61.7% (title-case words/100w); logistic 50.8%
CS obrazky (image): 38 sets; fit 50.0% (width); CV 50.0% (width); logistic 50.0%
CS mixed (text): 55 sets; fit 60.9% (mean word length); CV 59.6% (mean word length); logistic 58.9%
CS mixed (image): 38 sets; fit 50.0% (width); CV 50.0% (width); logistic 50.0%
CS mixed (all): 93 sets; fit 57.3% (text: mean word length); CV 56.4% (text: mean word length); logistic 52.0%
```

## Checks

`python3 tests/quiz_data_check.py` returned 0.

```text
EN: 117 sets, 470 items (117 human, 353 AI); 4560 decoded bytes per record; 77 images
CS: 93 sets, 348 items (93 human, 255 AI); 4656 decoded bytes per record; 77 images
Data integrity: PASS (0 errors)
```

`python3 tests/quiz_data_check.py --quotes` returned 1.

```text
EN: 117 sets, 470 items (117 human, 353 AI); 4560 decoded bytes per record; 77 images
CS: 93 sets, 348 items (93 human, 255 AI); 4656 decoded bytes per record; 77 images
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

The --quotes failure is unchanged from the baseline: the same 21 nonliteral text-note quotes, with data integrity passing in both runs. The text items were deliberately preserved.

Additional executed checks:

```text
EN text preservation: PASS (79 sets, 393 items, including identical x payloads and raw JSON records)
EN pool contexts, alts, notes, exact AI prompts and media hashes: PASS (38 sets, 77 pictures)
CS text preservation: PASS (55 sets, 271 items, including identical x payloads and raw JSON records)
CS pool contexts, alts, notes, exact AI prompts and media hashes: PASS (38 sets, 77 pictures)
Historical surface-report body: PASS (byte-identical suffix)
JPEG set parity: PASS (38 sets; dimensions, quantization, density, progressive flag, sampling and file length match)
Integrity guard negative probes: PASS (unreferenced file and translated membership mismatch both rejected)
EN retained lensball/valley JPEG data and IDs: PASS (only zero padding added)
CS retained lensball/valley JPEG data and IDs: PASS (only zero padding added)
Final-order audit agreement: PASS (every summary percentage and every text measurement unchanged)
EN text credit sections: PASS (unchanged)
CS text credit sections: PASS (unchanged)
Complete provenance and selection fields: PASS (both builds)
```

The integrity checker now rejects orphan media and differences in image membership or truth between languages. Its credit-link requirement for CDLA applies when a Rapidata item is present; no such item remains. The archived licence file stays in place. Playwright specs already derive counts from the data, so no spec changes were needed.

## Failures and limits

Playwright was not run because the brief states that browser tests cannot run in this sandbox. The up-to-12 image draw code and CSS were unchanged. No new Qwen or frontier-model calls were made, because network access was forbidden. Human playtesting is unmeasured.

The first offline uv invocation failed to find Pillow in the copied cache. Preserving the wheel cache’s relative archive links fixed the cache; the requested audit then completed twice with exit 0. An initial data-check run failed on null human prompt fields; those optional fields were omitted and all later integrity checks passed. Two intermediate audit comparison helpers failed: one demanded exact floating-point equality, and another compared every non-leading feature. The final audit was saved; its reported summary values matched the earlier run, and every text component matched exactly. Source URLs were converted to Markdown links, and a misleading inherited claim that the new cat and mountain AI pictures came from an existing source JPEG was removed.

Open doubts: the five new crops have not been blind-screened again, and browser rendering has not been measured here. The supplied panel’s artist-name claims were not treated as source evidence. There are no missing assets, unresolved data-check errors or additional quote-audit failures.

Next verification command: `python3 tests/quiz_data_check.py`.

## Files changed and final Git evidence

The status listing below gives one changed path per line. git diff --stat covers tracked modifications and deletions; untracked added JPEGs and reports appear in git status. No files were staged.

`git diff --check`: exit 0, no output.

`git diff --cached --quiet`: exit 0; index unchanged.

`git status --short`:

```text
 M quiz/CREDITS.md
 M quiz/cs/CREDITS.md
 M quiz/cs/items.json
 M quiz/fairness.md
 M quiz/items.json
 D quiz/media/03d798abd422.jpg
 D quiz/media/0a6d4de9dca0.jpg
 D quiz/media/0b312b00e966.jpg
 D quiz/media/0bbb204f3b17.jpg
 D quiz/media/0f11f69502ff.jpg
 D quiz/media/135e2d56e1f8.jpg
 D quiz/media/175a598c231f.jpg
 D quiz/media/1bd76a36e9d7.jpg
 D quiz/media/1f96c334f52a.jpg
 D quiz/media/214dc59f5c7f.jpg
 D quiz/media/29a02e3c1fa1.jpg
 D quiz/media/2c79a4041713.jpg
 D quiz/media/2e217da8a53b.jpg
 D quiz/media/3223cc41ce12.jpg
 D quiz/media/34309669e275.jpg
 D quiz/media/3817bea6bf33.jpg
 D quiz/media/38a3ea33ad4b.jpg
 D quiz/media/3c935f460c79.jpg
 D quiz/media/430f68ae67a4.jpg
 D quiz/media/457ad478d9c1.jpg
 D quiz/media/48147dc1eee9.jpg
 D quiz/media/4b77dbcd4757.jpg
 D quiz/media/4cd4f4b25b4b.jpg
 D quiz/media/4e6e4ec349b0.jpg
 D quiz/media/569bc5007dd8.jpg
 M quiz/media/58a75f2b3a89.jpg
 M quiz/media/6873f7bee40c.jpg
 D quiz/media/7063ec8f9370.jpg
 D quiz/media/706db387bedc.jpg
 D quiz/media/7246612b6015.jpg
 D quiz/media/7a56d1159927.jpg
 D quiz/media/7c401cd6a62f.jpg
 D quiz/media/7d6fa01bb16d.jpg
 D quiz/media/7e71fea87f6b.jpg
 D quiz/media/7fb7df105a2f.jpg
 D quiz/media/7fd14ec71080.jpg
 D quiz/media/82116b93d07f.jpg
 D quiz/media/84af6c99e986.jpg
 D quiz/media/8863063993bb.jpg
 D quiz/media/88d066b7c20d.jpg
 D quiz/media/8d9a440d025a.jpg
 D quiz/media/8f0386611055.jpg
 D quiz/media/8f451deeda09.jpg
 D quiz/media/9a1bbf97f3a9.jpg
 D quiz/media/9ab2975ded8a.jpg
 M quiz/media/9c33ce48be4e.jpg
 M quiz/media/9cabbc8f465f.jpg
 D quiz/media/9e3b788c619e.jpg
 D quiz/media/a03db5a2dac6.jpg
 D quiz/media/a37adcfabfd0.jpg
 D quiz/media/a79829948527.jpg
 D quiz/media/ab4aaedbb4ad.jpg
 D quiz/media/b42373ef7b1d.jpg
 D quiz/media/b76456329ed8.jpg
 D quiz/media/b771341b2712.jpg
 D quiz/media/b869f90b95d2.jpg
 D quiz/media/b88324c9b42b.jpg
 D quiz/media/bfbcf620fce0.jpg
 D quiz/media/c028d9d568bd.jpg
 D quiz/media/c3419b1def64.jpg
 D quiz/media/c4e19625b559.jpg
 D quiz/media/c95eeda00cc8.jpg
 D quiz/media/ce91e04f8f5f.jpg
 D quiz/media/d157412af011.jpg
 D quiz/media/d1fb665968c8.jpg
 D quiz/media/d3a15a702870.jpg
 D quiz/media/d6a8b1e83979.jpg
 D quiz/media/d8633b6b44ee.jpg
 D quiz/media/db5f7d60c35f.jpg
 D quiz/media/dc8c6a0b6759.jpg
 D quiz/media/e2de2151bd95.jpg
 D quiz/media/e7ae7e990b2d.jpg
 D quiz/media/ebcfd5334583.jpg
 D quiz/media/edef0c407a52.jpg
 D quiz/media/f04105561031.jpg
 D quiz/media/f6c39ea6183d.jpg
 D quiz/media/f8f7e254415c.jpg
 D quiz/media/f907cd53645d.jpg
 D quiz/media/fbc7dbd447a0.jpg
 D quiz/media/fbf4c65dbbf5.jpg
 D quiz/media/fe7d0cee619f.jpg
 M tests/quiz_data_check.py
 M tests/surface-report.md
?? quiz/media/04a52763e8a2.jpg
?? quiz/media/0690de78d49f.jpg
?? quiz/media/0827444efa2f.jpg
?? quiz/media/09027c6456f1.jpg
?? quiz/media/175de4f3f4cb.jpg
?? quiz/media/179a10aaa4a3.jpg
?? quiz/media/1c63035fbfb2.jpg
?? quiz/media/23fd5488d0be.jpg
?? quiz/media/27201b2cffd0.jpg
?? quiz/media/27682d9ae61f.jpg
?? quiz/media/29dba3ed38d1.jpg
?? quiz/media/29ea1d862151.jpg
?? quiz/media/323a9a89e9c9.jpg
?? quiz/media/34a20f9a8798.jpg
?? quiz/media/35576aa6e210.jpg
?? quiz/media/421e22583514.jpg
?? quiz/media/436bdc5bfe0a.jpg
?? quiz/media/45113f383ef6.jpg
?? quiz/media/498916d15b07.jpg
?? quiz/media/4a740150aaf3.jpg
?? quiz/media/4ba3595d7148.jpg
?? quiz/media/4bba16977df7.jpg
?? quiz/media/4dfd6b1f0e8b.jpg
?? quiz/media/51eae9a0ca69.jpg
?? quiz/media/5b96cb68b465.jpg
?? quiz/media/5ff378d64374.jpg
?? quiz/media/60750e91a335.jpg
?? quiz/media/64d895bcf8f2.jpg
?? quiz/media/651dd5d6bc06.jpg
?? quiz/media/67eb4daffe0f.jpg
?? quiz/media/7046802babe9.jpg
?? quiz/media/72695798d769.jpg
?? quiz/media/7566af64d688.jpg
?? quiz/media/7a72ddb21f16.jpg
?? quiz/media/7a7d66411b92.jpg
?? quiz/media/7f67f4cdbc50.jpg
?? quiz/media/81ba0e515742.jpg
?? quiz/media/90388ae4d71a.jpg
?? quiz/media/919fe1e0a5c7.jpg
?? quiz/media/93772df6d2d3.jpg
?? quiz/media/9827d4012b8c.jpg
?? quiz/media/9b6c99529acc.jpg
?? quiz/media/9c33aeee676d.jpg
?? quiz/media/9cbf1ddb4ad9.jpg
?? quiz/media/9e1da17c3005.jpg
?? quiz/media/a12f006387cd.jpg
?? quiz/media/a21ec2fa2de8.jpg
?? quiz/media/a2ff94f9cea2.jpg
?? quiz/media/abb84740e5a1.jpg
?? quiz/media/aec7b11fbe0b.jpg
?? quiz/media/af2e33b19434.jpg
?? quiz/media/b1a0dc3d4961.jpg
?? quiz/media/b44210912517.jpg
?? quiz/media/b5807c4c56a8.jpg
?? quiz/media/b68889125667.jpg
?? quiz/media/b80261e157e4.jpg
?? quiz/media/c1c131aa8a7c.jpg
?? quiz/media/c3fcc83d5445.jpg
?? quiz/media/c9230dd189ad.jpg
?? quiz/media/ce229f191a77.jpg
?? quiz/media/d184d0de4549.jpg
?? quiz/media/d61e78157ae5.jpg
?? quiz/media/dccd3b79dd99.jpg
?? quiz/media/e0cd89d39cce.jpg
?? quiz/media/e36e656f2d0a.jpg
?? quiz/media/e3961d28dc54.jpg
?? quiz/media/e81caafa241e.jpg
?? quiz/media/edda32868a18.jpg
?? quiz/media/efdc15a7625a.jpg
?? quiz/media/f1229dbe1477.jpg
?? quiz/media/f8946a0a512b.jpg
?? quiz/media/fa042e544ad4.jpg
?? quiz/media/fc9214829078.jpg
?? tests/quiz-image-integration.md
?? tests/quiz-image-pool.json
?? tests/surface-hard-pool.json
?? tests/surface-hard-pool.md
```

`git diff --stat`:

```text
 quiz/CREDITS.md             | 1048 +++++++++++++++++++------------------------
 quiz/cs/CREDITS.md          | 1028 +++++++++++++++++++-----------------------
 quiz/cs/items.json          |    2 +-
 quiz/fairness.md            |   24 +-
 quiz/items.json             |    2 +-
 quiz/media/03d798abd422.jpg |  Bin 216921 -> 0 bytes
 quiz/media/0a6d4de9dca0.jpg |  Bin 346921 -> 0 bytes
 quiz/media/0b312b00e966.jpg |  Bin 312238 -> 0 bytes
 quiz/media/0bbb204f3b17.jpg |  Bin 110258 -> 0 bytes
 quiz/media/0f11f69502ff.jpg |  Bin 159837 -> 0 bytes
 quiz/media/135e2d56e1f8.jpg |  Bin 75366 -> 0 bytes
 quiz/media/175a598c231f.jpg |  Bin 254250 -> 0 bytes
 quiz/media/1bd76a36e9d7.jpg |  Bin 161343 -> 0 bytes
 quiz/media/1f96c334f52a.jpg |  Bin 160829 -> 0 bytes
 quiz/media/214dc59f5c7f.jpg |  Bin 214935 -> 0 bytes
 quiz/media/29a02e3c1fa1.jpg |  Bin 237811 -> 0 bytes
 quiz/media/2c79a4041713.jpg |  Bin 159967 -> 0 bytes
 quiz/media/2e217da8a53b.jpg |  Bin 158593 -> 0 bytes
 quiz/media/3223cc41ce12.jpg |  Bin 346882 -> 0 bytes
 quiz/media/34309669e275.jpg |  Bin 109115 -> 0 bytes
 quiz/media/3817bea6bf33.jpg |  Bin 160403 -> 0 bytes
 quiz/media/38a3ea33ad4b.jpg |  Bin 137933 -> 0 bytes
 quiz/media/3c935f460c79.jpg |  Bin 104863 -> 0 bytes
 quiz/media/430f68ae67a4.jpg |  Bin 121104 -> 0 bytes
 quiz/media/457ad478d9c1.jpg |  Bin 74407 -> 0 bytes
 quiz/media/48147dc1eee9.jpg |  Bin 164143 -> 0 bytes
 quiz/media/4b77dbcd4757.jpg |  Bin 106379 -> 0 bytes
 quiz/media/4cd4f4b25b4b.jpg |  Bin 109330 -> 0 bytes
 quiz/media/4e6e4ec349b0.jpg |  Bin 230468 -> 0 bytes
 quiz/media/569bc5007dd8.jpg |  Bin 33173 -> 0 bytes
 quiz/media/58a75f2b3a89.jpg |  Bin 143836 -> 144384 bytes
 quiz/media/6873f7bee40c.jpg |  Bin 171245 -> 172032 bytes
 quiz/media/7063ec8f9370.jpg |  Bin 236288 -> 0 bytes
 quiz/media/706db387bedc.jpg |  Bin 134272 -> 0 bytes
 quiz/media/7246612b6015.jpg |  Bin 75623 -> 0 bytes
 quiz/media/7a56d1159927.jpg |  Bin 91193 -> 0 bytes
 quiz/media/7c401cd6a62f.jpg |  Bin 313121 -> 0 bytes
 quiz/media/7d6fa01bb16d.jpg |  Bin 227294 -> 0 bytes
 quiz/media/7e71fea87f6b.jpg |  Bin 343552 -> 0 bytes
 quiz/media/7fb7df105a2f.jpg |  Bin 159233 -> 0 bytes
 quiz/media/7fd14ec71080.jpg |  Bin 163337 -> 0 bytes
 quiz/media/82116b93d07f.jpg |  Bin 241709 -> 0 bytes
 quiz/media/84af6c99e986.jpg |  Bin 163507 -> 0 bytes
 quiz/media/8863063993bb.jpg |  Bin 90896 -> 0 bytes
 quiz/media/88d066b7c20d.jpg |  Bin 163102 -> 0 bytes
 quiz/media/8d9a440d025a.jpg |  Bin 107957 -> 0 bytes
 quiz/media/8f0386611055.jpg |  Bin 212129 -> 0 bytes
 quiz/media/8f451deeda09.jpg |  Bin 175469 -> 0 bytes
 quiz/media/9a1bbf97f3a9.jpg |  Bin 178318 -> 0 bytes
 quiz/media/9ab2975ded8a.jpg |  Bin 74546 -> 0 bytes
 quiz/media/9c33ce48be4e.jpg |  Bin 109164 -> 144384 bytes
 quiz/media/9cabbc8f465f.jpg |  Bin 146007 -> 172032 bytes
 quiz/media/9e3b788c619e.jpg |  Bin 140740 -> 0 bytes
 quiz/media/a03db5a2dac6.jpg |  Bin 238452 -> 0 bytes
 quiz/media/a37adcfabfd0.jpg |  Bin 161851 -> 0 bytes
 quiz/media/a79829948527.jpg |  Bin 160792 -> 0 bytes
 quiz/media/ab4aaedbb4ad.jpg |  Bin 119154 -> 0 bytes
 quiz/media/b42373ef7b1d.jpg |  Bin 214222 -> 0 bytes
 quiz/media/b76456329ed8.jpg |  Bin 82853 -> 0 bytes
 quiz/media/b771341b2712.jpg |  Bin 217073 -> 0 bytes
 quiz/media/b869f90b95d2.jpg |  Bin 212389 -> 0 bytes
 quiz/media/b88324c9b42b.jpg |  Bin 177441 -> 0 bytes
 quiz/media/bfbcf620fce0.jpg |  Bin 141655 -> 0 bytes
 quiz/media/c028d9d568bd.jpg |  Bin 254804 -> 0 bytes
 quiz/media/c3419b1def64.jpg |  Bin 112486 -> 0 bytes
 quiz/media/c4e19625b559.jpg |  Bin 133595 -> 0 bytes
 quiz/media/c95eeda00cc8.jpg |  Bin 74102 -> 0 bytes
 quiz/media/ce91e04f8f5f.jpg |  Bin 312145 -> 0 bytes
 quiz/media/d157412af011.jpg |  Bin 122092 -> 0 bytes
 quiz/media/d1fb665968c8.jpg |  Bin 222020 -> 0 bytes
 quiz/media/d3a15a702870.jpg |  Bin 51486 -> 0 bytes
 quiz/media/d6a8b1e83979.jpg |  Bin 205212 -> 0 bytes
 quiz/media/d8633b6b44ee.jpg |  Bin 252396 -> 0 bytes
 quiz/media/db5f7d60c35f.jpg |  Bin 239234 -> 0 bytes
 quiz/media/dc8c6a0b6759.jpg |  Bin 83845 -> 0 bytes
 quiz/media/e2de2151bd95.jpg |  Bin 229293 -> 0 bytes
 quiz/media/e7ae7e990b2d.jpg |  Bin 214229 -> 0 bytes
 quiz/media/ebcfd5334583.jpg |  Bin 33638 -> 0 bytes
 quiz/media/edef0c407a52.jpg |  Bin 213684 -> 0 bytes
 quiz/media/f04105561031.jpg |  Bin 205917 -> 0 bytes
 quiz/media/f6c39ea6183d.jpg |  Bin 168165 -> 0 bytes
 quiz/media/f8f7e254415c.jpg |  Bin 239096 -> 0 bytes
 quiz/media/f907cd53645d.jpg |  Bin 119375 -> 0 bytes
 quiz/media/fbc7dbd447a0.jpg |  Bin 123176 -> 0 bytes
 quiz/media/fbf4c65dbbf5.jpg |  Bin 147075 -> 0 bytes
 quiz/media/fe7d0cee619f.jpg |  Bin 77763 -> 0 bytes
 tests/quiz_data_check.py    |   12 +-
 tests/surface-report.md     |    2 +
 88 files changed, 951 insertions(+), 1167 deletions(-)
```
