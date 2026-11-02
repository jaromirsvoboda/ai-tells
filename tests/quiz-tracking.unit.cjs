// Run without a browser or third-party packages: node tests/quiz-tracking.unit.cjs
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { runInNewContext } = require('node:vm');
const { webcrypto } = require('node:crypto');
const source = readFileSync(join(__dirname, '../quiz/quiz.js'), 'utf8');
const prefix = 'human-or-ai/tracking/';
const idPattern = /^[0-9A-HJKMNP-TV-Z]{4}-[0-9A-HJKMNP-TV-Z]{4}$/;
function logger({ url = 'https://events.test/events', storage = new Map(), failWrites = false, ack = true, fetcher } = {}) {
  const timers = new Map(), listeners = {}, posts = [], beacons = [];
  let nextTimer = 1, ended = 0;
  const sandbox = { LANG: 'en', crypto: webcrypto, Uint8Array, TextEncoder, AbortController, Blob,
    navigator: { onLine: true, sendBeacon: (url, body) => { beacons.push({ url, body }); return true; } },
    window: { QUIZ_LOG_URL: url, addEventListener: (type, fn) => { listeners[type] = fn; } },
    localStorage: { getItem: key => storage.get(key) || null, setItem: (key, value) => {
      if (failWrites) throw new Error('Quota exceeded'); storage.set(key, value);
    } },
    setTimeout: (fn, delay) => { const id = nextTimer++; timers.set(id, { fn, delay }); return id; },
    clearTimeout: id => timers.delete(id),
    fetch: async (url, options) => { posts.push({ url, options, events: JSON.parse(options.body).events });
      return fetcher ? fetcher(options) : { ok: true, json: async () => ({ ok: ack }) }; },
    endActiveRound: () => { ended++; }, syncRecordingControls() {}, syncNameControls() {},
  };
  const block = source.slice(source.indexOf('  /* ---------- optional event recording'), source.indexOf('  /* ---------- storage'));
  const recording = runInNewContext(`${block}; recording`, sandbox);
  async function tick() {
    const first = timers.entries().next().value;
    if (!first) return;
    timers.delete(first[0]); first[1].fn();
    for (let i = 0; i < 12; i++) await Promise.resolve();
  }
  return { recording, storage, posts, beacons, timers, listeners, sandbox, tick, ended: () => ended };
}
function contract() {
  const script = readFileSync(join(__dirname, '../server/apps-script/Code.gs'), 'utf8');
  const worker = readFileSync(join(__dirname, '../server/cloudflare-worker/worker.js'), 'utf8');
  const shared = text => text.slice(0, text.indexOf('/* End shared contract. */'));
  assert.equal(shared(script), shared(worker));
  return runInNewContext(`${shared(script)}; QuizEvents`);
}
function roundRows() {
  const base = { session_id: webcrypto.randomUUID(), round_run_id: webcrypto.randomUUID(), lang: 'en', page_version: 'test', name: '', ts: new Date().toISOString() };
  const e = (event, seq, fields) => ({ ...base, event, seq, event_id: webcrypto.randomUUID(), ...fields });
  return [e('round_start', 1, { round_id: 'mixed', round_title: 'Mixed', item_ids: ['one', 'two'], size: 2 }),
    e('item_shown', 2, { item_id: 'one', position: 1, context: 'A poem' }),
    e('answer', 3, { item_id: 'one', position: 1, answer: 'human', correct: true, known: false, ms: 1500 }),
    e('round_end', 4, { early: true, answered: 1, scored: 1, right: 1 }),
    e('result_shown', 5, { result_id: 'ABCD-1234', score: 1, n: 1 })];
}

test('production result IDs use eight random Crockford base32 characters', () => {
  const helper = source.match(/  function resultId\(\) \{[\s\S]*?\n  \}/);
  assert.ok(helper);
  const generate = runInNewContext(`(${helper[0]})`, { crypto: webcrypto });
  const ids = Array.from({ length: 1000 }, generate);
  ids.forEach(id => assert.match(id, idPattern));
  assert.equal(new Set(ids).size, ids.length);
});

test('empty endpoint retains a bounded local log and sends nothing', async () => {
  const l = logger({ url: '' });
  for (let i = 0; i < 510; i++) l.recording.event('page_open');
  await l.tick();
  assert.equal(l.posts.length, 0); assert.equal(l.timers.size, 0);
  assert.equal(JSON.parse(l.storage.get(prefix + 'log')).length, 500);
  assert.equal(JSON.parse(l.storage.get(prefix + 'queue')).length, 0);
});

