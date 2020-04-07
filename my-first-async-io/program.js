const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, (err, data) => {
  if(err) return console.log(err);
  console.log(data.toString().split('\n').length - 1);
})
