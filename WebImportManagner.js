const http = require('http');

const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res) =>{
  res.statusCode = 200;
  res.setHeader('Content', 'text/plain');
  res.end('HelloWorld');
});

server.listen(port, hostname, () => {
  console.log(`Server rodando em http://${hostname}:${port}`);
});
