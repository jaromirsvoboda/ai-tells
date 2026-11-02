# Surface audit

Fresh visitor; 50% human, 50% uniform AI per set; category weights follow the round-robin draw. Mixed text and image components are reported separately. Feature maxima are descriptive, not a held-out choice of feature. Logistic: fixed L2=0.05, 600 gradient steps, train-only scaling, LOSO by set.

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

## EN literature (text): logistic coefficients

Largest mean absolute coefficients across held-out-set folds, after train-only standardisation. Positive predicts human. Correlated features can share weight; these are associations, not causal effects.

| Feature | Mean coefficient | Mean absolute coefficient |
|---|---:|---:|
| mean word length | 0.597916 | 0.597916 |
| line character variance | 0.470151 | 0.470151 |
| sentences | -0.464161 | 0.464161 |
| sentence length variance | -0.332333 | 0.332333 |
| mean sentence length | -0.266355 | 0.266355 |
| semicolon/100w | 0.225075 | 0.225075 |
| words | -0.220719 | 0.220719 |
| curly single quotes/apostrophes/100w | 0.0433417 | 0.123307 |

## EN literature (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 1.13865 | 1.12834 | > 2.31664 | 56.7% | 50.0% |
| any em dash | 0.384615 | 0.384615 | > -inf | 50.0% | 50.0% |
| en dash/100w | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| any en dash | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| parentheses/100w | 0.0471921 | 0.0471201 | > 0.611627 | 51.0% | 50.0% |
| any parentheses | 0.0769231 | 0.0769231 | ≤ 0.5 | 50.0% | 50.0% |
| semicolon/100w | 1.37589 | 1.31647 | > 0.778316 | 53.8% | 50.0% |
| any semicolon | 0.538462 | 0.538462 | ≤ inf | 50.0% | 50.0% |
| colon/100w | 0.143895 | 0.136029 | > 0.904996 | 55.8% | 50.0% |
| any colon | 0.153846 | 0.153846 | > -inf | 50.0% | 50.0% |
| exclamation/100w | 0.509768 | 0.508981 | > 0.778316 | 53.8% | 50.0% |
| any exclamation | 0.230769 | 0.230769 | > -inf | 50.0% | 50.0% |
| question/100w | 0.334137 | 0.337814 | ≤ 1.91392 | 52.9% | 50.0% |
| any question | 0.153846 | 0.153846 | ≤ 0.5 | 50.0% | 50.0% |
| comma/100w | 10.8867 | 10.6478 | > 12.3904 | 58.7% | 55.8% |
| any comma | 1 | 1 | ≤ inf | 50.0% | 50.0% |
| Czech open quote/100w | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| any Czech open quote | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| curly double quotes/100w | 0.242277 | 0.233172 | > 3.11326 | 53.8% | 50.0% |
| any curly double quotes | 0.0769231 | 0.0769231 | ≤ 0.5 | 50.0% | 50.0% |
| straight double quote/100w | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| guillemets/100w | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| any guillemets | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| curly single quotes/apostrophes/100w | 2.01238 | 1.87321 | > 0.886066 | 55.8% | 36.5% |
| any curly single quotes/apostrophes | 0.692308 | 0.615385 | > 0.5 | 53.8% | 53.8% |
| straight apostrophe/100w | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0.0739645 | 0.0702805 | > 0.952467 | 53.8% | 50.0% |
| any ellipsis glyph | 0.0769231 | 0.0769231 | ≤ 0.5 | 50.0% | 50.0% |
| three dots/100w | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| words | 96.1538 | 98.9808 | ≤ 113 | 60.6% | 50.0% |
| characters | 537.231 | 526.577 | ≤ 215 | 57.7% | 45.2% |
| nonempty lines | 10.1538 | 10.1538 | > -inf | 50.0% | 50.0% |
| blank lines | 0.769231 | 0.769231 | > -inf | 50.0% | 50.0% |
| mean word length | 4.27942 | 4.12052 | > 4.24012 | 75.0% | 63.5% |
| sentence length variance | 122.733 | 190.311 | ≤ 67.2296 | 60.6% | 39.4% |
| mean sentence length | 27.8244 | 28.5343 | > 17.3333 | 59.6% | 53.8% |
| sentences | 3.61538 | 3.98077 | ≤ 6.5 | 56.7% | 51.0% |
| line-initial capitals | 1 | 1 | ≤ inf | 50.0% | 50.0% |
| title-case words/100w | 15.1263 | 15.2427 | > 13.0074 | 61.5% | 57.7% |
| all-caps words/100w | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| capitals ratio | 0.0369388 | 0.0378912 | > 0.0225539 | 55.8% | 39.4% |
| digits/100w | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| diacritics ratio | 0 | 0 | ≤ inf | 50.0% | 50.0% |
| mean line characters | 128.788 | 120.831 | > 600.5 | 56.7% | 45.2% |
| line character variance | 37.6798 | 20.2034 | > 9.39109 | 61.5% | 56.7% |

## EN cestina (text): logistic coefficients

Largest mean absolute coefficients across held-out-set folds, after train-only standardisation. Positive predicts human. Correlated features can share weight; these are associations, not causal effects.

| Feature | Mean coefficient | Mean absolute coefficient |
|---|---:|---:|
| mean word length | 0.554632 | 0.554632 |
| diacritics ratio | 0.327524 | 0.327524 |
| line character variance | 0.291383 | 0.291383 |
| sentence length variance | 0.276964 | 0.276964 |
| capitals ratio | -0.27069 | 0.27069 |
| all-caps words/100w | 0.209608 | 0.209734 |
| any parentheses | -0.182376 | 0.182376 |
| curly single quotes/apostrophes/100w | 0.151811 | 0.151811 |

