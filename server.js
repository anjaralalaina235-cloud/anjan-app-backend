const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Salama Anja! Mihodina soa aman-tsara ny server-nao.');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server mihodina ao amin'ny http://localhost:${port}/`);
});