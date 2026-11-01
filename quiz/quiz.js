/* Human or AI? / Člověk, nebo AI? — static quiz shared by quiz/ (English) and quiz/cs/ (Czech).
   No network calls except this folder's items.json and media. Answers and history stay in this browser's localStorage. */
(function () {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const main = $('#main'), live = $('#live');
  const LANG = document.documentElement.lang === 'cs' ? 'cs' : 'en';
  const T = {
    en: {
      title: 'Human or AI?', doc: 'Human or AI? — a quiz', loadErr: 'Could not load the quiz items', start: 'Start: a mixed round',
      lede: 'Each item is either the real thing — a poem or a passage by a great writer, a Wikipedia paragraph, a forum answer, a photograph — or an imitation that an AI model wrote or drew for the same slot. Decide which. Then see who or what made it, and why it is hard or what gives it away.',
      choose: 'Or choose a round', items: n => `${n} items`, recent: 'Your recent rounds', round: 'Round', date: 'Date', score: 'Score', forget: 'Forget my history in this browser',
      poolNote: (ni, n) => `${ni} items in ${n} matched sets. A round draws one item from each of several sets; a coin flip decides whether you see the original or an AI imitation. The split need not be even, so counting will not help. New rounds show sets you have not seen first.`,
      howLink: 'How the items were made and checked', exhausted: 'You have seen every set in this round at least once. Items from sets whose original you have already seen will not count towards your score.',
      progress: (i, n) => `Item ${i} of ${n}`, sure: 'How sure are you?', conf: { guess: 'Guessing', fair: 'Fairly sure', sure: 'Certain' },
      human: 'Human', ai: 'AI', known: k => `I already know this ${k} (it will not count towards your score)`, kText: 'text', kPic: 'picture',
      keys: 'Keys while the item has focus: <span class="kbd">H</span> human, <span class="kbd">A</span> AI, <span class="kbd">1</span>–<span class="kbd">3</span> confidence, <span class="kbd">K</span> I know it.',
      question: 'Read the question that was asked', right: 'Right', wrong: 'Wrong', madeH: 'made by a human', madeA: 'made by AI',
      notScoredKnown: '(you knew it: not scored)', notScoredSeen: '(you have seen this set’s original before: not scored)',
      badgeH: 'HUMAN', badgeA: 'AI', promptSum: 'The exact prompt and how this output was chosen',
      cmpOrig: 'Compare with the original', cmpAI: n => n > 1 ? `Compare with the AI imitations (${n})` : 'Compare with the AI imitation', otherAI: n => `The other AI imitation${n > 1 ? 's' : ''} of the same original (${n})`,
      spoil: 'Opening this shows the answer for the whole set: later items from this set will not count towards your score.',
      next: 'Next item', finish: 'Finish and see the results', said: (ok, h) => `${ok ? 'Right' : 'Wrong'}. This was made by ${h ? 'a human' : 'AI'}.`,
      result: 'Your result', allKnown: 'You knew every item, so nothing was scored.',
      better: (lo, hi, n) => `That is better than a coin flip would plausibly do: 95 % of pure guessers score between ${lo} and ${hi} out of ${n}.`,
      worse: (lo, hi, n) => `That is worse than chance — the imitations fooled you more often than a coin would have (95 % of pure guessers score ${lo}–${hi} out of ${n}).`,
      within: (lo, hi, n) => `That is within the range of pure guessing: 95 % of people flipping a coin would score between ${lo} and ${hi} out of ${n}. One round is a small sample — play another to tell skill from luck.`,
      byKind: 'By what it was', kind: 'Kind', origH: 'Human originals', origA: 'AI imitations', byCat: 'By category', cat: 'Category', cats: { literature: 'Literature & poetry', everyday: 'Everyday writing', images: 'Images' },
      byModel: 'AI imitations by model', model: 'Model', byEra: 'By era of the item', era: 'Era', byConf: 'By your confidence', confCol: 'Confidence',
      rightCol: 'Right', meterSr: 'Share right; the line marks 50 %', allRounds: (a, b, p) => `All your rounds in this browser so far: ${a} right out of ${b} (${p} %).`,
      others: 'How others have done', review: 'Review this round', item: 'Item', youSaid: 'You said', knownShort: 'not scored',
      again: t => `Play another round: ${t}`, another: 'Choose another round', copy: 'Copy my result', copied: 'Copied',
      share: (t, ok, n, lo, hi) => `Human or AI? — ${t}: ${ok}/${n} (pure guessing: ${lo}–${hi}).`,
      learn: 'Want to learn the tells? The <a href="../">catalogue of AI tells</a> lists them by medium and by when they appeared.', back: 'Back to the rounds',
    },
    cs: {
      title: 'Člověk, nebo AI?', doc: 'Člověk, nebo AI? — kvíz', loadErr: 'Nepodařilo se načíst položky kvízu', start: 'Začít: smíšené kolo',
      lede: 'Každá položka je buď pravá (báseň nebo úryvek od velkého autora, heslo z Wikipedie, zpráva, fotka), anebo napodobenina, kterou pro stejný námět vytvořila umělá inteligence. Poznáte, co je co? Hned potom uvidíte, kdo nebo co položku vytvořilo a čím se prozradí, případně proč je těžké to poznat.',
      choose: 'Nebo si vyberte kolo', items: n => `${n} položek`, recent: 'Vaše poslední kola', round: 'Kolo', date: 'Datum', score: 'Skóre', forget: 'Smazat moji historii v tomto prohlížeči',
      poolNote: (ni, n) => `${ni} položek v ${n} sadách. Kolo vybere po jedné položce z několika sad a o tom, jestli uvidíte originál, nebo napodobeninu, rozhodne hod mincí. Poměr nemusí vyjít půl na půl a počítat se nevyplatí. Nová kola dávají přednost sadám, které jste ještě neviděli.`,
      howLink: 'Jak jsme položky vybírali a ověřovali', exhausted: 'Všechny sady tohoto kola už jste aspoň jednou viděli. Položky ze sad, jejichž originál už znáte, se do skóre nepočítají.',
      progress: (i, n) => `Položka ${i} z ${n}`, sure: 'Jak moc si jste jistí?', conf: { guess: 'Hádám', fair: 'Docela jistě', sure: 'Určitě' },
      human: 'Člověk', ai: 'AI', known: k => `Tenhle ${k} už znám (do skóre se nezapočítá)`, kText: 'text', kPic: 'obrázek',
      keys: 'Klávesy, když je položka aktivní: <span class="kbd">H</span> člověk, <span class="kbd">A</span> AI, <span class="kbd">1</span>–<span class="kbd">3</span> jistota, <span class="kbd">K</span> už znám.',
      question: 'Přečíst si původní dotaz', right: 'Správně', wrong: 'Vedle', madeH: 'vytvořil to člověk', madeA: 'vytvořila to AI',
      notScoredKnown: '(znali jste to, nepočítá se)', notScoredSeen: '(originál z této sady už jste viděli, nepočítá se)',
      badgeH: 'ČLOVĚK', badgeA: 'AI', promptSum: 'Přesné zadání a jak jsme tenhle výstup vybrali',
      cmpOrig: 'Porovnat s originálem', cmpAI: n => n > 1 ? `Porovnat s napodobeninami od AI (${n})` : 'Porovnat s napodobeninou od AI', otherAI: n => `Další napodobeniny téhož originálu (${n})`,
      spoil: 'Když tohle otevřete, prozradíte si odpověď pro celou sadu. Další položky z ní se pak do skóre nepočítají.',
      next: 'Další položka', finish: 'Dokončit a ukázat výsledek', said: (ok, h) => `${ok ? 'Správně' : 'Vedle'}. ${h ? 'Vytvořil to člověk' : 'Vytvořila to AI'}.`,
      result: 'Váš výsledek', allKnown: 'Všechny položky jste znali, takže se nic nepočítalo.',
      better: (lo, hi, n) => `To je víc, než by se dalo čekat od náhody: 95 % lidí, kteří jen hází mincí, má mezi ${lo} a ${hi} z ${n}.`,
      worse: (lo, hi, n) => `To je méně, než by dala náhoda. Napodobeniny vás oklamaly častěji než hod mincí (95 % hádajících má ${lo}–${hi} z ${n}).`,
      within: (lo, hi, n) => `To je v rozmezí čisté náhody: 95 % lidí, kteří jen hází mincí, má mezi ${lo} a ${hi} z ${n}. Jedno kolo je malý vzorek, zkuste další.`,
      byKind: 'Podle původu', kind: 'Původ', origH: 'Lidské originály', origA: 'Napodobeniny od AI', byCat: 'Podle kategorie', cat: 'Kategorie', cats: { literature: 'Literatura a poezie', everyday: 'Běžné texty', images: 'Obrázky' },
      byModel: 'Napodobeniny podle modelu', model: 'Model', byEra: 'Podle doby vzniku', era: 'Doba', byConf: 'Podle vaší jistoty', confCol: 'Jistota',
      rightCol: 'Správně', meterSr: 'Podíl správných odpovědí; čára značí 50 %', allRounds: (a, b, p) => `Všechna vaše kola v tomto prohlížeči: ${a} správně z ${b} (${p} %).`,
      others: 'Jak dopadli jiní', review: 'Přehled kola', item: 'Položka', youSaid: 'Vaše odpověď', knownShort: 'nepočítá se',
      again: t => `Další kolo: ${t}`, another: 'Vybrat jiné kolo', copy: 'Zkopírovat výsledek', copied: 'Zkopírováno',
      share: (t, ok, n, lo, hi) => `Člověk, nebo AI? — ${t}: ${ok}/${n} (čistá náhoda: ${lo}–${hi}).`,
      learn: 'Chcete se znaky AI naučit? Projděte si <a href="../../">katalog znaků AI (anglicky)</a>.', back: 'Zpátky na výběr kol',
    },
  }[LANG];
  const CONF = ['guess', 'fair', 'sure'];

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
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* private mode */ } }
  let store = load(); store.seen = store.seen || {}; store.history = store.history || []; store.setsShown = store.setsShown || {}; store.origSeen = store.origSeen || {};

  /* ---------- theme ---------- */
  const root = document.documentElement;
  let theme = null; try { theme = localStorage.getItem('human-or-ai/theme'); } catch (e) { /* ignore */ }
  if (theme) root.dataset.theme = theme;
  $('#theme').addEventListener('click', () => {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('human-or-ai/theme', root.dataset.theme); } catch (e) { /* ignore */ }
  });

  /* ---------- helpers ---------- */
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const md = s => esc(s).replace(/\[([^\]]+)\]\(((?:[^()\s]|\([^()\s]*\))+)\)/g, (m, l, u) => `<a href="${u}"${/^https?:/.test(u) ? ' rel="noopener"' : ''}>${l}</a>`)
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/\*([^*]+)\*/g, '<em>$1</em>');
  const plain = s => String(s).replace(/\*+/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function decode(x) { const b = atob(x), u = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return JSON.parse(new TextDecoder().decode(u)); }
  function textHTML(it) {
    if (it.form === 'poem') return `<div class="text poem" lang="${it.lang}">${it.text.split(/\n\n+/).map(st => `<p class="st">${st.split('\n').map(l => `<span class="l">${esc(l)}</span>`).join('')}</p>`).join('')}</div>`;
    return `<div class="text" lang="${it.lang}">${it.text.split(/\n\n+/).map(p => `<p>${esc(p)}</p>`).join('')}</div>`;
  }
  function contentHTML(it) {
    if (it.mod === 'image') return `<figure class="img"><img src="${esc(it.img)}" alt="${esc(it.alt)}" width="${it.w}" height="${it.h}" decoding="async"></figure>`;
    return textHTML(it);
  }
  function chanceRange(n) {
    const pmf = []; let c = 1; for (let k = 0; k <= n; k++) { pmf.push(c / 2 ** n); c = c * (n - k) / (k + 1); }
    let lo = 0, acc = 0; while (acc + pmf[lo] <= 0.025) acc += pmf[lo++];
    let hi = n; acc = 0; while (acc + pmf[hi] <= 0.025) acc += pmf[hi--];
    return [lo, hi];
  }
  const pct = (a, b) => b ? Math.round(100 * a / b) : 0;
  const displayDate = date => /^\d{4}-\d{2}-\d{2}$/.test(date)
    ? new Intl.DateTimeFormat(LANG === 'cs' ? 'cs-CZ' : 'en-GB').format(new Date(date + 'T12:00:00')) : date;
  function say(t) { live.textContent = ''; setTimeout(() => { live.textContent = t; }, 30); }
  function focusMain() { main.focus({ preventScroll: true }); window.scrollTo({ top: 0 }); }

  /* ---------- data ---------- */
  let DATA, ITEMS = {}, SETS = {};
  fetch('items.json', { cache: 'no-cache' }).then(r => r.json()).then(d => {
    DATA = d;
    d.items.forEach(i => { ITEMS[i.id] = i; i.h = decode(i.x).kind === 'human'; });  // in memory only
    // tolerate partial data: keep only members that exist
    d.sets = d.sets.map(s => Object.assign({}, s, { members: s.members.filter(m => ITEMS[m]) })).filter(s => s.members.length);
    d.sets.forEach(s => { SETS[s.id] = s; });
    route();
  }).catch(e => { main.innerHTML = `<p class="card">${esc(T.loadErr)} (${esc(e.message)}).</p>`; });

  window.addEventListener('hashchange', route);
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-go]'); if (!a) return;
    e.preventDefault();
    if (a.dataset.go === 'home') { if (location.hash) history.pushState(null, '', location.pathname); route(); } else location.hash = a.dataset.go;
  });
  function route() {
    if (!DATA) return;
    const h = location.hash.slice(1);
    if (h === 'about') return about();
    if (h.startsWith('play-')) { const r = DATA.rounds.find(x => x.id === h.slice(5)); if (r) return start(r); }
    home();
  }

  /* ---------- home ---------- */
  function home() {
    game = null;
    const hist = store.history.slice(-5).reverse();
    main.innerHTML = `
      <h1>${esc(T.title)}</h1>
      <p class="lede">${esc(T.lede)}</p>
      <p class="row"><button class="btn primary" type="button" id="startMixed">${esc(T.start)}</button></p>
      <h2>${esc(T.choose)}</h2>
      <div class="rounds">${DATA.rounds.map(r => `
        <button class="round" type="button" data-round="${r.id}"><b>${esc(r.title)}</b><span>${esc(r.blurb)}</span><br><span class="tag">${esc(T.items(r.n))} · ${esc(r.tag)}</span></button>`).join('')}
      </div>
      <p class="small muted">${esc(T.poolNote(DATA.items.length, DATA.sets.length))} <a href="#about">${esc(T.howLink)}</a>.</p>
      ${hist.length ? `<h2>${esc(T.recent)}</h2><div class="tablewrap"><table class="res"><thead><tr><th>${esc(T.round)}</th><th>${esc(T.date)}</th><th class="num">${esc(T.score)}</th></tr></thead><tbody>${hist.map(h => `<tr><td>${esc(h.title)}</td><td>${esc(displayDate(h.date))}</td><td class="num">${h.ok} / ${h.n}</td></tr>`).join('')}</tbody></table></div>
      <p class="small"><button type="button" class="linkbtn" id="forget">${esc(T.forget)}</button></p>` : ''}`;
    main.querySelectorAll('[data-round]').forEach(b => b.addEventListener('click', () => { location.hash = 'play-' + b.dataset.round; }));
    $('#startMixed').addEventListener('click', () => { const r = DATA.rounds.find(x => x.id === 'mixed') || DATA.rounds[0]; location.hash = 'play-' + r.id; });
    const f = $('#forget'); if (f) f.addEventListener('click', () => { store = { seen: {}, history: [], setsShown: {}, origSeen: {} }; save(store); home(); });
    document.title = T.doc;
  }

  function about() {
    main.innerHTML = DATA.about_html.replace('<h1>', '<h1 id="about">') + `<p class="row"><button class="btn primary" type="button" data-go="home">${esc(T.back)}</button></p>`;
    focusMain();
  }

  /* ---------- a round ---------- */
  let game = null;
  const seenCount = id => store.seen[id] || 0;
  function draw(round) {
    let sets = DATA.sets.filter(s => round.cats.includes(s.cat) && (!round.lang || s.lang === round.lang));
    const lvl = s => store.setsShown[s.id] || 0;  // never-shown sets first, then the least shown
    sets = shuffle(sets).sort((a, b) => lvl(a) - lvl(b));
    if (round.cats.length > 1) {  // Mixed: every category appears
      const byCat = round.cats.map(c => sets.filter(s => s.cat === c)), picked = [];
      for (let k = 0; picked.length < round.n && byCat.some(b => b.length); k = (k + 1) % byCat.length) if (byCat[k].length) picked.push(byCat[k].shift());
      sets = picked;
    } else sets = sets.slice(0, round.n);
    const exhausted = sets.some(s => lvl(s) > 0);
    // the coin flip does not depend on what was seen; among AI members the least-seen one is shown
    const ids = shuffle(sets).map(s => {
      const human = s.members.filter(m => ITEMS[m].h), ai = s.members.filter(m => !ITEMS[m].h);
      const pool = !ai.length || (human.length && Math.random() < 0.5) ? human : ai;
      const least = Math.min(...pool.map(seenCount));
      const c = pool.filter(m => seenCount(m) === least);
      return c[Math.floor(Math.random() * c.length)];
    });
    return { ids, exhausted };
  }
  function start(round) {
    const d = draw(round);
    game = { round, ids: d.ids, exhausted: d.exhausted, i: 0, answers: [] };
    document.title = round.title + ' — ' + T.title;
    showItem();
  }
  function showItem() {
    const g = game, it = ITEMS[g.ids[g.i]], set = SETS[it.set];
    main.innerHTML = `
      <div class="progress"><span>${esc(g.round.title)}</span><span>${esc(T.progress(g.i + 1, g.ids.length))}</span></div>
      <div class="bar" aria-hidden="true"><i style="width:${100 * g.i / g.ids.length}%"></i></div>
      ${g.i === 0 && g.exhausted ? `<p class="note small">${esc(T.exhausted)}</p>` : ''}
      <article class="card" aria-labelledby="ctx">
        <p class="context" id="ctx">${md(set.context)}${LANG === 'en' && it.lang === 'cs' ? '<span class="flag" title="Czech">CZ</span>' : ''}${LANG === 'cs' && it.lang === 'en' ? '<span class="flag" title="anglicky">EN</span>' : ''}</p>
        ${set.question ? `<details class="question"><summary>${esc(T.question)}</summary><div class="text" lang="${set.lang}">${set.question.split(/\n\n+/).map(p => `<p>${esc(p)}</p>`).join('')}</div></details>` : ''}
        ${contentHTML(it)}
        <div id="ask">
          <div class="conf"><fieldset><legend>${esc(T.sure)}</legend><div class="seg">
            ${CONF.map((v, k) => `<label><input type="radio" name="conf" value="${v}"${k === 1 ? ' checked' : ''}><span>${esc(T.conf[v])}</span></label>`).join('')}
          </div></fieldset></div>
          <div class="answer">
            <button class="btn human" type="button" data-ans="human">${esc(T.human)}</button>
            <button class="btn ai" type="button" data-ans="ai">${esc(T.ai)}</button>
          </div>
          <label class="known"><input type="checkbox" id="known"> <span>${esc(T.known(it.mod === 'image' ? T.kPic : T.kText))}</span></label>
          <p class="small muted" style="margin:.6rem 0 0">${T.keys}</p>
        </div>
        <div id="rev"></div>
      </article>`;
    main.querySelectorAll('[data-ans]').forEach(b => b.addEventListener('click', () => answer(b.dataset.ans)));
    focusMain();
    say(`${T.progress(g.i + 1, g.ids.length)}. ${plain(set.context)}`);
  }
  function answer(choice) {
    const g = game, it = ITEMS[g.ids[g.i]], x = decode(it.x), set = SETS[it.set];
    if (g.answers[g.i]) return;
    const conf = (main.querySelector('input[name=conf]:checked') || {}).value || 'fair';
    const knownTick = $('#known').checked, prevOrig = !!store.origSeen[set.id];
    const known = knownTick || prevOrig;  // a player who has seen the set's original can compare from memory
    const ok = (choice === 'human') === !!it.h;
    g.answers[g.i] = { id: it.id, choice, conf, known, ok, h: !!it.h, cat: set.cat, family: x.family || null, era: x.era || null };
    store.seen[it.id] = seenCount(it.id) + 1; store.setsShown[set.id] = (store.setsShown[set.id] || 0) + 1;
    if (it.h) store.origSeen[set.id] = 1;
    save(store);
    main.querySelectorAll('#ask button, #ask input').forEach(el => { el.disabled = true; });
    main.querySelector(`[data-ans=${choice}]`).setAttribute('aria-pressed', 'true');
    const last = g.i === g.ids.length - 1;
    const why = knownTick ? T.notScoredKnown : prevOrig ? T.notScoredSeen : '';
    $('#rev').innerHTML = `<section class="reveal" aria-labelledby="verdict">
      <p class="verdict ${ok ? 'ok' : 'bad'}" id="verdict" tabindex="-1">${esc(ok ? T.right : T.wrong)} — ${esc(it.h ? T.madeH : T.madeA)}.${why ? ` <span class="small muted">${esc(why)}</span>` : ''}</p>
      <p class="truth"><span class="badge ${it.h ? 'human' : 'ai'}">${esc(it.h ? T.badgeH : T.badgeA)}</span><span class="who">${md(x.who)}</span>${x.what ? ' — ' + md(x.what) : ''}</p>
      ${x.why && x.why.length ? `<ul class="why">${x.why.map(w => `<li>${md(w)}</li>`).join('')}</ul>` : ''}
      ${x.source ? `<p class="small muted">${md(x.source)}</p>` : ''}
      ${x.prompt ? `<details><summary>${esc(T.promptSum)}</summary><div class="prompt">${esc(x.prompt)}</div><p class="small">${md(x.selection || '')}</p></details>` : ''}
      ${siblingsHTML(it)}
      <div class="next"><button class="btn primary" type="button" id="next">${esc(last ? T.finish : T.next)}</button></div>
    </section>`;
    main.querySelectorAll('details.spoil').forEach(d => d.addEventListener('toggle', () => { if (d.open) { store.origSeen[set.id] = 1; save(store); } }));
    $('#next').addEventListener('click', next);
    $('#verdict').focus({ preventScroll: false });
    say(T.said(ok, it.h));
  }
  function siblingsHTML(it) {
    const set = SETS[it.set];
    const others = set.members.filter(m => m !== it.id).map(m => ITEMS[m]);
    const orig = others.filter(o => o.h), fakes = others.filter(o => !o.h);
    const block = o => { const x = decode(o.x); return `<div class="sib"><p class="small"><span class="badge ${o.h ? 'human' : 'ai'}">${esc(o.h ? T.badgeH : T.badgeA)}</span>${md(x.who)}</p>${contentHTML(o)}</div>`; };
    let h = '';
    if (orig.length) h += `<details class="spoil"><summary>${esc(T.cmpOrig)}</summary><p class="small muted">${esc(T.spoil)}</p>${orig.map(block).join('')}</details>`;
    if (fakes.length) h += `<details class="spoil"><summary>${esc(it.h ? T.cmpAI(fakes.length) : T.otherAI(fakes.length))}</summary><p class="small muted">${esc(T.spoil)}</p>${fakes.map(block).join('')}</details>`;
    return h;
  }
  function next() { if (game.i < game.ids.length - 1) { game.i++; showItem(); } else results(); }

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
    const g = game, scored = g.answers.filter(a => !a.known), ok = scored.filter(a => a.ok).length, n = scored.length;
    const [lo, hi] = chanceRange(Math.max(n, 1));
    const date = new Date().toISOString().slice(0, 10);
    store.history.push({ round: g.round.id, title: g.round.title, date, ok, n, answers: g.answers.map(a => ({ id: a.id, ok: a.ok, conf: a.conf, known: a.known })) });
    store.history = store.history.slice(-200); save(store);
    const verdict = !n ? T.allKnown : ok > hi ? T.better(lo, hi, n) : ok < lo ? T.worse(lo, hi, n) : T.within(lo, hi, n);
    const allRows = store.history.flatMap(h => h.answers || []).filter(a => !a.known && ITEMS[a.id]);
    const confOrder = Object.values(T.conf);
    main.innerHTML = `
      <h1>${esc(T.result)}</h1>
      <p class="muted">${esc(g.round.title)}</p>
      <p class="score">${ok} / ${n}</p>
      <p>${esc(verdict)}</p>
      ${tableHTML(T.byKind, tally(scored, a => a.h ? T.origH : T.origA), T.kind)}
      ${tableHTML(T.byCat, tally(scored, a => T.cats[a.cat]), T.cat)}
      ${tableHTML(T.byModel, tally(scored.filter(a => !a.h), a => a.family), T.model)}
      ${tableHTML(T.byEra, tally(scored, a => a.era).sort((x, y) => x[0].localeCompare(y[0])), T.era)}
      ${tableHTML(T.byConf, tally(scored, a => T.conf[a.conf]).sort((x, y) => confOrder.indexOf(x[0]) - confOrder.indexOf(y[0])), T.confCol)}
      ${allRows.length > n ? `<p class="small muted">${esc(T.allRounds(allRows.filter(a => a.ok).length, allRows.length, pct(allRows.filter(a => a.ok).length, allRows.length)))}</p>` : ''}
      <h2>${esc(T.others)}</h2>
      <ul class="studies">${DATA.studies.map(s => `<li>${md(s)}</li>`).join('')}</ul>
      <h2>${esc(T.review)}</h2>
      <div class="tablewrap"><table class="res"><thead><tr><th>#</th><th>${esc(T.item)}</th><th>${esc(T.youSaid)}</th><th></th></tr></thead><tbody>${g.answers.map((a, k) => { const x = decode(ITEMS[a.id].x); return `
        <tr><td class="num">${k + 1}</td><td><span class="badge ${a.h ? 'human' : 'ai'}">${esc(a.h ? T.badgeH : T.badgeA)}</span>${md(x.who)}</td><td>${esc(a.choice === 'human' ? T.human : T.ai)} <span class="small muted">(${esc(T.conf[a.conf])})</span></td><td>${a.known ? `<span class="small muted">${esc(T.knownShort)}</span>` : a.ok ? '✓' : '✗'}</td></tr>`; }).join('')}</tbody></table></div>
      <div class="row">
        <button class="btn primary" type="button" id="again">${esc(T.again(g.round.title))}</button>
        <button class="btn" type="button" data-go="home">${esc(T.another)}</button>
        <button class="btn" type="button" id="copy">${esc(T.copy)}</button>
      </div>
      <p class="small muted">${T.learn}</p>`;
    $('#again').addEventListener('click', () => start(g.round));
    $('#copy').addEventListener('click', e => {
      const t = `${T.share(g.round.title, ok, n, lo, hi)} ${location.href.split('#')[0]}`;
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => { e.target.textContent = T.copied; }, () => { e.target.textContent = t; });
    });
    focusMain(); say(`${T.result}: ${ok} / ${n}.`);
  }

  /* ---------- keyboard: only while focus is inside the quiz (WCAG 2.1.4) ---------- */
  document.addEventListener('keydown', e => {
    if (!game || !main.contains(document.activeElement) || e.altKey || e.ctrlKey || e.metaKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if ((tag === 'input' && !/radio|checkbox/.test(e.target.type)) || tag === 'textarea' || tag === 'select') return;
    const k = e.key.toLowerCase(), asking = $('#ask') && !game.answers[game.i];
    if (asking && (k === 'h' || k === 'a')) { e.preventDefault(); answer(k === 'h' ? 'human' : 'ai'); }
    else if (asking && /^[123]$/.test(k)) { const r = main.querySelectorAll('input[name=conf]')[+k - 1]; if (r) r.checked = true; }
    else if (asking && k === 'k') { const c = $('#known'); c.checked = !c.checked; }
  });
})();