## EN cestina (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any em dash | 0 | 0 | > -inf | 50.0% | 50.0% |
| en dash/100w | 0.60649 | 0.481424 | > 1.46538 | 55.1% | 54.4% |
| any en dash | 0.3 | 0.254167 | > 0.5 | 52.3% | 52.3% |
| parentheses/100w | 0.946935 | 0.925504 | > 2.81746 | 51.7% | 50.0% |
| any parentheses | 0.3375 | 0.3375 | > 0.5 | 50.0% | 50.0% |
| semicolon/100w | 0.444338 | 0.433151 | > 1.06955 | 51.4% | 49.4% |
| any semicolon | 0.295833 | 0.295833 | > -inf | 50.0% | 50.0% |
| colon/100w | 0.30353 | 0.294526 | ≤ 0.722031 | 51.5% | 49.8% |
| any colon | 0.2625 | 0.2625 | > -inf | 50.0% | 50.0% |
| exclamation/100w | 0.285937 | 0.267932 | > 0.563385 | 50.9% | 50.0% |
| any exclamation | 0.15 | 0.15 | ≤ 0.5 | 50.0% | 50.0% |
| question/100w | 0.235084 | 0.233101 | > 0.563385 | 50.6% | 50.0% |
| any question | 0.0625 | 0.0625 | ≤ 0.5 | 50.0% | 50.0% |
| comma/100w | 9.97647 | 9.71359 | > 9.22531 | 53.8% | 51.1% |
| any comma | 0.9875 | 0.9875 | > -inf | 50.0% | 50.0% |
| Czech open quote/100w | 0.43205 | 0.390381 | > 1.42351 | 52.2% | 49.5% |
| any Czech open quote | 0.279167 | 0.254167 | > 0.5 | 51.3% | 51.3% |
| curly double quotes/100w | 0.419674 | 0.390381 | ≤ 0.722031 | 52.0% | 49.5% |
| any curly double quotes | 0.279167 | 0.254167 | > 0.5 | 51.3% | 51.3% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any guillemets | 0 | 0 | > -inf | 50.0% | 50.0% |
| curly single quotes/apostrophes/100w | 0.0371007 | 0.0042517 | > 1.05965 | 51.2% | 50.4% |
| any curly single quotes/apostrophes | 0.025 | 0.00416667 | > 0.5 | 51.0% | 51.0% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0.105808 | 0.103082 | > 1.06979 | 50.9% | 50.0% |
| any ellipsis glyph | 0.0875 | 0.0875 | > 0.5 | 50.0% | 50.0% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 102.929 | 104.112 | ≤ 65.5 | 52.8% | 50.3% |
| characters | 643.413 | 633.344 | > 713.5 | 54.5% | 53.9% |
| nonempty lines | 4.3375 | 4.3375 | > 5 | 50.0% | 50.0% |
| blank lines | 0.575 | 0.575 | > -inf | 50.0% | 50.0% |
| mean word length | 5.05762 | 4.90179 | > 5.32413 | 60.9% | 59.6% |
| sentence length variance | 124.181 | 59.8233 | > 74.9271 | 59.3% | 58.2% |
| mean sentence length | 21.7277 | 19.4378 | > 30.5 | 54.5% | 53.5% |
| sentences | 5.8875 | 6.24479 | ≤ 3.5 | 55.2% | 55.2% |
| line-initial capitals | 0.82659 | 0.82659 | > -inf | 50.0% | 50.0% |
| title-case words/100w | 9.33295 | 10.2294 | ≤ 11.5449 | 58.2% | 56.6% |
| all-caps words/100w | 0.135111 | 0.0797181 | > 0.899919 | 53.8% | 52.1% |
| capitals ratio | 0.0192026 | 0.0216272 | ≤ 0.0204971 | 57.5% | 54.6% |
| digits/100w | 3.4701 | 3.10879 | ≤ 1.11745 | 55.8% | 51.2% |
| diacritics ratio | 0.15679 | 0.149129 | > 0.153667 | 59.3% | 56.1% |
| mean line characters | 540.531 | 530.905 | > 700.5 | 54.6% | 54.2% |
| line character variance | 5.16197 | 2.71668 | > 9.27375 | 54.3% | 51.8% |

## EN everyday (text): logistic coefficients

Largest mean absolute coefficients across held-out-set folds, after train-only standardisation. Positive predicts human. Correlated features can share weight; these are associations, not causal effects.

| Feature | Mean coefficient | Mean absolute coefficient |
|---|---:|---:|
| all-caps words/100w | 0.652974 | 0.652974 |
| any parentheses | 0.596953 | 0.596953 |
| title-case words/100w | -0.487192 | 0.487192 |
| sentence length variance | 0.453912 | 0.453912 |
| mean word length | -0.299852 | 0.299852 |
| any en dash | 0.286426 | 0.286426 |
| en dash/100w | 0.248754 | 0.248754 |
| curly single quotes/apostrophes/100w | -0.230002 | 0.235867 |

## EN everyday (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0.275329 | 0.312098 | > 2.30007 | 53.4% | 47.7% |
| any em dash | 0.181818 | 0.227273 | ≤ 0.5 | 52.3% | 50.0% |
| en dash/100w | 0.224021 | 0.0974485 | > 0.668964 | 59.5% | 57.7% |
| any en dash | 0.272727 | 0.118182 | > 0.5 | 57.7% | 57.7% |
| parentheses/100w | 2.2846 | 1.89331 | > 1.34234 | 60.7% | 56.1% |
| any parentheses | 1 | 0.859091 | > 0.5 | 57.0% | 57.0% |
| semicolon/100w | 0.0614251 | 0.0485727 | > 0.668964 | 52.7% | 50.0% |
| any semicolon | 0.0909091 | 0.0727273 | > 0.5 | 50.9% | 50.0% |
| colon/100w | 0.0614251 | 0.0485727 | > 0.668964 | 52.7% | 50.0% |
| any colon | 0.0909091 | 0.0727273 | > 0.5 | 50.9% | 50.0% |
| exclamation/100w | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| any exclamation | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| question/100w | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| any question | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| comma/100w | 6.25951 | 5.72823 | > 6.52251 | 57.7% | 51.1% |
| any comma | 1 | 1 | ≤ -inf | 50.0% | 50.0% |
| Czech open quote/100w | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| any Czech open quote | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| curly double quotes/100w | 1.99319 | 1.83591 | > 2.68468 | 56.8% | 50.5% |
| any curly double quotes | 0.545455 | 0.536364 | > 0.5 | 50.5% | 42.7% |
| straight double quote/100w | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| guillemets/100w | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| any guillemets | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| curly single quotes/apostrophes/100w | 0.484107 | 0.705028 | ≤ 0.3125 | 55.7% | 41.4% |
| any curly single quotes/apostrophes | 0.363636 | 0.477273 | ≤ 0.5 | 55.7% | 55.7% |
| straight apostrophe/100w | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| any ellipsis glyph | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| three dots/100w | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| words | 126.091 | 127.327 | ≤ 149 | 57.3% | 52.7% |
| characters | 782.364 | 776.177 | > 781.5 | 57.0% | 51.4% |
| nonempty lines | 1 | 1 | ≤ -inf | 50.0% | 50.0% |
| blank lines | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| mean word length | 4.96801 | 4.90022 | ≤ 4.50098 | 57.0% | 40.9% |
| sentence length variance | 117.959 | 83.2593 | > 97.3985 | 69.3% | 60.7% |
| mean sentence length | 23.5615 | 23.4996 | ≤ 21.4524 | 56.4% | 49.1% |
| sentences | 5.72727 | 5.74545 | ≤ 3.5 | 52.3% | 48.9% |
| line-initial capitals | 1 | 1 | ≤ -inf | 50.0% | 50.0% |
| title-case words/100w | 11.5853 | 12.7147 | ≤ 6.08402 | 66.8% | 61.1% |
| all-caps words/100w | 1.01142 | 0.620113 | > 1.86051 | 64.1% | 56.4% |
| capitals ratio | 0.0317334 | 0.0315673 | ≤ 0.0247981 | 56.4% | 41.8% |
| digits/100w | 9.17257 | 7.94168 | ≤ 3.1373 | 60.9% | 51.8% |
| diacritics ratio | 0 | 2.09952e-05 | ≤ 0.000577367 | 50.9% | 50.0% |
| mean line characters | 782.364 | 776.177 | > 781.5 | 57.0% | 51.4% |
| line character variance | 0 | 0 | ≤ -inf | 50.0% | 50.0% |

