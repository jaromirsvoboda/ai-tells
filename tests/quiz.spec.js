const fs = require('node:fs');
const path = require('node:path');
const { test, expect, load, assertNoOverflow } = require('./helpers');
const root = path.resolve(__dirname, '..');

// NOT RUN on the catalogue-only base. Do not import or inspect quiz source files.
test.skip(!fs.existsSync(path.join(root, 'quiz', 'index.html')), 'quiz not added yet');

const humanName = /^(human|člověk|lidsk[ýéá])\b/i;
const nextName = /^(next|continue|finish|další|pokračovat|dokončit)\b/i;
const startName = /^(start|play|begin|začít|spustit|hrát)\b/i;

async function quizItems(request) {
  const response = await request.get('/quiz/items.json');
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
  if (await button.isVisible()) await keyboardActivate(page, button);
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
    if (!await human.isVisible()) { answered++; break; }
  }
  expect(answered, 'At least one question played').toBeGreaterThan(0);
  await expect(page.getByRole('button', { name: humanName }).first(), 'Round must end, not loop forever').toBeHidden();
  await expect(page.getByText(/score|results|výsled|skóre/i).first()).toBeVisible();
}

test('quiz: loads without console errors or horizontal overflow', async ({ page }) => {
  await load(page, '/quiz/');
  await assertNoOverflow(page);
  await start(page);
  await assertNoOverflow(page);
});

test('quiz: every referenced quiz/media resource returns 200', async ({ request, baseURL }) => {
  const { document } = await quizItems(request);
  const urls = new Set();
  function visit(value) {
    if (typeof value === 'string' && /(?:^|\/)media\//.test(value)) {
      const url = new URL(value, `${baseURL}/quiz/`);
      if (url.origin === new URL(baseURL).origin && url.pathname.startsWith('/quiz/media/')) urls.add(url.href);
    } else if (Array.isArray(value)) value.forEach(visit);
    else if (value && typeof value === 'object') Object.values(value).forEach(visit);
  }
  visit(document);
  for (const url of urls) expect((await request.get(url)).status(), url).toBe(200);
});

test('quiz: pre-answer classes/data do not disclose origin; encoded lengths are balanced', async ({ page, request }) => {
  const { document, items } = await quizItems(request);
  const decoded = items.map(encodedAnswer);
  const groups = { human: [], ai: [] };
  decoded.forEach(e => groups[e.answer].push(e.value.length));
  expect(groups.human.length, 'Both answer classes are needed to measure leakage').toBeGreaterThan(0);
  expect(groups.ai.length, 'Both answer classes are needed to measure leakage').toBeGreaterThan(0);
  const mean = list => list.reduce((sum, n) => sum + n, 0) / list.length;
  expect(Math.abs(mean(groups.human) - mean(groups.ai)), 'Mean encoded answer lengths must differ by <1 character').toBeLessThan(1);

  const vocabularies = { human: new Set(), ai: new Set() };
  // Supply each item alone to remove shuffle/round-length assumptions. Do not
  // inspect implementation selectors: only native elements, classes and data-*.
  for (let i = 0; i < items.length; i++) {
    let intercepted = 0;
    await page.route('**/quiz/items.json', route => {
      intercepted++;
      return route.fulfill({ json: Array.isArray(document) ? [items[i]] : { ...document, items: [items[i]] } });
    });
    await load(page, '/quiz/');
    await start(page);
    expect(intercepted, 'Quiz must consume the isolated items.json fixture').toBeGreaterThan(0);
    const tokens = await page.locator('body *').evaluateAll(nodes => nodes.flatMap(el => [
      ...[...el.classList].map(c => `class:${c}`),
      ...[...el.attributes].filter(a => a.name.startsWith('data-')).map(a => `${a.name}:${a.value}`),
      ...(el.matches('[hidden], [aria-hidden=\"true\"], input[type=hidden]') ? [`hidden:${el.textContent.trim()}:${el.value || ''}`] : []),
    ]));
    tokens.forEach(token => vocabularies[decoded[i].answer].add(token));
    // Raw encoded answers in DOM attributes also reveal origin after decoding.
    expect(tokens.some(t => t.includes(decoded[i].value)), 'Encoded answer must not be embedded in DOM attributes').toBe(false);
    await page.unroute('**/quiz/items.json');
  }
  expect([...vocabularies.human].sort(), 'Human and AI items must expose identical class/data vocabulary before answering')
    .toEqual([...vocabularies.ai].sort());
});

test('quiz: complete round with keyboard only', async ({ page, request }) => {
  const { items } = await quizItems(request);
  await load(page, '/quiz/');
  await round(page, items.length);
});

test('quiz: language switch exists in both directions when Czech page exists', async ({ page }) => {
  test.skip(!fs.existsSync(path.join(root, 'quiz', 'cs', 'index.html')), 'Czech quiz not added yet');
  for (const [from, destination] of [['/quiz/', '/quiz/cs/'], ['/quiz/cs/', '/quiz/']]) {
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
  const { items } = await quizItems(request);
  const targets = new Set();
  async function collect() {
    for (const href of await page.locator('a[href]').evaluateAll(nodes => nodes.map(a => a.href))) {
      const url = new URL(href);
      if (url.origin === new URL(baseURL).origin && /\/(index\.html)?$/.test(url.pathname) && url.hash) targets.add(url.href);
    }
  }
  await load(page, '/quiz/');
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
