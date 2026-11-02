const { test, expect, load, assertNoOverflow } = require('./helpers');

async function activate(page, control) {
  await expect(control).toBeVisible();
  for (let n = 0; n < 100; n++) {
    if (await control.evaluate(el => el === document.activeElement)) {
      await page.keyboard.press('Enter');
      return;
    }
    await page.keyboard.press('Tab');
  }
  throw new Error('Control not reachable by Tab');
}

for (const lang of ['en', 'cs']) {
  test(`quiz smoke ${lang}: every round, keyboard, media, no external requests, Pages prefix`, async ({ page, request, baseURL }, testInfo) => {
    const base = `/ai-tells/quiz/${lang === 'cs' ? 'cs/' : ''}`;
    const response = await request.get(`${base}items.json`);
    expect(response.status()).toBe(200);
    const data = await response.json();
    const external = [];
    // Abort any unexpected external request before it can leave the browser.
    await page.route('**/*', route => {
      if (new URL(route.request().url()).origin !== new URL(baseURL).origin) {
        external.push(route.request().url());
        return route.abort();
      }
      return route.continue();
    });
    await load(page, base);
    await expect(page.getByRole('button', { name: lang === 'cs' ? 'Začít: smíšené kolo' : 'Start: a mixed round', exact: true })).toBeVisible();
    await assertNoOverflow(page);
    // Decode every referenced image in the browser, including siblings the
    // random draw may never show. A 200 alone would not catch corrupt media.
    const media = await page.evaluate(async urls => Promise.all(urls.map(async src => {
      const img = new Image();
      img.src = src;
      await img.decode();
      return { src, width: img.naturalWidth, height: img.naturalHeight };
    })), [...new Set(data.items.filter(i => i.mod === 'image').map(i => i.img))]);
    for (const img of media) expect(img.width, img.src).toBeGreaterThan(0);
    const counts = [];
    for (const round of data.rounds) {
      // Navigate using the keyboard and the visible round card.
      await activate(page, page.getByRole('button').filter({ has: page.locator('b', { hasText: round.title }) }));
      const human = page.getByRole('button', { name: lang === 'cs' ? 'Člověk' : 'Human', exact: true });
      const next = page.getByRole('button', { name: /^(Next item|Finish and see the results|Další položka|Dokončit a ukázat výsledek)$/ });
      const limit = !round.sub && round.cats.length === 1 && round.cats[0] === 'images' ? 12 : round.n;
      const n = Math.min(limit, data.sets.filter(s => round.cats.includes(s.cat) && (!round.lang || s.lang === round.lang) && (!round.sub || s.sub === round.sub)).length);
      for (let i = 0; i < n; i++) {
        await expect(human).toBeEnabled();
        await assertNoOverflow(page);
        await page.keyboard.press(i % 2 ? 'a' : 'h');
        await expect(page.locator('#rev section')).toBeVisible();
        await page.locator('article img').evaluateAll(async imgs => {
          await Promise.all(imgs.map(img => img.decode()));
          if (imgs.some(img => img.naturalWidth <= 0)) throw new Error('Broken image');
        });
        await assertNoOverflow(page);
        await activate(page, next);
      }
      await expect(page.getByRole('heading', { name: lang === 'cs' ? 'Váš výsledek' : 'Your result', exact: true })).toBeVisible();
      await assertNoOverflow(page);
      if (round.id === 'mixed' && testInfo.project.use.viewport.width === 360 && testInfo.project.use.colorScheme === 'dark') {
        await testInfo.attach(`results-${lang}`, { body: await page.screenshot({ fullPage: true }), contentType: 'image/png' });
      }
      counts.push(`${round.id}: ${n} keyboard answers`);
      await activate(page, page.getByRole('button', { name: lang === 'cs' ? 'Vybrat jiné kolo' : 'Choose another round', exact: true }));
    }
    await activate(page, page.locator('header a[href="#about"]'));
    await expect(page.locator('h1#about')).toBeVisible();
    await expect(page.locator('main')).not.toContainText(/confidence|How sure|Jak moc si jste jistí|Podle vaší jistoty/i);
    await assertNoOverflow(page);
    const aboutLinks = await page.locator('main a[href]').evaluateAll(links =>
      [...new Set(links.map(a => a.getAttribute('href')))]);
    expect(aboutLinks).toContain(lang === 'cs' ? '../fairness.md' : 'fairness.md');
    for (const href of aboutLinks) {
      const url = new URL(href, page.url());
      expect(url.origin, href).toBe(new URL(baseURL).origin);
      expect((await request.get(url.href)).status(), href).toBe(200);
    }
    expect(external, 'Quiz must make no external requests').toEqual([]);
    await testInfo.attach('smoke', { body: JSON.stringify({ lang, viewport: testInfo.project.use.viewport,
      scheme: testInfo.project.use.colorScheme, rounds: counts, media: media.length, external }, null, 2), contentType: 'application/json' });
  });
}

for (const lang of ['en', 'cs']) {
  test(`quiz ${lang}: optional storage failure and scoped shortcuts`, async ({ page }) => {
    await page.addInitScript(() => {
      for (const method of ['getItem', 'setItem']) Storage.prototype[method] = () => { throw new Error('Storage unavailable'); };
    });
    await load(page, `/quiz/${lang === 'cs' ? 'cs/' : ''}`);
    await activate(page, page.getByRole('button', { name: /^(Start:|Začít:)/ }));
    await expect(page.locator('#ask')).toBeVisible();
    // Shortcuts outside main must not submit an answer.
    await activate(page, page.locator('#theme'));
    await page.keyboard.press('h');
    await expect(page.locator('#rev section')).toHaveCount(0);
    await activate(page, page.getByRole('button', { name: lang === 'cs' ? 'Člověk' : 'Human', exact: true }));
    await expect(page.locator('#rev section')).toBeVisible();
  });
}