## EN images (image): logistic coefficients

Largest mean absolute coefficients across held-out-set folds, after train-only standardisation. Positive predicts human. Correlated features can share weight; these are associations, not causal effects.

| Feature | Mean coefficient | Mean absolute coefficient |
|---|---:|---:|
| quantization sum | -0.34017 | 0.34017 |
| RGB channels | 0.157008 | 0.157008 |
| progressive | -0.0537704 | 0.0537704 |
| file bytes | -0.0270995 | 0.0270995 |
| height | -0.026805 | 0.026805 |
| width | 0.0253767 | 0.0253767 |
| bytes/pixel | -0.0229059 | 0.023425 |
| JFIF x density | 0.00324243 | 0.00353692 |

## EN images (image)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| width | 1001.24 | 1001.24 | > -inf | 50.0% | 50.0% |
| height | 951 | 951 | > -inf | 50.0% | 50.0% |
| file bytes | 162522 | 164071 | ≤ 215928 | 54.4% | 48.5% |
| bytes/pixel | 0.170344 | 0.172034 | ≤ 0.187919 | 55.9% | 52.9% |
| EXIF entries | 0 | 0 | > -inf | 50.0% | 50.0% |
| ICC bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| comment bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| RGB channels | 2.88235 | 2.88235 | > -inf | 50.0% | 50.0% |
| JFIF unit | 0.558824 | 0.558824 | > -inf | 50.0% | 50.0% |
| JFIF x density | 40.6765 | 40.6765 | > -inf | 50.0% | 50.0% |
| JFIF y density | 40.6765 | 40.6765 | > -inf | 50.0% | 50.0% |
| progressive | 0.176471 | 0.176471 | > -inf | 50.0% | 50.0% |
| quantization sum | 3365.82 | 3669.68 | ≤ 3417.5 | 61.8% | 58.8% |

## EN mixed (text): logistic coefficients

Largest mean absolute coefficients across held-out-set folds, after train-only standardisation. Positive predicts human. Correlated features can share weight; these are associations, not causal effects.

| Feature | Mean coefficient | Mean absolute coefficient |
|---|---:|---:|
| mean word length | 0.38684 | 0.38684 |
| all-caps words/100w | 0.270074 | 0.270074 |
| words | -0.197767 | 0.197767 |
| line character variance | 0.177514 | 0.177514 |
| any en dash | 0.172647 | 0.172647 |
| title-case words/100w | -0.16919 | 0.16919 |
| sentence length variance | 0.159304 | 0.159304 |
| capitals ratio | -0.126825 | 0.126825 |

## EN mixed (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0.197889 | 0.204402 | > 2.31664 | 51.5% | 51.1% |
| any em dash | 0.0856313 | 0.0952467 | ≤ 0.5 | 50.5% | 49.5% |
| en dash/100w | 0.480275 | 0.37499 | > 1.09293 | 53.8% | 51.4% |
| any en dash | 0.266328 | 0.204971 | > 0.5 | 53.1% | 53.1% |
| parentheses/100w | 1.04243 | 0.946399 | > 1.34234 | 52.5% | 51.5% |
| any parentheses | 0.422351 | 0.392544 | > 0.5 | 51.5% | 51.5% |
| semicolon/100w | 0.5105 | 0.491663 | > 1.06955 | 51.0% | 50.0% |
| any semicolon | 0.302612 | 0.298766 | > 0.5 | 50.2% | 50.2% |
| colon/100w | 0.244277 | 0.233839 | > 0.904996 | 50.9% | 49.9% |
| any colon | 0.218433 | 0.214586 | > 0.5 | 50.2% | 50.2% |
| exclamation/100w | 0.278321 | 0.264635 | > 0.563385 | 50.7% | 50.0% |
| any exclamation | 0.141509 | 0.141509 | > 0.5 | 50.0% | 50.0% |
| question/100w | 0.218401 | 0.217355 | > 0.563385 | 50.5% | 50.0% |
| any question | 0.0660377 | 0.0660377 | > 0.5 | 50.0% | 50.0% |
| comma/100w | 9.46225 | 9.13986 | > 9.22531 | 52.6% | 49.8% |
| any comma | 0.990566 | 0.990566 | > inf | 50.0% | 50.0% |
| Czech open quote/100w | 0.281275 | 0.250218 | > 1.42351 | 51.4% | 49.9% |
| any Czech open quote | 0.18106 | 0.162192 | > 0.5 | 50.9% | 50.9% |
| curly double quotes/100w | 0.723284 | 0.667181 | > 2.68468 | 51.9% | 51.0% |
| any curly double quotes | 0.305878 | 0.285087 | > 0.5 | 51.0% | 51.0% |
| straight double quote/100w | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| guillemets/100w | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| any guillemets | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| curly single quotes/apostrophes/100w | 0.37721 | 0.382083 | > 0.858385 | 52.1% | 50.5% |
| any curly single quotes/apostrophes | 0.180697 | 0.179578 | > 0.5 | 50.1% | 43.9% |
| straight apostrophe/100w | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0.0889261 | 0.0864169 | > 1.06979 | 50.7% | 50.0% |
| any ellipsis glyph | 0.0754717 | 0.0754717 | > -inf | 50.0% | 50.0% |
| three dots/100w | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | ≤ -inf | 50.0% | 50.0% |
| words | 106.944 | 108.45 | ≤ 92.5 | 52.1% | 50.3% |
| characters | 657.082 | 647.204 | > 561 | 53.8% | 50.9% |
| nonempty lines | 4.64151 | 4.64151 | > -inf | 50.0% | 50.0% |
| blank lines | 0.528302 | 0.528302 | > -inf | 50.0% | 50.0% |
| mean word length | 4.9167 | 4.7678 | > 5.32419 | 58.1% | 58.1% |
| sentence length variance | 129.904 | 82.4877 | > 77.0306 | 58.1% | 57.5% |
| mean sentence length | 23.3303 | 21.745 | > 26.6333 | 53.8% | 50.5% |
| sentences | 5.49383 | 5.78399 | ≤ 3.5 | 54.3% | 54.3% |
| line-initial capitals | 0.869124 | 0.869124 | > -inf | 50.0% | 50.0% |
| title-case words/100w | 10.2575 | 11.112 | ≤ 11.5587 | 56.0% | 56.0% |
| all-caps words/100w | 0.291904 | 0.17764 | > 1.33793 | 54.3% | 52.1% |
| capitals ratio | 0.0235443 | 0.0252856 | ≤ 0.0248655 | 55.1% | 50.5% |
| digits/100w | 3.94902 | 3.4805 | ≤ 1.11745 | 53.5% | 46.8% |
| diacritics ratio | 0.103995 | 0.0995414 | > 0.153667 | 55.7% | 54.5% |
| mean line characters | 529.344 | 520.131 | > 559.5 | 53.5% | 49.4% |
| line character variance | 8.51694 | 4.5281 | > 9.27375 | 54.5% | 54.0% |

