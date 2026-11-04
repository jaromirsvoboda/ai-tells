const { test, expect, load, assertNoOverflow, assertScrollableTables } = require('./helpers');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

// Mobile usability: a long item must never force the player to hunt for the
// answer buttons or the next button. The controls stick to the viewport edges
// (quiz.css), so they are reachable without scrolling; these tests pin that
// contract in every project (all viewports and both colour schemes).

const inViewport = sel => {
  const r = document.querySelector(sel).getBoundingClientRect();
  return r.top >= -1 && r.bottom <= innerHeight + 1 && r.left >= -1 && r.right <= innerWidth + 1;
};

function longestTextItem(document) {
  return document.items.filter(i => i.mod === 'text').reduce((a, b) => (b.text.length > a.text.length ? b : a));
}

function isolated(document, item) {
  const set = document.sets.find(s => s.id === item.set);
  return { ...document, items: [item], sets: [{ ...set, members: [item.id] } ],
    rounds: [{ ...document.rounds.find(r => r.id === 'mixed'), cats: [set.cat], lang: null, n: 1 }] };
}

async function playLongItem(page, base, request, answer) {
  const document = await (await request.get(`${base}items.json`)).json();
  const item = longestTextItem(document);
  await page.route(`**${base}items.json`, route => route.fulfill({ json: isolated(document, item) }));
  await load(page, `${base}#play-mixed`);
  await expect(page.locator('[data-ans="human"]')).toBeVisible();
  if (answer) await page.keyboard.press('h');
  return { base };
}

for (const base of ['/quiz/', '/quiz/cs/']) {
test.describe(base, () => {
test('quiz mobile: answer buttons are in reach at the top and middle of the longest item', async ({ page, request }) => {
  await playLongItem(page, base, request, false);
  const atTop = await page.evaluate(inViewport, '[data-ans="human"]');
  expect(atTop, 'Human button must be fully in the viewport at the top of a long item').toBe(true);
  await page.evaluate(() => window.scrollTo(0, Math.round(document.documentElement.scrollHeight / 2)));
  const atMiddle = await page.evaluate(inViewport, '[data-ans="human"]');
  expect(atMiddle, 'Human button must stay fully in the viewport while the item scrolls').toBe(true);
  await assertNoOverflow(page);
});

test('quiz mobile: next button is in reach while reading the reveal', async ({ page, request }) => {
  await playLongItem(page, base, request, true);
  await expect(page.locator('#rev section')).toBeVisible();
  // Reading position: the verdict at the top of the viewport. From there the
  // rest of the reveal must not hide the next button.
  await page.evaluate(() => {
    const v = document.querySelector('#verdict').getBoundingClientRect();
    window.scrollTo(0, scrollY + v.top);
  });
  const visible = await page.evaluate(inViewport, '#next');
  expect(visible, 'Next button must be fully in the viewport while the reveal is being read').toBe(true);
  await assertNoOverflow(page);
});

test('quiz mobile: the playhead stays in sight while a long item scrolls', async ({ page, request }) => {
  await playLongItem(page, base, request, false);
  await page.evaluate(() => window.scrollTo(0, Math.round(document.documentElement.scrollHeight / 2)));
  const visible = await page.evaluate(inViewport, '.playhead');
  expect(visible, 'Playhead (round name, item number, bar) must stay in the viewport').toBe(true);
});

test('quiz mobile: keyboard focus never lands behind the stuck answer bar', async ({ page, request }) => {
  // WCAG 2.2 SC 2.4.11 regression: while the answer bar is stuck to the bottom
  // of the viewport, focusing any control or link must land it in the clear
  // zone above the bar, in both the question and the reveal phase.
  await playLongItem(page, base, request, false);
  for (const [answered, barSel] of [[false, '#ask'], [true, '.reveal .next']]) {
    if (answered) {
      // The shortcuts only fire while focus is inside #main (the footer links
      // are outside it), so move focus back before answering.
      await page.evaluate(() => document.querySelector('#main').focus());
      await page.keyboard.press('h');
    }
    const obscured = await page.evaluate(barSel => {
      const focusables = [...document.querySelectorAll('a[href], button:not([disabled]), input, select, summary, [tabindex]')]
        .filter(el => el.offsetParent !== null && el.id !== 'main' && !el.closest('#ask') && !el.closest(barSel) && !el.closest('header'));
      const bad = [];
      for (const el of focusables) {
        el.focus();
        // The bar is sticky: measure it after each focus, not once up front.
        const bar = document.querySelector(barSel).getBoundingClientRect();
        if (bar.bottom < innerHeight - 1) continue;  // not stuck: nothing to obscure
        const r = el.getBoundingClientRect();
        if (r.bottom > bar.top && r.top < bar.bottom && r.right > 0 && r.left < innerWidth)
          bad.push({ text: (el.textContent || '').trim().slice(0, 40), top: Math.round(r.top), bottom: Math.round(r.bottom), barTop: Math.round(bar.top) });
      }
      return bad;
    }, barSel);
    expect(obscured, `No control may be focused behind the stuck bar (answered=${answered})`).toEqual([]);
  }
});

test('quiz mobile: an image item fits one screen with its answer bar', async ({ page, request }, testInfo) => {
  const { width } = testInfo.project.use.viewport;
  test.skip(width > 768, 'phone-sized check');
  const document = await (await request.get(`${base}items.json`)).json();
  const item = document.items.find(i => i.mod === 'image');
  await page.route(`**${base}items.json`, route => route.fulfill({ json: isolated(document, item) }));
  await load(page, `${base}#play-mixed`);
  const fits = await page.evaluate(() => {
    const img = document.querySelector('article figure img').getBoundingClientRect();
    const ask = document.querySelector('#ask').getBoundingClientRect();
    return { imgBottom: Math.round(img.bottom), askBottom: Math.round(ask.bottom), vh: innerHeight, scrollY: Math.round(scrollY) };
  });
  expect(fits.scrollY, 'The page must not need to scroll for an image item').toBe(0);
  expect(fits.imgBottom, `Image must fit above the fold (${fits.imgBottom} > ${fits.vh})`).toBeLessThanOrEqual(fits.vh);
  expect(fits.askBottom, `Answer bar must fit above the fold (${fits.askBottom} > ${fits.vh})`).toBeLessThanOrEqual(fits.vh);
  await assertNoOverflow(page);
});
});
}

