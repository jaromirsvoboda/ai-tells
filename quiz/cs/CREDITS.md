# Člověk, nebo AI? — zdroje a postup

Kvíz má 178 položek ve 41 sadách (41 od lidí, 137 od AI).

Co zatím nevíme
Požadavek na férovost zatím není splněný. V anglickém kole běžných textů dosáhl logistický model 73,1 % jen podle interpunkce, délky, členění a velkých písmen. Při ověřování jsme vždy vynechali celou jednu sadu, na ostatních model naučili a na vynechané sadě ho vyzkoušeli. Také některá jednoduchá pravidla nastavená na všech datech přesahují v obou jazycích 60 %. Jsou to varovné výsledky z malého, opakovaně prohlíženého souboru, nikoli důkaz, že kvíz měří jen rozpoznání autorství. Všechna měření před úpravou a po ní i použitý postup najdete v protokolu měření (anglicky).
Při tomto dokončování jsme žádný text znovu negenerovali ani nepřidávali či neodstraňovali interpunkci. Převzatá verze už sjednotila podobu pomlček, uvozovek a výpustek a rozložení slok. Z anglické verze jsme vyřadili sady Austenové, Conrada a Dickense: všechny napodobeniny v nich postrádaly apostrofy, které originál obsahuje. Nejsilnější ověřované pravidlo v anglické literatuře tím kleslo z 67,2 % na 61,5 %, ale pravidla pro délku a členění nastavená na celém souboru jsou stále úspěšnější. Z obou verzí jsme vyřadili Achenbachovo ztroskotání a Enderovy saně: reprodukce obrazů se od napodobenin lišily i velikostí souboru. Zůstává šest obrazových sad, všechny s fotografickým námětem; malby už v této verzi nejsou. Zbývající lidské originály jsme neměnili.

Modely při dřívějším ověřování často poznávaly konkrétní originály. Vedoucí projektu u starší verze zaznamenal, že GPT poznal 32 ze 41 předloh. Jeho bezchybný výsledek proto nedokládá rozpoznání stylu. Na současných textech jsme pokus neopakovali.
Gemini měl při generování dostupné vyhledávání na webu. V uložených odpovědích nejsou odkazy, použití nástroje ale vyloučit neumíme. Starší odpovědi GPT s přístupem na web byly podle zápisu vedoucího nahrazeny. Tady jsme žádný model nevolali.
Původní zápis upozorňuje na rozdíly v délce u Hardyho, Hálka a Máchy, ale popisuje starší verzi. Tato verze už používá pozdější zadání s požadavky na interpunkci a délky vět. Přesná zadání jsou po odpovědi dostupná u položek. Staré výsledky proto nevydáváme za ověření současných textů.
Starší odpovědi ChatGPT v anglické verzi nebyly zadány jako napodobenina Wikipedie a mohou se prozradit stylem. Obrázky od AI na Commons vybírali jejich nahrávající. Lidská fotka z Penangu pochází z prosince 2024, tedy už z doby generátorů obrázků.
Údaje o zdrojích a licencích přebíráme z uložených podkladů; při tomto dokončování jsme zdrojové weby znovu neotevírali. Vedoucímu projektu se nepodařilo přímo otevřít odkaz New York Times (chyba 403); šlo navíc o porovnání oblíbenosti, ne určování autorství. U některých českých textů není ověřené první vydání.
Původní recenzent Opus/Sonnet nedodal závěrečnou zprávu. Malý počet sad, znalost originálů a opakované vybírání omezují, co lze ze skóre vyvozovat.


Převzatá verze sjednotila uvozovky, pomlčky, výpustky, odsazení a rozložení slok. Při dokončování jsme text žádné zbývající položky neměnili. Přesná původní zadání níže zůstávají beze změny. Zdroje a licence jsme porovnali jen s uloženými podklady vedoucího projektu, bez nového ověřování na webu. Všechna měření: [protokol](../../tests/surface-report.md).

Lidské texty si ponechávají uvedené licence nebo status volného díla. U výstupů vytvořených pro kvíz uvádějí podklady CC0; převzatých obrázků z Commons se to netýká. Ty si ponechávají licenci i autorství uvedené na stránce souboru. Všechny obrázky byly oříznuty, zmenšeny a znovu uloženy jako JPEG, bez EXIF a ICC metadat. Jména, rozměry a metadata obrázků měříme odděleně od textů.

## Zdroje, licence a zadání všech zbývajících položek

### s0cb4a3 — Heslo české Wikipedie „Kopretina bílá“: napsali ho wikipedisté, nebo AI?

