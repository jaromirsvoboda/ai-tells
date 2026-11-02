# How we checked fairness

We measured simple surface features of the quiz items, including punctuation and sentence length; for images we measured file size, dimensions and metadata. Scores follow the quiz’s draw: equal probability of human or AI within a set, with a uniformly chosen AI imitation and the round’s category weights, giving a 50% chance baseline. Each single-feature rule and the small logistic model were cross-validated by holding out whole sets, learning only from the remaining sets. “Best CV feature” is the highest cross-validated single-feature score, while “Fit” uses all the data and is more optimistic. Feature selection and historical set removals used the same collection, so these are descriptive results from a small sample rather than an independent test on new texts.

## Results, 2 November 2026

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

## Sets removed

The English Austen (*Persuasion*), Conrad (*Heart of Darkness*) and Dickens (*Great Expectations*) sets were removed before these measurements because the earlier AI imitations lacked the apostrophes present in the originals. The Achenbach shipwreck and Ender sleigh sets were removed from both languages because the reproductions and AI paintings differed in compressed file size. Seven imported AI photographs were also removed because they looked generated at a glance. Those historical exclusions remain; no further sets were removed after this audit.

The image pool has 34 sets: the six existing photo sets, 13 art sets and 15 additional photo sets. It includes photographs, paintings, posters, drawings, comics and prints. The text pool has 79 English and Czech sets in the English quiz and 55 Czech sets in the Czech quiz. The image round draws up to 12 sets. Mixed still allocates five sets to each category; the English Czech-text round allocates seven each to literature and everyday writing.

The [dated full measurements](../tests/surface-round2.md) include every feature, thresholds and logistic coefficients. The [historical report](../tests/surface-report.md) retains the earlier BEFORE and AFTER evidence. The [audit script](../tests/surface_audit.py) reproduces the measurements without calling models or fetching sources:

```sh
OPENBLAS_NUM_THREADS=1 python3 tests/surface_audit.py --output tests/surface-round2
```
