const { test, expect, load, assertNoOverflow } = require('./helpers');
const { test: failureTest } = require('@playwright/test');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { check } = require('./fixes-unit.cjs');
const read = file => readFileSync(join(__dirname, '..', file), 'utf8');
const human = '[data-ans="human"]';

function fixture(base, mod = 'text', siblings = false) {
  const data = JSON.parse(read(`${base.slice(1)}items.json`));
  const item = data.items.find(i => i.mod === mod);
  const set = data.sets.find(s => s.id === item.set);
  const ids = siblings ? set.members : [item.id];
  return { ...data, items: data.items.filter(i => ids.includes(i.id)), sets: [{ ...set, members: ids }],
    rounds: [{ ...data.rounds.find(r => r.id === 'mixed'), cats: [set.cat], lang: null, n: 1 }] };
}
async function serveFixture(page, base, data) {
  await page.route(`**${base}items.json`, route => route.fulfill({ json: data }));
}
async function stored(page, base) {
  return page.evaluate(lang => JSON.parse(localStorage.getItem(`human-or-ai/v2/${lang}`)), base.includes('/cs/') ? 'cs' : 'en');
}
function expectedNetworkErrors(page) {
  // These cases deliberately fail resources; permit only Chromium's resource
  // diagnostics and still fail on every script exception or other console error.
  const problems = [];
  page.on('pageerror', e => problems.push(e.message));
  page.on('console', msg => {
    if (msg.type() === 'error' && !/^Failed to load resource:/.test(msg.text())) problems.push(msg.text());
  });
  return problems;
}

test('fixes: production storage, Markdown, resume, text-round and probability helpers', () => {
  expect(check()).toHaveLength(9);
});