- `0328b2dc` — **Wikipedisté (autoři české Wikipedie)**. heslo „Kopretina bílá“ na české Wikipedii, verze z 2021-08-05
  Zdroj: [https://cs.wikipedia.org/w/index.php?oldid=20299210](https://cs.wikipedia.org/w/index.php?oldid=20299210). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `98315fdc` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Kopretina bílá“, zhruba 64 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 4 slov a nejdelší asi 18 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `a0d3d079` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Kopretina bílá“, zhruba 64 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 4 slov a nejdelší asi 18 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `eebc8699` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Kopretina bílá“, zhruba 64 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 4 slov a nejdelší asi 18 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 3 (předtím zamítnuto: 42 slov místo 64; 34 slov místo 64). Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `f2a1e331` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Kopretina bílá“, zhruba 64 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 4 slov a nejdelší asi 18 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s13cd76 — Heslo české Wikipedie „Perník“: napsali ho wikipedisté, nebo AI?

- `e361b009` — **Wikipedisté (autoři české Wikipedie)**. heslo „Perník“ na české Wikipedii, verze z 2021-12-18
  Zdroj: [https://cs.wikipedia.org/w/index.php?oldid=20738120](https://cs.wikipedia.org/w/index.php?oldid=20738120). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `4c5231a7` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Perník“, zhruba 91 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 8 slov a nejdelší asi 20 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `b1a9b70e` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Perník“, zhruba 91 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 8 slov a nejdelší asi 20 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `c260b3e0` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Perník“, zhruba 91 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 8 slov a nejdelší asi 20 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `d222494b` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Perník“, zhruba 91 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 8 slov a nejdelší asi 20 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 2 (předtím zamítnuto: 57 slov místo 91). Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s235379 — Heslo české Wikipedie „Rohlík“: napsali ho wikipedisté, nebo AI?

- `a98b77fd` — **Wikipedisté (autoři české Wikipedie)**. heslo „Rohlík“ na české Wikipedii, verze z 2021-11-25
  Zdroj: [https://cs.wikipedia.org/w/index.php?oldid=20670200](https://cs.wikipedia.org/w/index.php?oldid=20670200). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `57007fa5` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Rohlík“, zhruba 105 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 33 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `7d696fc2` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Rohlík“, zhruba 105 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 33 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `9f3d7d95` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Rohlík“, zhruba 105 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 33 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `adcf02d9` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Rohlík“, zhruba 105 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 33 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s4e6955 — Heslo české Wikipedie „Ježek západní“: napsali ho wikipedisté, nebo AI?

- `157b8547` — **Wikipedisté (autoři české Wikipedie)**. heslo „Ježek západní“ na české Wikipedii, verze z 2021-11-21
  Zdroj: [https://cs.wikipedia.org/w/index.php?oldid=20658466](https://cs.wikipedia.org/w/index.php?oldid=20658466). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `42985dc3` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Ježek západní“, zhruba 65 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 9 slov a nejdelší asi 22 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `7f0b16d7` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Ježek západní“, zhruba 65 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 9 slov a nejdelší asi 22 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `b2739748` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Ježek západní“, zhruba 65 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 9 slov a nejdelší asi 22 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s60fa46 — Heslo české Wikipedie „Pomlázka“: napsali ho wikipedisté, nebo AI?

- `4a3bbd11` — **Wikipedisté (autoři české Wikipedie)**. heslo „Pomlázka“ na české Wikipedii, verze z 2021-04-06
  Zdroj: [https://cs.wikipedia.org/w/index.php?oldid=19684436](https://cs.wikipedia.org/w/index.php?oldid=19684436). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `3226983e` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Pomlázka“, zhruba 127 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 1 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 4 uvozovek (párů). Rytmus vět: zhruba 8 vět, nejkratší asi 7 slov a nejdelší asi 34 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 1× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `45d0da0d` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Pomlázka“, zhruba 127 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 1 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 4 uvozovek (párů). Rytmus vět: zhruba 8 vět, nejkratší asi 7 slov a nejdelší asi 34 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 1× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `8e73d308` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Pomlázka“, zhruba 127 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 1 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 4 uvozovek (párů). Rytmus vět: zhruba 8 vět, nejkratší asi 7 slov a nejdelší asi 34 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 1× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `91b5b6fa` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Pomlázka“, zhruba 127 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 1 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 4 uvozovek (párů). Rytmus vět: zhruba 8 vět, nejkratší asi 7 slov a nejdelší asi 34 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 1× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s7293fb — Heslo české Wikipedie „Vánočka“: napsali ho wikipedisté, nebo AI?

- `0ae4a537` — **Wikipedisté (autoři české Wikipedie)**. heslo „Vánočka“ na české Wikipedii, verze z 2021-05-16
  Zdroj: [https://cs.wikipedia.org/w/index.php?oldid=19895643](https://cs.wikipedia.org/w/index.php?oldid=19895643). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `045db7ff` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Vánočka“, zhruba 78 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 2 vět, nejkratší asi 32 slov a nejdelší asi 46 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `a8b2c084` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Vánočka“, zhruba 78 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 2 vět, nejkratší asi 32 slov a nejdelší asi 46 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `c78d321b` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Vánočka“, zhruba 78 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 2 vět, nejkratší asi 32 slov a nejdelší asi 46 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### sa73b2f — Heslo české Wikipedie „Masopust“: napsali ho wikipedisté, nebo AI?

- `63acf072` — **Wikipedisté (autoři české Wikipedie)**. heslo „Masopust“ na české Wikipedii, verze z 2021-05-08
  Zdroj: [https://cs.wikipedia.org/w/index.php?oldid=19806629](https://cs.wikipedia.org/w/index.php?oldid=19806629). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `728427d8` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Masopust“, zhruba 121 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 5 slov a nejdelší asi 32 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `a6379ef0` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Masopust“, zhruba 121 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 5 slov a nejdelší asi 32 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `b279d8d2` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Masopust“, zhruba 121 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 5 slov a nejdelší asi 32 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `b96296f5` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Masopust“, zhruba 121 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 12 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 5 slov a nejdelší asi 32 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### sbc1589 — Heslo české Wikipedie „Pravčická brána“: napsali ho wikipedisté, nebo AI?

- `d71f4ef0` — **Wikipedisté (autoři české Wikipedie)**. heslo „Pravčická brána“ na české Wikipedii, verze z 2021-12-18
  Zdroj: [https://cs.wikipedia.org/w/index.php?oldid=20737692](https://cs.wikipedia.org/w/index.php?oldid=20737692). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `29d4b7c8` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Pravčická brána“, zhruba 128 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 1 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 10 vět, nejkratší asi 1 slov a nejdelší asi 20 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `405fdbdf` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Pravčická brána“, zhruba 128 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 1 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 10 vět, nejkratší asi 1 slov a nejdelší asi 20 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `4b457a44` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Pravčická brána“, zhruba 128 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 10 čárek, 1 pomlček (—), 4 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 10 vět, nejkratší asi 1 slov a nejdelší asi 20 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 4× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### scbee10 — Heslo české Wikipedie „Hrnek“: napsali ho wikipedisté, nebo AI?

- `7cd2f5f3` — **Wikipedisté (autoři české Wikipedie)**. heslo „Hrnek“ na české Wikipedii, verze z 2021-10-17
  Zdroj: [https://cs.wikipedia.org/w/index.php?oldid=20554999](https://cs.wikipedia.org/w/index.php?oldid=20554999). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `453cf99a` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Hrnek“, zhruba 70 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 8 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 8 slov a nejdelší asi 25 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `e877b345` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Hrnek“, zhruba 70 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 8 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 8 slov a nejdelší asi 25 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `fa3e5d17` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Hrnek“, zhruba 70 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 8 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 8 slov a nejdelší asi 25 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 2× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### scf8965 — Heslo české Wikipedie „Bramborák“: napsali ho wikipedisté, nebo AI?

- `20f2fbb9` — **Wikipedisté (autoři české Wikipedie)**. heslo „Bramborák“ na české Wikipedii, verze z 2021-05-25
  Zdroj: [https://cs.wikipedia.org/w/index.php?oldid=19929820](https://cs.wikipedia.org/w/index.php?oldid=19929820). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `014d7e93` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Bramborák“, zhruba 113 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 13 čárek, 0 pomlček (—), 5 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 6 slov a nejdelší asi 28 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 5× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `c233c034` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Bramborák“, zhruba 113 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 13 čárek, 0 pomlček (—), 5 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 6 slov a nejdelší asi 28 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 5× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `e65a79a6` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Bramborák“, zhruba 113 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 13 čárek, 0 pomlček (—), 5 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 6 slov a nejdelší asi 28 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 5× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### sd9af64 — Zpráva z Wikizpráv „Trojská lávka se zřítila do Vltavy“: napsal ji člověk, nebo AI?

- `6b0f37ee` — **Autoři Wikizpráv**. článek Wikizpráv „Trojská lávka se zřítila do Vltavy“
  Zdroj: [https://cs.wikinews.org/w/index.php?oldid=71532](https://cs.wikinews.org/w/index.php?oldid=71532). Licence: [CC BY 2.5](https://creativecommons.org/licenses/by/2.5/).

- `13ae3faa` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 90 slov, prostý text bez titulku a bez markdownu, o této události:
  > Lávka v Troji spojující Trojský zámek s Císařským ostrovem se zřítila do Vltavy. Zraněni čtyři lidé, dva vážně (šedesátiletý muž a třiašedesátiletá žena). Lávka postavena 1984 místo původní stržené povodní 1981, délka 260 m, poškozena povodní 2002 a od té doby pravidelně kontrolována. Hasiči vyslali tři jednotky, lodní doprava zastavena, další zranění se nenašli.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `3221f328` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 90 slov, prostý text bez titulku a bez markdownu, o této události:
  > Lávka v Troji spojující Trojský zámek s Císařským ostrovem se zřítila do Vltavy. Zraněni čtyři lidé, dva vážně (šedesátiletý muž a třiašedesátiletá žena). Lávka postavena 1984 místo původní stržené povodní 1981, délka 260 m, poškozena povodní 2002 a od té doby pravidelně kontrolována. Hasiči vyslali tři jednotky, lodní doprava zastavena, další zranění se nenašli.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `9e89f3fd` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 90 slov, prostý text bez titulku a bez markdownu, o této události:
  > Lávka v Troji spojující Trojský zámek s Císařským ostrovem se zřítila do Vltavy. Zraněni čtyři lidé, dva vážně (šedesátiletý muž a třiašedesátiletá žena). Lávka postavena 1984 místo původní stržené povodní 1981, délka 260 m, poškozena povodní 2002 a od té doby pravidelně kontrolována. Hasiči vyslali tři jednotky, lodní doprava zastavena, další zranění se nenašli.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `cd515caa` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 90 slov, prostý text bez titulku a bez markdownu, o této události:
  > Lávka v Troji spojující Trojský zámek s Císařským ostrovem se zřítila do Vltavy. Zraněni čtyři lidé, dva vážně (šedesátiletý muž a třiašedesátiletá žena). Lávka postavena 1984 místo původní stržené povodní 1981, délka 260 m, poškozena povodní 2002 a od té doby pravidelně kontrolována. Hasiči vyslali tři jednotky, lodní doprava zastavena, další zranění se nenašli.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 6 vět, nejkratší asi 8 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 2 (předtím zamítnuto: 60 slov místo 90). Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### se9b855 — Zpráva z Wikizpráv „Česko postihla sněhová kalamita“: napsal ji člověk, nebo AI?

- `db4a109b` — **Autoři Wikizpráv**. článek Wikizpráv „Česko postihla sněhová kalamita“
  Zdroj: [https://cs.wikinews.org/w/index.php?oldid=70706](https://cs.wikinews.org/w/index.php?oldid=70706). Licence: [CC BY 2.5](https://creativecommons.org/licenses/by/2.5/).

- `d16d2901` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 138 slov, prostý text bez titulku a bez markdownu, o této události:
  > Po víkendovém sněžení postihla Česko sněhová kalamita: v nížinách za čtyři dny napadlo 15–35 cm sněhu. Na železnici byl v noci přerušen provoz u Kolína na koridoru Praha – Česká Třebová (expresy do Brna, Ostravy, Rakouska, na Slovensko); kolem 7. hodiny obnoven provizorně po jedné koleji. Večer měly vlaky hodinová zpoždění, např. EC 147 Praha–Žilina 207 minut, vlak 111 Praha–Varšava 170 minut. Problémy i na lokálních tratích na Ostravsku a u Prahy; večer všechny tratě sjízdné, zpoždění trvají.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 4 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 9 slov a nejdelší asi 32 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `db98d601` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 138 slov, prostý text bez titulku a bez markdownu, o této události:
  > Po víkendovém sněžení postihla Česko sněhová kalamita: v nížinách za čtyři dny napadlo 15–35 cm sněhu. Na železnici byl v noci přerušen provoz u Kolína na koridoru Praha – Česká Třebová (expresy do Brna, Ostravy, Rakouska, na Slovensko); kolem 7. hodiny obnoven provizorně po jedné koleji. Večer měly vlaky hodinová zpoždění, např. EC 147 Praha–Žilina 207 minut, vlak 111 Praha–Varšava 170 minut. Problémy i na lokálních tratích na Ostravsku a u Prahy; večer všechny tratě sjízdné, zpoždění trvají.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 4 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 9 slov a nejdelší asi 32 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `f834ce8c` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 138 slov, prostý text bez titulku a bez markdownu, o této události:
  > Po víkendovém sněžení postihla Česko sněhová kalamita: v nížinách za čtyři dny napadlo 15–35 cm sněhu. Na železnici byl v noci přerušen provoz u Kolína na koridoru Praha – Česká Třebová (expresy do Brna, Ostravy, Rakouska, na Slovensko); kolem 7. hodiny obnoven provizorně po jedné koleji. Večer měly vlaky hodinová zpoždění, např. EC 147 Praha–Žilina 207 minut, vlak 111 Praha–Varšava 170 minut. Problémy i na lokálních tratích na Ostravsku a u Prahy; večer všechny tratě sjízdné, zpoždění trvají.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 4 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 7 vět, nejkratší asi 9 slov a nejdelší asi 32 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### sf17914 — Zpráva z Wikizpráv „V ostravské zoo se narodila mláďata levhartů“: napsal ji člověk, nebo AI?

- `58c70643` — **Autoři Wikizpráv**. článek Wikizpráv „V ostravské zoo se narodila mláďata levhartů“
  Zdroj: [https://cs.wikinews.org/w/index.php?oldid=63259](https://cs.wikinews.org/w/index.php?oldid=63259). Licence: [CC BY 2.5](https://creativecommons.org/licenses/by/2.5/).

- `390da280` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 139 slov, prostý text bez titulku a bez markdownu, o této události:
  > V ostravské zoo se po sedmnácti letech narodila mláďata levharta cejlonského (1. července; zoo to oznámila až později, protože kvůli plaché matce Mince z nizozemské zoo byla část pavilonu šelem zavřená). Otec: samec Dandilion z francouzské zoo. Zoo chová tyto levharty od roku 1977, odchovala 13 mláďat, poslední v roce 1991. Mluvčí Stanislav Derlich: hledání vhodného páru trvalo roky; samec je oddělen, výchova je na matce; druh je kvůli pytlákům a úbytku prostředí na pokraji vyhubení.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 3 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 11 vět, nejkratší asi 7 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `b0a14958` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 139 slov, prostý text bez titulku a bez markdownu, o této události:
  > V ostravské zoo se po sedmnácti letech narodila mláďata levharta cejlonského (1. července; zoo to oznámila až později, protože kvůli plaché matce Mince z nizozemské zoo byla část pavilonu šelem zavřená). Otec: samec Dandilion z francouzské zoo. Zoo chová tyto levharty od roku 1977, odchovala 13 mláďat, poslední v roce 1991. Mluvčí Stanislav Derlich: hledání vhodného páru trvalo roky; samec je oddělen, výchova je na matce; druh je kvůli pytlákům a úbytku prostředí na pokraji vyhubení.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 3 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 11 vět, nejkratší asi 7 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 2 (předtím zamítnuto: 89 slov místo 139). Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `d310df4f` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 139 slov, prostý text bez titulku a bez markdownu, o této události:
  > V ostravské zoo se po sedmnácti letech narodila mláďata levharta cejlonského (1. července; zoo to oznámila až později, protože kvůli plaché matce Mince z nizozemské zoo byla část pavilonu šelem zavřená). Otec: samec Dandilion z francouzské zoo. Zoo chová tyto levharty od roku 1977, odchovala 13 mláďat, poslední v roce 1991. Mluvčí Stanislav Derlich: hledání vhodného páru trvalo roky; samec je oddělen, výchova je na matce; druh je kvůli pytlákům a úbytku prostředí na pokraji vyhubení.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 3 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 11 vět, nejkratší asi 7 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `ee43e9b8` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 139 slov, prostý text bez titulku a bez markdownu, o této události:
  > V ostravské zoo se po sedmnácti letech narodila mláďata levharta cejlonského (1. července; zoo to oznámila až později, protože kvůli plaché matce Mince z nizozemské zoo byla část pavilonu šelem zavřená). Otec: samec Dandilion z francouzské zoo. Zoo chová tyto levharty od roku 1977, odchovala 13 mláďat, poslední v roce 1991. Mluvčí Stanislav Derlich: hledání vhodného páru trvalo roky; samec je oddělen, výchova je na matce; druh je kvůli pytlákům a úbytku prostředí na pokraji vyhubení.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 3 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 11 vět, nejkratší asi 7 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### sf69b46 — Heslo české Wikipedie „Hořické trubičky“: napsali ho wikipedisté, nebo AI?

- `a8b140ae` — **Wikipedisté (autoři české Wikipedie)**. heslo „Hořické trubičky“ na české Wikipedii, verze z 2021-03-02
  Zdroj: [https://cs.wikipedia.org/w/index.php?oldid=19567149](https://cs.wikipedia.org/w/index.php?oldid=19567149). Licence: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

- `c52d36d8` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Hořické trubičky“, zhruba 81 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 2 čárek, 0 pomlček (—), 1 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 12 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 1× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `c93adf89` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Hořické trubičky“, zhruba 81 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 2 čárek, 0 pomlček (—), 1 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 12 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 1× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `d99cf0d1` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš úvodní část hesla české Wikipedie „Hořické trubičky“, zhruba 81 slov, prostý text tak, jak by vypadal na stránce (bez odkazů na zdroje, nadpisů a seznamů). Interpunkce jako v hesle tohoto rozsahu, zhruba: 2 čárek, 0 pomlček (—), 1 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Rytmus vět: zhruba 5 vět, nejkratší asi 12 slov a nejdelší asi 21 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Použij 1× vsuvku v kulatých závorkách (např. data, jiné názvy nebo krátké vysvětlení).

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### sfdaf8c — Zpráva z Wikizpráv „Muzeum uspořádalo padělatelskou soutěž pro děti i dospělé“: napsal ji člověk, nebo AI?

- `3df3a57d` — **Autoři Wikizpráv**. článek Wikizpráv „Muzeum uspořádalo padělatelskou soutěž pro děti i dospělé“
  Zdroj: [https://cs.wikinews.org/w/index.php?oldid=62409](https://cs.wikinews.org/w/index.php?oldid=62409). Licence: [CC BY 2.5](https://creativecommons.org/licenses/by/2.5/).

- `409a2785` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 143 slov, prostý text bez titulku a bez markdownu, o této události:
  > Jihočeské muzeum v Českých Budějovicích uspořádalo soutěž „Padělej si svou bankovku“ ve třech kategoriích (do 10 let, nad 10 let, dospělí): účastníci domalovali druhou polovinu předtištěné historické bankovky. Soutěž upozorňovala na výstavu padělků. Vyhráli sedmiletý Jakub Štefl z Českých Budějovic, jedenáctiletá Marie Zajíčková z Třeboně a její otec Karel Zajíček (Marie pracovala tři dny, otec tři hodiny). Ceny (certifikát padělatele, rulička rozemletých bankovek) předával i policista Miloš Maršík z odboru hospodářské kriminality, který žertoval. Výstava potrvá do 15. dubna.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 10 vět, nejkratší asi 1 slov a nejdelší asi 24 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `4283de35` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 143 slov, prostý text bez titulku a bez markdownu, o této události:
  > Jihočeské muzeum v Českých Budějovicích uspořádalo soutěž „Padělej si svou bankovku“ ve třech kategoriích (do 10 let, nad 10 let, dospělí): účastníci domalovali druhou polovinu předtištěné historické bankovky. Soutěž upozorňovala na výstavu padělků. Vyhráli sedmiletý Jakub Štefl z Českých Budějovic, jedenáctiletá Marie Zajíčková z Třeboně a její otec Karel Zajíček (Marie pracovala tři dny, otec tři hodiny). Ceny (certifikát padělatele, rulička rozemletých bankovek) předával i policista Miloš Maršík z odboru hospodářské kriminality, který žertoval. Výstava potrvá do 15. dubna.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 10 vět, nejkratší asi 1 slov a nejdelší asi 24 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `c49a89d1` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; text pro stejné místo
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš krátký zpravodajský článek pro Wikizprávy (česká Wikinews), zhruba 143 slov, prostý text bez titulku a bez markdownu, o této události:
  > Jihočeské muzeum v Českých Budějovicích uspořádalo soutěž „Padělej si svou bankovku“ ve třech kategoriích (do 10 let, nad 10 let, dospělí): účastníci domalovali druhou polovinu předtištěné historické bankovky. Soutěž upozorňovala na výstavu padělků. Vyhráli sedmiletý Jakub Štefl z Českých Budějovic, jedenáctiletá Marie Zajíčková z Třeboně a její otec Karel Zajíček (Marie pracovala tři dny, otec tři hodiny). Ceny (certifikát padělatele, rulička rozemletých bankovek) předával i policista Miloš Maršík z odboru hospodářské kriminality, který žertoval. Výstava potrvá do 15. dubna.
  > Interpunkce jako v článku tohoto rozsahu, zhruba: 10 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Rytmus vět: zhruba 10 vět, nejkratší asi 1 slov a nejdelší asi 24 slov; střídej krátké a dlouhé věty, jak to dělá člověk, který píše tenhle druh textu. Nepoužívej kulaté závorky.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 12 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s249244 — Skleněná koule, ve které se odráží krajina: fotka, nebo obrázek od AI?

- `04ba8757` — **Mixel23**. Flussaue Oderberg Lebus lensball (19. května 2019)
  Obrázek: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Flussaue_Oderberg_Lebus_lensball.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Autor/nahrál: Mixel23. Oříznuto, zmenšeno a znovu uloženo pro kvíz.
  Soubor: `../media/58a75f2b3a89.jpg`.

- `934e32ec` — **Generátor obrázků OpenAI — AI**. Generátor obrázků OpenAI (přes Codex CLI), vytvořeno 2026-11-01 pro tento kvíz
  Vytvořeno pro tento kvíz 2026-11-01 podle slovního popisu lidského obrázku (model ho neviděl); použili jsme první vygenerovaný obrázek. CC0.
  Soubor: `../media/9c33ce48be4e.jpg`.

  Přesné původní zadání:

  > A photograph of a clear glass lensball held in front of a green countryside landscape, the ball showing a sharp upside-down reflection of fields, trees and blue sky; the background out of focus; bright daylight.

  Zadání napsal autor kvízu podle námětu, kompozice a techniky lidského obrázku.

### s362e2a — Stará černobílá fotka z Milána: skutečná, nebo od AI?

- `d14ec272` — **Zygmunt Szczotkowski**. Mediolan14-1 (květen 1931)
  Obrázek: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mediolan14-1.jpg), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Autor/nahrál: Zygmunt Szczotkowski. Oříznuto, zmenšeno a znovu uloženo pro kvíz.
  Soubor: `../media/0bbb204f3b17.jpg`.

- `bc2c9813` — **Generátor obrázků OpenAI — AI**. Generátor obrázků OpenAI (přes Codex CLI), vytvořeno 2026-11-01 pro tento kvíz
  Vytvořeno pro tento kvíz 2026-11-01 podle slovního popisu lidského obrázku (model ho neviděl); použili jsme první vygenerovaný obrázek. CC0.
  Soubor: `../media/bfbcf620fce0.jpg`.

  Přesné původní zadání:

  > A black-and-white photograph taken in Milan in 1931: the Piazza del Duomo with the gothic cathedral in the background, pedestrians in 1930s coats and hats walking across the square, some blurred by motion, a building corner on the right; grainy film, slight vignetting.

  Zadání napsal autor kvízu podle námětu, kompozice a techniky lidského obrázku.

### s44c840 — Ulice v Penangu v Malajsii: fotka, nebo obrázek od AI?

- `94dcf28a` — ***angys***. Jalan Machang Bubok (south) (241226) (26. prosince 2024, 17:35)
  Obrázek: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Jalan_Machang_Bubok_(south)_(241226).jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Autor/nahrál: *angys*. Oříznuto, zmenšeno a znovu uloženo pro kvíz.
  Soubor: `../media/f6c39ea6183d.jpg`.

- `6a4ee661` — **Generátor obrázků OpenAI — AI**. Generátor obrázků OpenAI (přes Codex CLI), vytvořeno 2026-11-01 pro tento kvíz
  Vytvořeno pro tento kvíz 2026-11-01 podle slovního popisu lidského obrázku (model ho neviděl); použili jsme první vygenerovaný obrázek. CC0.
  Soubor: `../media/03d798abd422.jpg`.

  Přesné původní zadání:

  > A photograph of a wide, almost empty street in George Town, Penang, Malaysia, on a bright afternoon: tall palm trees along the right side, low shophouses and a yellow-painted building on the left, a few parked cars, wispy clouds in a blue sky; taken from the pavement at eye level.

  Zadání napsal autor kvízu podle námětu, kompozice a techniky lidského obrázku.

### s753366 — Horské údolí odpoledne: fotka, nebo obrázek od AI?

- `4434234a` — **Rolenc**. Val Mora - panoramio (23. června 2009)
  Obrázek: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Val_Mora_-_panoramio.jpg), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Autor/nahrál: Rolenc. Oříznuto, zmenšeno a znovu uloženo pro kvíz.
  Soubor: `../media/6873f7bee40c.jpg`.

- `524d9da6` — **Generátor obrázků OpenAI — AI**. Generátor obrázků OpenAI (přes Codex CLI), vytvořeno 2026-11-01 pro tento kvíz
  Vytvořeno pro tento kvíz 2026-11-01 podle slovního popisu lidského obrázku (model ho neviděl); použili jsme první vygenerovaný obrázek. CC0.
  Soubor: `../media/9cabbc8f465f.jpg`.

  Přesné původní zadání:

  > A photograph of a wide alpine valley in summer: a broad pale gravel riverbed winding through green meadow in the foreground, dense dark-green conifer forest on the slopes, grey rocky mountains with a few snow patches under a hazy sky; taken with an ordinary digital camera, landscape orientation.

  Zadání napsal autor kvízu podle námětu, kompozice a techniky lidského obrázku.

### s9d17e9 — Talíř s grilovanou rybou a salátem: fotka, nebo obrázek od AI?

- `ab23ed1a` — **Bdieu**. Salad with fish (6. srpna 2008, 10:33)
  Obrázek: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Salad_with_fish.jpg), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Autor/nahrál: Bdieu. Oříznuto, zmenšeno a znovu uloženo pro kvíz.
  Soubor: `../media/c3419b1def64.jpg`.

- `7114c6b8` — **Generátor obrázků OpenAI — AI**. Generátor obrázků OpenAI (přes Codex CLI), vytvořeno 2026-11-01 pro tento kvíz
  Vytvořeno pro tento kvíz 2026-11-01 podle slovního popisu lidského obrázku (model ho neviděl); použili jsme první vygenerovaný obrázek. CC0.
  Soubor: `../media/fbf4c65dbbf5.jpg`.

  Přesné původní zadání:

  > A snapshot photograph, taken with on-camera flash in a restaurant, of a white plate with a grilled fish fillet and a mixed salad with olives, tomatoes, onion, lettuce, hard-boiled egg and lime wedges, seen from above at an angle; dark background.

  Zadání napsal autor kvízu podle námětu, kompozice a techniky lidského obrázku.

### saab77f — Kapka vody na okvětním lístku: makrofotka, nebo obrázek od AI?

- `352b5402` — **cogdogblog**. 2011-365-99 Precious Drop (5604857847) (9. dubna 2011, 13:22)
  Obrázek: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2011-365-99_Precious_Drop_(5604857847).jpg), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/). Autor/nahrál: cogdogblog. Oříznuto, zmenšeno a znovu uloženo pro kvíz.
  Soubor: `../media/fe7d0cee619f.jpg`.

- `7c07453f` — **Generátor obrázků OpenAI — AI**. Generátor obrázků OpenAI (přes Codex CLI), vytvořeno 2026-11-01 pro tento kvíz
  Vytvořeno pro tento kvíz 2026-11-01 podle slovního popisu lidského obrázku (model ho neviděl); použili jsme první vygenerovaný obrázek. CC0.
  Soubor: `../media/d3a15a702870.jpg`.

  Přesné původní zadání:

  > A macro photograph of a single clear water drop sitting on a pink tulip petal, soft pale grey-green background, shallow depth of field.

  Zadání napsal autor kvízu podle námětu, kompozice a techniky lidského obrázku.

### s0037f8 — Karel Toman (1877–1946): pravá báseň, nebo napodobenina od AI?

- `5e13cfb2` — **Karel Toman (1877–1946)**. Almanach na rok MCM, „V tvou korunu, živote…“ (1899/1900); znění podle Wikizdrojů.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=253595). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `5af26370` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Karel Toman
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Karel Toman (1877–1946), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 16 veršů ve čtyřech čtyřverších, volný tříslabičný přízvučný verš, rým ve druhém a čtvrtém verši. Téma: básník obětuje svou bolest životu a ženě jako krvavé korále. Dekadentní obraznost jako u Karla Tomana. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 65 slov, 2–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 14 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 16 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `ca408361` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Karel Toman
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Karel Toman (1877–1946), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 16 veršů ve čtyřech čtyřverších, volný tříslabičný přízvučný verš, rým ve druhém a čtvrtém verši. Téma: básník obětuje svou bolest životu a ženě jako krvavé korále. Dekadentní obraznost jako u Karla Tomana. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 65 slov, 2–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 14 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 16 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `ecf7d691` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Karel Toman
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Karel Toman (1877–1946), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 16 veršů ve čtyřech čtyřverších, volný tříslabičný přízvučný verš, rým ve druhém a čtvrtém verši. Téma: básník obětuje svou bolest životu a ženě jako krvavé korále. Dekadentní obraznost jako u Karla Tomana. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 65 slov, 2–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 14 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 16 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s1d20b2 — Jiří Wolker (1900–1924): pravá báseň, nebo napodobenina od AI?

- `e0984842` — **Jiří Wolker (1900–1924)**. Host do domu, „Háj“ (1921).
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=295583). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `120c89b1` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Jiří Wolker
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Jiří Wolker (1900–1924), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů volného verše s občasným rýmem, jedna sloka. Téma: mladý muž sní o budoucím rodinném životě s obrazy přírody a venkovské zbožnosti. Naivní obraznost jako ve sbírce Host do domu. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 4–11 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `6d18020d` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Jiří Wolker
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Jiří Wolker (1900–1924), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů volného verše s občasným rýmem, jedna sloka. Téma: mladý muž sní o budoucím rodinném životě s obrazy přírody a venkovské zbožnosti. Naivní obraznost jako ve sbírce Host do domu. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 4–11 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `e6d7bd79` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Jiří Wolker
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Jiří Wolker (1900–1924), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů volného verše s občasným rýmem, jedna sloka. Téma: mladý muž sní o budoucím rodinném životě s obrazy přírody a venkovské zbožnosti. Naivní obraznost jako ve sbírce Host do domu. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 4–11 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `f2cb4a68` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Jiří Wolker
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Jiří Wolker (1900–1924), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů volného verše s občasným rýmem, jedna sloka. Téma: mladý muž sní o budoucím rodinném životě s obrazy přírody a venkovské zbožnosti. Naivní obraznost jako ve sbírce Host do domu. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 4–11 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s2cee25 — Jan Neruda, Povídky malostranské: pravý úryvek, nebo napodobenina od AI?

- `c4a7a64b` — **Jan Neruda (1834–1891)**. Povídky malostranské, „Večerní šplechty“ (1877; knižně 1878); úryvek, znění podle Wikizdrojů.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=343709). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `1745e945` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Jan Neruda
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 120 slov ve stylu díla Povídky malostranské (Jan Neruda), jako by šlo o necitovaný úryvek z této knihy. Obsah: měsíc svítí na spletité střechy malostranských domů; podrobný popis střech, žlabů a vikýřů s vtipným přirovnáním. Interpunkce jako v originále tohoto druhu, zhruba: 14 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `89653aba` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Jan Neruda
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 120 slov ve stylu díla Povídky malostranské (Jan Neruda), jako by šlo o necitovaný úryvek z této knihy. Obsah: měsíc svítí na spletité střechy malostranských domů; podrobný popis střech, žlabů a vikýřů s vtipným přirovnáním. Interpunkce jako v originále tohoto druhu, zhruba: 14 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `f42aec96` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Jan Neruda
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 120 slov ve stylu díla Povídky malostranské (Jan Neruda), jako by šlo o necitovaný úryvek z této knihy. Obsah: měsíc svítí na spletité střechy malostranských domů; podrobný popis střech, žlabů a vikýřů s vtipným přirovnáním. Interpunkce jako v originále tohoto druhu, zhruba: 14 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `f7ffc59f` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Jan Neruda
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 120 slov ve stylu díla Povídky malostranské (Jan Neruda), jako by šlo o necitovaný úryvek z této knihy. Obsah: měsíc svítí na spletité střechy malostranských domů; podrobný popis střech, žlabů a vikýřů s vtipným přirovnáním. Interpunkce jako v originále tohoto druhu, zhruba: 14 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s38584f — Karel Klostermann, Ze světa lesních samot: pravý úryvek, nebo napodobenina od AI?

- `4257d17c` — **Karel Klostermann (1848–1923)**. Ze světa lesních samot, kap. V (1894); úryvek, vydání Jos. R. Vilímka z roku 1894, s. 87–108, podle Wikizdrojů.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=343497). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `1cd96a0a` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Karel Klostermann
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 146 slov ve stylu díla Ze světa lesních samot (Karel Klostermann), jako by šlo o necitovaný úryvek z této knihy. Obsah: pozdní podzim na šumavské samotě: mraky, déšť a sníh, a v noci bludičky nad bažinou. Interpunkce jako v originále tohoto druhu, zhruba: 25 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `58872380` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Karel Klostermann
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 146 slov ve stylu díla Ze světa lesních samot (Karel Klostermann), jako by šlo o necitovaný úryvek z této knihy. Obsah: pozdní podzim na šumavské samotě: mraky, déšť a sníh, a v noci bludičky nad bažinou. Interpunkce jako v originále tohoto druhu, zhruba: 25 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `5b55bb11` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Karel Klostermann
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 146 slov ve stylu díla Ze světa lesních samot (Karel Klostermann), jako by šlo o necitovaný úryvek z této knihy. Obsah: pozdní podzim na šumavské samotě: mraky, déšť a sníh, a v noci bludičky nad bažinou. Interpunkce jako v originále tohoto druhu, zhruba: 25 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `c0c98aa7` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Karel Klostermann
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 146 slov ve stylu díla Ze světa lesních samot (Karel Klostermann), jako by šlo o necitovaný úryvek z této knihy. Obsah: pozdní podzim na šumavské samotě: mraky, déšť a sníh, a v noci bludičky nad bažinou. Interpunkce jako v originále tohoto druhu, zhruba: 25 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s635a65 — Viktor Dyk (1877–1931): pravá báseň, nebo napodobenina od AI?

- `06e359a4` — **Viktor Dyk (1877–1931)**. Devátá vlna, „Sestřička Starost“ (1930); znění podle Wikizdrojů. Podrobnosti vydání nebyly v podkladech úplné.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=218936). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `0298ef40` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Viktor Dyk
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Viktor Dyk (1877–1931), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů: blok 18 veršů ve sdružených rýmech AABB různé délky a dvouveršová koda. Téma: starost jako sestřička, která nás všude doprovází, a krátké chvíle, kdy jí utečeme do přírody. Ironicky melancholický tón Viktora Dyka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 107 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 2 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 7 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `6f996e85` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Viktor Dyk
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Viktor Dyk (1877–1931), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů: blok 18 veršů ve sdružených rýmech AABB různé délky a dvouveršová koda. Téma: starost jako sestřička, která nás všude doprovází, a krátké chvíle, kdy jí utečeme do přírody. Ironicky melancholický tón Viktora Dyka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 107 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 2 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 7 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `7a871d0c` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Viktor Dyk
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Viktor Dyk (1877–1931), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů: blok 18 veršů ve sdružených rýmech AABB různé délky a dvouveršová koda. Téma: starost jako sestřička, která nás všude doprovází, a krátké chvíle, kdy jí utečeme do přírody. Ironicky melancholický tón Viktora Dyka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 107 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 2 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 7 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `c024c5d8` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Viktor Dyk
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Viktor Dyk (1877–1931), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů: blok 18 veršů ve sdružených rýmech AABB různé délky a dvouveršová koda. Téma: starost jako sestřička, která nás všude doprovází, a krátké chvíle, kdy jí utečeme do přírody. Ironicky melancholický tón Viktora Dyka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 107 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 2 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 7 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s655398 — Otokar Březina (1868–1929): pravá báseň, nebo napodobenina od AI?

- `6c5f9019` — **Otokar Březina (1868–1929)**. Tajemné dálky, „Siesta“ (1895); první vydání, Moderní revue, podle Wikizdrojů.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=233940). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `266a0895` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Otokar Březina
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Otokar Březina (1868–1929), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, dlouhé jambické verše o 12–14 slabikách, střídavý rým ABAB. Téma: zimní krajina v poledním klidu, světlo a stíny na sněhu a duchovní myšlenka nad ní. Symbolistní slovník Otokara Březiny. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 89 slov, 5–9 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 10 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `5f549ee7` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Otokar Březina
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Otokar Březina (1868–1929), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, dlouhé jambické verše o 12–14 slabikách, střídavý rým ABAB. Téma: zimní krajina v poledním klidu, světlo a stíny na sněhu a duchovní myšlenka nad ní. Symbolistní slovník Otokara Březiny. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 89 slov, 5–9 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 10 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `6900a3bd` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Otokar Březina
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Otokar Březina (1868–1929), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, dlouhé jambické verše o 12–14 slabikách, střídavý rým ABAB. Téma: zimní krajina v poledním klidu, světlo a stíny na sněhu a duchovní myšlenka nad ní. Symbolistní slovník Otokara Březiny. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 89 slov, 5–9 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 10 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `e7a3c4b0` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Otokar Březina
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Otokar Březina (1868–1929), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, dlouhé jambické verše o 12–14 slabikách, střídavý rým ABAB. Téma: zimní krajina v poledním klidu, světlo a stíny na sněhu a duchovní myšlenka nad ní. Symbolistní slovník Otokara Březiny. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 89 slov, 5–9 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 10 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 2 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s68e531 — Karel Hynek Mácha (1810–1836): pravá báseň, nebo napodobenina od AI?

- `7a700602` — **Karel Hynek Mácha (1810–1836)**. Ohlas písní národních, „Z temna lesa žežhulička“. Napsáno v letech 1831–1832 podle Wikizdrojů; první vydání jsme neověřili.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=196351). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `26ef25a7` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Karel Hynek Mácha
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Karel Hynek Mácha (1810–1836), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů v jedné sloce, lidový trochejský verš (převážně osmislabičný), bez rýmu; kukačka naříká v přímé řeči nad zříceným hradem. Téma: kukačka v lese naříká nad pustým českým hradem a zašlou slávou. Ohlas lidové písně jako u Máchy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 36 slov, 2–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 3 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 0 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `83c57e7a` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Karel Hynek Mácha
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Karel Hynek Mácha (1810–1836), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů v jedné sloce, lidový trochejský verš (převážně osmislabičný), bez rýmu; kukačka naříká v přímé řeči nad zříceným hradem. Téma: kukačka v lese naříká nad pustým českým hradem a zašlou slávou. Ohlas lidové písně jako u Máchy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 36 slov, 2–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 3 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 0 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `a0e6ea44` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Karel Hynek Mácha
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Karel Hynek Mácha (1810–1836), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů v jedné sloce, lidový trochejský verš (převážně osmislabičný), bez rýmu; kukačka naříká v přímé řeči nad zříceným hradem. Téma: kukačka v lese naříká nad pustým českým hradem a zašlou slávou. Ohlas lidové písně jako u Máchy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 36 slov, 2–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 3 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 0 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 2 (předtím zamítnuto: 50 slov místo 36). Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `bfd29a44` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Karel Hynek Mácha
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Karel Hynek Mácha (1810–1836), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 9 veršů v jedné sloce, lidový trochejský verš (převážně osmislabičný), bez rýmu; kukačka naříká v přímé řeči nad zříceným hradem. Téma: kukačka v lese naříká nad pustým českým hradem a zašlou slávou. Ohlas lidové písně jako u Máchy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 36 slov, 2–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 3 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 0 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 9 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s6b21a8 — Fráňa Šrámek (1877–1952): pravá báseň, nebo napodobenina od AI?

- `3bbf422c` — **Fráňa Šrámek (1877–1952)**. Splav, „Má bába“ (1916); první vydání, Fr. Borový 1916, podle Wikizdrojů.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=299014). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `0ea80c45` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Fráňa Šrámek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Fráňa Šrámek (1877–1952), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, volně trochejský verš, nepravidelný rým, věty přebíhají přes hranice slok. Téma: pohřeb velmi staré babičky, která se se životem dávno rozloučila a jen čekala, až pro ni přijedou. Prostý, citlivý tón Fráni Šrámka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 4–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 0 pomlček (—), 0 závorek, 1 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 1 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `1881ffe2` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Fráňa Šrámek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Fráňa Šrámek (1877–1952), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, volně trochejský verš, nepravidelný rým, věty přebíhají přes hranice slok. Téma: pohřeb velmi staré babičky, která se se životem dávno rozloučila a jen čekala, až pro ni přijedou. Prostý, citlivý tón Fráni Šrámka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 4–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 0 pomlček (—), 0 závorek, 1 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 1 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `91fadb75` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Fráňa Šrámek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Fráňa Šrámek (1877–1952), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, volně trochejský verš, nepravidelný rým, věty přebíhají přes hranice slok. Téma: pohřeb velmi staré babičky, která se se životem dávno rozloučila a jen čekala, až pro ni přijedou. Prostý, citlivý tón Fráni Šrámka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 4–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 0 pomlček (—), 0 závorek, 1 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 1 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `b0efa2ac` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Fráňa Šrámek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Fráňa Šrámek (1877–1952), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, volně trochejský verš, nepravidelný rým, věty přebíhají přes hranice slok. Téma: pohřeb velmi staré babičky, která se se životem dávno rozloučila a jen čekala, až pro ni přijedou. Prostý, citlivý tón Fráni Šrámka. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 4–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 8 čárek, 0 pomlček (—), 0 závorek, 1 výpustek (…), 0 středníků, 1 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 1 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s722e34 — Vítězslav Hálek (1835–1874): pravá báseň, nebo napodobenina od AI?

- `97b2addd` — **Vítězslav Hálek (1835–1874)**. Večerní písně, č. 3 (1858–1859); znění z vydání I. L. Kobera z roku 1923 podle Wikizdrojů.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=295892). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `2547da93` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Vítězslav Hálek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Vítězslav Hálek (1835–1874), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, rým ve druhém a čtvrtém verši. Téma: tichý večer v přírodě a smutek v srdci mluvčího. Písňový tón Hálkových Večerních písní. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 57 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `63b328fc` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Vítězslav Hálek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Vítězslav Hálek (1835–1874), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, rým ve druhém a čtvrtém verši. Téma: tichý večer v přírodě a smutek v srdci mluvčího. Písňový tón Hálkových Večerních písní. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 57 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `e805af6b` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Vítězslav Hálek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Vítězslav Hálek (1835–1874), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, rým ve druhém a čtvrtém verši. Téma: tichý večer v přírodě a smutek v srdci mluvčího. Písňový tón Hálkových Večerních písní. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 57 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `e8f1f001` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Vítězslav Hálek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Vítězslav Hálek (1835–1874), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, rým ve druhém a čtvrtém verši. Téma: tichý večer v přírodě a smutek v srdci mluvčího. Písňový tón Hálkových Večerních písní. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 57 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 3 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 3 (předtím zamítnuto: 37 slov místo 57; 42 slov místo 57). Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s76a936 — Karel Jaromír Erben (1811–1870): pravá báseň, nebo napodobenina od AI?

- `fe65acae` — **Karel Jaromír Erben (1811–1870)**. Sirotkovo lůžko, první čtyři ze šesti slok. Rok prvního vydání jsme neověřili; znění podle Wikizdrojů.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=228902). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `158400ab` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Karel Jaromír Erben
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Karel Jaromír Erben (1811–1870), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 16 veršů ve čtyřech čtyřverších, desetislabičný verš, střídavý rým ABAB; uprostřed přímá řeč dítěte k mrtvé matce. Téma: sirotek v zimní noci na matčině hrobě si stěžuje na zlou macechu. Jako u Erbena: zdrobněliny, přímá řeč v uvozovkách » «. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 101 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 4 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 4 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 16 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `453f54f6` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Karel Jaromír Erben
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Karel Jaromír Erben (1811–1870), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 16 veršů ve čtyřech čtyřverších, desetislabičný verš, střídavý rým ABAB; uprostřed přímá řeč dítěte k mrtvé matce. Téma: sirotek v zimní noci na matčině hrobě si stěžuje na zlou macechu. Jako u Erbena: zdrobněliny, přímá řeč v uvozovkách » «. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 101 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 4 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 4 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 16 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `afd2d245` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Karel Jaromír Erben
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Karel Jaromír Erben (1811–1870), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 16 veršů ve čtyřech čtyřverších, desetislabičný verš, střídavý rým ABAB; uprostřed přímá řeč dítěte k mrtvé matce. Téma: sirotek v zimní noci na matčině hrobě si stěžuje na zlou macechu. Jako u Erbena: zdrobněliny, přímá řeč v uvozovkách » «. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 101 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 4 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 4 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 16 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `b5a6b0c4` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Karel Jaromír Erben
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Karel Jaromír Erben (1811–1870), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 16 veršů ve čtyřech čtyřverších, desetislabičný verš, střídavý rým ABAB; uprostřed přímá řeč dítěte k mrtvé matce. Téma: sirotek v zimní noci na matčině hrobě si stěžuje na zlou macechu. Jako u Erbena: zdrobněliny, přímá řeč v uvozovkách » «. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 101 slov, 4–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 4 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 1 dvojteček, 3 vykřičníků, 4 otazníků, 1 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 4 z 16 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s7e97a6 — Stanislav Kostka Neumann (1875–1947): pravá báseň, nebo napodobenina od AI?

