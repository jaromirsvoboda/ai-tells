const { test, expect, load, assertNoOverflow } = require('./helpers');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { runInNewContext } = require('node:vm');

const humanName = /^(human|člověk|lidsk[ýéá])\b/i;
// JS \b is ASCII-only: it does not recognise the boundary after Czech í/ě.
const nextName = /^(next|continue|finish|další|pokračovat|dokončit)(?:\s|:|$)/i;
const startName = /^(start|play|begin|začít|spustit|hrát)(?:\s|:|$)/i;
const endName = /^(End round and see results|Ukončit kolo a ukázat výsledky)$/;

test('quiz: exact binomial upper-tail probabilities', () => {
  // Exercise the production helper without adding a browser API just for tests.
  const source = readFileSync(join(__dirname, '../quiz/quiz.js'), 'utf8');
  const helper = source.match(/  function binomialTail\(k, n\) \{[\s\S]*?\n  \}/);
  expect(helper, 'The exact probability helper must exist').not.toBeNull();
  const binomialTail = runInNewContext(`(${helper[0]})`);
  for (const [k, n, expected] of [[5, 6, 7 / 64], [6, 6, 1 / 64], [3, 6, 42 / 64], [8, 12, 794 / 4096], [0, 6, 1], [1, 1, 0.5]]) {
    expect(binomialTail(k, n), `P(X >= ${k}) for ${n} fair coin flips`).toBeCloseTo(expected, 12);
  }
});

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

