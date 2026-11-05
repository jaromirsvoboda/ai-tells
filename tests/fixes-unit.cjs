// Browser-independent checks of production helpers. Also called by fixes.spec.js.
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { runInNewContext } = require('node:vm');
const read = file => readFileSync(join(__dirname, '..', file), 'utf8');

function quizVM(raw = null, data = JSON.parse(read('quiz/items.json'))) {
  const source = read('quiz/quiz.js').replace('  fetchItems();', '').replace(/\}\)\(\);\s*$/, `
    globalThis.helpers = { load, calendarDate, md, contentHTML, textHTML, allowedURL, draw,
      roundSize, restoreRound, binomialTail, chanceMessage, historyGraphHTML, watchImages,
      setGame: g => { game = g; },
      setStore: v => { store = v; } };
    DATA = fixture;
    fixture.items.forEach(i => { ITEMS[i.id] = i; i.human = decode(i.x).kind === 'human'; });
    fixture.sets.forEach(s => { SETS[s.id] = s; });
  })();`);
  const main = { focus() {}, querySelectorAll: () => [] };
  const context = { document: { documentElement: { lang: 'en', dataset: {} },
    querySelector: s => s === '#main' ? main : { addEventListener() {} }, addEventListener() {} },
    window: { addEventListener() {} }, localStorage: { getItem: k => k.includes('/v2/') ? raw : null },
    fixture: data, TextDecoder, atob, setTimeout };
  runInNewContext(source, context, { timeout: 1000 });
  return context.helpers;
}
function mdVM() {
  const source = read('quiz/mdview.js').replace("  fetch(src, { cache: 'no-cache' })", "  globalThis.helpers = { inline, parseBlocks }; return;\n  fetch(src, { cache: 'no-cache' })");
  const context = { document: { documentElement: { lang: 'en', dataset: {} },
    currentScript: { getAttribute: () => 'CREDITS.md' }, getElementById: () => null },
    localStorage: { getItem: () => null }, window: { addEventListener() {} } };
  runInNewContext(source, context, { timeout: 300 });
  return context;
}
function check() {
  const names = [];
  const test = (name, fn) => { fn(); names.push(name); };
  test('hostile stores and calendar dates', () => {
    const invalid = ['"string"', '5', 'null', '[]', '{"history":5}', '{"seen":1,"setsShown":[],"origSeen":"x"}', '{'];
    for (const raw of invalid) assert.deepEqual(JSON.parse(JSON.stringify(quizVM(raw).load())), { seen: {}, history: [], setsShown: {}, origSeen: {} });
    const records = [{ title: 'Keep', date: '2024-02-29', ok: 1, n: 2 },
      ...[{ ok: '<img src=x onerror=alert(1)>', n: 2 }, { ok: -1, n: 2 }, { ok: 3, n: 2 },
        { ok: 1, n: 1e100 }, { ok: 1, n: 1.5 }, { ok: 1, n: 2, date: '2026-99-99' },
        { ok: 1, n: 2, date: '2026-02-29' }, { ok: 1, n: 2, date: '2026-04-31' }]
        .map(h => ({ date: '2026-11-01', ...h }))];
    const h = quizVM(JSON.stringify({ history: records })).load().history;
    assert.equal(h.length, 1); assert.equal(h[0].title, 'Keep');
  });
  test('URL schemes and escaped attributes', () => {
    const q = quizVM(), m = mdVM().helpers;
    for (const url of ['https://example.com', 'HTTP://example.com', 'mailto:a@example.com', 'tel:+123', '//example.com', '../file', '#fragment', '#part:two', 'dir/file:two']) {
      assert.match(q.md(`[label](${url})`), /<a /, url);
      assert.match(m.inline(`[label](${url})`), /<a /, url);
    }
    for (const url of ['javascript:alert', 'javascript:alert(1)', 'JaVaScRiPt:alert', 'data:text/html,test', 'vbscript:test', 'file:///etc/passwd']) {
      assert.equal(q.md(`[label](${url})`), 'label');
      assert.equal(m.inline(`[label](${url})`), 'label');
    }
    assert.equal(q.allowedURL('java\nscript:alert'), false);
    assert.equal(q.allowedURL(' javascript:alert'), false);
    assert.match(q.contentHTML({ mod: 'image', img: 'x', alt: 'x', w: '1" onload="bad', h: 321 }), /width="1&quot; onload=&quot;bad" height="321"/);
    assert.match(q.textHTML({ lang: 'en" onclick="bad', text: 'text' }), /lang="en&quot; onclick=&quot;bad"/);
    assert.equal(m.inline("a'b"), 'a&#39;b');
  });
  test('indented quoted lists finish in 300 ms; all document sources render', () => {
    const ctx = mdVM();
    ctx.lines = ['>   - quoted bullet', '>', '>   2. quoted number'].map(s => s.replace(/^>\s?/, ''));
    const html = runInNewContext('helpers.parseBlocks(lines)', ctx, { timeout: 300 });
    assert.match(html, /<ul><li><p>quoted bullet<\/p>/);
    assert.match(html, /<ol start="2"><li><p>quoted number<\/p>/);
    for (const file of ['quiz/CREDITS.md', 'quiz/cs/CREDITS.md', 'quiz/fairness.md', 'examples/CREDITS.md']) {
      ctx.lines = read(file).split('\n');
      assert.match(runInNewContext('helpers.parseBlocks(lines)', ctx, { timeout: 1000 }), /<h1>/);
    }
  });
  test('persisted rounds validate IDs, version, bounds and answers', () => {
    const data = JSON.parse(read('quiz/items.json')), q = quizVM(null, data);
    const drawn = q.draw(data.rounds.find(r => r.id === 'mixed'));
    const active = { version: data.version, round: 'mixed', ids: drawn.ids, i: 1, exhausted: false,
      answers: [{ id: drawn.ids[0], choice: 'human', known: false, reason: '' }] };
    assert.ok(q.restoreRound(active));
    const variants = [null, [], { ...active, version: 'old' }, { ...active, ids: ['missing'] },
      { ...active, i: 100000 }, { ...active, answers: 5 }, { ...active, ids: ['__proto__'] },
      { ...active, ids: [drawn.ids[0], drawn.ids[0]] }, { ...active, answers: [{ ...active.answers[0], known: 'false' }] },
      { ...active, answers: [{ ...active.answers[0], choice: 'skip' }] }];
    for (const v of variants) assert.equal(q.restoreRound(v), null);
    const skipped = { ...active, answers: [{ ...active.answers[0], choice: 'skip', known: true, reason: 'unavailable' }] };
    assert.equal(q.restoreRound(skipped).answers[0].known, true);
    // Serialized truth flags cannot override the data's origin or scoring.
    const rehydrated = q.restoreRound({ ...active, answers: [{ ...active.answers[0], ok: 'bad', h: 'bad' }] });
    assert.equal(typeof rehydrated.answers[0].ok, 'boolean');
    assert.equal(typeof rehydrated.answers[0].h, 'boolean');
  });
  test('both text rounds draw twelve text items', () => {
    for (const path of ['quiz/items.json', 'quiz/cs/items.json']) {
      const data = JSON.parse(read(path)), q = quizVM(null, data), r = data.rounds.find(r => r.id === 'text');
      assert.ok(r); assert.equal(q.roundSize(r), 12);
      for (const id of q.draw(r).ids) assert.equal(data.items.find(i => i.id === id).mod, 'text');
    }
  });
  test('BigInt-free probability fallback and optional exact helper', () => {
    const q = quizVM();
    assert.equal(q.binomialTail(6, 6), 1 / 64);
    assert.match(q.chanceMessage(6, 6), /64/);
    assert.doesNotMatch(q.chanceMessage(2400, 2400), /Infinity|NaN|\(0/);
    assert.match(q.chanceMessage(2400, 2400), /10⁻³⁰⁰/);
    assert.doesNotMatch(read('quiz/quiz.js'), /\b\d+n\b/);
    const ctx = { window: {} }; runInNewContext(read('quiz/quiz-bignum.js'), ctx);
    assert.equal(ctx.window.exactChanceValues(2400, 2400).oneIn, 2n ** 2400n);
  });
  test('scroll regions add and remove their role in all three renderers', () => {
    for (const file of ['quiz/quiz.js', 'quiz/mdview.js', 'index.html']) {
      const source = read(file), start = source.indexOf('  function markScrollable(');
      const fn = source.slice(start, source.indexOf('\n  }', start) + 4);
      const attrs = {}, wrapper = { scrollWidth: 200, clientWidth: 100,
        getAttribute: k => attrs[k] || null, setAttribute: (k, v) => { attrs[k] = v; },
        removeAttribute: k => { delete attrs[k]; } };
      const scope = { querySelectorAll: selector => selector === '.tablewrap' ? [wrapper] : [] };
      const context = { scope, main: scope, document: { ...scope, documentElement: { lang: 'en' } }, LANG: 'en' };
      runInNewContext(`(${fn})(scope)`, context);
      assert.equal(attrs.role, 'region'); assert.equal(attrs.tabindex, '0'); assert.ok(attrs['aria-label']);
      wrapper.scrollWidth = 100;
      runInNewContext(`(${fn})(scope)`, context);
      assert.deepEqual(attrs, {});
    }
  });
  test('a detached image load cannot enable the current item', () => {
    const q = quizVM(), game = { ids: ['old'], i: 0, answers: [], imageFailed: true };
    const primary = { matches: () => true };
    const img = { isConnected: false, complete: false, closest: () => ({ parentElement: primary }) };
    q.setGame(game); q.watchImages({ querySelectorAll: () => [img] });
    img.onload();
    assert.equal(game.imageFailed, true);
  });
  test('embedded catalogue equality, slash boundary and 207 entries', () => {
    const embedded = read('index.html').match(/<script[^>]*id="data"[^>]*>([^]*?)<\/script>/)[1];
    const data = JSON.parse(read('catalogue.json'));
    assert.deepEqual(JSON.parse(embedded), data); assert.equal(data.entries.length, 207);
    assert.doesNotMatch(embedded, /(?<!\\)\//);
    assert.doesNotMatch(embedded, /<\/script/i);
    const eye = data.entries.find(e => e.id === 'img-gan-eyes-fixed');
    assert.equal(eye.peak_date, ''); assert.equal(eye.peak, ''); assert.match(eye.status_note, /2019–2023/);
  });
  return names;
}
module.exports = { check, quizVM, mdVM };
if (require.main === module) {
  const names = check();
  for (const name of names) console.log(`PASS ${name}`);
  console.log(`${names.length} static regression groups passed`);
}
