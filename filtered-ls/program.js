const fs = require('fs');
const extname = require('path').extname;

const dirPath = process.argv[2];
const filter = process.argv[3];

fs.readdir(dirPath, (err, files) => {
  if(err) return err;
  if(!filter) files.forEach(file => console.log(file));
  files.filter(file => extname(file) === `.${filter}`).forEach(file => console.log(file));
});
