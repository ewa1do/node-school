const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);

    const fileList = files.filter((file) => {
      return path.extname(file) === '.' + ext;
    });

    return callback(null, fileList);
  });
};
