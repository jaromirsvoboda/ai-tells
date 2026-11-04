const { test: base, expect } = require('@playwright/test');

// Attach before navigation; collect errors for every test, including direct hash loads.
const test = base.extend({
  page: async ({ page, baseURL }, use) => {
    const problems = [];
    page.on('console', msg => { if (msg.type() === 'error') problems.push(`console: ${msg.text()}`); });
    page.on('pageerror', err => problems.push(`pageerror: ${err.message}`));
    page.on('requestfailed', req => problems.push(`requestfailed: ${req.url()} ${req.failure()?.errorText}`));
    page.on('response', res => {
      if (new URL(res.url()).origin === new URL(baseURL).origin && res.status() !== 200) {
        problems.push(`response: ${res.status()} ${res.url()}`);
      }
    });
    await use(page);
    expect(problems, 'No console/page errors, failed requests, or non-200 same-origin resources').toEqual([]);
  },
});

async function load(page, url = '/index.html') {
  await page.goto(url);
  await page.evaluate(() => document.fonts.ready);
}

async function settle(page) {
  // Three stable animation frames, with a deadline so smooth-scroll regressions fail.
  await page.evaluate(() => new Promise((resolve, reject) => {
    let previous = NaN, stable = 0;
    const deadline = performance.now() + 5000;
    function frame() {
      stable = Math.abs(scrollY - previous) < 0.1 ? stable + 1 : 0;
      previous = scrollY;
      if (stable >= 3) return resolve();
      if (performance.now() > deadline) return reject(new Error('Scroll did not settle in 5 seconds'));
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }));
}

async function expandAll(page) {
  await page.locator('#f-open').click();
  await expect(page.locator('details.entry:not([data-filled])')).toHaveCount(0);
}

async function assertScrollableTables(page) {
  // WCAG 2.1.1: a table region that scrolls horizontally must have an explicit
  // focus target (tabindex) and an accessible name.
  const wraps = await page.evaluate(() => [...document.querySelectorAll('.tablewrap')].map(w => ({
    scrolls: w.scrollWidth > w.clientWidth + 1,
    tabindex: w.getAttribute('tabindex'),
    label: w.getAttribute('aria-label') || '',
  })));
  for (const w of wraps) {
    if (w.scrolls) {
      expect(w.tabindex, 'Scrolling table region must have tabindex="0"').toBe('0');
      expect(w.label, 'Scrolling table region must have an aria-label').toBeTruthy();
    }
  }
}

async function assertNoOverflow(page) {
  const result = await page.evaluate(() => {
    const width = document.documentElement.clientWidth;
    const oversized = [...document.querySelectorAll('body *')].filter(el => {
      if (!el.getClientRects().length || el.getBoundingClientRect().width <= width + 1) return false;
      // Include self: an explicit scroll container is allowed to contain wide content.
      for (let p = el; p; p = p.parentElement) {
        if (/^(auto|scroll)$/.test(getComputedStyle(p).overflowX)) return false;
      }
      return true;
    }).map(el => `${el.tagName}#${el.id}.${el.className}`);
    return { width, scrollWidth: document.documentElement.scrollWidth, oversized };
  });
  expect(result.scrollWidth, JSON.stringify(result)).toBeLessThanOrEqual(result.width);
  expect(result.oversized, 'Wide elements must be inside explicit horizontal scroll containers').toEqual([]);
}

module.exports = { test, expect, load, settle, expandAll, assertNoOverflow, assertScrollableTables };
