const filteredList = require('./6-makeItModular2');

const dir = process.argv[2];
const ext = process.argv[3];

filteredList(dir, ext, (err, list = []) => {
  if (err) return console.error('There was an error: ', err);

  return list.forEach((file) => console.log(file));
});