function sameOriginFixture(document, count, origin) {
  const sets = document.sets.slice(0, count).map(set => ({ ...set, members: [set.members.find(id =>
    encodedAnswer(document.items.find(item => item.id === id)).answer === origin)] }));
  return { ...document, sets, items: document.items.filter(item => sets.some(set => set.members.includes(item.id))),
    rounds: [{ ...document.rounds.find(r => r.id === 'mixed'), n: count }] };
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
      for (const member of members) expect(member.alt.trim().length, `Image description for ${member.id}`).toBeGreaterThan(0);
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
  test.setTimeout(600_000);
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

for (const [count, pending] of [[1, false], [3, true]]) {
test(`quiz: end early after ${count} answers${pending ? ' with the next item unanswered' : ' from the reveal'}`, async ({ page, request }) => {
  const { document } = await quizItems(request, base);
  await page.route(`**${base}items.json`, route => route.fulfill({ json: sameOriginFixture(document, 6, 'ai') }));
  let dialogs = 0;
  page.on('dialog', async dialog => { dialogs++; await dialog.dismiss(); });
  await load(page, base);
  await start(page);
  const end = page.getByRole('button', { name: endName });
  await expect(end).toBeVisible();
  await expect(end).toBeDisabled();
  await expect(page.getByRole('radio')).toHaveCount(0);
  await expect(page.locator('#ask')).not.toContainText(/confidence|jistot|How sure|Jak moc/i);
  for (let i = 0; i < count; i++) {
    await page.keyboard.press('h');
    await expect(page.locator('#rev section')).toBeVisible();
    await expect(end).toBeEnabled();
    if (i < count - 1 || pending) await keyboardActivate(page, page.getByRole('button', { name: nextName }));
  }
  await expect(end).toBeVisible();
  await expect(end).toBeEnabled();
  await keyboardActivate(page, end);
  await expect(page.getByRole('heading', { name: /^(Your result|Váš výsledek)$/ })).toBeVisible();
  await expect(page.locator('.score')).toHaveText(`0 / ${count}`);
  for (const name of (base.includes('/cs/') ? ['Podle původu', 'Podle kategorie', 'Napodobeniny podle modelu', 'Podle doby vzniku']
    : ['By what it was', 'By category', 'AI imitations by model', 'By era of the item'])) {
    await expect(page.getByRole('heading', { name, exact: true })).toBeVisible();
  }
  const review = page.locator('table').last();
  await expect(review.locator('tbody tr')).toHaveCount(count);
  await expect(review).not.toContainText(/Fairly sure|Certain|Guessing|Docela jistě|Určitě|Hádám/);
  await expect(page.getByRole('heading', { name: /^(By your confidence|Podle vaší jistoty)$/ })).toHaveCount(0);
  await expect(page.getByRole('radio')).toHaveCount(0);
  await assertNoOverflow(page);
  await page.keyboard.press('h');
  await page.keyboard.press('a');
  const history = await page.evaluate(lang => JSON.parse(localStorage.getItem(`human-or-ai/v2/${lang}`)).history, base.includes('/cs/') ? 'cs' : 'en');
  expect(history).toHaveLength(1);
  expect(history[0]).toMatchObject({ ok: 0, n: count });
  expect(history[0].answers).toHaveLength(count);
  for (const answer of history[0].answers) expect(answer).not.toHaveProperty('conf');
  expect(dialogs).toBe(0);
  await keyboardActivate(page, page.getByRole('button', { name: /^(Choose another round|Vybrat jiné kolo)$/ }));
  await expect(page.locator('table tbody tr').last()).toContainText(`0 / ${count}`);
});
}

test('quiz: early finish with only known items keeps the review and an unscored history', async ({ page, request }) => {
  const { document } = await quizItems(request, base);
  await page.route(`**${base}items.json`, route => route.fulfill({ json: sameOriginFixture(document, 6, 'human') }));
  await load(page, `${base}#play-mixed`);
  await expect(page.locator('#ask')).toBeVisible();
  await page.keyboard.press('k');
  await expect(page.getByRole('checkbox')).toBeChecked();
  await page.keyboard.press('h');
  await keyboardActivate(page, page.getByRole('button', { name: endName }));
  await expect(page.locator('.score')).toHaveText('0 / 0');
  await expect(page.locator('main')).toContainText(base.includes('/cs/') ? 'Všechny položky jste znali, takže se nic nepočítalo.' : 'You knew every item, so nothing was scored.');
  await expect(page.locator('table tbody tr')).toHaveCount(1);
  const history = await page.evaluate(lang => JSON.parse(localStorage.getItem(`human-or-ai/v2/${lang}`)).history, base.includes('/cs/') ? 'cs' : 'en');
  expect(history[0]).toMatchObject({ ok: 0, n: 0, answers: [{ known: true }] });
});

test('quiz: older history remains readable and its confidence field is ignored', async ({ page, request }) => {
  const { document } = await quizItems(request, base);
  const fixture = sameOriginFixture(document, 6, 'ai');
  const lang = base.includes('/cs/') ? 'cs' : 'en';
  await page.addInitScript(({ lang, id }) => {
    localStorage.setItem(`human-or-ai/v2/${lang}`, JSON.stringify({ history: [{ title: 'Earlier round', date: '2026-10-31',
      ok: 1, n: 1, answers: [{ id, ok: true, conf: 'sure', known: false }] }] }));
  }, { lang, id: fixture.items[0].id });
  await page.route(`**${base}items.json`, route => route.fulfill({ json: fixture }));
  await load(page, base);
  await expect(page.locator('table tbody tr')).toContainText('Earlier round');
  await start(page);
  await page.keyboard.press('h');
  await keyboardActivate(page, page.getByRole('button', { name: endName }));
  await expect(page.locator('main')).toContainText(lang === 'cs' ? '1 správně z 2 (50 %)' : '1 right out of 2 (50 %)');
});

test('quiz: exact guessing message for each score, including a perfect small round', async ({ page, request }) => {
  const { document } = await quizItems(request, base);
  const cs = base.includes('/cs/');
  for (const [k, n, oddsEN, oddsCS] of [[5, 6, 'about 1 in 9 (11 %)', 'zhruba 1 z 9 (11 %)'],
    [6, 6, 'about 1 in 64 (1.6 %)', 'zhruba 1 z 64 (1,6 %)'], [3, 6, '66 %', '66 %'],
    [8, 12, 'about 1 in 5 (19 %)', 'zhruba 1 z 5 (19 %)']]) {
    const pattern = `**${base}items.json`;
    await page.route(pattern, route => route.fulfill({ json: sameOriginFixture(document, n, 'human') }));
    await load(page, `${base}?score=${k}-${n}#play-mixed`);
    for (let i = 0; i < n; i++) {
      await expect(page.getByRole('button', { name: humanName })).toBeEnabled();
      await page.keyboard.press(i < k ? 'h' : 'a');
      await page.getByRole('button', { name: nextName }).click();
    }
    await expect(page.locator('.score')).toHaveText(`${k} / ${n}`);
    const message = cs ? `${k} a víc ${[2, 3, 4, 6, 7, 12, 13, 14, 17].includes(n) ? 'ze' : 'z'} ${n} čistým hádáním: ${oddsCS}. Více položek dá přesnější představu.`
      : `${k} or more of ${n} by pure guessing: ${oddsEN}. More items give a clearer picture.`;
    await expect(page.locator('.score + p')).toHaveText(message);
    await page.unroute(pattern);
    // Each score is an independent round; seen originals must not affect it.
    await page.evaluate(() => localStorage.clear());
  }
});

test('quiz: image menu and draw follow available sets up to 12', async ({ page, request }) => {
  const { document } = await quizItems(request, base);
  const imageRound = document.rounds.find(r => r.cats.length === 1 && r.cats[0] === 'images');
  const sourceSet = document.sets.find(s => s.cat === 'images');
  const sourceItems = document.items.filter(item => item.set === sourceSet.id);
  for (const available of [2, 8, 14]) {
    const sets = [], items = [], n = Math.min(available, 12);
    for (let i = 0; i < available; i++) {
      const id = `fixture-set-${i}`;
      const members = sourceItems.map(item => ({ ...item, id: `${item.id}-${i}`, set: id }));
      items.push(...members);
      sets.push({ ...sourceSet, id, members: members.map(item => item.id) });
    }
    const pattern = `**${base}items.json`;
    await page.route(pattern, route => route.fulfill({ json: { ...document, sets, items, rounds: [imageRound] } }));
    await load(page, `${base}?available=${available}`);
    const card = page.getByRole('button').filter({ has: page.locator('b', { hasText: imageRound.title }) });
    await expect(card.locator('.tag')).toContainText(`${n} ${base.includes('/cs/') ? 'položek' : 'items'}`);
    await keyboardActivate(page, card);
    for (let i = 0; i < n; i++) {
      await expect(page.locator('.progress')).toContainText(base.includes('/cs/') ? `Položka ${i + 1} z ${n}` : `Item ${i + 1} of ${n}`);
      await expect(page.getByRole('button', { name: humanName })).toBeEnabled();
      await page.keyboard.press('h');
      await page.getByRole('button', { name: nextName }).click();
    }
    await expect(page.locator('table').last().locator('tbody tr')).toHaveCount(n);
    await page.unroute(pattern);
  }
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
