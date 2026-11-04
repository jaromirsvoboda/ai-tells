const fs = require('node:fs');
const path = require('node:path');
const { test, expect, load, settle, expandAll, assertNoOverflow, assertScrollableTables } = require('./helpers');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'catalogue.json'), 'utf8'));
const entries = data.entries;

// Runs in the browser to avoid serializing the expanded catalogue on every link.
// Discover candidates from computed styles, then read their live rectangles for
// each landing (the filter bar can cease being stuck near its containing block).
async function measureLandings({ clickLinks = false, id = null }) {
  const candidates = [...document.querySelectorAll('body *')].filter(el =>
    ['sticky', 'fixed'].includes(getComputedStyle(el).position));
  const links = clickLinks ? [...document.querySelectorAll('a[href^="#"]')] : [];
  const failures = [];
  const targets = clickLinks ? links : [null];
  for (const link of targets) {
    const targetId = link ? decodeURIComponent(link.hash.slice(1)) : id;
    if (link) {
      history.replaceState(null, '', location.pathname);
      await new Promise(resolve => {
        window.addEventListener('hashchange', resolve, { once: true });
        link.click();
      });
    }
    await new Promise((resolve, reject) => {
      let previous = NaN, stable = 0;
      const deadline = performance.now() + 5000;
      function frame() {
        stable = Math.abs(scrollY - previous) < 0.1 ? stable + 1 : 0;
        previous = scrollY;
        if (stable >= 3) return resolve();
        if (performance.now() > deadline) return reject(new Error(`Scroll did not settle: #${targetId}`));
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
    const target = document.getElementById(targetId);
    if (!target) throw new Error(`Missing anchor #${targetId}`);
    const heading = target.matches('summary, h1, h2, h3, h4') ? target :
      target.querySelector(':scope > summary, h2, h3, h4') || target;
    const r = heading.getBoundingClientRect();
    const blockers = candidates.flatMap(el => {
      if (el === target || el.contains(heading)) return [];
      const style = getComputedStyle(el), rect = el.getBoundingClientRect();
      const top = parseFloat(style.top);
      const stuck = style.position === 'fixed' ||
        (style.position === 'sticky' && Number.isFinite(top) && rect.top <= top + 1);
      if (!stuck || !el.getClientRects().length || rect.bottom <= 0 || rect.top >= innerHeight ||
          rect.right <= r.left || rect.left >= r.right || rect.top > r.bottom) return [];
      return [{ id: el.id || el.tagName, bottom: rect.bottom }];
    });
    const clearance = Math.max(0, ...blockers.map(b => b.bottom)) + 4;
    if (r.top < clearance || r.bottom > innerHeight) {
      failures.push({ id: targetId, top: r.top, bottom: r.bottom, viewport: innerHeight, clearance, blockers });
    }
  }
  return { count: targets.length, failures };
}

async function assertLanding(page, id) {
  const result = await page.evaluate(measureLandings, { id });
  expect(result.failures, `#${id}: heading must clear every stuck element by 4px and fit in viewport`).toEqual([]);
}

test('every in-page link lands below live sticky elements', async ({ page }, testInfo) => {
  await load(page);
  // Materialize lazy permalink anchors too, including duplicate hrefs.
  await expandAll(page);
  const result = await page.evaluate(measureLandings, { clickLinks: true });
  testInfo.annotations.push({ type: 'coverage', description: `${result.count} in-page links, no sampling` });
  await testInfo.attach('anchor-landings', { body: JSON.stringify(result, null, 2), contentType: 'application/json' });
  expect(result.failures, 'Every linked heading must clear stuck elements by 4px and fit in viewport').toEqual([]);
});

test('direct hashes: 20 spread-out entries and every section, group and era', async ({ page }) => {
  await load(page);
  const sectionIds = await page.locator('section[id], .group[id], .era[id], h3[id]')
    .evaluateAll(nodes => nodes.map(n => n.id));
  const sample = Array.from({ length: Math.min(20, entries.length) }, (_, i) =>
    entries[Math.round(i * (entries.length - 1) / 19)].id);
  for (const id of [...new Set([...sectionIds, ...sample])]) {
    await load(page, `/index.html#${encodeURIComponent(id)}`);
    if (entries.some(e => e.id === id)) await expect(page.locator(`[id="${id}"]`)).toHaveAttribute('open', '');
    await assertLanding(page, id);
  }
});

test('no horizontal overflow with entries closed or open', async ({ page }) => {
  await load(page);
  await assertNoOverflow(page);
  await assertScrollableTables(page);
  await expandAll(page);
  await assertNoOverflow(page);
  await assertScrollableTables(page);
});

test('catalogue: heading levels never skip a level', async ({ page }) => {
  await load(page);
  const levels = await page.evaluate(() => [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')].map(h => +h.tagName[1]));
  for (let i = 1; i < levels.length; i++) {
    expect(levels[i] - levels[i - 1], `Heading level ${levels[i - 1]} to ${levels[i]} skips a level`).toBeLessThanOrEqual(1);
  }
});

test('console, network and external link hygiene', async ({ page, request }) => {
  await load(page);
  await expandAll(page);
  expect((await request.get('/catalogue.json')).status()).toBe(200);
  const issues = await page.locator('a[href]').evaluateAll(nodes => nodes.flatMap(a => {
    const href = a.getAttribute('href');
    if (href.startsWith('#') || new URL(a.href).origin === location.origin) return [];
    let url;
    try { url = new URL(href); } catch { return [`Invalid URL: ${href}`]; }
    const errors = [];
    if (url.protocol !== 'https:' || !url.hostname) errors.push(`Expected https and hostname: ${href}`);
    if (a.target === '_blank' && !a.relList.contains('noopener')) errors.push(`Missing noopener: ${href}`);
    return errors;
  }));
  expect(issues).toEqual([]);
});

test('ids, anchor targets and inline catalogue match source data', async ({ page }) => {
  await load(page);
  await expandAll(page);
  const actual = await page.evaluate(() => ({
    ids: [...document.querySelectorAll('[id]')].map(el => el.id),
    targets: [...document.querySelectorAll('a[href^="#"]')].map(a => decodeURIComponent(a.hash.slice(1))),
    entries: [...document.querySelectorAll('details.entry')].map(el => el.id),
    inline: JSON.parse(document.getElementById('data').textContent),
  }));
  expect(actual.ids.filter((id, i, all) => all.indexOf(id) !== i), 'Unique DOM ids').toEqual([]);
  expect(actual.targets.filter(id => !actual.ids.includes(id)), 'Every href has a matching id').toEqual([]);
  expect(actual.entries.sort()).toEqual(entries.map(e => e.id).sort());
  expect(actual.inline.entries).toHaveLength(entries.length);
  expect(actual.inline, 'Inline data must equal catalogue.json, including every field').toEqual(data);
});

async function assertEntries(page, expected) {
  const visible = await page.locator('details.entry:visible').evaluateAll(nodes => nodes.map(n => n.id));
  expect(visible.sort()).toEqual(expected.map(e => e.id).sort());
  await expect(page.locator('#f-count')).toHaveText(`${visible.length} of ${entries.length} entries shown`);
}

test('every filter option, combinations, search and reset agree with JSON', async ({ page }) => {
  await load(page);
  await assertEntries(page, entries);
  const fields = [ ['#f-mod', 'modality'], ['#f-theme', 'theme'], ['#f-str', 'strength'] ];
  const rank = { anecdotal: 0, weak: 1, moderate: 2, strong: 3 };
  for (const [selector, key] of fields) {
    const values = await page.locator(`${selector} option`).evaluateAll(nodes => nodes.map(n => n.value));
    for (const value of values) {
      await page.locator(selector).selectOption(value);
      await assertEntries(page, entries.filter(e => !value || (key === 'strength' ? rank[e[key]] >= rank[value] : e[key] === value)));
    }
    await page.locator('#f-reset').click();
    await assertEntries(page, entries);
  }
  const statuses = page.locator('#filters fieldset input');
  for (const value of await statuses.evaluateAll(nodes => nodes.map(n => n.value))) {
    for (const checkbox of await statuses.all()) await checkbox.setChecked(await checkbox.inputValue() === value);
    await assertEntries(page, entries.filter(e => e.status_2026 === value));
  }
  for (const checkbox of await statuses.all()) await checkbox.uncheck();
  await assertEntries(page, []);
  await page.locator('#f-reset').click();
  for (const modality of data.modalities) {
    await page.locator('#f-mod').selectOption(modality.id);
    const themes = [...new Set(entries.filter(e => e.modality === modality.id).map(e => e.theme))].sort();
    expect(await page.locator('#f-theme option').evaluateAll(nodes => nodes.slice(1).map(n => n.value))).toEqual(themes);
    await page.locator('#f-theme').selectOption(themes[0]);
    await page.locator('#f-str').selectOption('moderate');
    await assertEntries(page, entries.filter(e => e.modality === modality.id && e.theme === themes[0] && rank[e.strength] >= 2));
    await page.locator('#f-reset').click();
  }
  for (const query of ['  GPT  ', entries[0].id, 'no-such-tell-000000']) {
    await page.locator('#f-q').fill(query);
    const q = query.trim().toLowerCase();
    const matches = entries.filter(e => [e.name, e.what_it_looks_like, e.example, e.why, e.theme,
      e.first_seen?.label, e.status_note, e.fixed_by, e.end_date, e.peak, e.evidence, e.id].join(' ').toLowerCase().includes(q));
    await assertEntries(page, matches);
  }
  await page.locator('#f-reset').click();
  await assertEntries(page, entries);
  // A deep link to a hidden entry must clear conflicting filters and open it.
  await page.locator('#f-q').fill('no-such-tell-000000');
  await page.evaluate(id => { location.hash = id; }, entries[0].id);
  await expect(page.locator(`[id="${entries[0].id}"]`)).toBeVisible();
  await expect(page.locator(`[id="${entries[0].id}"]`)).toHaveAttribute('open', '');
  await assertEntries(page, entries);
});

// Composite ancestor backgrounds from the root down, then foreground alpha over
// the resulting opaque background. Fail explicitly on images or unresolved colors.
async function contrastReport(page) {
  return page.evaluate(() => {
    function rgba(value) {
      const m = value.match(/^rgba?\(([^)]+)\)$/);
      if (!m) throw new Error(`Unresolved color: ${value}`);
      const p = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
      return [p[0], p[1], p[2], p[3] ?? 1];
    }
    function over(f, b) {
      const a = f[3] + b[3] * (1 - f[3]);
      return [0, 1, 2].map(i => (f[i] * f[3] + b[i] * b[3] * (1 - f[3])) / a).concat(a);
    }
    function luminance(c) {
      const v = c.slice(0, 3).map(n => n / 255).map(n => n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4);
      return v[0] * 0.2126 + v[1] * 0.7152 + v[2] * 0.0722;
    }
    const failures = [], unresolved = [], minima = { body: Infinity, links: Infinity, labels: Infinity };
    for (const [group, selector] of [['body', 'body, p, dd, dt, li, td, th, summary .nm, summary .meta'],
      ['links', 'a'], ['labels', '#filters label, #filters legend']]) {
      for (const el of document.querySelectorAll(selector)) {
        if (!el.getClientRects().length || !el.textContent.trim()) continue;
        const label = `${group}: ${el.tagName}#${el.id} ${el.textContent.trim().slice(0, 65)}`;
        try {
          const chain = [];
          for (let p = el; p; p = p.parentElement) chain.unshift(p);
          let bg = [0, 0, 0, 0];
          for (const p of chain) {
            const s = getComputedStyle(p);
            if (s.backgroundImage !== 'none' || Number(s.opacity) !== 1 || s.mixBlendMode !== 'normal') {
              throw new Error('background image, opacity or blend mode requires spatial compositing');
            }
            const color = rgba(s.backgroundColor);
            if (color[3]) bg = over(color, bg);
          }
          if (bg[3] < 1) throw new Error('No opaque ancestor background');
          const fg = over(rgba(getComputedStyle(el).color), bg);
          const l1 = luminance(fg), l2 = luminance(bg);
          const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
          minima[group] = Math.min(minima[group], ratio);
          if (ratio < 4.5) failures.push({ label, ratio });
        } catch (err) { unresolved.push(`${label}: ${err.message}`); }
      }
    }
    return { minima, failures, unresolved };
  });
}

test('theme toggle persists and body, link and label contrast meets 4.5:1 in both themes', async ({ page }, testInfo) => {
  await load(page);
  const preferred = testInfo.project.use.colorScheme;
  await expect(page.locator('#theme-toggle')).toHaveText(preferred === 'dark' ? 'Light page' : 'Dark page');
  for (const theme of ['light', 'dark']) {
    if (await page.evaluate(() => getComputedStyle(document.documentElement).colorScheme) !== theme) {
      await page.locator('#theme-toggle').click();
    } else {
      // Exercise the toggle even when the preferred theme already matches.
      await page.locator('#theme-toggle').click();
      await page.locator('#theme-toggle').click();
    }
    await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
    expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe(theme);
    await page.reload();
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).colorScheme)).toBe(theme);
    await expandAll(page);
    const report = await contrastReport(page);
    await testInfo.attach(`contrast-${theme}`, { body: JSON.stringify(report, null, 2), contentType: 'application/json' });
    expect(report.unresolved, 'Every text background must be measurable; report unsupported compositing').toEqual([]);
    expect(report.failures, `${theme} text contrast must be >= 4.5:1`).toEqual([]);
    for (const min of Object.values(report.minima)) expect(min).toBeGreaterThanOrEqual(4.5);
  }
});

async function assertFocusIndicator(page) {
  const indicator = await page.evaluate(() => {
    const s = getComputedStyle(document.activeElement);
    return (s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0 && s.outlineColor !== 'rgba(0, 0, 0, 0)') || s.boxShadow !== 'none';
  });
  expect(indicator, 'Keyboard focus must have an outline or box-shadow').toBe(true);
}

test('Tab order reaches filters then every summary; Enter and Space open entries', async ({ page }) => {
  // ~500 awaited Tab presses with a round-trip each: this walk hovers around the
  // default 120 s timeout on tablet/desktop widths (measured 114–126 s quiet).
  test.setTimeout(300_000);
  await load(page);
  const expected = await page.locator('#filters select, #filters input, #f-reset, #f-open, details.entry > summary')
    .evaluateAll(nodes => nodes.map(el => el.id || (el.matches('summary') ? `${el.parentElement.id}:summary` : `status:${el.value}`)));
  const reached = [];
  for (let i = 0; i < expected.length + 300 && reached.length < expected.length; i++) {
    await page.keyboard.press('Tab');
    const key = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el.matches('#filters select, #filters input, #f-reset, #f-open, details.entry > summary')) return null;
      return el.id || (el.matches('summary') ? `${el.parentElement.id}:summary` : `status:${el.value}`);
    });
    if (key) { reached.push(key); await assertFocusIndicator(page); }
  }
  expect(reached).toEqual(expected);
  const entry = page.locator('details.entry').last();
  await page.keyboard.press('Enter');
  await expect(entry).toHaveAttribute('open', '');
  await page.keyboard.press('Enter');
  await expect(entry).not.toHaveAttribute('open', '');
  await page.keyboard.press('Space');
  await expect(entry).toHaveAttribute('open', '');
  await assertFocusIndicator(page);
});

test('opening an entry leaves the filter bar bounding box stable', async ({ page }) => {
  await load(page);
  const summary = page.locator('details.entry > summary').first();
  await summary.scrollIntoViewIfNeeded();
  await summary.focus();
  await settle(page);
  const before = await page.locator('#filters').boundingBox();
  await page.keyboard.press('Enter');
  await expect(page.locator('details.entry').first()).toHaveAttribute('open', '');
  await settle(page);
  const after = await page.locator('#filters').boundingBox();
  for (const key of ['x', 'y', 'width', 'height']) {
    expect(Math.abs(after[key] - before[key]), `Filter ${key} changed on opening an entry`).toBeLessThanOrEqual(1);
  }
});

test('print hides the filter bar and expands entries without horizontal overflow', async ({ page }) => {
  await load(page);
  await page.emulateMedia({ media: 'print' });
  // Chromium fires beforeprint on PDF/print, not merely on emulateMedia.
  await page.evaluate(() => window.dispatchEvent(new Event('beforeprint')));
  await expect(page.locator('#filters')).toBeHidden();
  await expect(page.locator('details.entry:not([open])')).toHaveCount(0);
  await assertNoOverflow(page);
});