- `1c27aec9` — **Stanislav Kostka Neumann (1875–1947)**. Kniha lesů, vod a strání, „Ocúny“ (1914).
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=297326). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `931f8a28` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Stanislav Kostka Neumann
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Stanislav Kostka Neumann (1875–1947), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů v pěti čtyřverších, volně rytmizované verše, rým ve druhém a čtvrtém verši, refrénový verš se vrací. Téma: podzimní květiny na lukách a myšlenka na smrt a znovuzrození. Jazyk Knihy lesů, vod a strání. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 115 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 2 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 12 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `c74eb841` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Stanislav Kostka Neumann
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Stanislav Kostka Neumann (1875–1947), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů v pěti čtyřverších, volně rytmizované verše, rým ve druhém a čtvrtém verši, refrénový verš se vrací. Téma: podzimní květiny na lukách a myšlenka na smrt a znovuzrození. Jazyk Knihy lesů, vod a strání. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 115 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 2 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 12 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `cc2144a1` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Stanislav Kostka Neumann
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Stanislav Kostka Neumann (1875–1947), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů v pěti čtyřverších, volně rytmizované verše, rým ve druhém a čtvrtém verši, refrénový verš se vrací. Téma: podzimní květiny na lukách a myšlenka na smrt a znovuzrození. Jazyk Knihy lesů, vod a strání. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 115 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 2 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 12 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `ce417f86` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Stanislav Kostka Neumann
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Stanislav Kostka Neumann (1875–1947), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 20 veršů v pěti čtyřverších, volně rytmizované verše, rým ve druhém a čtvrtém verši, refrénový verš se vrací. Téma: podzimní květiny na lukách a myšlenka na smrt a znovuzrození. Jazyk Knihy lesů, vod a strání. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 115 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 2 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 12 z 20 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s834ba6 — Antonín Sova (1864–1928): pravá báseň, nebo napodobenina od AI?