for (const base of ['/quiz/', '/quiz/cs/']) {
  const cs = base.includes('/cs/');
  test(`${base} hostile storage renders home without executable history`, async ({ page }) => {
    const valid = { title: '<img src=x onerror="window.storageExecuted=true">', date: '2024-02-29', ok: 1, n: 2 };
    const samples = ['"string store"', '42', '{"history":5}', JSON.stringify({ seen: 4, setsShown: [], origSeen: 'bad', history: [valid,
      { ...valid, ok: '<img src=x onerror="window.storageExecuted=true">' }, { ...valid, date: '2026-99-99' },
      { ...valid, date: '2026-02-29' }, { ...valid, n: 1e100 }, { ...valid, ok: 4 }, { ...valid, n: 1.5 }] })];
    // Read a query-selected seed once per document, including future navigations.
    await page.addInitScript(({ samples, lang }) => {
      const index = Number(new URL(location.href).searchParams.get('seed'));
      localStorage.setItem(`human-or-ai/v2/${lang}`, samples[index]);
    }, { samples, lang: cs ? 'cs' : 'en' });
    for (let i = 0; i < samples.length; i++) {
      await load(page, `${base}?seed=${i}`);
      await expect(page.locator('#startMixed')).toBeVisible();
      await expect(page.locator('table img, table script')).toHaveCount(0);
      expect(await page.evaluate(() => window.storageExecuted)).toBeUndefined();
    }
    await expect(page.locator('table tbody tr')).toHaveCount(1);
    await expect(page.locator('table')).toContainText('1 / 2');
  });

  test(`${base} quiz links allow safe schemes and keep unsafe labels as text`, async ({ page }) => {
    const data = fixture(base);
    data.sets[0].context = '[blocked](JaVaScRiPt:alert) [data blocked](data:text/html,bad) [external](//example.com) [mail](mailto:a@example.com) [phone](tel:+123) [local](../) [fragment](#ctx)';
    await serveFixture(page, base, data);
    await load(page, `${base}#play-mixed`);
    const context = page.locator('#ctx');
    await expect(context).toContainText('blocked data blocked');
    await expect(context.locator('a')).toHaveCount(5);
    await expect(context.getByRole('link', { name: 'external', exact: true })).toHaveAttribute('rel', 'noopener');
    await expect(context.locator('a[href^="javascript:"], a[href^="data:"]')).toHaveCount(0);
  });

  test(`${base} injected round and language attributes remain text`, async ({ page }) => {
    const data = fixture(base);
    const injected = 'en" onmouseover="window.attributeExecuted=true';
    data.items[0].lang = injected;
    data.sets[0].lang = injected; data.sets[0].question = 'Question';
    data.rounds[0].id = 'mixed" onclick="window.attributeExecuted=true';
    await serveFixture(page, base, data);
    await load(page, base);
    await expect(page.locator('.round')).toHaveAttribute('data-round', data.rounds[0].id);
    await expect(page.locator('.round')).not.toHaveAttribute('onclick');
    data.rounds[0].id = 'mixed';
    await page.goto(`${base}?question#play-mixed`);
    await expect(page.locator('article > .text')).toHaveAttribute('lang', injected);
    await expect(page.locator('.question .text')).toHaveAttribute('lang', injected);
    await expect(page.locator('main [onmouseover], main [onclick]')).toHaveCount(0);
    expect(await page.evaluate(() => window.attributeExecuted)).toBeUndefined();
  });

  test(`${base} rendered primary and sibling images preserve numeric dimensions`, async ({ page }) => {
    const data = fixture(base, 'image', true);
    await serveFixture(page, base, data);
    await load(page, `${base}#play-mixed`);
    const primary = page.locator('article > figure img');
    await expect(primary).toHaveAttribute('width', /^\d+$/);
    await expect(primary).toHaveAttribute('height', /^\d+$/);
    await page.locator(human).click();
    await expect(page.locator('#rev section')).toBeVisible();
    const sizes = await page.locator('article img').evaluateAll(imgs => imgs.map(img => ({ src: img.getAttribute('src'), w: img.getAttribute('width'), h: img.getAttribute('height') })));
    expect(sizes).toHaveLength(data.items.length);
    for (const size of sizes) {
      const item = data.items.find(i => i.img === size.src);
      expect(size.w).toBe(String(item.w)); expect(size.h).toBe(String(item.h));
    }
  });

  test(`${base} partial round reload resumes reveal and pending item without recounting exposure`, async ({ page }) => {
    await load(page, `${base}#play-text`);
    await expect(page.locator(human)).toBeEnabled();
    const original = (await stored(page, base)).active;
    await page.locator(human).click();
    const answered = await stored(page, base);
    await page.reload();
    await expect(page.locator('#rev section')).toBeVisible();
    expect((await stored(page, base)).seen).toEqual(answered.seen);
    expect((await stored(page, base)).setsShown).toEqual(answered.setsShown);
    expect((await stored(page, base)).active.ids).toEqual(original.ids);
    await page.locator('#next').click();
    await expect(page.locator(human)).toBeEnabled();
    const text = await page.locator('article > .text').textContent();
    await page.reload();
    await expect(page.locator('article > .text')).toHaveText(text);
    expect((await stored(page, base)).active).toMatchObject({ i: 1, ids: original.ids });
    await page.locator('#endRound').click();
    expect((await stored(page, base)).active).toBeUndefined();
    await expect(page).toHaveTitle(new RegExp(cs ? 'Váš výsledek' : 'Your result'));
    expect(new URL(page.url()).hash).toBe('');
    await page.reload();
    await expect(page.locator('#startMixed')).toBeVisible();
  });

  test(`${base} corrupted or stale active rounds fall back to home`, async ({ page }) => {
    const data = JSON.parse(read(`${base.slice(1)}items.json`));
    const item = data.items[0];
    const active = { version: data.version, round: 'mixed', ids: [item.id], i: 0, answers: [], exhausted: false };
    const bad = [5, { ...active, version: 'stale' }, { ...active, ids: ['missing'] }, { ...active, ids: ['__proto__'] },
      { ...active, i: 999999 }, { ...active, answers: 5 }, { ...active, ids: Array(10000).fill(item.id) },
      { ...active, answers: [{ id: item.id, known: '<img>', choice: 'human', reason: '' }] }];
    await page.addInitScript(({ bad, lang }) => {
      localStorage.setItem(`human-or-ai/v2/${lang}`, JSON.stringify({ active: bad[Number(new URL(location.href).searchParams.get('bad'))] }));
    }, { bad, lang: cs ? 'cs' : 'en' });
    for (let i = 0; i < bad.length; i++) {
      await load(page, `${base}?bad=${i}#play-mixed`);
      await expect(page.locator('#startMixed')).toBeVisible();
      expect((await stored(page, base)).active).toBeUndefined();
    }
  });

  test(`${base} text-only round appears, draws text and completes with a clean results URL`, async ({ page }) => {
    await load(page, base);
    const card = page.locator('[data-round="text"]');
    await expect(card).toContainText(cs ? 'Pouze texty' : 'Text only');
    await card.click();
    for (let i = 0; i < 12; i++) {
      await expect(page.locator('article > .text')).toBeVisible();
      await expect(page.locator('article > figure')).toHaveCount(0);
      await page.locator(human).click();
      await page.locator('#next').click();
    }
    await expect(page.getByRole('heading', { name: cs ? 'Váš výsledek' : 'Your result', exact: true })).toBeVisible();
    await expect(page).toHaveTitle(new RegExp(cs ? 'Váš výsledek' : 'Your result'));
    expect(new URL(page.url()).hash).toBe('');
    expect((await stored(page, base)).active).toBeUndefined();
    await assertNoOverflow(page);
  });

  test(`${base} results show a probability when BigInt and its helper are absent`, async ({ page }) => {
    await page.addInitScript(() => { window.BigInt = undefined; window.exactChanceValues = undefined; });
    let bigNumRequests = 0;
    page.on('request', r => { if (r.url().endsWith('quiz-bignum.js')) bigNumRequests++; });
    await serveFixture(page, base, fixture(base));
    await load(page, `${base}#play-mixed`);
    await page.locator(human).click(); await page.locator('#next').click();
    await expect(page.locator('.chance-message')).toContainText('%');
    await expect(page.locator('.chance-message')).not.toContainText(/NaN|Infinity/);
    expect(bigNumRequests).toBe(0);
  });

  failureTest(`${base} failed image disables answers, retries and offers an unscored skip`, async ({ page }) => {
    const errors = expectedNetworkErrors(page), data = fixture(base, 'image');
    await serveFixture(page, base, data);
    const url = new URL(data.items[0].img, 'http://127.0.0.1:4173' + base).pathname;
    let failing = true, attempts = 0;
    await page.route(`**${url}`, route => { attempts++; return failing ? route.abort() : route.continue(); });
    await load(page, `${base}#play-mixed`);
    const retry = page.locator('.image-error button').first(), skip = page.locator('[data-skip]');
    await expect(skip).toBeVisible(); await expect(page.locator(human)).toBeDisabled();
    // The keyboard path must obey the same unavailable state as the buttons.
    await page.locator('#main').focus(); await page.keyboard.press('h');
    await expect(page.locator('#rev section')).toHaveCount(0);
    failing = false; await retry.click();
    await expect(page.locator(human)).toBeEnabled();
    expect(attempts).toBeGreaterThanOrEqual(2);
    // Fail it again, then exercise the explicitly unscored path.
    failing = true;
    await page.reload();
    await expect(skip).toBeVisible(); await skip.click(); await page.locator('#next').click();
    await expect(page.locator('.score')).toHaveText('0 / 0');
    expect((await stored(page, base)).history[0]).toMatchObject({ n: 0, answers: [{ known: true }] });
    expect(errors).toEqual([]);
  });

  failureTest(`${base} a detached image load cannot re-enable a later failed item`, async ({ page }) => {
    const errors = expectedNetworkErrors(page), data = JSON.parse(read(`${base.slice(1)}items.json`));
    const sets = data.sets.filter(s => s.cat === 'images').slice(0, 2).map(s => ({ ...s, members: s.members.slice(0, 1) }));
    const ids = sets.flatMap(s => s.members);
    data.sets = sets; data.items = data.items.filter(i => ids.includes(i.id));
    data.rounds = [{ id: 'mixed', title: 'Images', blurb: 'Images', tag: 'Images', cats: ['images'], lang: null, n: 2 }];
    await serveFixture(page, base, data);
    await load(page, `${base}#play-mixed`);
    const firstSrc = await page.locator('article > figure img').getAttribute('src');
    await page.locator('article > figure img').evaluate(img => { window.previousImage = img; });
    const nextItem = data.items.find(i => i.img !== firstSrc);
    const url = new URL(nextItem.img, 'http://127.0.0.1:4173' + base).pathname;
    await page.route(`**${url}`, route => route.abort());
    await page.locator(human).click(); await page.locator('#next').click();
    await expect(page.locator('[data-skip]')).toBeVisible();
    await page.evaluate(() => window.previousImage.dispatchEvent(new Event('load')));
    await expect(page.locator(human)).toBeDisabled();
    expect(errors).toEqual([]);
  });

  failureTest(`${base} sibling image failures offer retry without changing the scored answer`, async ({ page }) => {
    const errors = expectedNetworkErrors(page), data = fixture(base, 'image', true);
    await serveFixture(page, base, data);
    await load(page, `${base}#play-mixed`);
    const src = await page.locator('article > figure img').getAttribute('src');
    const sibling = data.items.find(i => i.img !== src);
    const url = new URL(sibling.img, 'http://127.0.0.1:4173' + base).pathname;
    await page.route(`**${url}`, route => route.abort());
    await page.locator(human).click();
    await page.locator('.spoil').evaluateAll(details => details.forEach(d => { d.open = true; }));
    await expect(page.locator('.sib .image-error').first()).toBeVisible();
    await expect(page.locator('.sib [data-skip]')).toHaveCount(0);
    await page.locator('#next').click();
    expect((await stored(page, base)).history[0].n).toBe(1);
    expect(errors).toEqual([]);
  });

  for (const failure of ['500', 'abort']) {
    failureTest(`${base} startup ${failure} offers Retry and recovers`, async ({ page }) => {
      const errors = expectedNetworkErrors(page); let attempts = 0;
      await page.route(`**${base}items.json`, route => {
        if (++attempts > 1) return route.continue();
        return failure === '500' ? route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify(fixture(base)) }) : route.abort();
      });
      await load(page, base);
      await expect(page.locator('#retryLoad')).toBeVisible();
      await expect(page.locator('main')).not.toContainText(/HTTP 500|Failed to fetch|TypeError/);
      await page.locator('#retryLoad').click();
      await expect(page.locator('#startMixed')).toBeVisible();
      expect(attempts).toBe(2); expect(errors).toEqual([]);
    });
  }
}

