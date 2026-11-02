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

/* Script property SHEET_ID is required. Deploy as owner; allow Anyone. */
const HEADERS = ['received_at'].concat(QuizEvents.fields, ['raw_json']);
function sheet_() {
  const id = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
  if (!id) throw new Error('Set SHEET_ID');
  const book = SpreadsheetApp.openById(id);
  let sheet = book.getSheetByName('events');
  if (!sheet) sheet = book.insertSheet('events');
  if (!sheet.getLastRow()) { sheet.appendRow(HEADERS); sheet.setFrozenRows(1); }
  return sheet;
}
function output_(data) {
  // ContentService redirects to a public googleusercontent URL. Its JSON output
  // can be read cross-origin; Apps Script cannot set arbitrary response headers.
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
function rows_(sheet) {
  if (sheet.getLastRow() < 2) return [];
  const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length).getValues();
  return values.map(row => {
    const event = JSON.parse(row[HEADERS.length - 1]);
    event.received_at = String(row[0]); return event;
  });
}
function doPost(e) {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return output_({ ok: false, error: 'Busy; retry' });
  try {
    const body = e && e.postData && e.postData.contents;
    if (typeof body !== 'string' || Utilities.newBlob(body).getBytes().length > 20480) throw new Error('Batch exceeds 20 KB');
    const events = QuizEvents.validate(JSON.parse(body)), sheet = sheet_();
    const stored = rows_(sheet), seen = new Set(stored.map(row => row.event_id));
    const results = new Map(stored.filter(row => row.event === 'result_shown').map(row => [row.result_id, row.event_id]));
    const fresh = events.filter(row => { if (seen.has(row.event_id)) return false; seen.add(row.event_id); return true; });
    for (const row of fresh) {
      if (row.event === 'result_shown') {
        if (results.has(row.result_id) && results.get(row.result_id) !== row.event_id) throw new Error('Result ID already used');
        results.set(row.result_id, row.event_id);
      }
    }
    const now = new Date().toISOString();
    // Prefix spreadsheet formulas in extracted columns. Raw JSON remains exact.
    const cell = value => {
      if (value === undefined || value === null) return '';
      const s = Array.isArray(value) ? JSON.stringify(value) : value;
      return typeof s === 'string' && /^\s*[=+@-]/.test(s) ? "'" + s : s;
    };
    if (fresh.length) sheet.getRange(sheet.getLastRow() + 1, 1, fresh.length, HEADERS.length).setValues(
      fresh.map(row => [now].concat(QuizEvents.fields.map(key => cell(row[key])), [JSON.stringify(row)])));
    return output_({ ok: true, accepted: fresh.length });
  } catch (_) { return output_({ ok: false, error: 'Invalid batch or storage unavailable' }); }
  finally { lock.releaseLock(); }
}
function doGet(e) {
  try {
    const id = String(e && e.parameter && e.parameter.result || '').toUpperCase();
    if (!QuizEvents.resultId(id)) return output_({ ok: false, error: 'Invalid result ID' });
    const cutoff = Date.now() - 365 * 86400000;
    const rows = rows_(sheet_()).filter(row => Date.parse(row.received_at) >= cutoff);
    const result = rows.find(row => row.event === 'result_shown' && row.result_id === id);
    if (!result) return output_({ ok: false, error: 'Result not found' });
    const round = rows.filter(row => row.session_id === result.session_id && row.round_run_id === result.round_run_id);
    const start = round.find(row => row.event === 'round_start');
    const prior = new Set(rows.filter(row => row.event === 'round_start' && row.session_id === result.session_id &&
      row.round_run_id !== result.round_run_id && row.seq < (start ? start.seq : result.seq)).map(row => row.round_run_id)).size;
    return output_({ ok: true, result: QuizEvents.summary(round, result, prior) });
  } catch (_) { return output_({ ok: false, error: 'Storage unavailable' }); }
}
function deleteExpiredEvents() {
  const lock = LockService.getScriptLock(); lock.waitLock(10000);
  try {
    const sheet = sheet_(), cutoff = Date.now() - 365 * 86400000;
    if (sheet.getLastRow() < 2) return;
    const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues();
    // Remove contiguous blocks from bottom to top, preserving header and new rows.
    for (let i = values.length - 1; i >= 0;) {
      if (Date.parse(String(values[i][0])) >= cutoff) { i--; continue; }
      const end = i; while (i >= 0 && Date.parse(String(values[i][0])) < cutoff) i--;
      sheet.deleteRows(i + 3, end - i);
    }
  } finally { lock.releaseLock(); }
}
function installRetentionTrigger() {
  ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === 'deleteExpiredEvents').forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('deleteExpiredEvents').timeBased().everyDays(1).create();
}