- `ac67682c` — **Antonín Sova (1864–1928)**. Z mého kraje, „Rybníky“ (1893); druhé vydání, Havlíčkův Brod 1957, s. 55, podle Wikizdrojů.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=296416). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `495eb881` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Antonín Sova
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Antonín Sova (1864–1928), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů bez dělení do slok, jambický jedenáctislabičný verš, střídavý rým ABAB. Téma: jihočeské rybníky v létě, ptáci a vůně luk a tichý stesk krajiny. Impresionistický popis jako u Antonína Sovy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 75 slov, 5–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `5e4f4457` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Antonín Sova
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Antonín Sova (1864–1928), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů bez dělení do slok, jambický jedenáctislabičný verš, střídavý rým ABAB. Téma: jihočeské rybníky v létě, ptáci a vůně luk a tichý stesk krajiny. Impresionistický popis jako u Antonína Sovy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 75 slov, 5–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `795cde36` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Antonín Sova
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Antonín Sova (1864–1928), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů bez dělení do slok, jambický jedenáctislabičný verš, střídavý rým ABAB. Téma: jihočeské rybníky v létě, ptáci a vůně luk a tichý stesk krajiny. Impresionistický popis jako u Antonína Sovy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 75 slov, 5–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `d3e7443d` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Antonín Sova
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Antonín Sova (1864–1928), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů bez dělení do slok, jambický jedenáctislabičný verš, střídavý rým ABAB. Téma: jihočeské rybníky v létě, ptáci a vůně luk a tichý stesk krajiny. Impresionistický popis jako u Antonína Sovy. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 75 slov, 5–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 9 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s867409 — Karolina Světlá, Poslední paní Hlohovská: pravý úryvek, nebo napodobenina od AI?

