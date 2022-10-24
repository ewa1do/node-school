const fs = require('fs');

function readFile(path = process.argv[2]) {
  return new Promise((resolve) => {
    fs.readFile(path, 'utf-8', (_, data) => {
      const dataLength = data.split('\n').length - 1;

      resolve(dataLength);
    });
  });
}

(async function () {
  const data = await readFile();

  console.log(data);
})();
