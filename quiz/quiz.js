/* Human or AI? / Člověk, nebo AI? — static quiz shared by quiz/ (English) and quiz/cs/ (Czech).
   No network calls except this folder's items.json and media, plus the count requests from the
   locally served /usage-counts.js reporter. Answers and history stay
   in this browser's localStorage. */
(function () {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const main = $('#main'), live = $('#live');
  const LANG = document.documentElement.lang === 'cs' ? 'cs' : 'en';
  const T = {
    en: {
      title: 'Human or AI?', doc: 'Human or AI? — a quiz', loadErr: 'Could not load the quiz. Check your connection and try again.', retry: 'Retry', unavailable: 'Picture unavailable.', skip: 'Picture unavailable: skip this item', notScoredUnavailable: '(picture unavailable: not scored)', start: 'Start: a mixed round',
      lede: 'Each item is either the real thing — a poem or a passage by a great writer, a Wikipedia paragraph, a forum answer, a photograph — or an imitation that an AI model wrote or drew for the same slot. Decide which. Then see who or what made it, and why it is hard or what gives it away.',
      choose: 'Or choose a round', items: n => `${n} items`, recent: 'Your recent rounds', round: 'Round', date: 'Date', score: 'Score', forget: 'Forget my history in this browser',
      poolNote: (ni, n) => `${ni} items in ${n} matched sets. A round draws one item from each of several sets; a coin flip decides whether you see the original or an AI imitation. The split need not be even, so counting will not help. New rounds show sets you have not seen first.`,
      howLink: 'How the items were made and checked', exhausted: 'You have seen every set in this round at least once. Items from sets whose original you have already seen will not count towards your score.',
      progress: (i, n) => `Item ${i} of ${n}`, endRound: 'End round and see results',
      human: 'Human', ai: 'AI', known: k => `I already know this ${k} (it will not count towards your score)`, kText: 'text', kPic: 'picture',
      keys: 'Keys while the item has focus: <span class="kbd">H</span> human, <span class="kbd">A</span> AI, <span class="kbd">K</span> I know it.',
      question: 'Read the question that was asked', right: 'Right', wrong: 'Wrong', madeH: 'made by a human', madeA: 'made by AI',
      notScoredKnown: '(you knew it: not scored)', notScoredSeen: '(you have seen this set’s original before: not scored)',
      badgeH: 'HUMAN', badgeA: 'AI', promptSum: 'The exact prompt and how this output was chosen',
      cmpOrig: 'Compare with the original', cmpAI: n => n > 1 ? `Compare with the AI imitations (${n})` : 'Compare with the AI imitation', otherAI: n => `The other AI imitation${n > 1 ? 's' : ''} of the same original (${n})`,
      spoil: 'Opening this shows the answer for the whole set: later items from this set will not count towards your score.',
      next: 'Next item', finish: 'Finish and see the results', said: (ok, h) => `${ok ? 'Right' : 'Wrong'}. This was made by ${h ? 'a human' : 'AI'}.`,
      result: 'Your result', allKnown: 'You knew every item, so nothing was scored.',
      chance: (k, n, odds) => `${k} or more of ${n} by pure guessing: ${odds}. More items give a clearer picture.`,
      odds: (oneIn, percent) => `about 1 in ${oneIn} (${percent}\u00a0%)`,
      chanceTitle: 'Could this be pure guessing?', yourScore: k => `Your score: ${k}`, tailLabel: k => `${k} or more`, correctAnswers: 'Correct answers',
      chanceLabel: (k, n, message) => `Results under pure guessing. Your score: ${k} / ${n}. Shaded bars: ${k} or more. ${message}`,
      historyTitle: 'Accuracy by round', chanceLine: 'Guessing: 50\u00a0%',
      historyLabel: (rounds, summary) => `Accuracy by round. Guessing: 50 %. ${rounds} ${summary}`,
      historyPoint: (i, date, k, n, p) => `Round ${i}, ${date}: ${n ? `${k} / ${n} (${p} %)` : 'not scored'}.`,
      historyUnscored: 'Unscored rounds leave gaps in the line.', historyNoScores: 'No scored answers yet.',
      byKind: 'By what it was', kind: 'Kind', origH: 'Human originals', origA: 'AI imitations', byCat: 'By category', cat: 'Category', cats: { literature: 'Literature & poetry', everyday: 'Everyday writing', images: 'Images' },
      byModel: 'AI imitations by model', model: 'Model', byEra: 'By era of the item', era: 'Era',
      rightCol: 'Right', rightQ: 'Right?', meterSr: 'Share right; the line marks 50 %', allRounds: (a, b, p) => `All your rounds in this browser so far: ${a} right out of ${b} (${p} %).`,
      others: 'How others have done', review: 'Review this round', item: 'Item', youSaid: 'You said', knownShort: 'not scored',
      again: t => `Play another round: ${t}`, another: 'Choose another round', copy: 'Copy my result', copied: 'Copied',
      share: (t, ok, n) => `Human or AI? ${t}: ${ok}/${n}.`,
      learn: 'Want to learn the tells? The <a href="../">catalogue of AI tells</a> lists them by medium and by when they appeared.', back: 'Back to the rounds',
    },
    cs: {
      title: 'Člověk, nebo AI?', doc: 'Člověk, nebo AI? – kvíz', loadErr: 'Kvíz se nepodařilo načíst. Zkontrolujte připojení a zkuste to znovu.', retry: 'Zkusit znovu', unavailable: 'Obrázek není dostupný.', skip: 'Obrázek není dostupný: přeskočit položku', notScoredUnavailable: '(obrázek není dostupný, nepočítá se)', start: 'Začít: smíšené kolo',
      lede: 'Každá položka je buď pravá (báseň nebo úryvek od velkého autora, heslo z Wikipedie, zpráva, fotka), anebo napodobenina, kterou pro stejný námět vytvořila umělá inteligence. Poznáte, co je co? Hned potom uvidíte, kdo nebo co položku vytvořilo a čím se prozradí, případně proč je těžké to poznat.',
      choose: 'Nebo si vyberte kolo', items: n => `${n} položek`, recent: 'Vaše poslední kola', round: 'Kolo', date: 'Datum', score: 'Skóre', forget: 'Smazat moji historii v tomto prohlížeči',
      poolNote: (ni, n) => `${ni} položek v ${n} sadách. Kolo vybere po jedné položce z několika sad a o tom, jestli uvidíte originál, nebo napodobeninu, rozhodne hod mincí. Poměr nemusí vyjít půl na půl a počítat se nevyplatí. Nová kola dávají přednost sadám, které jste ještě neviděli.`,
      howLink: 'Jak jsme položky vybírali a ověřovali', exhausted: 'Všechny sady tohoto kola už jste aspoň jednou viděli. Položky ze sad, jejichž originál už znáte, se do skóre nepočítají.',
      progress: (i, n) => `Položka ${i} z ${n}`, endRound: 'Ukončit kolo a ukázat výsledky',
      human: 'Člověk', ai: 'AI', known: k => `Tenhle ${k} už znám (do skóre se nezapočítá)`, kText: 'text', kPic: 'obrázek',
      keys: 'Klávesy, když je položka aktivní: <span class="kbd">H</span> člověk, <span class="kbd">A</span> AI, <span class="kbd">K</span> už znám.',
      question: 'Přečíst si původní dotaz', right: 'Správně', wrong: 'Vedle', madeH: 'vytvořil to člověk', madeA: 'vytvořila to AI',
      notScoredKnown: '(znali jste to, nepočítá se)', notScoredSeen: '(originál z této sady už jste viděli, nepočítá se)',
      badgeH: 'ČLOVĚK', badgeA: 'AI', promptSum: 'Přesné zadání a jak jsme tenhle výstup vybrali',
      cmpOrig: 'Porovnat s originálem', cmpAI: n => n > 1 ? `Porovnat s napodobeninami od AI (${n})` : 'Porovnat s napodobeninou od AI', otherAI: n => `Další napodobeniny téhož originálu (${n})`,
      spoil: 'Když tohle otevřete, prozradíte si odpověď pro celou sadu. Další položky z ní se pak do skóre nepočítají.',
      next: 'Další položka', finish: 'Dokončit a ukázat výsledek', said: (ok, h) => `${ok ? 'Správně' : 'Vedle'}. ${h ? 'Vytvořil to člověk' : 'Vytvořila to AI'}.`,
      result: 'Váš výsledek', allKnown: 'Všechny položky jste znali, takže se nic nepočítalo.',
      chance: (k, n, odds) => `${k} a víc ${[2, 3, 4, 6, 7, 12, 13, 14, 17].includes(n) ? 'ze' : 'z'} ${n} čistým hádáním: ${odds}. Více položek dá přesnější představu.`,
      odds: (oneIn, percent) => `zhruba 1 z ${oneIn} (${percent}\u00a0%)`,
      chanceTitle: 'Mohlo to být pouhé hádání?', yourScore: k => `Vaše skóre: ${k}`, tailLabel: k => `${k} a víc`, correctAnswers: 'Správné odpovědi',
      chanceLabel: (k, n, message) => `Výsledky při čistém hádání. Vaše skóre: ${k} / ${n}. Vybarvené sloupce: ${k} a víc. ${message}`,
      historyTitle: 'Úspěšnost v jednotlivých kolech', chanceLine: 'Hádání: 50\u00a0%',
      historyLabel: (rounds, summary) => `Úspěšnost v jednotlivých kolech. Hádání: 50 %. ${rounds} ${summary}`,
      historyPoint: (i, date, k, n, p) => `Kolo ${i}, ${date}: ${n ? `${k} / ${n} (${p} %)` : 'nepočítá se'}.`,
      historyUnscored: 'Kola bez skóre přerušují čáru v grafu.', historyNoScores: 'Zatím žádné započítané odpovědi.',
      byKind: 'Podle původu', kind: 'Původ', origH: 'Lidské originály', origA: 'Napodobeniny od AI', byCat: 'Podle kategorie', cat: 'Kategorie', cats: { literature: 'Literatura a poezie', everyday: 'Běžné texty', images: 'Obrázky' },
      byModel: 'Napodobeniny podle modelu', model: 'Model', byEra: 'Podle doby vzniku', era: 'Doba',
      rightCol: 'Správně', rightQ: 'Správně?', meterSr: 'Podíl správných odpovědí; čára značí 50 %', allRounds: (a, b, p) => `Všechna vaše kola v tomto prohlížeči: ${a} správně z ${b} (${p} %).`,
      others: 'Jak dopadli jiní', review: 'Přehled kola', item: 'Položka', youSaid: 'Vaše odpověď', knownShort: 'nepočítá se',
      again: t => `Další kolo: ${t}`, another: 'Vybrat jiné kolo', copy: 'Zkopírovat výsledek', copied: 'Zkopírováno',
      share: (t, ok, n) => `Člověk, nebo AI? ${t}: ${ok}/${n}.`,
      learn: 'Chcete se znaky AI naučit? Projděte si <a href="../../">katalog znaků AI (anglicky)</a>.', back: 'Zpátky na výběr kol',
    },
  }[LANG];

  /* Czech typography: no line break after a one-letter preposition or conjunction (v, k, s, z, o, u, a, i) */
  if (LANG === 'cs') {
    const nb = node => {
      const w = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, { acceptNode: t => t.parentElement && t.parentElement.closest('.prompt') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
      for (let t = w.nextNode(); t; t = w.nextNode()) { const v = t.data.replace(/(^|[\s(„])([vkszouaiVKSZOUAI]) /g, '$1$2 '); if (v !== t.data) t.data = v; }
    };
    new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => { if (n.nodeType === 1) nb(n); else if (n.nodeType === 3 && n.parentElement) nb(n.parentElement); }))).observe(main, { childList: true, subtree: true });
    nb(document.body);
  }

  /* ---------- storage (optional: everything works without it) ---------- */
  const KEY = 'human-or-ai/v2/' + LANG;
  // Cap allocations made by probability charts and keep the existing 200-round history.
  const MAX_ROUND_ITEMS = 100, MAX_HISTORY = 200;
  const isObject = v => Object.prototype.toString.call(v) === '[object Object]';
  const integer = (v, max) => Number.isInteger(v) && v >= 0 && v <= max;
  const freshStore = () => ({ seen: {}, history: [], setsShown: {}, origSeen: {} });
  function calendarDate(v) {
    if (typeof v !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(v)) return false;
    const date = new Date(v + 'T12:00:00Z');
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === v;
  }
  function load() {
    try {
      const v = JSON.parse(localStorage.getItem(KEY));
      if (!isObject(v)) return freshStore();
      const clean = freshStore();
      for (const key of ['seen', 'setsShown', 'origSeen']) {
        if (isObject(v[key])) clean[key] = Object.fromEntries(Object.entries(v[key])
          .filter(([id, count]) => id.length <= 200 && integer(count, 1000000000)));
      }
      if (Array.isArray(v.history)) clean.history = v.history.filter(h => isObject(h) &&
        integer(h.n, MAX_ROUND_ITEMS) && integer(h.ok, h.n) && calendarDate(h.date))
        .slice(-MAX_HISTORY).map(h => ({
          round: typeof h.round === 'string' ? h.round.slice(0, 200) : '',
          title: typeof h.title === 'string' ? h.title.slice(0, 200) : '',
          date: h.date, ok: h.ok, n: h.n,
          answers: Array.isArray(h.answers) ? h.answers.slice(0, MAX_ROUND_ITEMS)
            .filter(a => isObject(a) && typeof a.id === 'string' && a.id.length <= 200 &&
              typeof a.ok === 'boolean' && typeof a.known === 'boolean')
            .map(a => ({ id: a.id, ok: a.ok, known: a.known })) : [],
        }));
      // Validate against the fetched data before trying to resume.
      if (Object.prototype.hasOwnProperty.call(v, 'active')) clean.active = v.active;
      return clean;
    } catch (e) { return freshStore(); }
  }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* private mode */ } }
  let store = load();

  /* ---------- theme ---------- */
  const root = document.documentElement;
  let theme = null; try { theme = localStorage.getItem('human-or-ai/theme'); } catch (e) { /* ignore */ }
  if (theme === 'light' || theme === 'dark') root.dataset.theme = theme;
  $('#theme').addEventListener('click', () => {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('human-or-ai/theme', root.dataset.theme); } catch (e) { /* ignore */ }
  });

  /* ---------- helpers ---------- */
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const allowedURL = u => {
    const scheme = String(u).replace(/[\u0000-\u0020]/g, '').match(/^([a-z][a-z0-9+.-]*):/i);
    return !scheme || /^(?:https?|mailto|tel)$/i.test(scheme[1]);
  };
  const md = s => esc(s).replace(/\[([^\]]+)\]\(((?:[^()\s]|\([^()\s]*\))+)\)/g, (m, l, u) => allowedURL(u) ? `<a href="${u}"${/^(?:https?:|\/\/)/i.test(u) ? ' rel="noopener"' : ''}>${l}</a>` : l)
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/\*([^*]+)\*/g, '<em>$1</em>');
  const plain = s => String(s).replace(/\*+/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function decode(x) { const b = atob(x), u = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return JSON.parse(new TextDecoder().decode(u)); }
  function textHTML(it) {
    if (it.form === 'poem') return `<div class="text poem" lang="${esc(it.lang)}">${it.text.split(/\n\n+/).map(st => `<p class="st">${st.split('\n').map(l => `<span class="l">${esc(l)}</span>`).join('')}</p>`).join('')}</div>`;
    return `<div class="text" lang="${esc(it.lang)}">${it.text.split(/\n\n+/).map(p => `<p>${esc(p)}</p>`).join('')}</div>`;
  }
  function contentHTML(it) {
    if (it.mod === 'image') return `<figure class="img"><img src="${esc(it.img)}" alt="${esc(it.alt)}" width="${esc(it.w)}" height="${esc(it.h)}" decoding="async"></figure>`;
    return textHTML(it);
  }
  function binomialTail(k, n) {
    // Pooled histories can exceed the range of unscaled binomial coefficients.
    if (n > 1000 || typeof window.exactChanceValues !== 'function') return binomialDistribution(n).slice(k).reduce((sum, p) => sum + p, 0);
    let combinations = 1, tail = 0;
    for (let j = 0; j <= n; j++) {
      if (j >= k) tail += combinations;
      combinations = combinations * (n - j) / (j + 1);
    }
    return tail / 2 ** n;
  }
  function chanceMessage(k, n) {
    const probability = binomialTail(k, n), locale = LANG === 'cs' ? 'cs-CZ' : 'en-GB';
    const extreme = Number.isFinite(1 / probability) || typeof window.exactChanceValues !== 'function' ? null : window.exactChanceValues(k, n);
    const percent = new Intl.NumberFormat(locale, { maximumSignificantDigits: 2 }).format(extreme ? extreme.percent : 100 * probability);
    // Common outcomes read more clearly as a percentage than as "1 in 1".
    const odds = !extreme && !Number.isFinite(1 / probability) ? (LANG === 'cs' ? 'méně než 10⁻³⁰⁰\u00a0%' : 'less than 10⁻³⁰⁰\u00a0%') : probability > 0.5 ? `${percent}\u00a0%`
      : T.odds(new Intl.NumberFormat(locale).format(extreme ? extreme.oneIn : Math.round(1 / probability)), percent);
    return T.chance(k, n, odds);
  }
  function binomialDistribution(n) {
    // Start at the mode, then normalise. This is the same exact binomial
    // recurrence, without overflowing 2 ** n for long histories.
    const weights = Array(n + 1).fill(0), mode = Math.floor(n / 2);
    weights[mode] = 1;
    for (let j = mode; j > 0; j--) weights[j - 1] = weights[j] * j / (n - j + 1);
    for (let j = mode; j < n; j++) weights[j + 1] = weights[j] * (n - j) / (j + 1);
    const total = weights.reduce((sum, weight) => sum + weight, 0);
    return weights.map(weight => weight / total);
  }
  function chartTicks(n) {
    const step = Math.max(1, Math.ceil(n / 4));
    const ticks = [0];
    for (let j = step; j < n; j += step) if (n - j >= step / 2) ticks.push(j);
    ticks.push(n);
    return ticks;
  }
  function chanceGraphHTML(k, n, message) {
    const probabilities = binomialDistribution(n), peak = Math.max(...probabilities);
    const left = 12, width = 296, base = 160, height = 108, step = width / (n + 1);
    const x = j => left + (j + 0.5) * step;
    const barTop = j => base - height * probabilities[j] / peak;
    const labelX = Math.max(68, Math.min(252, x(k)));
    const tailX = left + k * step;
    return `<figure class="chart chance-graph">
      <figcaption><h2>${esc(T.chanceTitle)}</h2><p class="score">${k} / ${n}</p><p class="chance-message">${esc(message)}</p></figcaption>
      <svg viewBox="0 0 320 242" role="img" aria-label="${esc(T.chanceLabel(k, n, message))}">
        <text class="chart-player-label" x="${labelX}" y="18" text-anchor="middle">${esc(T.yourScore(k))}</text>
        <path class="chart-player-line" d="M ${labelX} 25 L ${x(k)} 40 V ${base}"/>
        ${probabilities.map((p, j) => `<rect class="chance-bar${j >= k ? ' chance-tail' : ''}${j === k ? ' player-bar' : ''}" data-score="${j}" x="${left + j * step + step * 0.1}" y="${barTop(j)}" width="${step * 0.8}" height="${height * p / peak}"/>`).join('')}
        <path class="chart-axis" d="M ${left} ${base} H ${left + width}"/>
        ${chartTicks(n).map(j => `<text x="${x(j)}" y="179" text-anchor="${j === 0 ? 'start' : j === n ? 'end' : 'middle'}">${j}</text>`).join('')}
        <path class="chart-tail-bracket" d="M ${tailX} 188 V 194 H ${left + width} V 188"/>
        <text class="chart-tail-label" x="${Math.min(264, (tailX + left + width) / 2)}" y="211" text-anchor="middle">${esc(T.tailLabel(k))}</text>
        <text class="chart-axis-label" x="160" y="235" text-anchor="middle">${esc(T.correctAnswers)}</text>
      </svg>
    </figure>`;
  }
  function historyGraphHTML() {
    const history = store.history;
    if (history.length < 2) return '';
    const pooled = history.reduce((sum, h) => ({ ok: sum.ok + h.ok, n: sum.n + h.n }), { ok: 0, n: 0 });
    const summary = pooled.n ? T.allRounds(pooled.ok, pooled.n, pct(pooled.ok, pooled.n)) : T.historyNoScores;
    const chance = pooled.n ? chanceMessage(pooled.ok, pooled.n) : '';
    const labels = history.map((h, i) => T.historyPoint(i + 1, displayDate(h.date), h.ok, h.n, pct(h.ok, h.n)));
    const x = i => 38 + i * 264 / (history.length - 1), y = h => 162 - 116 * h.ok / h.n;
    let drawing = false;
    const path = history.map((h, i) => {
      if (!h.n) { drawing = false; return ''; }
      const point = `${drawing ? 'L' : 'M'} ${x(i)} ${y(h)}`;
      drawing = true;
      return point;
    }).join(' ');
    return `<figure class="chart history-graph">
      <figcaption><p class="chart-heading">${esc(T.historyTitle)}</p><p class="history-summary">${esc(summary)}</p>${chance ? `<p class="pooled-chance">${esc(chance)}</p>` : ''}</figcaption>
      <svg viewBox="0 0 320 211" role="img" aria-label="${esc(T.historyLabel(labels.join(' '), `${summary} ${chance}`.trim()))}">
        <path class="chart-axis" d="M 38 46 V 162 H 302"/>
        ${[0, 50, 100].map(p => `<text x="30" y="${166 - 116 * p / 100}" text-anchor="end">${p}</text>`).join('')}
        <path class="chart-chance-line" d="M 38 104 H 302"/>
        <text class="chart-chance-label" x="302" y="24" text-anchor="end">${esc(T.chanceLine)}</text>
        <path class="chart-chance-line" d="M 294 29 V 104"/>
        <path class="history-trend" d="${path}"/>
        ${history.map((h, i) => h.n ? `<circle class="history-point" cx="${x(i)}" cy="${y(h)}" r="3"><title>${esc(labels[i])}</title></circle>` : '').join('')}
        ${chartTicks(history.length - 1).map(i => `<text x="${x(i)}" y="182" text-anchor="middle">${i + 1}</text>`).join('')}
        <text class="chart-axis-label" x="170" y="205" text-anchor="middle">${esc(T.round)}</text>
      </svg>
      ${history.some(h => !h.n) ? `<p class="small muted">${esc(T.historyUnscored)}</p>` : ''}
    </figure>`;
  }
  const pct = (a, b) => b ? Math.round(100 * a / b) : 0;
  const displayDate = date => /^\d{4}-\d{2}-\d{2}$/.test(date)
    ? new Intl.DateTimeFormat(LANG === 'cs' ? 'cs-CZ' : 'en-GB').format(new Date(date + 'T12:00:00')) : date;
  function say(t) { live.textContent = ''; setTimeout(() => { live.textContent = t; }, 30); }
  function focusMain() { main.focus({ preventScroll: true }); window.scrollTo({ top: 0 }); }
  /* Scrollable table regions need an explicit focus target (WCAG 2.1.1). */
  function markScrollable(scope) {
    function labelFor(w) {
      const heads = [...(scope || document).querySelectorAll('h1, h2, h3, h4')]
        .filter(h => h.compareDocumentPosition(w) & Node.DOCUMENT_POSITION_FOLLOWING);
      const last = heads[heads.length - 1];
      return last ? (LANG === 'cs' ? 'Tabulka: ' + last.textContent.trim() : last.textContent.trim().replace(/[.:\s]+$/, '') + ' table')
        : (LANG === 'cs' ? 'Tabulka s daty' : 'Data table');
    }
    (scope || document).querySelectorAll('.tablewrap').forEach(w => {
      if (w.scrollWidth > w.clientWidth + 1) {
        if (w.getAttribute('tabindex') !== '0') w.setAttribute('tabindex', '0');
        if (!w.getAttribute('aria-label')) w.setAttribute('aria-label', labelFor(w));
        w.setAttribute('role', 'region');
      } else if (w.getAttribute('tabindex') === '0') {
        w.removeAttribute('tabindex');
        w.removeAttribute('aria-label');
        w.removeAttribute('role');
      }
    });
  }
  window.addEventListener('resize', () => markScrollable(main));

  /* ---------- data ---------- */
  let DATA, ITEMS = Object.create(null), SETS = Object.create(null);
  function fetchItems() {
    main.innerHTML = `<p class="muted">${esc(T.title)}…</p>`;
    fetch('items.json', { cache: 'no-cache' }).then(r => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(d => {
      ITEMS = Object.create(null); SETS = Object.create(null);
      d.items.forEach(i => { ITEMS[i.id] = i; i.human = decode(i.x).kind === 'human'; });
      // tolerate partial data: keep only members that exist
      d.sets = d.sets.map(s => Object.assign({}, s, { members: s.members.filter(m => ITEMS[m]) })).filter(s => s.members.length);
      d.sets.forEach(s => { SETS[s.id] = s; });
      DATA = d;
      if (Object.prototype.hasOwnProperty.call(store, 'active')) {
        const resumed = restoreRound(store.active);
        if (resumed) {
          game = resumed;
          history.replaceState(null, '', location.pathname + location.search + '#play-' + encodeURIComponent(game.round.id));
          routed = true;
          enterRound(); showItem(); return;
        }
        delete store.active; save(store);
        history.replaceState(null, '', location.pathname + location.search);
      }
      route();
    }).catch(() => {
      DATA = null;
      main.innerHTML = `<div class="card"><p>${esc(T.loadErr)}</p><button class="btn primary" type="button" id="retryLoad">${esc(T.retry)}</button></div>`;
      $('#retryLoad').addEventListener('click', fetchItems);
    });
  }
  fetchItems();

  window.addEventListener('hashchange', route);
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-go]'); if (!a) return;
    e.preventDefault();
    if (a.dataset.go === 'home') { if (location.hash) history.pushState(null, '', location.pathname); route(); } else location.hash = a.dataset.go;
  });
  let routed = false;
  function route() {
    if (!DATA) return;
    const h = location.hash.slice(1);
    if (h === 'main' && routed) return;  // skip link: the browser focuses #main itself
    routed = true;
    if (h === 'about') return about();
    if (h.startsWith('play-')) { const r = DATA.rounds.find(x => x.id === h.slice(5)); if (r) return start(r); }
    home();
  }

  /* ---------- home ---------- */
  function home() {
    game = null;
    delete store.active; save(store);
    root.classList.remove('in-round');
    const hist = store.history.slice(-5).reverse();
    main.innerHTML = `
      <h1>${esc(T.title)}</h1>
      <p class="lede">${esc(T.lede)}</p>
      <p class="row"><button class="btn primary" type="button" id="startMixed">${esc(T.start)}</button></p>
      <h2>${esc(T.choose)}</h2>
      <div class="rounds">${DATA.rounds.map(r => `
        <button class="round" type="button" data-round="${esc(r.id)}"><b>${esc(r.title)}</b><span>${esc(r.blurb)}</span><br><span class="tag">${esc(T.items(roundSize(r)))} · ${esc(r.tag)}</span></button>`).join('')}
      </div>
      <p class="small muted">${esc(T.poolNote(DATA.items.length, DATA.sets.length))} <a href="#about">${esc(T.howLink)}</a>.</p>
      ${hist.length ? `<h2>${esc(T.recent)}</h2>${historyGraphHTML()}<div class="tablewrap"><table class="res"><thead><tr><th>${esc(T.round)}</th><th>${esc(T.date)}</th><th class="num">${esc(T.score)}</th></tr></thead><tbody>${hist.map(h => `<tr><td>${esc(h.title)}</td><td>${esc(displayDate(h.date))}</td><td class="num">${esc(h.ok)} / ${esc(h.n)}</td></tr>`).join('')}</tbody></table></div>
      <p class="small"><button type="button" class="linkbtn" id="forget">${esc(T.forget)}</button></p>` : ''}`;
    main.querySelectorAll('[data-round]').forEach(b => b.addEventListener('click', () => { location.hash = 'play-' + b.dataset.round; }));
    $('#startMixed').addEventListener('click', () => { const r = DATA.rounds.find(x => x.id === 'mixed') || DATA.rounds[0]; location.hash = 'play-' + r.id; });
    const f = $('#forget'); if (f) f.addEventListener('click', () => { store = { seen: {}, history: [], setsShown: {}, origSeen: {} }; save(store); home(); });
    document.title = T.doc;
    markScrollable(main);
    focusMain();
  }

  function about() {
    main.innerHTML = DATA.about_html.replace('<h1>', '<h1 id="about">') + `<p class="row"><button class="btn primary" type="button" data-go="home">${esc(T.back)}</button></p>`;
    markScrollable(main);
    focusMain();
  }

  /* ---------- a round ---------- */
  let game = null;
  const seenCount = id => store.seen[id] || 0;
  const eligibleSets = round => DATA.sets.filter(s => round.cats.includes(s.cat) && (!round.lang || s.lang === round.lang) && (!round.sub || s.sub === round.sub));
  function roundSize(round) {
    const available = eligibleSets(round).length;
    return Math.min(MAX_ROUND_ITEMS, available, !round.sub && round.cats.length === 1 && round.cats[0] === 'images' ? 12 : round.n);
  }
  function draw(round) {
    let sets = eligibleSets(round);
    const n = roundSize(round);
    const lvl = s => store.setsShown[s.id] || 0;  // never-shown sets first, then the least shown
    sets = shuffle(sets).sort((a, b) => lvl(a) - lvl(b));
    if (round.cats.length > 1) {  // Mixed: every category appears
      const byCat = round.cats.map(c => sets.filter(s => s.cat === c)), picked = [];
      for (let k = 0; picked.length < n && byCat.some(b => b.length); k = (k + 1) % byCat.length) if (byCat[k].length) picked.push(byCat[k].shift());
      sets = picked;
    } else sets = sets.slice(0, n);
    const exhausted = sets.some(s => lvl(s) > 0);
    // the coin flip does not depend on what was seen; among AI members the least-seen one is shown
    const ids = shuffle(sets).map(s => {
      const human = s.members.filter(m => ITEMS[m].human), ai = s.members.filter(m => !ITEMS[m].human);
      const pool = !ai.length || (human.length && Math.random() < 0.5) ? human : ai;
      const least = Math.min(...pool.map(seenCount));
      const c = pool.filter(m => seenCount(m) === least);
      return c[Math.floor(Math.random() * c.length)];
    });
    return { ids, exhausted };
  }
  function answerRecord(it, choice, known, reason) {
    const x = decode(it.x), set = SETS[it.set];
    return { id: it.id, choice, known, reason, ok: choice !== 'skip' && (choice === 'human') === it.human,
      h: it.human, cat: set.cat, family: x.family || null, era: x.era || null };
  }
  function restoreRound(v) {
    if (!isObject(v) || v.version !== DATA.version || typeof v.round !== 'string') return null;
    const round = DATA.rounds.find(r => r.id === v.round);
    if (!round || !Array.isArray(v.ids) || !v.ids.length || v.ids.length > roundSize(round) ||
      !integer(v.i, v.ids.length - 1) || typeof v.exhausted !== 'boolean' || !Array.isArray(v.answers) ||
      (v.answers.length !== v.i && v.answers.length !== v.i + 1)) return null;
    const eligible = new Set(eligibleSets(round).map(s => s.id)), sets = new Set();
    for (const id of v.ids) {
      if (typeof id !== 'string' || !ITEMS[id]) return null;
      const it = ITEMS[id];
      if (!eligible.has(it.set) || !SETS[it.set].members.includes(id) || sets.has(it.set)) return null;
      sets.add(it.set);
    }
    const answers = [];
    for (let i = 0; i < v.answers.length; i++) {
      const a = v.answers[i];
      if (!isObject(a) || a.id !== v.ids[i] || !['human', 'ai', 'skip'].includes(a.choice) ||
        typeof a.known !== 'boolean' || !['', 'known', 'seen', 'unavailable'].includes(a.reason) ||
        a.known !== (a.reason !== '') || (a.choice === 'skip') !== (a.reason === 'unavailable')) return null;
      answers.push(answerRecord(ITEMS[a.id], a.choice, a.known, a.reason));
    }
    return { round, ids: v.ids, exhausted: v.exhausted, i: v.i, answers };
  }
  function persistRound() {
    const g = game;
    store.active = { version: DATA.version, round: g.round.id, ids: g.ids, exhausted: g.exhausted,
      i: g.i, answers: g.answers.map(a => ({ id: a.id, choice: a.choice, known: a.known, reason: a.reason })) };
    save(store);
  }
  function enterRound() {
    root.classList.add('in-round');
    document.title = game.round.title + (LANG === 'cs' ? ' – ' : ' — ') + T.title;
  }
  // No optional chaining here: it would raise the parse floor (M15 keeps the
  // script parseable where BigInt is absent).
  const usageEvent = name => { if (typeof window.usageCount === 'function') window.usageCount(name); };
  function start(round) {
    const d = draw(round);
    game = { round, ids: d.ids, exhausted: d.exhausted, i: 0, answers: [] };
    // A replay created by start is a new round; a restored round (fetchItems) is not counted here.
    usageEvent(LANG === 'cs' ? 'quiz-start-cs' : 'quiz-start-en');
    enterRound(); persistRound(); showItem();
  }
  function showItem() {
    const g = game, it = ITEMS[g.ids[g.i]], set = SETS[it.set];
    main.innerHTML = `
      <h1 class="sr">${esc(T.title)}${LANG === 'cs' ? ' – ' : ' — '}${esc(g.round.title)}, ${esc(T.progress(g.i + 1, g.ids.length))}</h1>
      <div class="playhead">
        <div class="progress"><span>${esc(g.round.title)}</span><span>${esc(T.progress(g.i + 1, g.ids.length))}</span></div>
        <div class="bar" aria-hidden="true"><i style="width:${100 * g.i / g.ids.length}%"></i></div>
      </div>
      <p class="round-actions"><button class="btn" type="button" id="endRound"${g.answers.length ? '' : ' disabled'}>${esc(T.endRound)}</button></p>
      ${g.i === 0 && g.exhausted ? `<p class="note small">${esc(T.exhausted)}</p>` : ''}
      <article class="card" aria-labelledby="ctx">
        <p class="context" id="ctx">${md(set.context)}${LANG === 'en' && it.lang === 'cs' ? '<span class="flag" title="Czech">CZ</span>' : ''}${LANG === 'cs' && it.lang === 'en' ? '<span class="flag" title="anglicky">EN</span>' : ''}</p>
        ${set.question ? `<details class="question"><summary>${esc(T.question)}</summary><div class="text" lang="${esc(set.lang)}">${set.question.split(/\n\n+/).map(p => `<p>${esc(p)}</p>`).join('')}</div></details>` : ''}
        ${contentHTML(it)}
        <div id="ask">
          <div class="answer">
            <button class="btn human" type="button" data-ans="human">${esc(T.human)}</button>
            <button class="btn ai" type="button" data-ans="ai">${esc(T.ai)}</button>
          </div>
          <label class="known"><input type="checkbox" id="known"> <span>${esc(T.known(it.mod === 'image' ? T.kPic : T.kText))}</span></label>
          <p class="small muted keys-hint" style="margin:.6rem 0 0">${T.keys}</p>
        </div>
        <div id="rev"></div>
      </article>`;
    main.querySelectorAll('[data-ans]').forEach(b => b.addEventListener('click', () => answer(b.dataset.ans)));
    $('#endRound').addEventListener('click', results);
    if (g.answers[g.i]) renderAnswer(g.answers[g.i]);
    watchImages(main);
    focusMain();
    say(`${T.progress(g.i + 1, g.ids.length)}. ${plain(set.context)}`);
  }
  function watchImages(scope) {
    scope.querySelectorAll('figure.img img').forEach(img => {
      img.onerror = () => {
        if (!img.isConnected || img.nextElementSibling) return;
        const primary = img.closest('figure').parentElement.matches('article.card');
        const asking = primary && game && !game.answers[game.i];
        if (asking) {
          game.imageFailed = true;
          main.querySelectorAll('#ask button, #ask input').forEach(el => { el.disabled = true; });
        }
        const controls = document.createElement('div');
        controls.className = 'note image-error';
        controls.setAttribute('role', 'status');
        controls.innerHTML = `<p>${esc(T.unavailable)}</p><button class="btn" type="button">${esc(T.retry)}</button>` +
          (asking ? ` <button class="btn" type="button" data-skip>${esc(T.skip)}</button>` : '');
        img.after(controls);
        controls.querySelector('button').addEventListener('click', () => {
          controls.remove();
          img.src = img.getAttribute('src');
        });
        const skip = controls.querySelector('[data-skip]');
        if (skip) skip.addEventListener('click', () => answer('skip'));
        say(T.unavailable);
      };
      img.onload = () => {
        if (!img.isConnected) return;
        if (img.closest('figure').parentElement.matches('article.card') && game && !game.answers[game.i]) {
          game.imageFailed = false;
          main.querySelectorAll('#ask button, #ask input').forEach(el => { el.disabled = false; });
        }
      };
      if (img.complete && !img.naturalWidth) img.onerror();
    });
  }
  function answer(choice) {
    const g = game, it = ITEMS[g.ids[g.i]], set = SETS[it.set];
    if (g.answers[g.i] || (g.imageFailed && choice !== 'skip') || (choice === 'skip' && !g.imageFailed)) return;
    const reason = choice === 'skip' ? 'unavailable' : $('#known').checked ? 'known' : store.origSeen[set.id] ? 'seen' : '';
    const a = answerRecord(it, choice, !!reason, reason);
    g.answers[g.i] = a;
    store.seen[it.id] = seenCount(it.id) + 1; store.setsShown[set.id] = (store.setsShown[set.id] || 0) + 1;
    if (it.human && choice !== 'skip') store.origSeen[set.id] = 1;
    persistRound(); renderAnswer(a);
  }
  function renderAnswer(a) {
    const g = game, it = ITEMS[a.id], x = decode(it.x), set = SETS[it.set], ok = a.ok;
    main.querySelector('article.card').classList.add('answered');
    $('#endRound').disabled = false;
    main.querySelectorAll('#ask button, #ask input, .image-error [data-skip]').forEach(el => { el.disabled = true; });
    if (a.choice !== 'skip') main.querySelector(`[data-ans=${a.choice}]`).setAttribute('aria-pressed', 'true');
    const last = g.i === g.ids.length - 1;
    const why = a.reason === 'unavailable' ? T.notScoredUnavailable : a.reason === 'known' ? T.notScoredKnown : a.reason === 'seen' ? T.notScoredSeen : '';
    $('#rev').innerHTML = `<section class="reveal" aria-labelledby="verdict">
      <p class="verdict ${ok ? 'ok' : 'bad'}" id="verdict" tabindex="-1">${esc(a.choice === 'skip' ? T.unavailable : ok ? T.right : T.wrong)}${LANG === 'cs' ? ' – ' : ' — '}${esc(it.human ? T.madeH : T.madeA)}.${why ? ` <span class="small muted">${esc(why)}</span>` : ''}</p>
      <p class="truth"><span class="badge ${it.human ? 'human' : 'ai'}">${esc(it.human ? T.badgeH : T.badgeA)}</span><span class="who">${md(x.who)}</span>${x.what ? (LANG === 'cs' ? ' – ' : ' — ') + md(x.what) : ''}</p>
      ${x.why && x.why.length ? `<ul class="why">${x.why.map(w => `<li>${md(w)}</li>`).join('')}</ul>` : ''}
      ${x.source ? `<p class="small muted">${md(x.source)}</p>` : ''}
      ${x.prompt ? `<details><summary>${esc(T.promptSum)}</summary><div class="prompt">${esc(x.prompt)}</div><p class="small">${md(x.selection || '')}</p></details>` : ''}
      ${siblingsHTML(it)}
      <div class="next"><button class="btn primary" type="button" id="next">${esc(last ? T.finish : T.next)}</button></div>
    </section>`;
    main.querySelectorAll('details.spoil').forEach(d => d.addEventListener('toggle', () => { if (d.open) { store.origSeen[set.id] = 1; save(store); } }));
    $('#next').addEventListener('click', next);
    watchImages($('#rev'));
    $('#verdict').focus({ preventScroll: false });
    say(a.choice === 'skip' ? `${T.unavailable} ${T.notScoredUnavailable}` : T.said(ok, it.human));
  }
  function siblingsHTML(it) {
    const set = SETS[it.set];
    const others = set.members.filter(m => m !== it.id).map(m => ITEMS[m]);
    const orig = others.filter(o => o.human), fakes = others.filter(o => !o.human);
    const block = o => { const x = decode(o.x); return `<div class="sib"><p class="small"><span class="badge ${o.human ? 'human' : 'ai'}">${esc(o.human ? T.badgeH : T.badgeA)}</span>${md(x.who)}</p>${contentHTML(o)}</div>`; };
    let h = '';
    if (orig.length) h += `<details class="spoil"><summary>${esc(T.cmpOrig)}</summary><p class="small muted">${esc(T.spoil)}</p>${orig.map(block).join('')}</details>`;
    if (fakes.length) h += `<details class="spoil"><summary>${esc(it.human ? T.cmpAI(fakes.length) : T.otherAI(fakes.length))}</summary><p class="small muted">${esc(T.spoil)}</p>${fakes.map(block).join('')}</details>`;
    return h;
  }
  function next() { if (game.i < game.ids.length - 1) { game.i++; game.imageFailed = false; persistRound(); showItem(); } else results(); }

  /* ---------- results ---------- */
  function tally(rows, keyFn) {
    const m = new Map();
    rows.forEach(r => { const k = keyFn(r); if (k == null) return; const t = m.get(k) || { ok: 0, n: 0 }; t.n++; if (r.ok) t.ok++; m.set(k, t); });
    return [...m.entries()];
  }
  function tableHTML(title, rows, label) {
    if (!rows.length) return '';
    return `<h3>${esc(title)}</h3><div class="tablewrap"><table class="res"><thead><tr><th>${esc(label)}</th><th class="num">${esc(T.rightCol)}</th><th style="width:40%"><span class="sr">${esc(T.meterSr)}</span></th></tr></thead><tbody>${rows.map(([k, t]) => `
      <tr><td>${esc(k)}</td><td class="num">${t.ok} / ${t.n}</td><td><div class="meter" role="img" aria-label="${pct(t.ok, t.n)} %"><i style="width:${pct(t.ok, t.n)}%"></i><b></b></div></td></tr>`).join('')}</tbody></table></div>`;
  }
  function results() {
    const g = game;
    if (!g || !g.answers.length) return;
    usageEvent(LANG === 'cs' ? 'quiz-finish-cs' : 'quiz-finish-en');
    game = null;
    delete store.active; save(store);
    root.classList.remove('in-round');
    const scored = g.answers.filter(a => !a.known), ok = scored.filter(a => a.ok).length, n = scored.length;
    history.replaceState(null, '', location.pathname + location.search);
    document.title = T.result + (LANG === 'cs' ? ' – ' : ' — ') + T.title;
    const date = new Date().toISOString().slice(0, 10);
    store.history.push({ round: g.round.id, title: g.round.title, date, ok, n, answers: g.answers.map(a => ({ id: a.id, ok: a.ok, known: a.known })) });
    store.history = store.history.slice(-MAX_HISTORY); save(store);
    const verdict = !n ? (g.answers.some(a => a.choice === 'skip') ? T.notScoredUnavailable : T.allKnown) : chanceMessage(ok, n);
    const allRows = store.history.flatMap(h => h.answers || []).filter(a => !a.known && ITEMS[a.id]);
    main.innerHTML = `
      <h1>${esc(T.result)}</h1>
      <p class="muted">${esc(g.round.title)}</p>
      ${n ? chanceGraphHTML(ok, n, verdict) : `<p class="score">${ok} / ${n}</p><p>${esc(verdict)}</p>`}
      ${tableHTML(T.byKind, tally(scored, a => a.h ? T.origH : T.origA), T.kind)}
      ${tableHTML(T.byCat, tally(scored, a => T.cats[a.cat]), T.cat)}
      ${tableHTML(T.byModel, tally(scored.filter(a => !a.h), a => a.family), T.model)}
      ${tableHTML(T.byEra, tally(scored, a => a.era).sort((x, y) => x[0].localeCompare(y[0])), T.era)}
      ${allRows.length > n ? `<p class="small muted">${esc(T.allRounds(allRows.filter(a => a.ok).length, allRows.length, pct(allRows.filter(a => a.ok).length, allRows.length)))}</p>` : ''}
      <h2>${esc(T.others)}</h2>
      <ul class="studies">${DATA.studies.map(s => `<li>${md(s)}</li>`).join('')}</ul>
      <h2>${esc(T.review)}</h2>
      <div class="tablewrap"><table class="res"><thead><tr><th>#</th><th>${esc(T.item)}</th><th>${esc(T.youSaid)}</th><th>${esc(T.rightQ)}</th></tr></thead><tbody>${g.answers.map((a, k) => { const x = decode(ITEMS[a.id].x); return `
        <tr><td class="num">${k + 1}</td><td><span class="badge ${a.h ? 'human' : 'ai'}">${esc(a.h ? T.badgeH : T.badgeA)}</span>${md(x.who)}</td><td>${esc(a.choice === 'skip' ? T.knownShort : a.choice === 'human' ? T.human : T.ai)}</td><td>${a.known ? `<span class="small muted">${esc(T.knownShort)}</span>` : `<span class="${a.ok ? 'ok' : 'bad'}">${a.ok ? '✓' : '✗'}</span>`}</td></tr>`; }).join('')}</tbody></table></div>
      <div class="row">
        <button class="btn primary" type="button" id="again">${esc(T.again(g.round.title))}</button>
        <button class="btn" type="button" data-go="home">${esc(T.another)}</button>
        <button class="btn" type="button" id="copy">${esc(T.copy)}</button>
      </div>
      <p class="small muted">${T.learn}</p>`;
    markScrollable(main);
    $('#again').addEventListener('click', () => start(g.round));
    $('#copy').addEventListener('click', e => {
      const t = `${T.share(g.round.title, ok, n)} ${verdict} ${location.href.split('#')[0]}`;
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => { e.target.textContent = T.copied; }, () => { e.target.textContent = t; });
    });
    focusMain(); say(`${T.result}: ${ok} / ${n}.`);
  }

  /* ---------- keyboard: only while focus is inside the quiz (WCAG 2.1.4) ---------- */
  document.addEventListener('keydown', e => {
    if (!game || !main.contains(document.activeElement) || e.altKey || e.ctrlKey || e.metaKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if ((tag === 'input' && e.target.type !== 'checkbox') || tag === 'textarea' || tag === 'select') return;
    const k = e.key.toLowerCase(), asking = $('#ask') && !game.answers[game.i];
    if (asking && (k === 'h' || k === 'a')) { e.preventDefault(); answer(k === 'h' ? 'human' : 'ai'); }
    else if (asking && k === 'k') { const c = $('#known'); c.checked = !c.checked; }
  });
})();