## EN mixed (image): logistic coefficients

Largest mean absolute coefficients across held-out-set folds, after train-only standardisation. Positive predicts human. Correlated features can share weight; these are associations, not causal effects.

| Feature | Mean coefficient | Mean absolute coefficient |
|---|---:|---:|
| quantization sum | -0.34017 | 0.34017 |
| RGB channels | 0.157008 | 0.157008 |
| progressive | -0.0537704 | 0.0537704 |
| file bytes | -0.0270995 | 0.0270995 |
| height | -0.026805 | 0.026805 |
| width | 0.0253767 | 0.0253767 |
| bytes/pixel | -0.0229059 | 0.023425 |
| JFIF x density | 0.00324243 | 0.00353692 |

## EN mixed (image)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| width | 1001.24 | 1001.24 | > -inf | 50.0% | 50.0% |
| height | 951 | 951 | > -inf | 50.0% | 50.0% |
| file bytes | 162522 | 164071 | ≤ 215928 | 54.4% | 48.5% |
| bytes/pixel | 0.170344 | 0.172034 | ≤ 0.187919 | 55.9% | 52.9% |
| EXIF entries | 0 | 0 | > -inf | 50.0% | 50.0% |
| ICC bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| comment bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| RGB channels | 2.88235 | 2.88235 | > -inf | 50.0% | 50.0% |
| JFIF unit | 0.558824 | 0.558824 | > -inf | 50.0% | 50.0% |
| JFIF x density | 40.6765 | 40.6765 | > -inf | 50.0% | 50.0% |
| JFIF y density | 40.6765 | 40.6765 | > -inf | 50.0% | 50.0% |
| progressive | 0.176471 | 0.176471 | > -inf | 50.0% | 50.0% |
| quantization sum | 3365.82 | 3669.68 | ≤ 3417.5 | 61.8% | 58.8% |

## EN mixed (all): logistic coefficients

Largest mean absolute coefficients across held-out-set folds, after train-only standardisation. Positive predicts human. Correlated features can share weight; these are associations, not causal effects.

| Feature | Mean coefficient | Mean absolute coefficient |
|---|---:|---:|
| text: all-caps words/100w | 0.244483 | 0.244483 |
| text: words | -0.2125 | 0.2125 |
| text: capitals ratio | -0.20592 | 0.20592 |
| text: title-case words/100w | -0.168974 | 0.168974 |
| text: sentence length variance | 0.144393 | 0.144393 |
| text: line character variance | 0.141635 | 0.141635 |
| text: sentences | -0.140593 | 0.140593 |
| image: quantization sum | -0.137128 | 0.137128 |

## EN mixed (all)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| image: EXIF entries | 0 | 0 | > inf | 50.0% | 50.0% |
| image: ICC bytes | 0 | 0 | > inf | 50.0% | 50.0% |
| image: JFIF unit | 0.186275 | 0.186275 | > 0.5 | 50.0% | 50.0% |
| image: JFIF x density | 13.5588 | 13.5588 | > 0.5 | 50.0% | 50.0% |
| image: JFIF y density | 13.5588 | 13.5588 | > 0.5 | 50.0% | 50.0% |
| image: RGB channels | 0.960784 | 0.960784 | > 0.5 | 50.0% | 50.0% |
| image: bytes/pixel | 0.0567813 | 0.0573445 | ≤ 0.187919 | 52.0% | 51.0% |
| image: comment bytes | 0 | 0 | > inf | 50.0% | 50.0% |
| image: file bytes | 54173.8 | 54690.3 | ≤ 215928 | 51.5% | 49.5% |
| image: height | 317 | 317 | > 262.5 | 50.0% | 50.0% |
| image: progressive | 0.0588235 | 0.0588235 | > 0.5 | 50.0% | 50.0% |
| image: quantization sum | 1121.94 | 1223.23 | ≤ 3417.5 | 53.9% | 52.9% |
| image: width | 333.745 | 333.745 | > 262.5 | 50.0% | 50.0% |
| text: Czech open quote/100w | 0.187517 | 0.166812 | > 1.42351 | 51.0% | 49.9% |
| text: all-caps words/100w | 0.194603 | 0.118427 | > 1.33793 | 52.9% | 51.4% |
| text: any Czech open quote | 0.120706 | 0.108128 | > 0.5 | 50.6% | 50.6% |
| text: any colon | 0.145622 | 0.143058 | > 0.5 | 50.1% | 49.9% |
| text: any comma | 0.660377 | 0.660377 | > inf | 50.0% | 50.0% |
| text: any curly double quotes | 0.203919 | 0.190058 | > 0.5 | 50.7% | 50.7% |
| text: any curly single quotes/apostrophes | 0.120464 | 0.119719 | > 0.5 | 50.0% | 45.9% |
| text: any ellipsis glyph | 0.0503145 | 0.0503145 | > 0.5 | 50.0% | 50.0% |
| text: any em dash | 0.0570876 | 0.0634978 | ≤ 0.5 | 50.3% | 50.3% |
| text: any en dash | 0.177552 | 0.136647 | > 0.5 | 52.0% | 52.0% |
| text: any exclamation | 0.0943396 | 0.0943396 | ≤ -inf | 50.0% | 50.0% |
| text: any guillemets | 0 | 0 | > inf | 50.0% | 50.0% |
| text: any parentheses | 0.281567 | 0.261696 | > 0.5 | 51.0% | 51.0% |
| text: any question | 0.0440252 | 0.0440252 | ≤ -inf | 50.0% | 50.0% |
| text: any semicolon | 0.201742 | 0.199178 | > 0.5 | 50.1% | 49.9% |
| text: any spaced dots | 0 | 0 | > inf | 50.0% | 50.0% |
| text: any straight apostrophe | 0 | 0 | > inf | 50.0% | 50.0% |
| text: any straight double quote | 0 | 0 | > inf | 50.0% | 50.0% |
| text: any three dots | 0 | 0 | > inf | 50.0% | 50.0% |
| text: blank lines | 0.352201 | 0.352201 | > 0.5 | 50.0% | 50.0% |
| text: capitals ratio | 0.0156962 | 0.016857 | ≤ 0.0248655 | 53.4% | 50.3% |
| text: characters | 438.055 | 431.47 | > 561 | 52.6% | 50.6% |
| text: colon/100w | 0.162852 | 0.155892 | > 0.904996 | 50.6% | 49.9% |
| text: comma/100w | 6.30817 | 6.09324 | > 9.22531 | 51.7% | 50.0% |
| text: curly double quotes/100w | 0.482189 | 0.444787 | > 2.68468 | 51.3% | 50.6% |
| text: curly single quotes/apostrophes/100w | 0.251473 | 0.254722 | > 0.858385 | 51.4% | 50.4% |
| text: diacritics ratio | 0.0693299 | 0.066361 | > 0.153667 | 53.8% | 53.0% |
| text: digits/100w | 2.63268 | 2.32033 | ≤ 1.11745 | 52.3% | 47.9% |
| text: ellipsis glyph/100w | 0.0592841 | 0.0576113 | > 1.06979 | 50.4% | 50.0% |
| text: em dash/100w | 0.131926 | 0.136268 | > 2.31664 | 51.0% | 50.7% |
| text: en dash/100w | 0.320183 | 0.249993 | > 1.09293 | 52.6% | 51.0% |
| text: exclamation/100w | 0.185547 | 0.176424 | > 0.563385 | 50.5% | 50.0% |
| text: guillemets/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: line character variance | 5.67796 | 3.01873 | > 9.27375 | 53.0% | 52.7% |
| text: line-initial capitals | 0.579416 | 0.579416 | > inf | 50.0% | 50.0% |
| text: mean line characters | 352.896 | 346.754 | > 559.5 | 52.3% | 49.6% |
| text: mean sentence length | 15.5535 | 14.4967 | > 26.6333 | 52.5% | 50.3% |
| text: mean word length | 3.2778 | 3.17853 | > 5.32419 | 55.4% | 55.4% |
| text: nonempty lines | 3.09434 | 3.09434 | > 3.5 | 50.0% | 50.0% |
| text: parentheses/100w | 0.694953 | 0.630932 | > 1.34234 | 51.7% | 51.0% |
| text: question/100w | 0.1456 | 0.144903 | > 0.563385 | 50.3% | 50.0% |
| text: semicolon/100w | 0.340333 | 0.327775 | > 1.06955 | 50.7% | 50.0% |
| text: sentence length variance | 86.6026 | 54.9918 | > 77.0306 | 55.4% | 55.0% |
| text: sentences | 3.66255 | 3.856 | ≤ 3.5 | 52.9% | 52.9% |
| text: spaced dots/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: straight apostrophe/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: straight double quote/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: three dots/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: title-case words/100w | 6.83831 | 7.408 | ≤ 11.5587 | 54.0% | 54.0% |
| text: words | 71.2961 | 72.2999 | ≤ 92.5 | 51.4% | 50.2% |
| is image | 0.333333 | 0.333333 | > 0.5 | 50.0% | 50.0% |

