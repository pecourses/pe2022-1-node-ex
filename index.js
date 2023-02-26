const http = require('http');

const httpServer = http.createServer((request, response) => {
  console.log('url :>> ', request.url);
  console.log('method :>> ', request.method);

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end('result');
});

httpServer.listen(5000, 'localhost', () => {
  console.log(`Server is listening port 5000, host "localhost"`);
});