- `ab58ca33` — **Karolina Světlá (1830–1899)**. Poslední paní Hlohovská, kap. II; úryvek z prostředku kapitoly, znění podle Wikizdrojů. Rok prvního vydání jsme neověřili.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=285530). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `190bf3dc` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Karolina Světlá
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 139 slov ve stylu díla Poslední paní Hlohovská (Karolina Světlá), jako by šlo o necitovaný úryvek z této knihy. Obsah: mladá šlechtična ujíždí na koni v čele družiny jarním ránem, zamyšlená a lhostejná ke všemu kolem. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `676a5432` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Karolina Světlá
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 139 slov ve stylu díla Poslední paní Hlohovská (Karolina Světlá), jako by šlo o necitovaný úryvek z této knihy. Obsah: mladá šlechtična ujíždí na koni v čele družiny jarním ránem, zamyšlená a lhostejná ke všemu kolem. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `9bafdf17` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Karolina Světlá
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 139 slov ve stylu díla Poslední paní Hlohovská (Karolina Světlá), jako by šlo o necitovaný úryvek z této knihy. Obsah: mladá šlechtična ujíždí na koni v čele družiny jarním ránem, zamyšlená a lhostejná ke všemu kolem. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `eb5e37e6` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Karolina Světlá
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 139 slov ve stylu díla Poslední paní Hlohovská (Karolina Světlá), jako by šlo o necitovaný úryvek z této knihy. Obsah: mladá šlechtična ujíždí na koni v čele družiny jarním ránem, zamyšlená a lhostejná ke všemu kolem. Interpunkce jako v originále tohoto druhu, zhruba: 17 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 1 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s87452c — František Gellner (1881–1914): pravá báseň, nebo napodobenina od AI?