test('events have the full envelope and acknowledgement removes only sent entries', async () => {
  const l = logger(); l.recording.setRun(webcrypto.randomUUID()); l.recording.event('round_start');
  await l.tick();
  assert.equal(l.posts.length, 1);
  const [open, start] = l.posts[0].events;
  for (const e of [open, start]) {
    assert.ok(e.event_id); assert.ok(e.session_id); assert.equal(e.lang, 'en');
    assert.equal(e.page_version, 'quiz-tracking-1'); assert.equal(e.name, ''); assert.ok(Number.isFinite(Date.parse(e.ts)));
  }
  assert.equal(open.round_run_id, null); assert.ok(start.round_run_id); assert.ok(start.seq > open.seq);
  assert.equal(l.posts[0].options.keepalive, true); assert.equal(l.posts[0].options.credentials, 'omit');
  assert.match(l.posts[0].options.headers['Content-Type'], /^text\/plain/);
  assert.equal(JSON.parse(l.storage.get(prefix + 'queue')).length, 0);
});

test('names are trimmed, strip markup and stray angle brackets, and remain limited to 60 characters', async () => {
  const l = logger();
  l.recording.setName('  Ada <b>Lovelace</b> <3  '); l.recording.event('page_open');
  assert.equal(l.recording.name, 'Ada Lovelace 3');
  await l.tick();
  assert.equal(l.posts[0].events.at(-1).name, 'Ada Lovelace 3');
  l.recording.setName('x'.repeat(100)); assert.equal(l.recording.name.length, 60);
});

test('write-denied but readable storage preserves events in memory', async () => {
  const storage = new Map([[prefix + 'queue', '[]']]);
  const l = logger({ storage, failWrites: true });
  l.recording.event('answer', { item_id: 'a' }); await l.tick();
  assert.equal(l.posts.length, 1);
  assert.deepEqual(l.posts[0].events.map(e => e.event), ['page_open', 'answer']);
  assert.equal(l.timers.size, 0);
});

test('opt-out clears unsent events, records its preference locally, and sends no opt-out event', async () => {
  const l = logger();
  l.storage.set(prefix + 'seq', '100'); // Another tab has recorded later events.
  l.recording.optOut(true); l.recording.event('answer'); await l.tick();
  assert.equal(JSON.parse(l.storage.get(prefix + 'seq')), 101);
  assert.equal(l.posts.length, 0); assert.equal(l.recording.optedOut, true);
  assert.equal(JSON.parse(l.storage.get(prefix + 'queue')).length, 0);
  assert.equal(JSON.parse(l.storage.get(prefix + 'log'))[0].event, 'opt_out_changed');
  l.listeners.pagehide({ persisted: false }); assert.equal(l.beacons.length, 0);
  l.recording.optOut(false); await l.tick();
  assert.equal(l.posts[0].events.length, 1);
  assert.equal(l.posts[0].events[0].opted_out, false);
});

test('persisted opt-out suppresses page-open recording after a reload', async () => {
  const l = logger({ storage: new Map([[prefix + 'optOut', 'true']]) });
  await l.tick(); assert.equal(l.posts.length, 0); assert.equal(l.recording.optedOut, true);
});

test('negative acknowledgement persists queue and schedules exponential backoff', async () => {
  const l = logger({ ack: false }); await l.tick();
  assert.equal(JSON.parse(l.storage.get(prefix + 'queue')).length, 1);
  assert.ok([...l.timers.values()].some(timer => timer.delay >= 1900));
  const replay = logger({ storage: l.storage }); await replay.tick();
  assert.equal(replay.posts[0].events[0].event_id, l.posts[0].events[0].event_id);
  assert.equal(JSON.parse(l.storage.get(prefix + 'queue')).length, 0);
});

test('network rejection is caught and offline events wait for the online signal', async () => {
  const l = logger({ fetcher: () => Promise.reject(new TypeError('Offline')) });
  await l.tick(); assert.equal(JSON.parse(l.storage.get(prefix + 'queue')).length, 1);
  const offline = logger(); offline.sandbox.navigator.onLine = false;
  await offline.tick(); assert.equal(offline.posts.length, 0);
  offline.sandbox.navigator.onLine = true; offline.listeners.online(); await offline.tick();
  assert.equal(offline.posts.length, 1);
});

test('beacon delivery stays queued and browser history cache does not end the round', () => {
  const l = logger();
  l.listeners.pagehide({ persisted: true }); assert.equal(l.ended(), 0);
  assert.equal(l.beacons.length, 1); assert.equal(JSON.parse(l.storage.get(prefix + 'queue')).length, 1);
  l.listeners.pagehide({ persisted: false }); assert.equal(l.ended(), 1);
});

