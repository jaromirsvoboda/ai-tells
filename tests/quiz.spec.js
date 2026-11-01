const { test, expect, load, assertNoOverflow } = require('./helpers');

const humanName = /^(human|člověk|lidsk[ýéá])\b/i;
// JS \b is ASCII-only: it does not recognise the boundary after Czech í/ě.
const nextName = /^(next|continue|finish|další|pokračovat|dokončit)(?:\s|:|$)/i;
const startName = /^(start|play|begin|začít|spustit|hrát)(?:\s|:|$)/i;

async function quizItems(request, base = '/quiz/') {
  const response = await request.get(`${base}items.json`);
  expect(response.status()).toBe(200);
  const document = await response.json();
  const items = Array.isArray(document) ? document : document.items;
  expect(Array.isArray(items), 'Quiz contract: items.json is an array or { items: [...] }').toBe(true);
  expect(items.length, 'Quiz must contain items').toBeGreaterThan(1);
  return { document, items };
}

function label(value) {
  if (typeof value === 'boolean') return value ? 'ai' : 'human';
  if (typeof value === 'string' && /^(human|ai)$/i.test(value)) return value.toLowerCase();
  if (value && typeof value === 'object') {
    for (const key of ['answer', 'label', 'origin', 'kind', 'isAI', 'is_ai']) {
      if (key in value) { const found = label(value[key]); if (found) return found; }
    }
  }
  return null;
}

function encodedAnswer(item) {
  // Deliberately explicit adapter: if the future quiz uses another encoding,
  // fail with a contract error, rather than silently skip the leakage test.
  for (const [key, value] of Object.entries(item)) {
    if (typeof value !== 'string' || !/^[A-Za-z0-9+/_=-]+$/.test(value)) continue;
    try {
      const decoded = Buffer.from(value, 'base64').toString('utf8');
      let answer = label(decoded);
      try { answer ||= label(JSON.parse(decoded)); } catch { /* plain base64 label */ }
      if (answer) return { key, value, answer };
    } catch { /* not an encoded answer */ }
  }
  throw new Error('Quiz data adapter needs a base64/base64url answer (human/ai or JSON with answer/label/origin/kind/isAI/is_ai)');
}

function isolatedFixture(document, item) {
  const set = document.sets.find(s => s.id === item.set);
  return { ...document, items: [item], sets: [{ ...set, members: [item.id] }],
    rounds: [{ ...document.rounds.find(r => r.id === 'mixed'), cats: [set.cat], lang: null, n: 1 }] };
}

async function keyboardActivate(page, button) {
  await expect(button).toBeVisible();
  for (let i = 0; i < 100; i++) {
    if (await button.evaluate(el => el === document.activeElement)) {
      await page.keyboard.press('Enter');
      return;
    }
    await page.keyboard.press('Tab');
  }
  throw new Error('Quiz control was not reachable within 100 Tab presses');
}

async function start(page) {
  const button = page.getByRole('button', { name: startName }).first();
  await keyboardActivate(page, button);
  await expect(page.getByRole('button', { name: humanName }).first()).toBeVisible();
}

async function round(page, count, afterAnswer = async () => {}) {
  await start(page);
  let answered = 0;
  for (; answered < count; answered++) {
    const human = page.getByRole('button', { name: humanName }).first();
    await keyboardActivate(page, human);
    await afterAnswer();
    const next = page.getByRole('button', { name: nextName }).first();
    await expect(next, 'Every answer must offer a keyboard-accessible next/finish action').toBeVisible();
    await keyboardActivate(page, next);
    if (!await human.isVisible() || await human.isDisabled()) { answered++; break; }
  }
  expect(answered, 'At least one question played').toBeGreaterThan(0);
  await expect(page.getByRole('button', { name: humanName }).first(), 'Round must end, not loop forever').toBeHidden();
  await expect(page.getByRole('heading', { name: /^(your result|váš výsledek)$/i })).toBeVisible();
}

