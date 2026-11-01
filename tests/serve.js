'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const port = Number(process.env.PORT || 4173);
const types = {
  '.html': 'text/html; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif',
  '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.mp4': 'video/mp4',
  '.webm': 'video/webm', '.ogg': 'audio/ogg', '.woff2': 'font/woff2',
};

const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let file = path.resolve(root, '.' + pathname);
    if (file !== root && !file.startsWith(root + path.sep)) {
      res.writeHead(403).end('Forbidden');
      return;
    }
    if ((await fs.promises.stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const real = await fs.promises.realpath(file);
    if (!real.startsWith(root + path.sep) || pathname.split('/').some(p => p.startsWith('.')) || pathname.startsWith('/node_modules/')) {
      res.writeHead(403).end('Forbidden');
      return;
    }
    const body = await fs.promises.readFile(real);
    res.writeHead(200, { 'Content-Type': types[path.extname(real)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch (err) {
    res.writeHead(err.code === 'ENOENT' || err.code === 'ENOTDIR' ? 404 : 400).end('Not found');
  }
});
server.listen(port, '127.0.0.1', () => console.log(`Serving at http://127.0.0.1:${server.address().port}`));
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close(() => process.exit(0)));