test('queue and POST byte limits hold for non-ASCII events', async () => {
  const l = logger();
  for (let i = 0; i < 510; i++) l.recording.event('item_shown', { context: 'Žluťoučký'.repeat(80) });
  assert.equal(JSON.parse(l.storage.get(prefix + 'queue')).length, 500);
  await l.tick();
  assert.ok(l.posts[0].events.length <= 50);
  assert.ok(Buffer.byteLength(l.posts[0].options.body) <= 18000);
});

test('backend validation rejects malformed envelopes and oversized event counts', () => {
  const c = contract(), rows = roundRows();
  assert.equal(c.validate({ events: rows }).length, 5);
  for (const events of [[], Array(101).fill(rows[0]), [{ ...rows[0], session_id: 'x' }],
    [{ ...rows[2], answer: 'unknown' }], [{ ...rows[2], name: '<b>name</b>' }], [{ ...rows[2], ip: '127.0.0.1' }]]) {
    assert.throws(() => c.validate({ events }));
  }
});

test('backend summary checks score, sequence, incomplete rows, known exclusions and result-screen names', () => {
  const c = contract(), rows = roundRows();
  const summary = c.summary(rows, rows[4], 3);
  assert.equal(summary.complete, true); assert.equal(summary.consistent, true); assert.equal(summary.prior_rounds, 3);
  assert.equal(summary.early, true); assert.equal(summary.items[0].ms, 1500); assert.equal(summary.items[1].answer, null);
  assert.equal(c.summary(rows.filter(e => e.event !== 'answer'), rows[4], 0).complete, false);
  assert.equal(c.summary(rows, { ...rows[4], score: 0 }, 0).consistent, false);
  const impossible = rows.map(e => e.event === 'round_end' ? { ...e, seq: 2 } : e);
  assert.equal(c.summary(impossible, rows[4], 0).consistent, false);
  const named = [...rows, { ...rows[0], event: 'name_set', name: 'Ada', seq: 6 }];
  assert.equal(c.summary(named, rows[4], 0).name, 'Ada');
  const known = rows.map(e => e.event === 'answer' ? { ...e, known: true } : e.event === 'round_end' ? { ...e, scored: 0, right: 0 } : e);
  assert.equal(c.summary(known, { ...rows[4], score: 0, n: 0 }, 0).consistent, true);
  assert.equal('session_id' in summary, false); assert.equal('round_run_id' in summary, false);
});

test('Apps Script POST is idempotent, escapes formulas and returns a public summary', () => {
  const code = readFileSync(join(__dirname, '../server/apps-script/Code.gs'), 'utf8');
  const table = [], properties = { SHEET_ID: 'private-sheet' };
  const sheet = { getLastRow: () => table.length, appendRow: row => table.push(row), setFrozenRows() {},
    getRange: (row, col, count, width) => ({ getValues: () => table.slice(row - 1, row - 1 + count).map(r => r.slice(col - 1, col - 1 + width)),
      setValues: values => values.forEach((value, i) => { table[row - 1 + i] = value; }) }),
  };
  const api = runInNewContext(`${code}; ({ doPost, doGet })`, {
    PropertiesService: { getScriptProperties: () => ({ getProperty: key => properties[key] }) },
    SpreadsheetApp: { openById: () => ({ getSheetByName: () => sheet }) },
    LockService: { getScriptLock: () => ({ tryLock: () => true, releaseLock() {} }) },
    Utilities: { newBlob: text => ({ getBytes: () => Buffer.from(text) }) },
    ContentService: { MimeType: { JSON: 'json' }, createTextOutput: text => ({ setMimeType: () => JSON.parse(text) }) },
  });
  const rows = roundRows(); rows[4].name = '=IMPORTXML("https://example.test")';
  const payload = { postData: { contents: JSON.stringify({ events: rows }) } };
  assert.equal(api.doPost(payload).accepted, 5); assert.equal(api.doPost(payload).accepted, 0);
  assert.equal(table.length, 6);
  const nameColumn = table[0].indexOf('name'); assert.ok(table[5][nameColumn].startsWith("'="));
  const result = api.doGet({ parameter: { result: 'ABCD-1234' } });
  assert.equal(result.ok, true); assert.equal(result.result.score, 1); assert.equal(result.result.consistent, true);
  assert.equal('session_id' in result.result, false);
  assert.equal(api.doPost({ postData: { contents: 'x'.repeat(20481) } }).ok, false);
  const conflict = [{ ...rows[4], event_id: webcrypto.randomUUID() }];
  assert.equal(api.doPost({ postData: { contents: JSON.stringify({ events: conflict }) } }).ok, false);
});

