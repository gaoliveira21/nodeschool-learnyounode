const http = require('http');
const bl = require('bl');

const urls = process.argv.slice(2, process.argv.length);

const queue = [];
let count = 0;

urls.forEach((url, index) => {
  http.get(url, response => {
    response.pipe(bl((err, data) => {

      if(err) console.error(err);

      queue[index] = data.toString('utf8');
      count++;

      if(count === 3) {
        queue.forEach(res => console.log(res));
      }

    }));
  });
});


