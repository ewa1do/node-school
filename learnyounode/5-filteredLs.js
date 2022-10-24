const fs = require('fs');
const path = require('path');

function readDirectory(dir = process.argv[2], delimiter = process.argv[3]) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) reject(err);

      const filteredLs = files.filter((file) => {
        return path.extname(file) === '.' + delimiter;
      });

      resolve(filteredLs);
    });
  });
}

(async function () {
  const files = await readDirectory();

  files.forEach((file) => console.log(file));
})();