## CS literatura (text): logistic coefficients

Largest mean absolute coefficients across held-out-set folds, after train-only standardisation. Positive predicts human. Correlated features can share weight; these are associations, not causal effects.

| Feature | Mean coefficient | Mean absolute coefficient |
|---|---:|---:|
| mean word length | 0.768814 | 0.768814 |
| sentence length variance | 0.422813 | 0.422813 |
| line character variance | 0.370415 | 0.370415 |
| words | -0.323755 | 0.323755 |
| capitals ratio | -0.229732 | 0.229732 |
| curly single quotes/apostrophes/100w | 0.215441 | 0.215441 |
| blank lines | 0.207917 | 0.207917 |
| sentences | 0.19271 | 0.19271 |

## CS literatura (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| any em dash | 0 | 0 | > inf | 50.0% | 50.0% |
| en dash/100w | 0.933521 | 0.862024 | > 1.46538 | 53.4% | 51.3% |
| any en dash | 0.4 | 0.375 | > 0.5 | 51.2% | 50.0% |
| parentheses/100w | 0.0793217 | 0.0693725 | > 0.738017 | 51.9% | 50.3% |
| any parentheses | 0.075 | 0.075 | ≤ -inf | 50.0% | 50.0% |
| semicolon/100w | 0.814602 | 0.787865 | > 1.06955 | 52.7% | 50.6% |
| any semicolon | 0.525 | 0.525 | ≤ -inf | 50.0% | 50.0% |
| colon/100w | 0.433344 | 0.415783 | > 2.33926 | 51.9% | 50.0% |
| any colon | 0.325 | 0.325 | ≤ -inf | 50.0% | 50.0% |
| exclamation/100w | 0.571875 | 0.535865 | > 0.563385 | 51.9% | 50.0% |
| any exclamation | 0.3 | 0.3 | ≤ -inf | 50.0% | 50.0% |
| question/100w | 0.470167 | 0.466201 | > 0.563385 | 51.3% | 50.0% |
| any question | 0.125 | 0.125 | ≤ -inf | 50.0% | 50.0% |
| comma/100w | 11.7811 | 11.4544 | > 11.0674 | 53.6% | 49.1% |
| any comma | 0.975 | 0.975 | > inf | 50.0% | 50.0% |
| Czech open quote/100w | 0.360139 | 0.281209 | > 0.282486 | 52.5% | 50.0% |
| any Czech open quote | 0.225 | 0.175 | > 0.5 | 52.5% | 52.5% |
| curly double quotes/100w | 0.335387 | 0.281209 | > 0.282486 | 52.5% | 50.0% |
| any curly double quotes | 0.225 | 0.175 | > 0.5 | 52.5% | 52.5% |
| straight double quote/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > inf | 50.0% | 50.0% |
| guillemets/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| any guillemets | 0 | 0 | > inf | 50.0% | 50.0% |
| curly single quotes/apostrophes/100w | 0.0742015 | 0.0085034 | > 1.05965 | 52.5% | 50.8% |
| any curly single quotes/apostrophes | 0.05 | 0.00833333 | > 0.5 | 52.1% | 52.1% |
| straight apostrophe/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0.211616 | 0.206164 | > 1.06979 | 51.8% | 50.0% |
| any ellipsis glyph | 0.175 | 0.175 | > 0.5 | 50.0% | 50.0% |
| three dots/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > inf | 50.0% | 50.0% |
| words | 102.325 | 104.742 | ≤ 93.5 | 53.6% | 52.1% |
| characters | 613.025 | 596.671 | > 713.5 | 58.1% | 56.6% |
| nonempty lines | 7.675 | 7.675 | ≤ -inf | 50.0% | 50.0% |
| blank lines | 1.15 | 1.15 | > 0.5 | 50.0% | 50.0% |
| mean word length | 4.75922 | 4.47604 | > 4.86218 | 63.8% | 59.4% |
| sentence length variance | 205.357 | 78.9879 | > 139.056 | 61.3% | 61.3% |
| mean sentence length | 26.9806 | 23.1771 | > 30.5 | 58.1% | 57.1% |
| sentences | 4.975 | 5.37292 | ≤ 3.5 | 59.6% | 59.6% |
| line-initial capitals | 0.65318 | 0.65318 | ≤ -inf | 50.0% | 50.0% |
| title-case words/100w | 6.38075 | 7.32748 | ≤ 5.1159 | 59.5% | 57.0% |
| all-caps words/100w | 0 | 0.00529661 | ≤ 0.423729 | 50.3% | 50.0% |
| capitals ratio | 0.0137555 | 0.016689 | ≤ 0.0115164 | 63.2% | 60.4% |
| digits/100w | 0.075188 | 0.0787306 | > 2.91221 | 50.6% | 47.5% |
| diacritics ratio | 0.152304 | 0.151871 | ≤ 0.16536 | 56.4% | 45.0% |
| mean line characters | 407.261 | 391.794 | > 700.5 | 58.4% | 57.5% |
| line character variance | 10.3239 | 5.43336 | > 9.27375 | 58.5% | 53.5% |

