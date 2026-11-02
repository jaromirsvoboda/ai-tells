const { test, expect } = require('@playwright/test');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { runInNewContext } = require('node:vm');
const { webcrypto } = require('node:crypto');

const endpoint = 'https://quiz-events.test/events';
const corsHeaders = { 'access-control-allow-origin': '*' };
const trackingKey = 'human-or-ai/tracking/';
const idPattern = /^[0-9A-HJKMNP-TV-Z]{4}-[0-9A-HJKMNP-TV-Z]{4}$/;
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function fixture(cs) {
  const source = JSON.parse(readFileSync(join(__dirname, cs ? '../quiz/cs/items.json' : '../quiz/items.json'), 'utf8'));
  const sets = source.sets.slice(0, 2);
  return { ...source, sets, items: source.items.filter(item => sets.some(set => set.members.includes(item.id))),
    rounds: [{ ...source.rounds.find(r => r.id === 'mixed'), n: 2 }] };
}
async function setup(page, cs = false, enabled = true, acknowledge = true) {
  const data = fixture(cs), events = [], batches = [], errors = [], received = new Set();
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', error => errors.push(error.message));
  if (enabled) await page.addInitScript(url => { window.QUIZ_LOG_URL = url; }, endpoint);
  await page.route(endpoint, async route => {
    expect(route.request().method()).toBe('POST');
    expect(route.request().headers()['content-type']).toContain('text/plain');
    const batch = route.request().postDataJSON(); batches.push(batch);
    for (const event of batch.events) { if (!received.has(event.event_id)) { received.add(event.event_id); events.push(event); } }
    await route.fulfill({ headers: corsHeaders, json: { ok: acknowledge } });
  });
  await page.route(`**/quiz/${cs ? 'cs/' : ''}items.json`, route => route.fulfill({ headers: corsHeaders, json: data }));
  await page.goto(`/quiz/${cs ? 'cs/' : ''}`);
  await expect(page.locator('#startMixed')).toBeVisible();
  return { data, events, batches, errors };
}
async function answer(page, choice = 'human') {
  await page.locator(`[data-ans="${choice}"]`).click();
  await expect(page.locator('#verdict')).toBeVisible();
}
async function finish(page) {
  await page.locator('#endRound').click();
  await expect(page.locator('#result-id')).toHaveText(idPattern);
}

// Pure checks do not require Chromium. They use the production helpers.
test('tracking: result IDs use eight Crockford base32 characters', () => {
  const source = readFileSync(join(__dirname, '../quiz/quiz.js'), 'utf8');
  const helper = source.match(/  function resultId\(\) \{[\s\S]*?\n  \}/);
  expect(helper).not.toBeNull();
  const generate = runInNewContext(`(${helper[0]})`, { crypto: webcrypto });
  const ids = Array.from({ length: 1000 }, generate);
  for (const id of ids) expect(id).toMatch(idPattern);
  expect(new Set(ids).size).toBe(ids.length);
});

test('tracking: backend contracts agree, validate batches and detect incomplete scores', () => {
  const script = readFileSync(join(__dirname, '../server/apps-script/Code.gs'), 'utf8');
  const worker = readFileSync(join(__dirname, '../server/cloudflare-worker/worker.js'), 'utf8');
  const block = source => source.slice(0, source.indexOf('/* End shared contract. */'));
  expect(block(script)).toBe(block(worker));
  const contract = runInNewContext(`${block(script)}; QuizEvents;`);
  const uuid = () => webcrypto.randomUUID();
  const base = { session_id: uuid(), round_run_id: uuid(), lang: 'en', page_version: 'test', name: '', ts: new Date().toISOString() };
  const event = (type, seq, fields) => ({ ...base, event: type, event_id: uuid(), seq, ...fields });
  const rows = [event('round_start', 1, { round_id: 'mixed', round_title: 'Mixed', item_ids: ['one', 'two'], size: 2 }),
    event('item_shown', 2, { item_id: 'one', position: 1 }),
    event('answer', 3, { item_id: 'one', position: 1, answer: 'human', correct: true, ms: 1200, known: false }),
    event('round_end', 4, { early: true, answered: 1, scored: 1, right: 1 }),
    event('result_shown', 5, { result_id: 'ABCD-1234', score: 1, n: 1 })];
  expect(contract.validate({ events: rows })).toHaveLength(5);
  expect(contract.summary(rows, rows[4], 3)).toMatchObject({ complete: true, consistent: true, prior_rounds: 3, early: true });
  expect(contract.summary(rows.filter(row => row.event !== 'answer'), rows[4], 0)).toMatchObject({ complete: false, consistent: false });
  expect(() => contract.validate({ events: Array(101).fill(rows[0]) })).toThrow();
  expect(() => contract.validate({ events: [{ ...rows[2], answer: 'unknown' }] })).toThrow();
  expect(() => contract.validate({ events: [{ ...rows[2], name: '<b>x</b>' }] })).toThrow();
  expect(() => contract.validate({ events: [{ ...rows[2], session_id: 'invalid' }] })).toThrow();
});

