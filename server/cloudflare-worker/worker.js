/* Shared contract: keep this block identical in both backend templates. */
const QuizEvents = (() => {
  const fields = ['event_id', 'event', 'ts', 'seq', 'session_id', 'round_run_id', 'lang', 'page_version', 'name',
    'round_id', 'round_title', 'item_ids', 'size', 'item_id', 'position', 'context', 'answer', 'correct', 'ms', 'known',
    'set_id', 'early', 'answered', 'scored', 'right', 'result_id', 'score', 'n', 'opted_out'];
  const types = ['page_open', 'round_start', 'item_shown', 'answer', 'known_toggled', 'compare_opened', 'round_end',
    'result_shown', 'name_set', 'history_cleared', 'opt_out_changed'];
  const uuid = value => typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
  const resultId = value => typeof value === 'string' && /^[0-9A-HJKMNP-TV-Z]{4}-[0-9A-HJKMNP-TV-Z]{4}$/.test(value);
  const text = (value, n) => typeof value === 'string' && value.length <= n;
  const count = (value, n = 100) => Number.isInteger(value) && value >= 0 && value <= n;
  function validate(payload) {
    if (!payload || !Array.isArray(payload.events) || !payload.events.length || payload.events.length > 100) throw new Error('Expected 1–100 events');
    for (const e of payload.events) {
      if (!e || typeof e !== 'object' || Object.keys(e).some(k => !fields.includes(k))) throw new Error('Unknown event field');
      if (!types.includes(e.event) || !uuid(e.event_id) || !uuid(e.session_id) || !(e.round_run_id === null || uuid(e.round_run_id)) ||
          !Number.isSafeInteger(e.seq) || e.seq < 1 || !text(e.ts, 30) || !/^\d{4}-\d\d-\d\dT/.test(e.ts) || !Number.isFinite(Date.parse(e.ts)) ||
          !['en', 'cs'].includes(e.lang) || !text(e.page_version, 60) || !text(e.name, 60) || /[<>]/.test(e.name)) throw new Error('Invalid event envelope');
      if (['round_start', 'item_shown', 'answer', 'known_toggled', 'compare_opened', 'round_end', 'result_shown'].includes(e.event) && !uuid(e.round_run_id)) throw new Error('Round ID required');
      if (e.event === 'round_start' && (!text(e.round_id, 80) || !text(e.round_title, 200) || !count(e.size) || !e.size ||
          !Array.isArray(e.item_ids) || e.item_ids.length !== e.size || new Set(e.item_ids).size !== e.size || !e.item_ids.every(id => text(id, 80)))) throw new Error('Invalid round');
      if (['item_shown', 'answer', 'known_toggled', 'compare_opened'].includes(e.event) && (!text(e.item_id, 80) || !count(e.position) || !e.position)) throw new Error('Invalid item');
      if (e.context !== undefined && !text(e.context, 800)) throw new Error('Context too long');
      if (e.set_id !== undefined && !text(e.set_id, 80)) throw new Error('Invalid set');
      if (e.event === 'answer' && (!['human', 'ai'].includes(e.answer) || typeof e.correct !== 'boolean' || typeof e.known !== 'boolean' || !count(e.ms, 2147483647))) throw new Error('Invalid answer');
      if (e.event === 'known_toggled' && typeof e.known !== 'boolean') throw new Error('Invalid known flag');
      if (e.event === 'round_end' && (typeof e.early !== 'boolean' || !count(e.answered) || !count(e.scored) || !count(e.right) || e.right > e.scored || e.scored > e.answered)) throw new Error('Invalid end');
      if (e.event === 'result_shown' && (!resultId(e.result_id) || !count(e.score) || !count(e.n) || e.score > e.n)) throw new Error('Invalid result');
      if (e.event === 'opt_out_changed' && typeof e.opted_out !== 'boolean') throw new Error('Invalid preference');
    }
    return payload.events;
  }
  function summary(rows, result, priorRounds) {
    // seq describes order within a round even if delivery was retried out of order.
    const events = rows.slice().sort((a, b) => a.seq - b.seq);
    const start = events.find(e => e.event === 'round_start');
    const end = events.find(e => e.event === 'round_end');
    const answers = events.filter(e => e.event === 'answer');
    const latestName = events.filter(e => e.event === 'name_set').pop();
    const scored = answers.filter(e => !e.known), right = scored.filter(e => e.correct).length;
    const ids = start ? start.item_ids : answers.map(e => e.item_id);
    const shown = events.filter(e => e.event === 'item_shown');
    const items = ids.map((id, i) => {
      const a = answers.find(e => e.item_id === id && e.position === i + 1);
      const show = shown.find(e => e.item_id === id && e.position === i + 1);
      return { item_id: id, position: i + 1, context: (a && a.context) || (show && show.context) || '',
        answer: a ? a.answer : null, correct: a ? a.correct : null, known: a ? a.known : null, ms: a ? a.ms : null };
    });
    const validAnswers = answers.every(a => ids[a.position - 1] === a.item_id) && new Set(answers.map(a => a.item_id)).size === answers.length;
    const complete = !!(start && end && end.answered === answers.length && answers.every(a => shown.some(s => s.item_id === a.item_id && s.position === a.position)));
    const ordered = !!(start && end && start.seq < end.seq && end.seq < result.seq &&
      events.filter(e => e.event === 'round_start').length === 1 && events.filter(e => e.event === 'round_end').length === 1 &&
      answers.every(a => start.seq < a.seq && a.seq < end.seq && shown.some(s => s.item_id === a.item_id && s.position === a.position && start.seq < s.seq && s.seq < a.seq)));
    const consistent = !!(start && end && ordered && validAnswers && right === result.score && scored.length === result.n &&
      end.right === right && end.scored === scored.length && end.early === (answers.length < ids.length));
    return { result_id: result.result_id, name: latestName ? latestName.name : result.name, ts: result.ts, received_at: result.received_at,
      round_id: start ? start.round_id : '', round_title: start ? start.round_title : '', score: result.score, n: result.n,
      early: end ? end.early : null, prior_rounds: priorRounds, comparisons: events.filter(e => e.event === 'compare_opened').length,
      complete, consistent, items };
  }
  return { fields, validate, summary, resultId };
})();
/* End shared contract. */

