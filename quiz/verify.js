/* Public lookup, deliberately independent of the quiz logger: viewing a result records no quiz events. */
(function () {
  'use strict';
  const cs = document.documentElement.lang === 'cs';
  const T = cs ? {
    inactive: 'Zaznamenávání zatím není aktivní. Veřejné ověření výsledků není dostupné.', loading: 'Hledám výsledek…',
    missing: 'Výsledek není dostupný. Může ještě čekat na odeslání, být smazaný nebo mít chybný kód.',
    invalid: 'Zadejte kód výsledku ve tvaru XXXX-XXXX.', unnamed: 'Bez jména', round: 'Kolo', date: 'Čas podle prohlížeče hráče', received: 'Přijato serverem',
    prior: 'Dřívější zaznamenaná kola tohoto prohlížeče (dosud uchovaná)', early: 'Kolo skončilo předčasně', yes: 'ano', no: 'ne',
    right: 'správně', wrong: 'chybně', human: 'člověk', ai: 'AI', known: 'nezapočítáno (známá položka)',
    answer: 'Odpověď', unrecorded: 'Odpověď chybí', seconds: 's', compares: 'Otevřená porovnání',
    incomplete: 'Záznam je neúplný nebo si jeho údaje odporují. Část událostí může ještě čekat na odeslání.',
  } : {
    inactive: 'Recording is not active yet. Public result verification is unavailable.', loading: 'Looking up result…',
    missing: 'Result unavailable. It may still be queued, have been deleted, or the ID may be wrong.',
    invalid: 'Enter a result ID in the form XXXX-XXXX.', unnamed: 'No name', round: 'Round', date: 'Time from the player’s browser', received: 'Received by server',
    prior: 'Earlier recorded rounds from this browser (still retained)', early: 'Round ended early', yes: 'yes', no: 'no',
    right: 'right', wrong: 'wrong', human: 'human', ai: 'AI', known: 'not scored (known item)',
    answer: 'Answer', unrecorded: 'No recorded answer', seconds: 's', compares: 'Comparisons opened',
    incomplete: 'This record is incomplete or its fields disagree. Some events may still be queued.',
  };
  const form = document.querySelector('#verify-form'), input = document.querySelector('#result');
  const status = document.querySelector('#verify-status'), output = document.querySelector('#verified-result');
  const url = typeof window.QUIZ_LOG_URL === 'string' ? window.QUIZ_LOG_URL.trim() : '';
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const date = s => { const d = new Date(s); return Number.isNaN(d.getTime()) ? '' : d.toLocaleString(cs ? 'cs-CZ' : 'en-GB'); };
  let request = 0;
  async function lookup() {
    const token = ++request;
    output.replaceChildren();
    if (!url) { status.textContent = T.inactive; return; }
    const raw = input.value.trim().toUpperCase().replace(/-/g, '');
    if (!/^[0-9A-HJKMNP-TV-Z]{8}$/.test(raw)) { status.textContent = T.invalid; return; }
    const id = raw.slice(0, 4) + '-' + raw.slice(4); input.value = id;
    history.replaceState(null, '', '#' + id);
    document.querySelector('[data-language]').hash = id;
    status.textContent = T.loading;
    const controller = new AbortController(), timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const endpoint = new URL(url); endpoint.searchParams.set('result', id);
      const response = await fetch(endpoint.href, { credentials: 'omit', signal: controller.signal });
      if (!response.ok) throw new Error('Unavailable');
      const data = await response.json();
      if (token !== request) return;
      if (!data.ok || !data.result || !Array.isArray(data.result.items)) throw new Error('Unavailable');
      const r = data.result;
      // Check recorded correctness against the same public answer key used by the quiz.
      // This detects inconsistent submissions, while the browser remains an untrusted source.
      let catalogue = null;
      try {
        const local = await fetch('items.json', { credentials: 'omit' });
        if (local.ok) catalogue = await local.json();
      } catch (_) { /* older or unavailable catalogue: show the stored context */ }
      if (token !== request) return;
      if (catalogue && Array.isArray(catalogue.items) && Array.isArray(catalogue.sets)) {
        const items = new Map(catalogue.items.map(item => [item.id, item]));
        const sets = new Map(catalogue.sets.map(set => [set.id, set]));
        for (const row of r.items) {
          const item = items.get(row.item_id); if (!item) continue;
          const set = sets.get(item.set);
          if (set) row.context = String(set.context).replace(/\*+/g, '');
          if (!row.answer) continue;
          try {
            const bytes = Uint8Array.from(atob(item.x), c => c.charCodeAt(0));
            const kind = JSON.parse(new TextDecoder().decode(bytes)).kind;
            if (row.correct !== (row.answer === kind)) r.consistent = false;
          } catch (_) { r.consistent = false; }
        }
      }
      status.textContent = r.complete && r.consistent ? '' : T.incomplete;
      output.innerHTML = `<section class="card"><h2>${esc(r.name || T.unnamed)}</h2>
        <p>${esc(T.round)}: ${esc(r.round_title || r.round_id)}</p><p>${esc(T.date)}: ${esc(date(r.ts))}</p>
        <p>${esc(T.received)}: ${esc(date(r.received_at))}</p><p class="score">${esc(r.score)} / ${esc(r.n)}</p>
        <p>${esc(T.early)}: ${esc(r.early == null ? '?' : r.early ? T.yes : T.no)}</p>
        <p>${esc(T.prior)}: ${esc(r.prior_rounds)}</p><p>${esc(T.compares)}: ${esc(r.comparisons)}</p>
        <ol class="verification-items">${r.items.map(item => `<li><p>${esc(item.context || item.item_id)}</p>
          <p>${esc(T.answer)}: ${item.answer ? `${esc(item.answer === 'human' ? T.human : T.ai)}, ${esc(item.correct ? T.right : T.wrong)}, ${esc((Number(item.ms) / 1000).toLocaleString(cs ? 'cs-CZ' : 'en-GB'))} ${T.seconds}${item.known ? ', ' + esc(T.known) : ''}` : esc(T.unrecorded)}</p></li>`).join('')}</ol></section>`;
    } catch (_) { if (token === request) status.textContent = T.missing; }
    finally { clearTimeout(timeout); }
  }
  form.addEventListener('submit', e => { e.preventDefault(); lookup(); });
  window.addEventListener('hashchange', () => { input.value = location.hash.slice(1); lookup(); });
  input.value = location.hash.slice(1);
  document.querySelector('[data-language]').hash = location.hash;
  if (!url || input.value) lookup();
})();
