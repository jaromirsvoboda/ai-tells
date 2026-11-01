# How we checked fairness

We measured simple surface features of the quiz items, including punctuation and sentence length; for images we measured file size, dimensions and metadata. Scores follow the quiz’s draw: equal probability of human or AI within a set, with a uniformly chosen AI imitation and the round’s category weights, giving a 50% chance baseline. Each single-feature rule and the small logistic model were cross-validated by holding out whole sets, learning only from the remaining sets. “Best CV feature” is the highest cross-validated single-feature score, while “Fit” uses all the data and is more optimistic. Feature selection and set removals used the same collection, so these are descriptive results from a small sample rather than an independent test on new texts.

## Results after removals

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

Punctuation-only features scored at most 58% in every text round except English literature, where single-quote or apostrophe presence reached 59.6%. In English everyday writing, sentence rhythm carries a stylistic signal: human passages vary more in sentence length, while AI passages are more even (62.7% for sentence-length variance; 73.1% for the combined model). That round has only 11 sets. The six-set image score is also uncertain: the logistic model’s 37.5% would become 62.5% if its predictions were reversed.

## Sets removed

The English Austen (*Persuasion*), Conrad (*Heart of Darkness*) and Dickens (*Great Expectations*) sets were removed because the AI imitations lacked the apostrophes present in the originals. The Achenbach shipwreck and Ender sleigh sets were removed from both languages because the reproductions and AI paintings differed in compressed file size. Six image sets remain, all photographic in subject. The text and punctuation of the retained items were preserved.

The [full surface report](../tests/surface-report.md) includes BEFORE and AFTER results, every feature, thresholds and limitations. The [audit script](../tests/surface_audit.py) reproduces the measurements without calling models or fetching sources.