for (const cs of [false, true]) {
  const lang = cs ? 'cs' : 'en';
  test(`tracking ${lang}: round events, names, known flags, spoilers and copy ID`, async ({ page }) => {
    const { data, events, batches, errors } = await setup(page, cs);
    await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { configurable: true,
      value: { writeText: async text => { window.copiedResult = text; } } }));
    await page.locator('#startMixed').click();
    await page.locator('#known').check();
    await page.locator('#known').uncheck();
    await answer(page);
    await page.locator('details.spoil summary').first().click();
    await page.locator('.name-control summary').click();
    await page.locator('#playerName').fill('  Ada <b>Lovelace</b>  ');
    await page.locator('.name-control button[type="submit"]').click();
    await expect(page.locator('#playerName')).toHaveValue('Ada Lovelace');
    await page.locator('#next').click();
    await answer(page, 'ai');
    await page.locator('#next').click();
    const id = await page.locator('#result-id').textContent();
    expect(id).toMatch(idPattern);
    await page.locator('#resultName').fill('Ada, final');
    await page.locator('main [data-name-form] button').click();
    await page.locator('#copy').click();
    await expect.poll(() => page.evaluate(() => window.copiedResult)).toContain(id);
    expect(await page.evaluate(() => window.copiedResult)).toContain('Ada, final');
    await expect(page.locator('#verify-result')).toHaveAttribute('href', new RegExp(`verify[.]html#${id}$`));
    await expect.poll(() => events.filter(e => e.event === 'name_set').length).toBe(2);
    expect(events.map(e => e.event)).toEqual(expect.arrayContaining(['page_open', 'round_start', 'item_shown', 'answer',
      'known_toggled', 'compare_opened', 'round_end', 'result_shown', 'name_set']));
    const start = events.find(e => e.event === 'round_start');
    expect(start).toMatchObject({ round_id: 'mixed', size: 2 });
    expect(start.item_ids).toHaveLength(2);
    const answers = events.filter(e => e.event === 'answer');
    expect(answers).toHaveLength(2);
    expect(answers.map(e => e.item_id)).toEqual(start.item_ids);
    expect(answers[0].name).toBe(''); expect(answers[1].name).toBe('Ada Lovelace');
    for (const a of answers) {
      const kind = JSON.parse(Buffer.from(data.items.find(item => item.id === a.item_id).x, 'base64').toString('utf8')).kind;
      expect(a.correct).toBe(a.answer === kind); expect(a.known).toBe(false); expect(a.ms).toBeGreaterThanOrEqual(0);
    }
    const right = answers.filter(a => a.correct).length;
    expect(events.find(e => e.event === 'round_end')).toMatchObject({ early: false, answered: 2, scored: 2, right });
    expect(events.find(e => e.event === 'result_shown')).toMatchObject({ result_id: id, score: right, n: 2 });
    const scoped = events.filter(e => e.event !== 'page_open');
    expect(new Set(scoped.map(e => e.round_run_id))).toEqual(new Set([start.round_run_id]));
    expect(start.round_run_id).toMatch(uuidPattern);
    events.forEach((e, i) => {
      expect(e).toMatchObject({ lang, page_version: 'quiz-tracking-1' });
      expect(e.event_id).toMatch(uuidPattern); expect(e.session_id).toMatch(uuidPattern);
      expect(Number.isFinite(Date.parse(e.ts))).toBe(true);
      if (i) expect(e.seq).toBeGreaterThan(events[i - 1].seq);
    });
    expect(batches.every(b => b.events.length <= 100 && Buffer.byteLength(JSON.stringify(b)) <= 20480)).toBe(true);
    expect(errors).toEqual([]);
  });

  test(`tracking ${lang}: opt-out stops sending and About can re-enable it`, async ({ page }) => {
    const { events, batches, errors } = await setup(page, cs);
    await expect.poll(() => events.some(e => e.event === 'page_open')).toBe(true);
    await page.locator('[data-opt-out]').check();
    await expect(page.locator('[data-recording-note]')).toContainText(cs ? 'Zaznamenávání je vypnuté.' : 'Recording is off.');
    await expect.poll(() => page.evaluate(key => JSON.parse(localStorage.getItem(key + 'queue')).length, trackingKey)).toBe(0);
    const sent = batches.length;
    await page.locator('#startMixed').click(); await answer(page); await finish(page);
    await page.waitForTimeout(600);
    expect(batches).toHaveLength(sent);
    expect(await page.evaluate(key => JSON.parse(localStorage.getItem(key + 'queue')), trackingKey)).toEqual([]);
    expect(await page.evaluate(key => JSON.parse(localStorage.getItem(`human-or-ai/v2/${key}`)).history.length, lang)).toBe(1);
    await page.locator('header a[href="#about"]').click();
    await expect(page.locator('[data-opt-out]')).toBeChecked();
    await page.locator('[data-opt-out]').uncheck();
    await expect.poll(() => events.some(e => e.event === 'opt_out_changed' && e.opted_out === false)).toBe(true);
    expect(events.some(e => e.opted_out === true)).toBe(false);
    expect(errors).toEqual([]);
  });

  test(`tracking ${lang}: early finish, history clearing and browser identity persist`, async ({ page }) => {
    const { events } = await setup(page, cs);
    await page.locator('#startMixed').click(); await answer(page); await finish(page);
    await expect.poll(() => events.some(e => e.event === 'result_shown')).toBe(true);
    expect(events.find(e => e.event === 'round_end')).toMatchObject({ early: true, answered: 1, scored: 1 });
    const browser = events[0].session_id;
    await page.locator('[data-go="home"]').click(); await page.locator('#forget').click();
    await expect.poll(() => events.some(e => e.event === 'history_cleared')).toBe(true);
    await page.reload();
    await expect.poll(() => events.filter(e => e.event === 'page_open').length).toBe(2);
    expect(events.filter(e => e.event === 'page_open')[1].session_id).toBe(browser);
  });

  test(`tracking ${lang}: empty endpoint keeps quiz local and privacy honest`, async ({ page }) => {
    const requests = [];
    page.on('request', request => { if (new URL(request.url()).hostname === 'quiz-events.test') requests.push(request.url()); });
    const { errors } = await setup(page, cs, false);
    const inactive = cs ? 'Zaznamenávání zatím není aktivní.' : 'Recording is not active yet.';
    await expect(page.locator('[data-recording-note]')).toContainText(inactive);
    await page.locator('#startMixed').click(); await answer(page); await finish(page);
    await expect(page.locator('#verification-status')).toContainText(cs ? 'jen u vás' : 'local only');
    await page.locator('header a[href="#about"]').click();
    await expect(page.locator('#privacy-controls')).toContainText(inactive);
    expect(requests).toEqual([]); expect(errors).toEqual([]);
    const state = await page.evaluate(key => ({ queue: JSON.parse(localStorage.getItem(key + 'queue') || '[]'),
      log: JSON.parse(localStorage.getItem(key + 'log')) }), trackingKey);
    expect(state.queue).toEqual([]); expect(state.log.some(e => e.event === 'answer')).toBe(true);
    await page.goto(`/quiz/${cs ? 'cs/' : ''}verify.html#ABCD-1234`);
    await expect(page.locator('#verify-status')).toContainText(inactive);
  });

  test(`tracking ${lang}: verification renders a mocked public result safely`, async ({ page }) => {
    await page.addInitScript(url => { window.QUIZ_LOG_URL = url; }, endpoint);
    const requests = [];
    await page.route(`${endpoint}?result=*`, route => {
      requests.push(route.request().url());
      return route.fulfill({ headers: corsHeaders, json: { ok: true, result: {
        name: '<img src=x onerror=alert(1)>', ts: '2026-11-02T10:00:00.000Z', received_at: '2026-11-02T10:00:05.000Z',
        round_title: cs ? 'Smíšené kolo' : 'Mixed round', score: 1, n: 1, early: true, prior_rounds: 3,
        comparisons: 1, complete: true, consistent: true,
        items: [{ item_id: 'a', context: 'A short poem', answer: 'human', correct: true, known: false, ms: 2400 }],
      } } });
    });
    await page.goto(`/quiz/${cs ? 'cs/' : ''}verify.html#ABCD-1234`);
    await expect(page.locator('#verified-result h2')).toHaveText('<img src=x onerror=alert(1)>');
    await expect(page.locator('#verified-result img')).toHaveCount(0);
    await expect(page.locator('.score')).toHaveText('1 / 1');
    await expect(page.locator('.verification-items')).toContainText('A short poem');
    await expect(page.locator('.verification-items')).toContainText(cs ? 'správně' : 'right');
    await expect(page.locator('#verified-result')).toContainText(cs ? 'Kolo skončilo předčasně: ano' : 'Round ended early: yes');
    expect(requests).toHaveLength(1); expect(new URL(requests[0]).searchParams.get('result')).toBe('ABCD-1234');
    await expect(page.locator('[data-language]')).toHaveAttribute('href', /#ABCD-1234$/);
  });
}

