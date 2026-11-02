/* Human or AI? / Člověk, nebo AI? — static quiz shared by quiz/ (English) and quiz/cs/ (Czech).
   Recording is optional and disabled until config.js supplies an endpoint. */
(function () {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const main = $('#main'), live = $('#live');
  const LANG = document.documentElement.lang === 'cs' ? 'cs' : 'en';
  const T = {
    en: {
      yourName: 'Your name', saveName: 'Save name', nameLabel: 'Optional name (up to 60 characters)', addName: 'Add your name to this result',
      optOut: "Don't record my answers", inactive: 'Recording is not active yet. Activity stays in this browser.',
      recordingOff: 'Recording is off. Local scores still work.',
      recording: 'Answers and timings are recorded for public result verification. Your name is optional.',
      localResult: 'This result is local only; public verification is unavailable.', pendingResult: 'Verification appears after the queued activity reaches the server.',
      resultId: 'Result ID', verify: 'Verify this result',
      title: 'Human or AI?', doc: 'Human or AI? — a quiz', loadErr: 'Could not load the quiz items', start: 'Start: a mixed round',
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
      odds: (oneIn, percent) => `about 1 in ${oneIn} (${percent} %)`,
      byKind: 'By what it was', kind: 'Kind', origH: 'Human originals', origA: 'AI imitations', byCat: 'By category', cat: 'Category', cats: { literature: 'Literature & poetry', everyday: 'Everyday writing', images: 'Images' },
      byModel: 'AI imitations by model', model: 'Model', byEra: 'By era of the item', era: 'Era',
      rightCol: 'Right', meterSr: 'Share right; the line marks 50 %', allRounds: (a, b, p) => `All your rounds in this browser so far: ${a} right out of ${b} (${p} %).`,
      others: 'How others have done', review: 'Review this round', item: 'Item', youSaid: 'You said', knownShort: 'not scored',
      again: t => `Play another round: ${t}`, another: 'Choose another round', copy: 'Copy my result', copied: 'Copied',
      share: (t, ok, n) => `Human or AI? ${t}: ${ok}/${n}.`,
      learn: 'Want to learn the tells? The <a href="../">catalogue of AI tells</a> lists them by medium and by when they appeared.', back: 'Back to the rounds',
    },
    cs: {
      yourName: 'Vaše jméno', saveName: 'Uložit jméno', nameLabel: 'Nepovinné jméno (nejvýš 60 znaků)', addName: 'Přidat jméno k tomuto výsledku',
      optOut: 'Nezaznamenávat moje odpovědi', inactive: 'Zaznamenávání zatím není aktivní. Aktivita zůstává v tomto prohlížeči.',
      recordingOff: 'Zaznamenávání je vypnuté. Místní výsledky fungují dál.',
      recording: 'Odpovědi a časy se zaznamenávají pro veřejné ověření výsledků. Jméno je nepovinné.',
      localResult: 'Tento výsledek je uložený jen u vás, veřejné ověření není dostupné.', pendingResult: 'Ověření se zobrazí, až se aktivitu podaří odeslat na server.',
      resultId: 'Kód výsledku', verify: 'Ověřit tento výsledek',
      title: 'Člověk, nebo AI?', doc: 'Člověk, nebo AI? — kvíz', loadErr: 'Nepodařilo se načíst položky kvízu', start: 'Začít: smíšené kolo',
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
      odds: (oneIn, percent) => `zhruba 1 z ${oneIn} (${percent} %)`,
      byKind: 'Podle původu', kind: 'Původ', origH: 'Lidské originály', origA: 'Napodobeniny od AI', byCat: 'Podle kategorie', cat: 'Kategorie', cats: { literature: 'Literatura a poezie', everyday: 'Běžné texty', images: 'Obrázky' },
      byModel: 'Napodobeniny podle modelu', model: 'Model', byEra: 'Podle doby vzniku', era: 'Doba',
      rightCol: 'Správně', meterSr: 'Podíl správných odpovědí; čára značí 50 %', allRounds: (a, b, p) => `Všechna vaše kola v tomto prohlížeči: ${a} správně z ${b} (${p} %).`,
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

  /* ---------- optional event recording ---------- */
  const PAGE_VERSION = 'quiz-tracking-1';
  function randomUUID() {
    if (globalThis.crypto && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
    const bytes = new Uint8Array(16);
    if (globalThis.crypto && crypto.getRandomValues) crypto.getRandomValues(bytes);
    else bytes.forEach((_, i) => { bytes[i] = Math.floor(Math.random() * 256); });
    bytes[6] = (bytes[6] & 15) | 64; bytes[8] = (bytes[8] & 63) | 128;
    const hex = [...bytes].map(b => b.toString(16).padStart(2, '0')).join('');
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  }
  function resultId() {
    const bytes = new Uint8Array(8), alphabet = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
    if (globalThis.crypto && crypto.getRandomValues) crypto.getRandomValues(bytes);
    else bytes.forEach((_, i) => { bytes[i] = Math.floor(Math.random() * 256); });
    const id = [...bytes].map(b => alphabet[b & 31]).join('');
    return id.slice(0, 4) + '-' + id.slice(4);
  }
  const recording = (() => {
    const prefix = 'human-or-ai/tracking/', cap = 500;
    const url = typeof window.QUIZ_LOG_URL === 'string' ? window.QUIZ_LOG_URL.trim() : '';
    const read = (key, fallback) => { try { const value = JSON.parse(localStorage.getItem(prefix + key)); return value == null ? fallback : value; } catch (_) { return fallback; } };
    const write = (key, value) => { try { localStorage.setItem(prefix + key, JSON.stringify(value)); return true; } catch (_) { return false; } };
    let session = read('session', '');
    if (!/^[0-9a-f-]{36}$/.test(session)) session = randomUUID();
    // A denied write cannot leave us reusing an inaccessible persisted identity.
    try { localStorage.setItem(prefix + 'session', JSON.stringify(session)); } catch (_) { session = randomUUID(); }
    let seq = Number(read('seq', 0)) || 0, run = null;
    let name = cleanName(read('name', '')), optedOut = read('optOut', false) === true;
    let queue = read('queue', []), log = read('log', []);
    queue = Array.isArray(queue) ? queue.filter(e => e && e.event_id).slice(-cap) : [];
    log = Array.isArray(log) ? log.slice(-cap) : [];
    let timer = null, busy = false, failures = 0, retryAt = 0, controller = null, generation = 0;
    let queueWritable = true;
    function saveQueue() { if (!write('queue', queue)) queueWritable = false; }
    function cleanName(value) { return String(value || '').replace(/<[^>]*>/g, '').replace(/[<>]/g, '').trim().slice(0, 60).trim(); }
    function currentQueue() {
      if (!queueWritable) return queue;
      const stored = read('queue', queue);
      return Array.isArray(stored) ? stored.filter(e => e && e.event_id).slice(-cap) : queue;
    }
    function schedule(delay = 300) {
      if (!url || optedOut || timer) return;
      timer = setTimeout(() => { timer = null; flush(); }, Math.max(delay, retryAt - Date.now()));
    }
    function event(type, fields = {}) {
      if (optedOut) return;
      seq = Math.max(seq, Number(read('seq', 0)) || 0) + 1; write('seq', seq);
      const entry = { ...fields, event: type, ts: new Date().toISOString(), seq, session_id: session,
        event_id: randomUUID(), round_run_id: run, lang: LANG, page_version: PAGE_VERSION, name };
      log.push(entry); log = log.slice(-cap); write('log', log);
      if (url) { queue = currentQueue(); queue.push(entry); queue = queue.slice(-cap); saveQueue(); schedule(); }
    }
    function batch() {
      queue = currentQueue();
      const events = [];
      for (const entry of queue.slice(0, 50)) {
        if (new TextEncoder().encode(JSON.stringify({ events: [...events, entry] })).length > 18000) break;
        events.push(entry);
      }
      return events;
    }
    async function flush() {
      if (!url || optedOut || busy || navigator.onLine === false) return;
      const events = batch(); if (!events.length) return;
      if (Date.now() < retryAt) { schedule(); return; }
      const started = generation;
      busy = true;
      controller = new AbortController();
      const timeout = setTimeout(() => controller && controller.abort(), 12000);
      try {
        const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
          body: JSON.stringify({ events }), keepalive: true, credentials: 'omit', signal: controller.signal });
        const ack = response.ok && await response.json();
        if (!ack || ack.ok !== true) throw new Error('No acknowledgement');
        if (started === generation) {
          const ids = new Set(events.map(e => e.event_id));
          queue = currentQueue().filter(e => !ids.has(e.event_id)); saveQueue();
          failures = 0; retryAt = 0;
        }
      } catch (_) {
        if (started === generation && !optedOut) {
          failures++; retryAt = Date.now() + Math.min(60000, 1000 * 2 ** Math.min(failures, 6));
        }
      } finally {
        clearTimeout(timeout); controller = null; busy = false;
        if (currentQueue().length) schedule();
      }
    }
    function optOut(value) {
      if (value === optedOut) return;
      optedOut = value; write('optOut', optedOut);
      if (optedOut) {
        generation++; if (controller) controller.abort();
        clearTimeout(timer); timer = null; queue = []; log = [];
        saveQueue(); write('log', log);
        // Keep the preference change locally; opting out itself sends nothing.
        seq = Math.max(seq, Number(read('seq', 0)) || 0) + 1;
        log.push({ event: 'opt_out_changed', ts: new Date().toISOString(), seq,
          session_id: session, event_id: randomUUID(), round_run_id: run, lang: LANG,
          page_version: PAGE_VERSION, name, opted_out: true });
        write('seq', seq); write('log', log);
      } else { failures = 0; retryAt = 0; event('opt_out_changed', { opted_out: false }); }
    }
    window.addEventListener('online', () => { retryAt = 0; clearTimeout(timer); timer = null; schedule(0); });
    window.addEventListener('storage', e => {
      if (e.key === prefix + 'optOut') { optOut(e.newValue === 'true'); syncRecordingControls(); }
      if (e.key === prefix + 'name') { name = cleanName(read('name', '')); syncNameControls(); }
    });
    window.addEventListener('pagehide', e => {
      if (!e.persisted && typeof endActiveRound === 'function') endActiveRound();
      if (!url || optedOut || navigator.onLine === false || !navigator.sendBeacon) return;
      const events = batch(); if (!events.length) return;
      // A queued beacon is not an acknowledgement. Retain it for an idempotent retry.
      try { navigator.sendBeacon(url, new Blob([JSON.stringify({ events })], { type: 'text/plain;charset=UTF-8' })); } catch (_) { /* retry on next visit */ }
    });
    if (optedOut || !url) { queue = []; saveQueue(); }
    schedule(); event('page_open');
    return { event, url, get optedOut() { return optedOut; }, get name() { return name; },
      setRun(value) { run = value; }, optOut,
      setName(value) { name = cleanName(value); write('name', name); event('name_set'); } };
  })();

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
  function binomialTail(k, n) {
    let combinations = 1, tail = 0;
    for (let j = 0; j <= n; j++) {
      if (j >= k) tail += combinations;
      combinations = combinations * (n - j) / (j + 1);
    }
    return tail / 2 ** n;
  }
  function chanceMessage(k, n) {
    const probability = binomialTail(k, n), locale = LANG === 'cs' ? 'cs-CZ' : 'en-GB';
    const percent = new Intl.NumberFormat(locale, { maximumSignificantDigits: 2 }).format(100 * probability);
    // Common outcomes read more clearly as a percentage than as "1 in 1".
    const odds = probability > 0.5 ? `${percent} %`
      : T.odds(new Intl.NumberFormat(locale).format(Math.round(1 / probability)), percent);
    return T.chance(k, n, odds);
  }
  const pct = (a, b) => b ? Math.round(100 * a / b) : 0;
  const displayDate = date => /^\d{4}-\d{2}-\d{2}$/.test(date)
    ? new Intl.DateTimeFormat(LANG === 'cs' ? 'cs-CZ' : 'en-GB').format(new Date(date + 'T12:00:00')) : date;
  function say(t) { live.textContent = ''; setTimeout(() => { live.textContent = t; }, 30); }
  function focusMain() { main.focus({ preventScroll: true }); window.scrollTo({ top: 0 }); }

  /* ---------- recording and name controls ---------- */
  function nameForm(id, label) {
    return `<form class="name-form" data-name-form><label for="${id}">${esc(label)}</label>
      <div class="row"><input id="${id}" name="player-name" type="text" maxlength="60" value="${esc(recording.name)}" autocomplete="nickname" aria-describedby="${id}-hint">
      <button class="btn" type="submit">${esc(T.saveName)}</button></div><p class="small muted" id="${id}-hint">${esc(T.nameLabel)}</p></form>`;
  }
  function syncNameControls() {
    document.querySelectorAll('[name="player-name"]').forEach(input => { input.value = recording.name; });
  }
  document.addEventListener('submit', e => {
    if (!e.target.matches('[data-name-form]')) return;
    e.preventDefault(); recording.setName(e.target.elements['player-name'].value); syncNameControls(); say(T.saveName);
  });
  const nameControl = document.createElement('details'); nameControl.className = 'name-control';
  nameControl.innerHTML = `<summary>${esc(T.yourName)}</summary>${nameForm('playerName', T.yourName)}`;
  document.querySelector('header.top').after(nameControl);
  function recordingControls() {
    return `<div class="recording-controls"><label class="known"><input type="checkbox" data-opt-out${recording.optedOut ? ' checked' : ''}> <span>${esc(T.optOut)}</span></label>
      <p class="small muted" data-recording-note>${esc(!recording.url ? T.inactive : recording.optedOut ? T.recordingOff : T.recording)}</p></div>`;
  }
  function syncRecordingControls() {
    document.querySelectorAll('[data-opt-out]').forEach(input => { input.checked = recording.optedOut; });
    document.querySelectorAll('[data-recording-note]').forEach(note => { note.textContent = !recording.url ? T.inactive : recording.optedOut ? T.recordingOff : T.recording; });
    if (typeof game !== 'undefined' && game && recording.optedOut) game.recorded = false;
  }
  document.addEventListener('change', e => {
    if (e.target.matches('[data-opt-out]')) { recording.optOut(e.target.checked); syncRecordingControls(); }
  });

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
    endActiveRound(); game = null; recording.setRun(null);
    const hist = store.history.slice(-5).reverse();
    main.innerHTML = `
      <h1>${esc(T.title)}</h1>
      <p class="lede">${esc(T.lede)}</p>
      ${recordingControls()}
      <p class="row"><button class="btn primary" type="button" id="startMixed">${esc(T.start)}</button></p>
      <h2>${esc(T.choose)}</h2>
      <div class="rounds">${DATA.rounds.map(r => `
        <button class="round" type="button" data-round="${r.id}"><b>${esc(r.title)}</b><span>${esc(r.blurb)}</span><br><span class="tag">${esc(T.items(roundSize(r)))} · ${esc(r.tag)}</span></button>`).join('')}
      </div>
      <p class="small muted">${esc(T.poolNote(DATA.items.length, DATA.sets.length))} <a href="#about">${esc(T.howLink)}</a>.</p>
      ${hist.length ? `<h2>${esc(T.recent)}</h2><div class="tablewrap"><table class="res"><thead><tr><th>${esc(T.round)}</th><th>${esc(T.date)}</th><th class="num">${esc(T.score)}</th></tr></thead><tbody>${hist.map(h => `<tr><td>${esc(h.title)}</td><td>${esc(displayDate(h.date))}</td><td class="num">${h.ok} / ${h.n}</td></tr>`).join('')}</tbody></table></div>
      <p class="small"><button type="button" class="linkbtn" id="forget">${esc(T.forget)}</button></p>` : ''}`;
    main.querySelectorAll('[data-round]').forEach(b => b.addEventListener('click', () => { location.hash = 'play-' + b.dataset.round; }));
    $('#startMixed').addEventListener('click', () => { const r = DATA.rounds.find(x => x.id === 'mixed') || DATA.rounds[0]; location.hash = 'play-' + r.id; });
    const f = $('#forget'); if (f) f.addEventListener('click', () => { recording.event('history_cleared'); store = { seen: {}, history: [], setsShown: {}, origSeen: {} }; save(store); home(); });
    document.title = T.doc;
  }

  function about() {
    endActiveRound(); game = null; recording.setRun(null);
    main.innerHTML = DATA.about_html.replace('<h1>', '<h1 id="about">') + `<p class="row"><button class="btn primary" type="button" data-go="home">${esc(T.back)}</button></p>`;
    const privacy = $('#privacy-controls'); if (privacy) privacy.innerHTML = recordingControls();
    focusMain();
  }

  /* ---------- a round ---------- */
  let game = null;
  const seenCount = id => store.seen[id] || 0;
  const eligibleSets = round => DATA.sets.filter(s => round.cats.includes(s.cat) && (!round.lang || s.lang === round.lang));
  function roundSize(round) {
    const available = eligibleSets(round).length;
    return Math.min(available, round.cats.length === 1 && round.cats[0] === 'images' ? 12 : round.n);
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
      const human = s.members.filter(m => ITEMS[m].h), ai = s.members.filter(m => !ITEMS[m].h);
      const pool = !ai.length || (human.length && Math.random() < 0.5) ? human : ai;
      const least = Math.min(...pool.map(seenCount));
      const c = pool.filter(m => seenCount(m) === least);
      return c[Math.floor(Math.random() * c.length)];
    });
    return { ids, exhausted };
  }
  function start(round) {
    endActiveRound();
    const d = draw(round);
    game = { round, ids: d.ids, exhausted: d.exhausted, i: 0, answers: [], run: randomUUID(), ended: false, recorded: !!recording.url && !recording.optedOut };
    recording.setRun(game.run);
    recording.event('round_start', { round_id: round.id, round_title: round.title, item_ids: d.ids, size: d.ids.length });
    document.title = round.title + ' — ' + T.title;
    showItem();
  }
  function endActiveRound() {
    if (!game || game.ended) return;
    game.ended = true;
    const scored = game.answers.filter(a => !a.known);
    recording.event('round_end', { early: game.answers.length < game.ids.length, answered: game.answers.length,
      scored: scored.length, right: scored.filter(a => a.ok).length });
  }
  function showItem() {
    const g = game, it = ITEMS[g.ids[g.i]], set = SETS[it.set];
    main.innerHTML = `
      <div class="progress"><span>${esc(g.round.title)}</span><span>${esc(T.progress(g.i + 1, g.ids.length))}</span></div>
      <div class="bar" aria-hidden="true"><i style="width:${100 * g.i / g.ids.length}%"></i></div>
      <p class="round-actions"><button class="btn" type="button" id="endRound"${g.answers.length ? '' : ' disabled'}>${esc(T.endRound)}</button></p>
      ${g.i === 0 && g.exhausted ? `<p class="note small">${esc(T.exhausted)}</p>` : ''}
      <article class="card" aria-labelledby="ctx">
        <p class="context" id="ctx">${md(set.context)}${LANG === 'en' && it.lang === 'cs' ? '<span class="flag" title="Czech">CZ</span>' : ''}${LANG === 'cs' && it.lang === 'en' ? '<span class="flag" title="anglicky">EN</span>' : ''}</p>
        ${set.question ? `<details class="question"><summary>${esc(T.question)}</summary><div class="text" lang="${set.lang}">${set.question.split(/\n\n+/).map(p => `<p>${esc(p)}</p>`).join('')}</div></details>` : ''}
        ${contentHTML(it)}
        <div id="ask">
          <div class="answer">
            <button class="btn human" type="button" data-ans="human">${esc(T.human)}</button>
            <button class="btn ai" type="button" data-ans="ai">${esc(T.ai)}</button>
          </div>
          <label class="known"><input type="checkbox" id="known"> <span>${esc(T.known(it.mod === 'image' ? T.kPic : T.kText))}</span></label>
          <p class="small muted" style="margin:.6rem 0 0">${T.keys}</p>
        </div>
        <div id="rev"></div>
      </article>`;
    g.shownAt = performance.now();
    recording.event('item_shown', { item_id: it.id, position: g.i + 1, context: plain(set.context).slice(0, 800) });
    $('#known').addEventListener('change', () => recording.event('known_toggled', { item_id: it.id, position: g.i + 1, known: $('#known').checked }));
    main.querySelectorAll('[data-ans]').forEach(b => b.addEventListener('click', () => answer(b.dataset.ans)));
    $('#endRound').addEventListener('click', () => results());
    focusMain();
    say(`${T.progress(g.i + 1, g.ids.length)}. ${plain(set.context)}`);
  }
  function answer(choice) {
    const g = game, it = ITEMS[g.ids[g.i]], x = decode(it.x), set = SETS[it.set];
    if (g.answers[g.i]) return;
    const knownTick = $('#known').checked, prevOrig = !!store.origSeen[set.id];
    const known = knownTick || prevOrig;  // a player who has seen the set's original can compare from memory
    const ok = (choice === 'human') === !!it.h;
    g.answers[g.i] = { id: it.id, choice, known, ok, h: !!it.h, cat: set.cat, family: x.family || null, era: x.era || null };
    recording.event('answer', { item_id: it.id, position: g.i + 1, answer: choice, correct: ok,
      ms: Math.max(0, Math.round(performance.now() - g.shownAt)), known, context: plain(set.context).slice(0, 800) });
    $('#endRound').disabled = false;
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
    main.querySelectorAll('details.spoil').forEach(d => d.addEventListener('toggle', () => { if (d.open) { recording.event('compare_opened', { item_id: it.id, set_id: set.id, position: g.i + 1 }); store.origSeen[set.id] = 1; save(store); } }));
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
    const g = game;
    if (!g || !g.answers.length) return;
    endActiveRound(); game = null;
    const id = resultId();
    const scored = g.answers.filter(a => !a.known), ok = scored.filter(a => a.ok).length, n = scored.length;
    recording.event('result_shown', { result_id: id, score: ok, n });
    const verifyURL = new URL('verify.html#' + id, location.href).href;
    const date = new Date().toISOString().slice(0, 10);
    store.history.push({ result_id: id, round: g.round.id, title: g.round.title, date, ok, n, answers: g.answers.map(a => ({ id: a.id, ok: a.ok, known: a.known })) });
    store.history = store.history.slice(-200); save(store);
    const verdict = !n ? T.allKnown : chanceMessage(ok, n);
    const allRows = store.history.flatMap(h => h.answers || []).filter(a => !a.known && ITEMS[a.id]);
    main.innerHTML = `
      <h1>${esc(T.result)}</h1>
      <p class="muted">${esc(g.round.title)}</p>
      <p class="score">${ok} / ${n}</p>
      <p>${esc(verdict)}</p>
      <p>${esc(T.resultId)}: <strong id="result-id">${id}</strong> · <a id="verify-result" href="${esc(verifyURL)}">${esc(T.verify)}</a></p>
      <p class="small muted" id="verification-status">${esc(g.recorded ? T.pendingResult : T.localResult)}</p>
      ${nameForm('resultName', T.addName)}
      ${tableHTML(T.byKind, tally(scored, a => a.h ? T.origH : T.origA), T.kind)}
      ${tableHTML(T.byCat, tally(scored, a => T.cats[a.cat]), T.cat)}
      ${tableHTML(T.byModel, tally(scored.filter(a => !a.h), a => a.family), T.model)}
      ${tableHTML(T.byEra, tally(scored, a => a.era).sort((x, y) => x[0].localeCompare(y[0])), T.era)}
      ${allRows.length > n ? `<p class="small muted">${esc(T.allRounds(allRows.filter(a => a.ok).length, allRows.length, pct(allRows.filter(a => a.ok).length, allRows.length)))}</p>` : ''}
      <h2>${esc(T.others)}</h2>
      <ul class="studies">${DATA.studies.map(s => `<li>${md(s)}</li>`).join('')}</ul>
      <h2>${esc(T.review)}</h2>
      <div class="tablewrap"><table class="res"><thead><tr><th>#</th><th>${esc(T.item)}</th><th>${esc(T.youSaid)}</th><th></th></tr></thead><tbody>${g.answers.map((a, k) => { const x = decode(ITEMS[a.id].x); return `
        <tr><td class="num">${k + 1}</td><td><span class="badge ${a.h ? 'human' : 'ai'}">${esc(a.h ? T.badgeH : T.badgeA)}</span>${md(x.who)}</td><td>${esc(a.choice === 'human' ? T.human : T.ai)}</td><td>${a.known ? `<span class="small muted">${esc(T.knownShort)}</span>` : a.ok ? '✓' : '✗'}</td></tr>`; }).join('')}</tbody></table></div>
      <div class="row">
        <button class="btn primary" type="button" id="again">${esc(T.again(g.round.title))}</button>
        <button class="btn" type="button" data-go="home">${esc(T.another)}</button>
        <button class="btn" type="button" id="copy">${esc(T.copy)}</button>
      </div>
      <p class="small muted">${T.learn}</p>`;
    $('#again').addEventListener('click', () => start(g.round));
    $('#copy').addEventListener('click', e => {
      const t = `${T.share(g.round.title, ok, n)} ${recording.name ? recording.name + '. ' : ''}${verdict} ${T.resultId}: ${id}. ${verifyURL}`;
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
    else if (asking && k === 'k') { const c = $('#known'); c.checked = !c.checked; c.dispatchEvent(new Event('change', { bubbles: true })); }
  });
})();