test('events added during a POST are not lost when that batch is acknowledged', async () => {
  let acknowledge;
  const l = logger({ fetcher: () => new Promise(resolve => { acknowledge = resolve; }) });
  await l.tick(); l.recording.event('name_set');
  acknowledge({ ok: true, json: async () => ({ ok: true }) });
  for (let i = 0; i < 12; i++) await Promise.resolve();
  const queue = JSON.parse(l.storage.get(prefix + 'queue'));
  assert.equal(queue.length, 1); assert.equal(queue[0].event, 'name_set');
});

test('opting out during a POST cannot resurrect events when its acknowledgement arrives', async () => {
  let acknowledge;
  const l = logger({ fetcher: () => new Promise(resolve => { acknowledge = resolve; }) });
  await l.tick(); l.recording.optOut(true);
  assert.equal(l.posts[0].options.signal.aborted, true);
  acknowledge({ ok: true, json: async () => ({ ok: true }) });
  for (let i = 0; i < 12; i++) await Promise.resolve();
  assert.equal(JSON.parse(l.storage.get(prefix + 'queue')).length, 0); assert.equal(l.timers.size, 0);
});

test('Worker routes enforce origin and body limits and hide raw browser identifiers', async () => {
  const code = readFileSync(join(__dirname, '../server/cloudflare-worker/worker.js'), 'utf8');
  const worker = runInNewContext(code.replace('export default {', 'const worker = {') + '; worker', {
    Response, Request, URL, TextDecoder, Uint8Array,
  });
  const rows = roundRows(), calls = [], batches = [];
  const now = new Date().toISOString();
  const db = { prepare: sql => ({ bind: (...args) => ({
    first: async () => {
      calls.push({ sql, args });
      if (sql.includes('COUNT(')) return { n: 3 };
      return { raw_json: JSON.stringify(rows[4]), received_at: now };
    },
    all: async () => { calls.push({ sql, args }); return { results: rows.map(e => ({ raw_json: JSON.stringify(e), received_at: now })) }; },
    run: async () => { calls.push({ sql, args }); },
    sql, args,
  }) }), batch: async values => { batches.push(values); } };
  const get = new Request('https://worker.test/events?result=ABCD-1234', { headers: { Origin: 'https://jaromirsvoboda.github.io' } });
  const response = await worker.fetch(get, { DB: db });
  assert.equal(response.headers.get('Access-Control-Allow-Origin'), 'https://jaromirsvoboda.github.io');
  const body = await response.json(); assert.equal(body.ok, true); assert.equal(body.result.prior_rounds, 3);
  assert.equal('session_id' in body.result, false);
  assert.ok(calls.find(call => call.sql.includes('seq < ?')));
  const post = new Request('https://worker.test/events', { method: 'POST', body: JSON.stringify({ events: rows }), headers: { 'Content-Type': 'text/plain' } });
  assert.equal((await worker.fetch(post, { DB: db })).status, 200); assert.equal(batches[0].length, 5);
  const forbidden = new Request('https://worker.test/events', { headers: { Origin: 'https://other.test' } });
  assert.equal((await worker.fetch(forbidden, { DB: db })).status, 403);
  const large = new Request('https://worker.test/events', { method: 'POST', body: 'x'.repeat(20481) });
  assert.equal((await worker.fetch(large, { DB: db })).status, 400);
  const preflight = await worker.fetch(new Request('https://worker.test/events', { method: 'OPTIONS' }), { DB: db });
  assert.equal(preflight.headers.get('Access-Control-Allow-Methods'), 'GET, POST, OPTIONS');
  await worker.scheduled(null, { DB: db }); assert.ok(calls.some(call => call.sql.startsWith('DELETE FROM events')));
});

test('Apps Script retention removes expired blocks and preserves header and fresh rows', () => {
  const code = readFileSync(join(__dirname, '../server/apps-script/Code.gs'), 'utf8');
  const old = new Date(Date.now() - 400 * 86400000).toISOString(), fresh = new Date().toISOString();
  const table = [['received_at'], [old], [old], [fresh], [old], [fresh], [old], [old]];
  const sheet = { getLastRow: () => table.length,
    getRange: (row, _col, count) => ({ getValues: () => table.slice(row - 1, row - 1 + count) }),
    deleteRows: (row, count) => { assert.ok(row >= 2); assert.ok(count > 0); table.splice(row - 1, count); },
  };
  const prune = runInNewContext(`${code}; deleteExpiredEvents`, {
    PropertiesService: { getScriptProperties: () => ({ getProperty: () => 'sheet' }) },
    SpreadsheetApp: { openById: () => ({ getSheetByName: () => sheet }) },
    LockService: { getScriptLock: () => ({ waitLock() {}, releaseLock() {} }) },
  });
  prune(); assert.deepEqual(table, [['received_at'], [fresh], [fresh]]);
});