for (const [pagePath, file] of [['/quiz/CREDITS.html', 'CREDITS.md'], ['/quiz/fairness.html', 'fairness.md'], ['/quiz/cs/CREDITS.html', 'cs/CREDITS.md']]) {
test(`md page ${pagePath} renders ${file} in the quiz styling`, async ({ page, request }) => {
  const md = readFileSync(join(__dirname, '..', 'quiz', file), 'utf8');
  expect(md.length, 'Source file present').toBeGreaterThan(0);
  expect((await request.get(pagePath)).status(), pagePath).toBe(200);
  await load(page, pagePath);
  const info = await page.evaluate(() => ({
    h1: document.querySelector('.md h1')?.textContent || '',
    lis: document.querySelectorAll('.md li').length,
    blocks: document.querySelectorAll('.md blockquote').length,
    tables: document.querySelectorAll('.md table').length,
    links: document.querySelectorAll('.md a[href^="http"]').length,
  }));
  expect(info.h1, 'Heading must render').toBeTruthy();
  expect(info.tables, 'Table renders only on the fairness page').toBe(file === 'fairness.md' ? 1 : 0);
  if (file.endsWith('CREDITS.md')) {
    expect(info.lis, 'Credits list items render').toBeGreaterThan(100);
    expect(info.blocks, 'Prompt blockquotes render').toBeGreaterThan(50);
  }
  if (file.endsWith('CREDITS.md')) expect(info.links, 'External links render').toBeGreaterThan(0);
  await assertScrollableTables(page);
  // Same-origin links in the rendered document must resolve.
  const hrefs = await page.locator('.md a[href]').evaluateAll(nodes => [...new Set(nodes.map(a => a.getAttribute('href')))]);
  for (const href of hrefs) {
    const url = new URL(href, page.url());
    if (url.origin !== new URL(page.url()).origin) continue;
    expect((await request.get(url.pathname + url.search)).status(), href).toBe(200);
  }
  await assertNoOverflow(page);
});
}
