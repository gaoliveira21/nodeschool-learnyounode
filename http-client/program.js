const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
  response.on('data', (data) => {
    console.log(data);
  }).setEncoding('UTF8');

  response.on('error', (err) => console.error(`Error: ${err}`));

});