- `9d9be4d2` — **František Gellner (1881–1914)**. Po nás ať přijde potopa, „Píseň“ (1901); první vydání, Nový kult 1901, s. 30, podle Wikizdrojů.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=225263). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `642b5227` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: František Gellner
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora František Gellner (1881–1914), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický čtyřstopý verš, sdružený rým AABB. Téma: ironické sebepředstavení skeptického bohéma, který se vysmívá vlastním citům i názoru okolí. Hovorový a ironický tón Františka Gellnera. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 62 slov, 3–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 2 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `64a71c4b` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: František Gellner
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora František Gellner (1881–1914), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický čtyřstopý verš, sdružený rým AABB. Téma: ironické sebepředstavení skeptického bohéma, který se vysmívá vlastním citům i názoru okolí. Hovorový a ironický tón Františka Gellnera. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 62 slov, 3–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 2 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `d1727308` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: František Gellner
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora František Gellner (1881–1914), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický čtyřstopý verš, sdružený rým AABB. Téma: ironické sebepředstavení skeptického bohéma, který se vysmívá vlastním citům i názoru okolí. Hovorový a ironický tón Františka Gellnera. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 62 slov, 3–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 2 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `f2276e0f` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: František Gellner
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora František Gellner (1881–1914), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický čtyřstopý verš, sdružený rým AABB. Téma: ironické sebepředstavení skeptického bohéma, který se vysmívá vlastním citům i názoru okolí. Hovorový a ironický tón Františka Gellnera. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 62 slov, 3–8 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 2 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### s8be5d4 — Jan Neruda (1834–1891): pravá báseň, nebo napodobenina od AI?