test('tracking: endpoint rejection retains a bounded queue through reload, then retries', async ({ page }) => {
  const { events, errors } = await setup(page, false, true, false);
  await page.locator('#startMixed').click(); await answer(page); await finish(page);
  await expect.poll(() => events.some(e => e.event === 'result_shown')).toBe(true);
  const queued = await page.evaluate(key => JSON.parse(localStorage.getItem(key + 'queue')), trackingKey);
  expect(queued.some(e => e.event === 'answer')).toBe(true);
  await page.reload();
  expect(await page.evaluate(key => JSON.parse(localStorage.getItem(key + 'queue')).length, trackingKey)).toBeGreaterThan(0);
  await page.unroute(endpoint);
  await page.route(endpoint, route => route.fulfill({ headers: corsHeaders, json: { ok: true } }));
  await page.evaluate(() => window.dispatchEvent(new Event('online')));
  await expect.poll(() => page.evaluate(key => JSON.parse(localStorage.getItem(key + 'queue')).length, trackingKey), { timeout: 10000 }).toBe(0);
  expect(errors).toEqual([]);
});

test('tracking: rejected fetch is silent and offline events survive until online', async ({ page }) => {
  const { errors } = await setup(page);
  await page.evaluate(url => {
    const original = window.fetch;
    window.fetch = (input, options) => String(input) === url ? Promise.reject(new TypeError('Network unavailable')) : original(input, options);
  }, endpoint);
  await page.locator('#startMixed').click(); await answer(page);
  await expect.poll(() => page.evaluate(key => JSON.parse(localStorage.getItem(key + 'queue')).some(e => e.event === 'answer'), trackingKey)).toBe(true);
  await page.waitForTimeout(500);
  expect(errors).toEqual([]);
  await page.context().setOffline(true);
  await finish(page);
  expect(await page.evaluate(key => JSON.parse(localStorage.getItem(key + 'queue')).some(e => e.event === 'result_shown'), trackingKey)).toBe(true);
  await page.context().setOffline(false);
});

test('tracking: storage denial never breaks play or optional names', async ({ page }) => {
  await page.addInitScript(() => {
    for (const method of ['getItem', 'setItem']) Storage.prototype[method] = () => { throw new Error('Storage denied'); };
  });
  const { errors } = await setup(page);
  await page.locator('#startMixed').click();
  await page.locator('.name-control summary').click(); await page.locator('#playerName').fill('Grace');
  await page.locator('.name-control button').click();
  await answer(page); await finish(page);
  await expect(page.locator('#resultName')).toHaveValue('Grace'); expect(errors).toEqual([]);
});
