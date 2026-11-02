# How we checked fairness

We measured simple surface features of the quiz items, including punctuation and sentence length; for images we measured file size, dimensions and metadata. Scores follow the quiz’s draw: equal probability of human or AI within a set, with a uniformly chosen AI imitation and the round’s category weights, giving a 50% chance baseline. Each single-feature rule and the small logistic model were cross-validated by holding out whole sets, learning only from the remaining sets. “Best CV feature” is the highest cross-validated single-feature score, while “Fit” uses all the data and is more optimistic. Feature selection and historical set removals used the same collection, so these are descriptive results from a small sample rather than an independent test on new texts.

## Results, 2 November 2026

| Round/component | Sets | Best fitted feature | Fit | Best CV feature | LOSO | Logistic LOSO |
|---|---:|---|---:|---|---:|---:|
| EN literature (text) | 13 | mean word length | 75.0% | mean word length | 63.5% | 54.8% |
| EN cestina (text) | 55 | mean word length | 60.9% | mean word length | 59.6% | 58.9% |
| EN everyday (text) | 11 | sentence length variance | 69.3% | title-case words/100w | 61.1% | 63.6% |
| EN images (image) | 43 | file bytes | 51.2% | file bytes | 50.0% | 49.4% |
| EN posters (image) | 9 | file bytes | 55.6% | width | 50.0% | 50.0% |
| EN mixed (text) | 79 | sentence length variance | 58.1% | mean word length | 58.1% | 59.5% |
| EN mixed (image) | 43 | file bytes | 51.2% | file bytes | 50.0% | 49.4% |
| EN mixed (all) | 122 | text: sentence length variance | 55.4% | text: mean word length | 55.4% | 50.7% |
| CS literatura (text) | 40 | mean word length | 63.8% | sentence length variance | 61.3% | 69.6% |
| CS bezne (text) | 15 | diacritics ratio | 65.8% | title-case words/100w | 61.7% | 50.8% |
| CS obrazky (image) | 43 | file bytes | 51.2% | width | 50.0% | 50.0% |
| CS plakaty (image) | 9 | file bytes | 55.6% | width | 50.0% | 50.0% |
| CS mixed (text) | 55 | mean word length | 60.9% | mean word length | 59.6% | 58.9% |
| CS mixed (image) | 43 | file bytes | 51.2% | width | 50.0% | 50.0% |
| CS mixed (all) | 98 | text: mean word length | 57.3% | text: mean word length | 56.4% | 52.0% |

Three round results exceed 62% LOSO. English literature reaches 63.5% on mean word length: its weighted human mean is 4.279 letters versus 4.121 for AI. English everyday writing reaches 63.6% with the logistic model. Its largest mean absolute standardised coefficients are all-capital words per 100 words (0.653), any parentheses (0.597), capitalised words per 100 words (0.487) and sentence-length variance (0.454). Czech literature reaches 69.6% with the logistic model, with the largest weights on mean word length (0.769), sentence-length variance (0.423), line-character variance (0.370) and word count (0.324). Human Czech literature has longer words on average (4.759 versus 4.476 letters) and more variable sentence lengths (205.357 versus 78.988).

These are associations in correlated features. Coefficient sizes describe the fitted models, not causal contributions. Text items and text-set membership were unchanged. The 34 sets retained from the original candidate pool and the eight new poster pairs have matching dimensions, JPEG settings and padded file lengths within each set. The restored WPA Yellowstone set retains its three earlier JPEGs, with matching dimensions but different compression settings and file lengths. File size, bytes per pixel and quantisation sum each reach 51.2% fitted accuracy across all 43 image sets and 55.6% within the nine poster sets. Every measured image feature scores 50.0% LOSO in both the general image round and the poster round. The combined image model scores 49.4% in the English general image round and 50.0% in the Czech build; it scores 50.0% in both poster rounds. All image CV features tie at chance; floating-point rounding determines which appears first in each row. No image feature exceeds 62% LOSO. This audit covers file properties, not visible image content or human accuracy.

The 34 sets retained from the candidate pool passed a local Qwen screen and were selected after blind checks by Codex gpt-6.1-sol and Gemini 3.8 Flash. The restored WPA Yellowstone poster set was selected separately and was not part of those checks. Five art pairs were then cropped identically on both sides: signatures were removed from the boulevard, cathedral-market and snowy-square paintings, and border edges from the autumn path and dusk fields. These crops were visually checked but were not sent through the model screens again. The panel’s references to N. Diaz and Hervé do not override the supplied source records: the woodland oil is credited to Bohuslav Dvořák and the snowy square to Eugène Galien-Laloue. No visible signature was found on the woodland painting.

The eight new poster pairs were selected separately from that original candidate pool. Each AI poster was the first of up to six attempts to pass a full-resolution checklist for hands, lettering, mechanics and names; the reveal gives its attempt number. In a blind check where each judge saw only one picture per set, Codex gpt-6.1-sol flagged 3 of the 8 AI posters at 60–67 % confidence and Gemini 3.8 Flash flagged none; neither called any human poster AI. Earlier versions were caught by both judges and were regenerated. These checks guided selection and do not measure human accuracy.

## Sets removed

The English Austen (*Persuasion*), Conrad (*Heart of Darkness*) and Dickens (*Great Expectations*) sets were removed before these measurements because the earlier AI imitations lacked the apostrophes present in the originals. The Achenbach shipwreck and Ender sleigh sets were removed from both languages because the reproductions and AI paintings differed in compressed file size. Seven imported AI photographs were also removed because they looked generated at a glance. The text exclusions remain. The image collection was updated before the current file-feature audit. Four early-CGI sets were removed by owner decision: evening lake (`sf78403`), green sea (`s259dae`), Baia/inlet (`s5650ca`) and ocean planet (`sd212c9`). Labelling procedural Terragen/Bryce renders as human made those sets a gotcha about the label. The WPA Yellowstone poster set (`s34d252`) was restored from commit `3db025f`, including its original records and three media files.

The image pool has 43 sets and 88 pictures (43 human, 45 AI): 10 sets from the first photo pool, 13 from the second photo pool, three from the first art pool, eight from the second art pool, the restored WPA Yellowstone poster set and eight new poster pairs. It includes photographs of people, streets, animals, interiors and still lifes, Impressionist streets and landscapes, WPA posters, labels, campaign and exhibition posters, modern graphic design, drawings and engravings. Four David Revoy sets were excluded in accordance with his stated objection to AI derivation; the Dutch digital portrait and woodcutter drawing were excluded after the panel check. The raven and Yellowstone sets each have three pictures. The text pool has 79 English and Czech sets in the English quiz and 55 Czech sets in the Czech quiz. The general image round draws up to 12 of the 43 image sets. Posters and print draws one picture from each of the nine poster sets, including Yellowstone. Mixed still allocates five sets to each category; the English Czech-text round allocates seven each to literature and everyday writing.

The [dated full measurements](../tests/surface-posters.md) include every feature, thresholds and logistic coefficients. The [historical report](../tests/surface-report.md) retains the earlier BEFORE and AFTER evidence. The [audit script](../tests/surface_audit.py) reproduces the measurements without calling models or fetching sources:

```sh
OPENBLAS_NUM_THREADS=1 uv run --with numpy --with pillow python3 tests/surface_audit.py --output tests/surface-posters
```
