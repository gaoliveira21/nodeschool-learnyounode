const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(filePath);
  readStream.on('open', () => {
    readStream.pipe(res);
  });
});

server.listen(port);