const ORIGIN = 'https://jaromirsvoboda.github.io';
function response(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: {
    'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': ORIGIN,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'no-store', 'Vary': 'Origin',
  } });
}
async function readBody(request) {
  if (Number(request.headers.get('Content-Length')) > 20480) throw new Error('Too large');
  const reader = request.body && request.body.getReader();
  if (!reader) throw new Error('Empty body');
  const chunks = []; let size = 0;
  for (;;) {
    const { done, value } = await reader.read(); if (done) break;
    size += value.byteLength;
    if (size > 20480) { await reader.cancel(); throw new Error('Too large'); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return JSON.parse(new TextDecoder().decode(bytes));
}
function parseRows(rows) { return rows.map(row => ({ ...JSON.parse(row.raw_json), received_at: row.received_at })); }
export default {
  async fetch(request, env) {
    const url = new URL(request.url), origin = request.headers.get('Origin');
    if (origin && origin !== ORIGIN) return response({ ok: false, error: 'Origin not allowed' }, 403);
    if (request.method === 'OPTIONS') return response({ ok: true });
    try {
      if (request.method === 'POST' && url.pathname === '/events') {
        const events = QuizEvents.validate(await readBody(request));
        const now = new Date().toISOString();
        // D1 batches are transactional; event_id deduplicates fetch/beacon retries.
        const columns = ['received_at', ...QuizEvents.fields, 'raw_json'];
        const sql = `INSERT INTO events (${columns.join(',')}) VALUES (${columns.map(() => '?').join(',')}) ON CONFLICT(event_id) DO NOTHING`;
        await env.DB.batch(events.map(e => env.DB.prepare(sql).bind(now, ...QuizEvents.fields.map(key => {
          const value = e[key]; return value === undefined || value === null ? null : Array.isArray(value) ? JSON.stringify(value) : typeof value === 'boolean' ? Number(value) : value;
        }), JSON.stringify(e))));
        return response({ ok: true });
      }
      const id = (url.searchParams.get('result') || (url.pathname.startsWith('/result/') ? url.pathname.slice(8) : '')).toUpperCase();
      if (request.method === 'GET' && (url.pathname === '/events' || url.pathname.startsWith('/result/'))) {
        if (!QuizEvents.resultId(id)) return response({ ok: false, error: 'Invalid result ID' }, 400);
        const cutoff = new Date(Date.now() - 365 * 86400000).toISOString();
        const found = await env.DB.prepare("SELECT raw_json, received_at FROM events WHERE event = 'result_shown' AND result_id = ? AND received_at >= ?").bind(id, cutoff).first();
        if (!found) return response({ ok: false, error: 'Result not found' }, 404);
        const result = parseRows([found])[0];
        const { results } = await env.DB.prepare('SELECT raw_json, received_at FROM events WHERE session_id = ? AND round_run_id = ? AND received_at >= ?').bind(result.session_id, result.round_run_id, cutoff).all();
        const round = parseRows(results), start = round.find(e => e.event === 'round_start');
        const prior = await env.DB.prepare("SELECT COUNT(DISTINCT round_run_id) AS n FROM events WHERE event = 'round_start' AND session_id = ? AND round_run_id != ? AND seq < ? AND received_at >= ?")
          .bind(result.session_id, result.round_run_id, start ? start.seq : result.seq, cutoff).first();
        return response({ ok: true, result: QuizEvents.summary(round, result, prior.n) });
      }
      return response({ ok: false, error: 'Not found' }, 404);
    } catch (_) { return response({ ok: false, error: 'Invalid batch or storage unavailable' }, 400); }
  },
  async scheduled(_event, env) {
    await env.DB.prepare('DELETE FROM events WHERE received_at < ?').bind(new Date(Date.now() - 365 * 86400000).toISOString()).run();
  },
};