for (const path of ['/index.html', '/quiz/', '/quiz/cs/', '/quiz/CREDITS.html', '/examples/CREDITS.html']) {
  test(`${path} ignores hostile saved themes`, async ({ page }) => {
    await page.addInitScript(() => { localStorage.setItem('theme', 'junk" onload="alert(1)'); localStorage.setItem('human-or-ai/theme', 'junk'); });
    await load(page, path);
    await expect(page.locator('html')).not.toHaveAttribute('data-theme');
  });
}

test('catalogue prototype hashes are ignored without a pageerror', async ({ page }) => {
  for (const hash of ['__proto__', 'constructor', 'toString']) await load(page, `/index.html#${hash}`);
});

test('catalogue sources and example links reject executable schemes', async ({ page }) => {
  const data = JSON.parse(read('catalogue.json')), entry = data.entries[0];
  entry.sources = [{ title: 'Unsafe source', url: 'javascript:alert', type: 'test' },
    { title: 'Safe mail', url: 'mailto:a@example.com', type: 'test' }];
  entry.examples = [{ type: 'text-ours', text: 'Example', caption: 'Example', source_url: 'data:text/html,bad' }];
  const html = read('index.html').replace(/(<script[^>]*id="data"[^>]*>)[^]*?(<\/script>)/,
    (_, a, b) => a + JSON.stringify(data).replace(/\//g, '\\/') + b);
  await page.route('**/index.html', route => route.fulfill({ contentType: 'text/html', body: html }));
  await load(page, `/index.html#${entry.id}`);
  const body = page.locator(`#${entry.id} .body`);
  await expect(body).toContainText('Unsafe source');
  await expect(body.getByRole('link', { name: 'Unsafe source', exact: true })).toHaveCount(0);
  await expect(body.getByRole('link', { name: 'Safe mail', exact: true })).toHaveAttribute('href', 'mailto:a@example.com');
  await expect(body.locator('figcaption')).toContainText('Source');
  await expect(body.locator('figcaption a')).toHaveCount(0);
});

test('Markdown quoted indented lists render and unsafe links become text', async ({ page }) => {
  await page.route('**/quiz/CREDITS.md', route => route.fulfill({ contentType: 'text/markdown', body: '# Fixture\n\n>   - Indented bullet\n>\n>   2. Indented number\n\n[unsafe](javascript:alert) [safe](//example.com)\n\nApostrophe: a\'b' }));
  await load(page, '/quiz/CREDITS.html');
  await expect(page.locator('.md blockquote ul li')).toContainText('Indented bullet', { timeout: 300 });
  await expect(page.locator('.md blockquote ol li')).toContainText('Indented number');
  await expect(page.locator('.md')).toContainText("Apostrophe: a'b");
  await expect(page.locator('.md a')).toHaveCount(1);
  await expect(page.locator('.md a')).toHaveAttribute('rel', 'noopener');
});

test('example credits and quiz fairness destinations render as HTML pages', async ({ page }) => {
  await load(page, '/examples/CREDITS.html');
  await expect(page.locator('.md h1')).toHaveText('Credits for the examples');
  await expect(page.getByRole('link', { name: 'Markdown source', exact: true })).toHaveAttribute('href', 'CREDITS.md');
  await assertNoOverflow(page);
  for (const base of ['/quiz/', '/quiz/cs/']) {
    await load(page, `${base}CREDITS.html`);
    const link = page.locator(`.md a[href="${base.includes('/cs/') ? '../' : ''}fairness.html"]`);
    await expect(link).toBeVisible();
    await link.click();
    await expect(page.locator('.md h1')).toBeVisible();
    await expect(page.locator('.md table')).toHaveCount(1);
  }
});