for (const base of ['/quiz/', '/quiz/cs/']) {
test.describe(base, () => {
test('quiz: loads without console errors or horizontal overflow', async ({ page }) => {
  await load(page, base);
  await assertNoOverflow(page);
  await start(page);
  await assertNoOverflow(page);
});

test('quiz: every referenced quiz/media resource returns 200', async ({ request, baseURL }) => {
  const { document } = await quizItems(request, base);
  const urls = new Set();
  function visit(value) {
    if (typeof value === 'string' && /(?:^|\/)media\//.test(value)) {
      const url = new URL(value, `${baseURL}${base}`);
      if (url.origin === new URL(baseURL).origin && url.pathname.startsWith('/quiz/media/')) urls.add(url.href);
    } else if (Array.isArray(value)) value.forEach(visit);
    else if (value && typeof value === 'object') Object.values(value).forEach(visit);
  }
  visit(document);
  for (const url of urls) expect((await request.get(url)).status(), url).toBe(200);
});

test('quiz: retained sets, credits and translated media remain complete', async ({ request }) => {
  const { document, items } = await quizItems(request, base);
  const credits = await (await request.get(`${base}CREDITS.md`)).text();
  expect(new Set(items.map(i => i.id)).size).toBe(items.length);
  const ids = new Set(items.map(i => i.id));
  const setIds = new Set(document.sets.map(s => s.id));
  expect(document.sets.flatMap(s => s.members).sort()).toEqual([...ids].sort());
  for (const set of document.sets) {
    const members = items.filter(i => i.set === set.id);
    expect(members.filter(i => encodedAnswer(i).answer === 'human')).toHaveLength(1);
    expect(members.filter(i => encodedAnswer(i).answer === 'ai').length).toBeGreaterThan(0);
    if (members[0].mod === 'image') {
      expect(new Set(members.map(i => i.alt)).size, 'Shared neutral alt text').toBe(1);
      expect(new Set(members.map(i => `${i.w}x${i.h}`)).size, 'Same declared dimensions within a set').toBe(1);
    }
  }
  for (const item of items) {
    expect(setIds.has(item.set), item.id).toBe(true);
    expect(credits, `Credit for ${item.id}`).toContain(`\`${item.id}\``);
    const reveal = JSON.parse(Buffer.from(item.x, 'base64').toString('utf8'));
    expect(credits).toContain(reveal.source);
    expect(reveal.why.length, `Reveal notes for ${item.id}`).toBeGreaterThan(0);
    for (const line of (reveal.prompt || '').split('\n').filter(Boolean)) expect(credits).toContain(line.trimEnd());
  }
  for (const r of document.rounds) {
    const eligible = document.sets.filter(s => r.cats.includes(s.cat) && (!r.lang || s.lang === r.lang));
    expect(eligible.length).toBeGreaterThanOrEqual(r.n);
  }
  if (base.includes('/cs/')) {
    const en = await quizItems(request);
    const enMedia = new Set(en.items.filter(i => i.mod === 'image').map(i => i.img));
    for (const item of items.filter(i => i.mod === 'image')) expect(enMedia.has(item.img.replace('../', ''))).toBe(true);
  }
});

test('quiz: pre-answer classes/data do not disclose origin; encoded lengths are balanced', async ({ page, request }) => {
  // Exhaustive fresh-document checks cover hundreds of items in each build.
  test.setTimeout(300_000);
  const { document, items } = await quizItems(request, base);
  const decoded = items.map(encodedAnswer);
  const groups = { human: [], ai: [] };
  decoded.forEach(e => groups[e.answer].push(e.value.length));
  expect(groups.human.length, 'Both answer classes are needed to measure leakage').toBeGreaterThan(0);
  expect(groups.ai.length, 'Both answer classes are needed to measure leakage').toBeGreaterThan(0);
  const mean = list => list.reduce((sum, n) => sum + n, 0) / list.length;
  expect(Math.abs(mean(groups.human) - mean(groups.ai)), 'Mean encoded answer lengths must differ by <1 character').toBeLessThan(1);
  expect(new Set(items.map(i => i.x.length)).size, 'Every payload must have the same padded length').toBe(1);

  const vocabularies = { human: new Set(), ai: new Set() };
  // Supply each item alone to remove shuffle/round-length assumptions. Do not
  // inspect implementation selectors: only native elements, classes and data-*.
  for (let i = 0; i < items.length; i++) {
    let intercepted = 0;
    const routePattern = `**${base}items.json`;
    // A one-item fixture must also contain one *eligible* set and round.
    // Leaving all rounds present creates an empty Mixed draw for some items.
    const fixture = isolatedFixture(document, items[i]);
    await page.route(routePattern, route => {
      intercepted++;
      return route.fulfill({ json: fixture });
    });
    // The public hash route starts this fixture directly, without repeatedly
    // tabbing through the home page (covered by the keyboard round test).
    // A distinct query forces a document load; repeating the same hash URL can
    // be a same-document navigation and would reuse the previous fixture.
    await load(page, `${base}?fixture=${i}#play-mixed`);
    // waitFor observes visibility each animation frame; expect alone polls
    // more slowly and adds that delay hundreds of times in this audit.
    await page.getByRole('button', { name: humanName }).first().waitFor({ state: 'visible' });
    await expect(page.getByRole('button', { name: humanName }).first()).toBeVisible();
    expect(intercepted, 'Quiz must consume the isolated items.json fixture').toBeGreaterThan(0);
    if (items[i].mod === 'text') {
      expect((await page.locator('article > .text').innerText()).replace(/\s+/g, ' ').trim())
        .toBe(items[i].text.replace(/\s+/g, ' ').trim());
    } else {
      await expect(page.locator('article > figure img')).toHaveAttribute('src', items[i].img);
    }
    const tokens = await page.locator('body *').evaluateAll(nodes => nodes.flatMap(el => [
      ...[...el.classList].map(c => `class:${c}`),
      ...[...el.attributes].filter(a => a.name.startsWith('data-')).map(a => `${a.name}:${a.value}`),
      ...(el.matches('[hidden], [aria-hidden=\"true\"], input[type=hidden]') ? [`hidden:${el.textContent.trim()}:${el.value || ''}`] : []),
    ]));
    tokens.forEach(token => vocabularies[decoded[i].answer].add(token));
    // Raw encoded answers in DOM attributes also reveal origin after decoding.
    expect(tokens.some(t => t.includes(decoded[i].value)), 'Encoded answer must not be embedded in DOM attributes').toBe(false);
    await page.unroute(routePattern);
  }
  expect([...vocabularies.human].sort(), 'Human and AI items must expose identical class/data vocabulary before answering')
    .toEqual([...vocabularies.ai].sort());
});

test('quiz: longest visible source URL wraps in the reveal', async ({ page, request }) => {
  const { document, items } = await quizItems(request, base);
  const candidates = items.flatMap(item => {
    const source = JSON.parse(Buffer.from(item.x, 'base64').toString('utf8')).source || '';
    return [...source.matchAll(/\[(https:[^\]]+)\]/g)].map(m => ({ item, label: m[1] }));
  }).sort((a, b) => b.label.length - a.label.length);
  expect(candidates.length).toBeGreaterThan(0);
  const { item, label: url } = candidates[0];
  await page.route(`**${base}items.json`, route => route.fulfill({ json: isolatedFixture(document, item) }));
  await load(page, `${base}#play-mixed`);
  await expect(page.getByRole('button', { name: humanName }).first()).toBeVisible();
  await page.keyboard.press('h');
  await expect(page.getByRole('link', { name: url, exact: true })).toBeVisible();
  await assertNoOverflow(page);
});

test('quiz: complete round with keyboard only', async ({ page, request }) => {
  const { items } = await quizItems(request, base);
  await load(page, base);
  await round(page, items.length);
});

test('quiz: language switch works under the GitHub Pages prefix', async ({ page }) => {
  const prefix = '/ai-tells';
  for (const [from, destination] of [[`${prefix}/quiz/`, `${prefix}/quiz/cs/`], [`${prefix}/quiz/cs/`, `${prefix}/quiz/`]]) {
    await load(page, from);
    const links = page.locator('a[href]');
    const hrefs = await links.evaluateAll(nodes => nodes.map(a => new URL(a.href).pathname.replace(/index\.html$/, '')));
    expect(hrefs, `Language switch from ${from} to ${destination}`).toContain(destination);
    const index = hrefs.indexOf(destination);
    await keyboardActivate(page, links.nth(index));
    await expect.poll(() => new URL(page.url()).pathname.replace(/index\.html$/, '')).toBe(destination);
  }
});

test('quiz: feedback links resolve to catalogue anchors', async ({ page, request, baseURL }) => {
  const { items } = await quizItems(request, base);
  const targets = new Set();
  async function collect() {
    for (const href of await page.locator('a[href]').evaluateAll(nodes => nodes.map(a => a.href))) {
      const url = new URL(href);
      if (url.origin === new URL(baseURL).origin && /\/(index\.html)?$/.test(url.pathname) && url.hash) targets.add(url.href);
    }
  }
  await load(page, base);
  await collect();
  await round(page, items.length, collect);
  await collect();
  expect(targets.size, 'Quiz feedback must link to at least one catalogue tell').toBeGreaterThan(0);
  for (const url of targets) {
    await load(page, url);
    const id = decodeURIComponent(new URL(url).hash.slice(1));
    expect(await page.evaluate(id => !!document.getElementById(id), id), url).toBe(true);
  }
});
});
}