## CS bezne (text): logistic coefficients

Largest mean absolute coefficients across held-out-set folds, after train-only standardisation. Positive predicts human. Correlated features can share weight; these are associations, not causal effects.

| Feature | Mean coefficient | Mean absolute coefficient |
|---|---:|---:|
| diacritics ratio | 0.890678 | 0.890678 |
| mean word length | 0.318852 | 0.318852 |
| capitals ratio | -0.291968 | 0.291968 |
| all-caps words/100w | 0.24641 | 0.280809 |
| sentences | -0.250242 | 0.250242 |
| en dash/100w | 0.249938 | 0.249938 |
| parentheses/100w | 0.248646 | 0.248646 |
| characters | 0.191212 | 0.191212 |

## CS bezne (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any em dash | 0 | 0 | > -inf | 50.0% | 50.0% |
| en dash/100w | 0.27946 | 0.100824 | > 1.17808 | 56.7% | 53.3% |
| any en dash | 0.2 | 0.133333 | > 0.5 | 53.3% | 50.0% |
| parentheses/100w | 1.81455 | 1.78164 | > 2.81746 | 53.3% | 50.0% |
| any parentheses | 0.6 | 0.6 | > -inf | 50.0% | 50.0% |
| semicolon/100w | 0.0740741 | 0.0784368 | ≤ 1.13695 | 53.3% | 50.0% |
| any semicolon | 0.0666667 | 0.0666667 | > -inf | 50.0% | 50.0% |
| colon/100w | 0.173715 | 0.173269 | ≤ 0.722031 | 53.3% | 50.0% |
| any colon | 0.2 | 0.2 | > -inf | 50.0% | 50.0% |
| exclamation/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any exclamation | 0 | 0 | > -inf | 50.0% | 50.0% |
| question/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any question | 0 | 0 | > -inf | 50.0% | 50.0% |
| comma/100w | 8.17182 | 7.97278 | > 8.9011 | 55.0% | 50.0% |
| any comma | 1 | 1 | > -inf | 50.0% | 50.0% |
| Czech open quote/100w | 0.50396 | 0.499553 | ≤ 0.722031 | 55.0% | 51.7% |
| any Czech open quote | 0.333333 | 0.333333 | > -inf | 50.0% | 50.0% |
| curly double quotes/100w | 0.50396 | 0.499553 | ≤ 0.722031 | 55.0% | 51.7% |
| any curly double quotes | 0.333333 | 0.333333 | > -inf | 50.0% | 50.0% |
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
| words | 103.533 | 103.483 | > 137.5 | 55.8% | 52.5% |
| characters | 673.8 | 670.017 | > 551.5 | 56.7% | 50.0% |
| nonempty lines | 1 | 1 | > -inf | 50.0% | 50.0% |
| blank lines | 0 | 0 | > -inf | 50.0% | 50.0% |
| mean word length | 5.35602 | 5.32754 | > 5.32716 | 63.3% | 60.8% |
| sentence length variance | 43.0061 | 40.6586 | > 75.9889 | 59.2% | 52.5% |
| mean sentence length | 16.4747 | 15.6985 | > 12.6182 | 60.0% | 55.8% |
| sentences | 6.8 | 7.11667 | ≤ 10.5 | 55.0% | 50.0% |
| line-initial capitals | 1 | 1 | > -inf | 50.0% | 50.0% |
| title-case words/100w | 12.2851 | 13.1313 | ≤ 11.5449 | 65.8% | 61.7% |
| all-caps words/100w | 0.270223 | 0.15414 | > 0.889414 | 57.5% | 54.2% |
| capitals ratio | 0.0246498 | 0.0265654 | ≤ 0.0332404 | 61.7% | 55.0% |
| digits/100w | 6.86501 | 6.13885 | ≤ 1.11745 | 61.7% | 52.5% |
| diacritics ratio | 0.161275 | 0.146388 | > 0.159167 | 65.8% | 55.0% |
| mean line characters | 673.8 | 670.017 | > 551.5 | 56.7% | 50.0% |
| line character variance | 0 | 0 | > -inf | 50.0% | 50.0% |

## CS obrazky (image): logistic coefficients

Largest mean absolute coefficients across held-out-set folds, after train-only standardisation. Positive predicts human. Correlated features can share weight; these are associations, not causal effects.

| Feature | Mean coefficient | Mean absolute coefficient |
|---|---:|---:|
| quantization sum | -0.34017 | 0.34017 |
| RGB channels | 0.157008 | 0.157008 |
| progressive | -0.0537704 | 0.0537704 |
| file bytes | -0.0270995 | 0.0270995 |
| height | -0.026805 | 0.026805 |
| width | 0.0253767 | 0.0253767 |
| bytes/pixel | -0.0229059 | 0.023425 |
| JFIF unit | 0.00324243 | 0.00353692 |

## CS obrazky (image)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| width | 1001.24 | 1001.24 | > -inf | 50.0% | 50.0% |
| height | 951 | 951 | > -inf | 50.0% | 50.0% |
| file bytes | 162522 | 164071 | ≤ 215928 | 54.4% | 48.5% |
| bytes/pixel | 0.170344 | 0.172034 | ≤ 0.187919 | 55.9% | 52.9% |
| EXIF entries | 0 | 0 | > -inf | 50.0% | 50.0% |
| ICC bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| comment bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| RGB channels | 2.88235 | 2.88235 | > -inf | 50.0% | 50.0% |
| JFIF unit | 0.558824 | 0.558824 | > -inf | 50.0% | 50.0% |
| JFIF x density | 40.6765 | 40.6765 | > -inf | 50.0% | 50.0% |
| JFIF y density | 40.6765 | 40.6765 | > -inf | 50.0% | 50.0% |
| progressive | 0.176471 | 0.176471 | > -inf | 50.0% | 50.0% |
| quantization sum | 3365.82 | 3669.68 | ≤ 3417.5 | 61.8% | 58.8% |

## CS mixed (text): logistic coefficients

Largest mean absolute coefficients across held-out-set folds, after train-only standardisation. Positive predicts human. Correlated features can share weight; these are associations, not causal effects.

| Feature | Mean coefficient | Mean absolute coefficient |
|---|---:|---:|
| mean word length | 0.554632 | 0.554632 |
| diacritics ratio | 0.327524 | 0.327524 |
| line character variance | 0.291383 | 0.291383 |
| sentence length variance | 0.276964 | 0.276964 |
| capitals ratio | -0.27069 | 0.27069 |
| all-caps words/100w | 0.209608 | 0.209734 |
| any parentheses | -0.182376 | 0.182376 |
| curly single quotes/apostrophes/100w | 0.151811 | 0.151811 |

