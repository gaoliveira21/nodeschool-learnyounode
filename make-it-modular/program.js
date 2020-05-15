const dirPath = process.argv[2];
const filter = process.argv[3];

const readDir = require('./mymodule');

readDir(dirPath, filter, (err, files) => {
  if(err) return err;
  files.forEach(file => console.log(file));
});