- `fbffb04c` — **Jan Neruda (1834–1891)**. Prosté motivy, Zimní XI (1883); znění z vydání Mladé fronty z roku 1956 podle Wikizdrojů.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=232686). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `23a42414` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Jan Neruda
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Jan Neruda (1834–1891), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, trochej, střídání osmi- a šestislabičných veršů, rým ve druhém a čtvrtém verši. Téma: starý strom u stavení, který se má porazit, a otázka kdy; přirovnání ke starému člověku. Prostý jazyk Nerudových Prostých motivů. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 2–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 6 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `950c2d6c` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Jan Neruda
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Jan Neruda (1834–1891), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, trochej, střídání osmi- a šestislabičných veršů, rým ve druhém a čtvrtém verši. Téma: starý strom u stavení, který se má porazit, a otázka kdy; přirovnání ke starému člověku. Prostý jazyk Nerudových Prostých motivů. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 2–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 6 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `9fd6d022` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Jan Neruda
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Jan Neruda (1834–1891), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, trochej, střídání osmi- a šestislabičných veršů, rým ve druhém a čtvrtém verši. Téma: starý strom u stavení, který se má porazit, a otázka kdy; přirovnání ke starému člověku. Prostý jazyk Nerudových Prostých motivů. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 2–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 6 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `de126a0e` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Jan Neruda
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Jan Neruda (1834–1891), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, trochej, střídání osmi- a šestislabičných veršů, rým ve druhém a čtvrtém verši. Téma: starý strom u stavení, který se má porazit, a otázka kdy; přirovnání ke starému člověku. Prostý jazyk Nerudových Prostých motivů. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 52 slov, 2–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 5 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 6 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 6 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### sc0a85e — Božena Němcová, Divá Bára: pravý úryvek, nebo napodobenina od AI?

- `c656f068` — **Božena Němcová (1820–1862)**. Divá Bára, kap. I (1855); úryvek z prostředku kapitoly, znění podle Wikizdrojů.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=276581). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `5a564a66` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Božena Němcová
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 93 slov ve stylu díla Divá Bára (Božena Němcová), jako by šlo o necitovaný úryvek z této knihy. Obsah: venkovská dívka je šťastná na faře, kde je všeho dostatek: pokoje, zahrada, dobytek, hračky. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 2 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `8dc44335` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Božena Němcová
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 93 slov ve stylu díla Divá Bára (Božena Němcová), jako by šlo o necitovaný úryvek z této knihy. Obsah: venkovská dívka je šťastná na faře, kde je všeho dostatek: pokoje, zahrada, dobytek, hračky. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 2 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `ad4536e4` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Božena Němcová
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 93 slov ve stylu díla Divá Bára (Božena Němcová), jako by šlo o necitovaný úryvek z této knihy. Obsah: venkovská dívka je šťastná na faře, kde je všeho dostatek: pokoje, zahrada, dobytek, hračky. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 2 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `d3a67a58` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Božena Němcová
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 93 slov ve stylu díla Divá Bára (Božena Němcová), jako by šlo o necitovaný úryvek z této knihy. Obsah: venkovská dívka je šťastná na faře, kde je všeho dostatek: pokoje, zahrada, dobytek, hračky. Interpunkce jako v originále tohoto druhu, zhruba: 13 čárek, 2 pomlček (—), 0 závorek, 0 výpustek (…), 1 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### sc591fb — Karel Čapek, Zahradníkův rok: pravý úryvek, nebo napodobenina od AI?

- `a85101be` — **Karel Čapek (1890–1938)**. Zahradníkův rok, „Zahradníkův březen“ (1929); úryvek z prostředku kapitoly.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=225380). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `6c7d590b` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Karel Čapek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 136 slov ve stylu díla Zahradníkův rok (Karel Čapek), jako by šlo o necitovaný úryvek z této knihy. Obsah: jak se zahradníci poznávají mezi lidmi ve společnosti a o čem spolu hned začnou mluvit. Interpunkce jako v originále tohoto druhu, zhruba: 24 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 3 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 2 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `b931233a` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Karel Čapek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 136 slov ve stylu díla Zahradníkův rok (Karel Čapek), jako by šlo o necitovaný úryvek z této knihy. Obsah: jak se zahradníci poznávají mezi lidmi ve společnosti a o čem spolu hned začnou mluvit. Interpunkce jako v originále tohoto druhu, zhruba: 24 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 3 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 2 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `c2003f03` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Karel Čapek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 136 slov ve stylu díla Zahradníkův rok (Karel Čapek), jako by šlo o necitovaný úryvek z této knihy. Obsah: jak se zahradníci poznávají mezi lidmi ve společnosti a o čem spolu hned začnou mluvit. Interpunkce jako v originále tohoto druhu, zhruba: 24 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 3 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 2 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `d45b1211` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Karel Čapek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 136 slov ve stylu díla Zahradníkův rok (Karel Čapek), jako by šlo o necitovaný úryvek z této knihy. Obsah: jak se zahradníci poznávají mezi lidmi ve společnosti a o čem spolu hned začnou mluvit. Interpunkce jako v originále tohoto druhu, zhruba: 24 čárek, 0 pomlček (—), 2 závorek, 0 výpustek (…), 3 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 2 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 2 (předtím zamítnuto: 213 slov místo 136). Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### sc736cb — František Halas (1901–1949): pravá báseň, nebo napodobenina od AI?