## CS mixed (text)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| em dash/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any em dash | 0 | 0 | > -inf | 50.0% | 50.0% |
| en dash/100w | 0.60649 | 0.481424 | > 1.46538 | 55.1% | 54.0% |
| any en dash | 0.3 | 0.254167 | > 0.5 | 52.3% | 52.3% |
| parentheses/100w | 0.946935 | 0.925504 | > 2.81746 | 51.7% | 50.0% |
| any parentheses | 0.3375 | 0.3375 | > -inf | 50.0% | 50.0% |
| semicolon/100w | 0.444338 | 0.433151 | > 1.06955 | 51.4% | 49.4% |
| any semicolon | 0.295833 | 0.295833 | > -inf | 50.0% | 50.0% |
| colon/100w | 0.30353 | 0.294526 | ≤ 0.722031 | 51.5% | 49.8% |
| any colon | 0.2625 | 0.2625 | > -inf | 50.0% | 50.0% |
| exclamation/100w | 0.285937 | 0.267932 | > 0.563385 | 50.9% | 50.0% |
| any exclamation | 0.15 | 0.15 | > -inf | 50.0% | 50.0% |
| question/100w | 0.235084 | 0.233101 | > 0.563385 | 50.6% | 50.0% |
| any question | 0.0625 | 0.0625 | > -inf | 50.0% | 50.0% |
| comma/100w | 9.97647 | 9.71359 | > 9.22531 | 53.8% | 51.1% |
| any comma | 0.9875 | 0.9875 | > -inf | 50.0% | 50.0% |
| Czech open quote/100w | 0.43205 | 0.390381 | > 1.42351 | 52.2% | 49.5% |
| any Czech open quote | 0.279167 | 0.254167 | > 0.5 | 51.3% | 51.3% |
| curly double quotes/100w | 0.419674 | 0.390381 | ≤ 0.722031 | 52.0% | 49.5% |
| any curly double quotes | 0.279167 | 0.254167 | > 0.5 | 51.3% | 51.3% |
| straight double quote/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight double quote | 0 | 0 | > -inf | 50.0% | 50.0% |
| guillemets/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any guillemets | 0 | 0 | > -inf | 50.0% | 50.0% |
| curly single quotes/apostrophes/100w | 0.0371007 | 0.0042517 | > 1.05965 | 51.3% | 50.4% |
| any curly single quotes/apostrophes | 0.025 | 0.00416667 | > 0.5 | 51.0% | 51.0% |
| straight apostrophe/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any straight apostrophe | 0 | 0 | > -inf | 50.0% | 50.0% |
| ellipsis glyph/100w | 0.105808 | 0.103082 | > 1.06979 | 50.9% | 50.0% |
| any ellipsis glyph | 0.0875 | 0.0875 | > -inf | 50.0% | 50.0% |
| three dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any three dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| spaced dots/100w | 0 | 0 | > -inf | 50.0% | 50.0% |
| any spaced dots | 0 | 0 | > -inf | 50.0% | 50.0% |
| words | 102.929 | 104.112 | ≤ 65.5 | 52.8% | 50.3% |
| characters | 643.412 | 633.344 | > 713.5 | 54.5% | 53.9% |
| nonempty lines | 4.3375 | 4.3375 | > -inf | 50.0% | 50.0% |
| blank lines | 0.575 | 0.575 | > -inf | 50.0% | 50.0% |
| mean word length | 5.05762 | 4.90179 | > 5.32413 | 60.9% | 59.6% |
| sentence length variance | 124.181 | 59.8233 | > 74.9271 | 59.3% | 58.2% |
| mean sentence length | 21.7277 | 19.4378 | > 30.5 | 54.5% | 53.5% |
| sentences | 5.8875 | 6.24479 | ≤ 3.5 | 55.2% | 55.2% |
| line-initial capitals | 0.82659 | 0.82659 | > -inf | 50.0% | 50.0% |
| title-case words/100w | 9.33295 | 10.2294 | ≤ 11.5449 | 58.2% | 56.6% |
| all-caps words/100w | 0.135111 | 0.0797181 | > 0.899919 | 53.8% | 52.1% |
| capitals ratio | 0.0192026 | 0.0216272 | ≤ 0.0204971 | 57.5% | 54.6% |
| digits/100w | 3.4701 | 3.10879 | ≤ 1.11745 | 55.8% | 54.2% |
| diacritics ratio | 0.15679 | 0.149129 | > 0.153667 | 59.3% | 56.1% |
| mean line characters | 540.531 | 530.905 | > 700.5 | 54.6% | 54.2% |
| line character variance | 5.16197 | 2.71668 | > 9.27375 | 54.3% | 51.8% |

## CS mixed (image): logistic coefficients

Largest mean absolute coefficients across held-out-set folds, after train-only standardisation. Positive predicts human. Correlated features can share weight; these are associations, not causal effects.

| Feature | Mean coefficient | Mean absolute coefficient |
|---|---:|---:|
| quantization sum | -0.34017 | 0.34017 |
| RGB channels | 0.157008 | 0.157008 |
| progressive | -0.0537704 | 0.0537704 |
| file bytes | -0.0270995 | 0.0270995 |
| height | -0.026805 | 0.026805 |
| width | 0.0253767 | 0.0253767 |
| bytes/pixel | -0.0229059 | 0.023425 |
| JFIF unit | 0.00324243 | 0.00353692 |

## CS mixed (image)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| width | 1001.24 | 1001.24 | > -inf | 50.0% | 50.0% |
| height | 951 | 951 | > -inf | 50.0% | 50.0% |
| file bytes | 162522 | 164071 | ≤ 215928 | 54.4% | 48.5% |
| bytes/pixel | 0.170344 | 0.172034 | ≤ 0.187919 | 55.9% | 52.9% |
| EXIF entries | 0 | 0 | > -inf | 50.0% | 50.0% |
| ICC bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| comment bytes | 0 | 0 | > -inf | 50.0% | 50.0% |
| RGB channels | 2.88235 | 2.88235 | > -inf | 50.0% | 50.0% |
| JFIF unit | 0.558824 | 0.558824 | > -inf | 50.0% | 50.0% |
| JFIF x density | 40.6765 | 40.6765 | > -inf | 50.0% | 50.0% |
| JFIF y density | 40.6765 | 40.6765 | > -inf | 50.0% | 50.0% |
| progressive | 0.176471 | 0.176471 | > -inf | 50.0% | 50.0% |
| quantization sum | 3365.82 | 3669.68 | ≤ 3417.5 | 61.8% | 58.8% |

## CS mixed (all): logistic coefficients

Largest mean absolute coefficients across held-out-set folds, after train-only standardisation. Positive predicts human. Correlated features can share weight; these are associations, not causal effects.

