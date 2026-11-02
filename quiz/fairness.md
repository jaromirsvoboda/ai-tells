# How we checked fairness

We measured simple surface features of the quiz items, including punctuation and sentence length; for images we measured file size, dimensions and metadata. Scores follow the quiz’s draw: equal probability of human or AI within a set, with a uniformly chosen AI imitation and the round’s category weights, giving a 50% chance baseline. Each single-feature rule and the small logistic model were cross-validated by holding out whole sets, learning only from the remaining sets. “Best CV feature” is the highest cross-validated single-feature score, while “Fit” uses all the data and is more optimistic. Feature selection and historical set removals used the same collection, so these are descriptive results from a small sample rather than an independent test on new texts.

## Results, 2 November 2026

| Round/component | Sets | Best fitted feature | Fit | Best CV feature | LOSO | Logistic LOSO |
|---|---:|---|---:|---|---:|---:|
| EN literature (text) | 13 | mean word length | 75.0% | mean word length | 63.5% | 54.8% |
| EN cestina (text) | 55 | mean word length | 60.9% | mean word length | 59.6% | 58.9% |
| EN everyday (text) | 11 | sentence length variance | 69.3% | title-case words/100w | 61.1% | 63.6% |
| EN images (image) | 38 | width | 50.0% | width | 50.0% | 50.0% |
| EN mixed (text) | 79 | sentence length variance | 58.1% | mean word length | 58.1% | 59.5% |
| EN mixed (image) | 38 | width | 50.0% | width | 50.0% | 50.0% |
| EN mixed (all) | 117 | text: sentence length variance | 55.4% | text: mean word length | 55.4% | 50.7% |
| CS literatura (text) | 40 | mean word length | 63.8% | sentence length variance | 61.3% | 69.6% |
| CS bezne (text) | 15 | diacritics ratio | 65.8% | title-case words/100w | 61.7% | 50.8% |
| CS obrazky (image) | 38 | width | 50.0% | width | 50.0% | 50.0% |
| CS mixed (text) | 55 | mean word length | 60.9% | mean word length | 59.6% | 58.9% |
| CS mixed (image) | 38 | width | 50.0% | width | 50.0% | 50.0% |
| CS mixed (all) | 93 | text: mean word length | 57.3% | text: mean word length | 56.4% | 52.0% |

Three round results exceed 62% LOSO. English literature reaches 63.5% on mean word length: its weighted human mean is 4.279 letters versus 4.121 for AI. English everyday writing reaches 63.6% with the logistic model. Its largest mean absolute standardised coefficients are all-capital words per 100 words (0.653), any parentheses (0.597), capitalised words per 100 words (0.487) and sentence-length variance (0.454). Czech literature reaches 69.6% with the logistic model, with the largest weights on mean word length (0.769), sentence-length variance (0.423), line-character variance (0.370) and word count (0.324). Human Czech literature has longer words on average (4.759 versus 4.476 letters) and more variable sentence lengths (205.357 versus 78.988).

These are associations in correlated features. Coefficient sizes describe the fitted models, not causal contributions. Text items and text-set membership were unchanged. The 38 selected image sets have matching dimensions, JPEG settings and padded file lengths within each set. Every measured image feature has 50.0% fitted accuracy and 50.0% LOSO; the combined image model also has 50.0% LOSO. Width appears first in the table because all image features tie at chance. No image feature exceeds 62% LOSO. This audit covers file properties, not visible image content or human accuracy.

The image pool passed a local Qwen screen and was selected after blind checks by Codex gpt-6.1-sol and Gemini 3.8 Flash. Five art pairs were then cropped identically on both sides: signatures were removed from the boulevard, cathedral-market and snowy-square paintings, and border edges from the autumn path and dusk fields. These crops were visually checked but were not sent through the model screens again. The panel’s references to N. Diaz and Hervé do not override the supplied source records: the woodland oil is credited to Bohuslav Dvořák and the snowy square to Eugène Galien-Laloue. No visible signature was found on the woodland painting.

## Sets removed

The English Austen (*Persuasion*), Conrad (*Heart of Darkness*) and Dickens (*Great Expectations*) sets were removed before these measurements because the earlier AI imitations lacked the apostrophes present in the originals. The Achenbach shipwreck and Ender sleigh sets were removed from both languages because the reproductions and AI paintings differed in compressed file size. Seven imported AI photographs were also removed because they looked generated at a glance. The text exclusions remain. The image collection was replaced before the current file-feature audit; image selection used the separate blind checks described above.

The image pool has 38 sets and 77 pictures: 10 sets from the first photo pool, 13 from the second photo pool, seven from the first art pool and eight from the second art pool. It includes photographs of people, streets, animals, interiors and still lifes, Impressionist streets and landscapes, early computer graphics, drawings and engravings. Four David Revoy sets were excluded in accordance with his stated objection to AI derivation; the Dutch digital portrait and woodcutter drawing were excluded after the panel check. The raven set retains three pictures. The text pool has 79 English and Czech sets in the English quiz and 55 Czech sets in the Czech quiz. The image round draws up to 12 sets. Mixed still allocates five sets to each category; the English Czech-text round allocates seven each to literature and everyday writing.

The [dated full measurements](../tests/surface-hard-pool.md) include every feature, thresholds and logistic coefficients. The [historical report](../tests/surface-report.md) retains the earlier BEFORE and AFTER evidence. The [audit script](../tests/surface_audit.py) reproduces the measurements without calling models or fetching sources:

```sh
OPENBLAS_NUM_THREADS=1 uv run --with numpy --with pillow python3 tests/surface_audit.py --output tests/surface-hard-pool
```
