const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok: node alpine vuln demo\n');
  } else if (req.url === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('not found\n');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Node alpine vuln demo server listening on 0.0.0.0:${PORT}`);
  console.log(`Node version: ${process.version}`);
  console.log(`Platform: ${process.platform} ${process.arch}`);
});