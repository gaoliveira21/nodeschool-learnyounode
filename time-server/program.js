const net = require('net');

const port = process.argv[2];

const server = net.createServer((socket) => {
  const date = new Date();
  socket.end(`${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`);
});

server.listen(port);
