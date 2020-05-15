const fs = require('fs');
const extname = require('path').extname;

module.exports = (dirPath, extension, callback) => {

  fs.readdir(dirPath, (err, files) => {
    if(err) return callback(err);
    if(!extension) return callback(null, files);
    
    const filteredFiles = files.filter(file => extname(file) === `.${extension}` );

    callback(null, filteredFiles);

  })

}