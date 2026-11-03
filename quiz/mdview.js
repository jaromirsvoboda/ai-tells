/* mdview.js — renders the Markdown subset used by the quiz's document pages
   (CREDITS.md, fairness.md) into the quiz's own styling, so the .md file stays
   the single source of truth and the page reads like the rest of the site.
   Supported: #/##/### headings, paragraphs, - and 1. lists (with indented
   continuation lines, including nested blockquotes), > blockquotes, pipe
   tables, and inline `code`, **bold**, *italic*, [links](url). */
(function () {
  'use strict';
  const root = document.documentElement;
  const main = document.getElementById('main');
  const src = document.currentScript.getAttribute('data-md');

  let theme = null;
  try { theme = localStorage.getItem('human-or-ai/theme'); } catch (e) { /* private mode */ }
  if (theme) root.dataset.theme = theme;
  const tbtn = document.getElementById('theme');
  if (tbtn) tbtn.addEventListener('click', () => {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('human-or-ai/theme', root.dataset.theme); } catch (e) { /* ignore */ }
  });

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  function inline(s) {
    const codes = [];
    s = String(s).replace(/`([^`]+)`/g, (m, c) => { codes.push(c); return '\u0000' + (codes.length - 1) + '\u0000'; });
    s = esc(s);
    s = s.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/\*([^*]+)\*/g, '<em>$1</em>');
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, l, u) => '<a href="' + u + '"' + (/^https?:/.test(u) ? ' rel="noopener"' : '') + '>' + l + '</a>');
    return s.replace(/\u0000(\d+)\u0000/g, (m, i) => '<code>' + esc(codes[+i]) + '</code>');
  }

  const isTableLine = l => /^\s*\|.*\|\s*$/.test(l);
  const cells = l => l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
  function tableHTML(rows) {
    const body = rows.map(cells).filter(r => !r.every(c => /^:?-{2,}:?$/.test(c)));
    const [head, ...rest] = body;
    return '<div class="tablewrap"><table class="res"><thead><tr>' +
      head.map(h => '<th>' + inline(h) + '</th>').join('') +
      '</tr></thead><tbody>' +
      rest.map(r => '<tr>' + r.map(c => '<td>' + inline(c) + '</td>').join('') + '</tr>').join('') +
      '</tbody></table></div>';
  }

  function listHTML(lines, i, ordered) {
    const itemRe = ordered ? /^(\d+)\.\s+(.*)$/ : /^[-*]\s+(.*)$/;
    let n = 0, start = 0;
    const items = [];
    while (i < lines.length) {
      const m = lines[i].match(itemRe);
      if (!m) break;
      if (ordered) { if (!n && +m[1] !== 1) start = +m[1]; n++; }
      const inner = [ordered ? m[2] : m[1]];
      i++;
      // Continuation lines are indented two or more spaces; a blank line belongs
      // to the item only if indented content follows it.
      while (i < lines.length) {
        if (!lines[i].trim()) {
          let j = i;
          while (j < lines.length && !lines[j].trim()) j++;
          if (j < lines.length && /^\s{2,}/.test(lines[j])) { inner.push(''); i = j; }
          else break;
        } else if (/^\s{2,}\S/.test(lines[i])) { inner.push(lines[i].replace(/^\s{2}/, '')); i++; }
        else break;
      }
      items.push('<li>' + parseBlocks(inner) + '</li>');
    }
    const tag = ordered ? 'ol' : 'ul';
    return { html: '<' + tag + (start > 1 ? ' start="' + start + '"' : '') + '>' + items.join('') + '</' + tag + '>', i };
  }

  function parseBlocks(lines) {
    let html = '', i = 0;
    while (i < lines.length) {
      const l = lines[i];
      if (!l.trim()) { i++; continue; }
      const h = l.match(/^(#{1,3})\s+(.*)$/);
      if (h) { html += '<h' + h[1].length + '>' + inline(h[2]) + '</h' + h[1].length + '>'; i++; continue; }
      if (isTableLine(l)) {
        const rows = [];
        while (i < lines.length && isTableLine(lines[i])) rows.push(lines[i++]);
        html += tableHTML(rows); continue;
      }
      if (/^\s*>/.test(l)) {
        const rows = [];
        while (i < lines.length && /^\s*>/.test(lines[i])) rows.push(lines[i++].replace(/^\s*>\s?/, ''));
        html += '<blockquote>' + parseBlocks(rows) + '</blockquote>'; continue;
      }
      if (/^\s*[-*]\s+/.test(l) || /^\s*\d+\.\s+/.test(l)) {
        const r = listHTML(lines, i, /^\s*\d+\.\s+/.test(l));
        html += r.html; i = r.i; continue;
      }
      const para = [l];
      i++;
      while (i < lines.length && lines[i].trim() &&
        !/^#{1,3}\s/.test(lines[i]) && !isTableLine(lines[i]) &&
        !/^\s*>/.test(lines[i]) && !/^\s*[-*]\s+/.test(lines[i]) && !/^\s*\d+\.\s+/.test(lines[i])) {
        para.push(lines[i++]);
      }
      html += '<p>' + inline(para.join(' ')) + '</p>';
    }
    return html;
  }

  fetch(src, { cache: 'no-cache' }).then(r => {
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.text();
  }).then(text => {
    main.innerHTML = '<div class="md">' + parseBlocks(text.replace(/\r/g, '').split('\n')) + '</div>';
  }).catch(e => {
    main.innerHTML = '<p class="card">Could not load ' + esc(src) + ' (' + esc(e.message) + ').</p>';
  });
})();