| Feature | Mean coefficient | Mean absolute coefficient |
|---|---:|---:|
| text: capitals ratio | -0.348033 | 0.348033 |
| text: sentence length variance | 0.258122 | 0.258122 |
| text: line character variance | 0.202338 | 0.202338 |
| text: words | -0.178816 | 0.178816 |
| text: all-caps words/100w | 0.171709 | 0.171709 |
| text: curly single quotes/apostrophes/100w | 0.134474 | 0.134474 |
| is image | 0.133463 | 0.133463 |
| image: RGB channels | 0.132991 | 0.132991 |

## CS mixed (all)

| Feature | Human mean | AI mean | Human rule | Fit | LOSO |
|---|---:|---:|---|---:|---:|
| image: EXIF entries | 0 | 0 | > inf | 50.0% | 50.0% |
| image: ICC bytes | 0 | 0 | > inf | 50.0% | 50.0% |
| image: JFIF unit | 0.186275 | 0.186275 | > -inf | 50.0% | 50.0% |
| image: JFIF x density | 13.5588 | 13.5588 | > -inf | 50.0% | 50.0% |
| image: JFIF y density | 13.5588 | 13.5588 | > -inf | 50.0% | 50.0% |
| image: RGB channels | 0.960784 | 0.960784 | > -inf | 50.0% | 50.0% |
| image: bytes/pixel | 0.0567813 | 0.0573445 | ≤ 0.187919 | 52.0% | 51.0% |
| image: comment bytes | 0 | 0 | > inf | 50.0% | 50.0% |
| image: file bytes | 54173.8 | 54690.3 | ≤ 215928 | 51.5% | 49.5% |
| image: height | 317 | 317 | > -inf | 50.0% | 50.0% |
| image: progressive | 0.0588235 | 0.0588235 | > 0.5 | 50.0% | 50.0% |
| image: quantization sum | 1121.94 | 1223.23 | ≤ 3417.5 | 53.9% | 52.9% |
| image: width | 333.745 | 333.745 | > -inf | 50.0% | 50.0% |
| text: Czech open quote/100w | 0.288033 | 0.260254 | > 1.42351 | 51.5% | 49.7% |
| text: all-caps words/100w | 0.0900743 | 0.0531454 | > 0.899919 | 52.5% | 51.4% |
| text: any Czech open quote | 0.186111 | 0.169444 | > 0.5 | 50.8% | 50.8% |
| text: any colon | 0.175 | 0.175 | > -inf | 50.0% | 50.0% |
| text: any comma | 0.658333 | 0.658333 | > -inf | 50.0% | 50.0% |
| text: any curly double quotes | 0.186111 | 0.169444 | > 0.5 | 50.8% | 50.8% |
| text: any curly single quotes/apostrophes | 0.0166667 | 0.00277778 | > 0.5 | 50.7% | 50.7% |
| text: any ellipsis glyph | 0.0583333 | 0.0583333 | > -inf | 50.0% | 50.0% |
| text: any em dash | 0 | 0 | > inf | 50.0% | 50.0% |
| text: any en dash | 0.2 | 0.169444 | > 0.5 | 51.5% | 51.5% |
| text: any exclamation | 0.1 | 0.1 | > 0.5 | 50.0% | 50.0% |
| text: any guillemets | 0 | 0 | > inf | 50.0% | 50.0% |
| text: any parentheses | 0.225 | 0.225 | > 0.5 | 50.0% | 50.0% |
| text: any question | 0.0416667 | 0.0416667 | > 0.5 | 50.0% | 50.0% |
| text: any semicolon | 0.197222 | 0.197222 | > -inf | 50.0% | 50.0% |
| text: any spaced dots | 0 | 0 | > inf | 50.0% | 50.0% |
| text: any straight apostrophe | 0 | 0 | > inf | 50.0% | 50.0% |
| text: any straight double quote | 0 | 0 | > inf | 50.0% | 50.0% |
| text: any three dots | 0 | 0 | > inf | 50.0% | 50.0% |
| text: blank lines | 0.383333 | 0.383333 | > -inf | 50.0% | 50.0% |
| text: capitals ratio | 0.0128018 | 0.0144181 | ≤ 0.0204971 | 55.0% | 53.1% |
| text: characters | 428.942 | 422.229 | > 713.5 | 53.0% | 52.6% |
| text: colon/100w | 0.202353 | 0.196351 | ≤ 0.722031 | 51.0% | 49.9% |
| text: comma/100w | 6.65098 | 6.47573 | > 9.22531 | 52.5% | 50.7% |
| text: curly double quotes/100w | 0.279782 | 0.260254 | ≤ 0.722031 | 51.4% | 49.7% |
| text: curly single quotes/apostrophes/100w | 0.0247338 | 0.00283447 | > 1.05965 | 50.8% | 50.3% |
| text: diacritics ratio | 0.104526 | 0.0994195 | > 0.153667 | 56.2% | 54.1% |
| text: digits/100w | 2.3134 | 2.07253 | ≤ 1.11745 | 53.9% | 50.8% |
| text: ellipsis glyph/100w | 0.0705386 | 0.0687213 | > 1.06979 | 50.6% | 50.0% |
| text: em dash/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: en dash/100w | 0.404327 | 0.320949 | > 1.46538 | 53.4% | 52.6% |
| text: exclamation/100w | 0.190625 | 0.178622 | > 0.563385 | 50.6% | 50.0% |
| text: guillemets/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: line character variance | 3.44131 | 1.81112 | > 9.27375 | 52.8% | 51.2% |
| text: line-initial capitals | 0.55106 | 0.55106 | > -inf | 50.0% | 50.0% |
| text: mean line characters | 360.354 | 353.937 | > 700.5 | 53.1% | 52.8% |
| text: mean sentence length | 14.4851 | 12.9585 | > 30.5 | 53.0% | 52.4% |
| text: mean word length | 3.37175 | 3.26786 | > 5.32413 | 57.3% | 56.4% |
| text: nonempty lines | 2.89167 | 2.89167 | > -inf | 50.0% | 50.0% |
| text: parentheses/100w | 0.63129 | 0.617003 | > 2.81746 | 51.1% | 50.0% |
| text: question/100w | 0.156722 | 0.1554 | > 0.563385 | 50.4% | 50.0% |
| text: semicolon/100w | 0.296226 | 0.288767 | > 1.06955 | 50.9% | 49.6% |
| text: sentence length variance | 82.7877 | 39.8822 | > 74.9271 | 56.2% | 55.5% |
| text: sentences | 3.925 | 4.16319 | ≤ 3.5 | 53.5% | 53.5% |
| text: spaced dots/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: straight apostrophe/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: straight double quote/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: three dots/100w | 0 | 0 | > inf | 50.0% | 50.0% |
| text: title-case words/100w | 6.22196 | 6.81958 | ≤ 11.5449 | 55.5% | 54.4% |
| text: words | 68.6194 | 69.4083 | ≤ 65.5 | 51.8% | 50.2% |
| is image | 0.333333 | 0.333333 | > -inf | 50.0% | 50.0% |