- `0ee71e58` — **František Halas (1901–1949)**. Hořec, „Listopad“ (1933); nákladem Erny Janské, Praha 1933, s. 32, podle Wikizdrojů.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=267169). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `215e9350` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: František Halas
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora František Halas (1901–1949), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický verš, střídavý rým ABAB, úplně bez interpunkce. Téma: listopadové loučení dvou milenců a pozdější žal. Úsporný jazyk Františka Halase. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 61 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 0 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `3044163b` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: František Halas
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora František Halas (1901–1949), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický verš, střídavý rým ABAB, úplně bez interpunkce. Téma: listopadové loučení dvou milenců a pozdější žal. Úsporný jazyk Františka Halase. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 61 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 0 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `75eb82bc` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: František Halas
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora František Halas (1901–1949), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický verš, střídavý rým ABAB, úplně bez interpunkce. Téma: listopadové loučení dvou milenců a pozdější žal. Úsporný jazyk Františka Halase. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 61 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 0 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 2 (předtím zamítnuto: 44 slov místo 61). Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `d1ac9001` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: František Halas
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora František Halas (1901–1949), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jambický verš, střídavý rým ABAB, úplně bez interpunkce. Téma: listopadové loučení dvou milenců a pozdější žal. Úsporný jazyk Františka Halase. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 61 slov, 4–7 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 0 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 2 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### secdc3c — Jaroslav Hašek, Osudy dobrého vojáka Švejka: pravý úryvek, nebo napodobenina od AI?

- `6cbbd713` — **Jaroslav Hašek (1883–1923)**. Osudy dobrého vojáka Švejka, díl II „Na frontě“, kap. 1 „Švejkovy nehody ve vlaku“ (1922); úryvek, znění podle Wikizdrojů.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=191047). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `0e247abf` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Jaroslav Hašek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 118 slov ve stylu díla Osudy dobrého vojáka Švejka (Jaroslav Hašek), jako by šlo o necitovaný úryvek z této knihy. Obsah: nádražní restaurace plná vojáků různých národností, kteří jedou zpátky na frontu; vypravěč s hořkou ironií domýšlí jejich osud. Interpunkce jako v originále tohoto druhu, zhruba: 12 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `2aef2e6c` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Jaroslav Hašek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 118 slov ve stylu díla Osudy dobrého vojáka Švejka (Jaroslav Hašek), jako by šlo o necitovaný úryvek z této knihy. Obsah: nádražní restaurace plná vojáků různých národností, kteří jedou zpátky na frontu; vypravěč s hořkou ironií domýšlí jejich osud. Interpunkce jako v originále tohoto druhu, zhruba: 12 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `889803a0` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Jaroslav Hašek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 118 slov ve stylu díla Osudy dobrého vojáka Švejka (Jaroslav Hašek), jako by šlo o necitovaný úryvek z této knihy. Obsah: nádražní restaurace plná vojáků různých národností, kteří jedou zpátky na frontu; vypravěč s hořkou ironií domýšlí jejich osud. Interpunkce jako v originále tohoto druhu, zhruba: 12 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `d7434bb8` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Jaroslav Hašek
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní úryvek o rozsahu zhruba 118 slov ve stylu díla Osudy dobrého vojáka Švejka (Jaroslav Hašek), jako by šlo o necitovaný úryvek z této knihy. Obsah: nádražní restaurace plná vojáků různých národností, kteří jedou zpátky na frontu; vypravěč s hořkou ironií domýšlí jejich osud. Interpunkce jako v originále tohoto druhu, zhruba: 12 čárek, 1 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 0 vykřičníků, 0 otazníků, 0 uvozovek (párů). Pravopis a slovosled odpovídající době a autorovi. Necituj ani blízce neparafrázuj žádný existující text. Vypiš pouze úryvek jako jeden odstavec: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

### sf1a555 — Jiří Orten (1919–1941): pravá báseň, nebo napodobenina od AI?

- `4d343c36` — **Jiří Orten (1919–1941)**. „Něžný sníh“, Lidové noviny, 9. prosince 1939; datum podle Wikizdrojů.
  Text: [Wikizdroje](https://cs.wikisource.org/w/index.php?oldid=242570). Volné dílo / public domain (autor zemřel před rokem 1956; cs.wikisource, šablona PD-old-70).

- `997418fe` — **GPT-6.1 — AI**. GPT-6.1 „sol“ (OpenAI), přes Codex CLI bez přístupu na web, střední úsilí uvažování, 2026-11-01; napodobenina: Jiří Orten
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Jiří Orten (1919–1941), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, střídavý rým ABAB. Téma: padající sníh jako něžné dotyky a touha rozplynout se. Lyrický tón Jiřího Ortena. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 5 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `bf2c2a0c` — **Claude Opus 5.5 — AI**. Claude Opus 5.5 (Anthropic), přes Claude Code s neutrálním systémovým promptem a bez nástrojů, 2026-11-01; napodobenina: Jiří Orten
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Jiří Orten (1919–1941), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, střídavý rým ABAB. Téma: padající sníh jako něžné dotyky a touha rozplynout se. Lyrický tón Jiřího Ortena. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 5 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `cb75916c` — **Qwen3.8-27B — AI**. Qwen3.8-27B (Alibaba; model s otevřenými vahami, spuštěný lokálně), 2026-11-01; napodobenina: Jiří Orten
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Jiří Orten (1919–1941), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, střídavý rým ABAB. Téma: padající sníh jako něžné dotyky a touha rozplynout se. Lyrický tón Jiřího Ortena. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 5 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

- `d856973e` — **Gemini 3.8 Flash — AI**. Gemini 3.8 Flash s vyšším uvažováním (Google), přes Antigravity CLI, 2026-11-01; napodobenina: Jiří Orten
  Vytvořeno pro tento kvíz 2026-11-01; uvolněno pod CC0.

  Přesné původní zadání:

  > Napiš původní báseň ve stylu autora Jiří Orten (1919–1941), jako by šlo o méně známou báseň tohoto autora. Forma: přesně 12 veršů ve třech čtyřverších, jamb, střídání osmi- a sedmislabičných veršů, střídavý rým ABAB. Téma: padající sníh jako něžné dotyky a touha rozplynout se. Lyrický tón Jiřího Ortena. Současný český pravopis, jak ho používají dnešní vydání. Rozsah: zhruba 56 slov, 3–6 slov na verš. Interpunkce jako v originále tohoto druhu, zhruba: 6 čárek, 0 pomlček (—), 0 závorek, 0 výpustek (…), 0 středníků, 0 dvojteček, 1 vykřičníků, 0 otazníků, 0 uvozovek (párů). Velké písmeno na začátku verše jen tam, kde začíná věta (v originále 5 z 12 veršů). Necituj ani neparafrázuj žádnou existující báseň. Vypiš pouze text básně: bez názvu, bez komentáře, bez markdownu.
  >
  > Answer directly in your reply; do not use any tools, files or commands.

  Pravidlo výběru: bereme první výstup, který prošel mechanickou kontrolou (u básní přesný počet veršů; délka do 25 % od originálu; žádný úsek 8 slov shodný s originálem). Tohle byl pokus č. 1. Neupravováno, jen sazba stejná pro všechny texty (uvozovky, pomlčky, výpustky, bez odsazení, sloky jako v originále, próza jako jeden odstavec).

## Studie na obrazovce s výsledky

- Porter a Machery, *Scientific Reports* 2024: 1 634 lidí posuzovalo básně deseti slavných anglicky píšících básníků a jejich napodobeniny od ChatGPT-3.5. Trefili se ve **46,6 %** případů, tedy hůř než náhoda. Ve druhém pokusu (696 lidí) dostaly básně od AI ve většině ohledů lepší hodnocení. [Studie](https://www.nature.com/articles/s41598-024-76900-1)
- AI Art Turing Test Scotta Alexandra, listopad 2024: asi 11 000 lidí, 50 obrázků (autoři záměrně vybrali silné obrázky od AI); medián **60 %**. [Výsledky](https://www.astralcodexten.com/p/how-did-you-do-on-the-ai-art-turing)
- Hra „Real or Not“ od Microsoft AI for Good, 2024: přes 12 500 lidí a asi 287 000 posouzených obrázků; celkem **62 %** správně. [arXiv:2507.18640](https://arxiv.org/abs/2507.18640)
- AI21 „Human or Not“, 2023: přes 1,5 milionu lidí si dvě minuty psalo s neznámým protějškem a hádalo, jestli je to člověk. Celkem **68 %** správně, a když to byl bot, jen **60 %**. [arXiv:2305.20010](https://arxiv.org/abs/2305.20010)
- Jakesch a kol., *PNAS* 2023: 4 600 účastníků nedokázalo líp než náhodou odlišit sebeprezentace napsané AI (seznamky, ubytování, pracovní profily) od lidských. [arXiv:2206.07271](https://arxiv.org/abs/2206.07271)
- Nightingale a Farid, *PNAS* 2022: tváře ze StyleGAN2 lidé správně poznali ve **48 %** případů a považovali je za důvěryhodnější než skutečné. [Studie](https://www.pnas.org/doi/10.1073/pnas.2120481119)
- New York Times „Who’s a Better Writer: A.I. or Humans?“, březen 2026: přes 86 000 čtenářů; **54 %** dalo přednost úryvkům od AI. (Test oblíbenosti, ne poznávání.) [Kvíz](https://www.nytimes.com/interactive/2026/03/09/business/ai-writing-quiz.html)
