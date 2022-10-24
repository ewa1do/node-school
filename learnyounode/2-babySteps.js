'use strict';

let sum = 0;
let count = 0;
let index = 2;
const limit = process.argv.length - 2;

function babySteps() {
  if (limit === 0) return console.log('Add some values to the proccess');

  sum += Number(process.argv[index]);

  count++;
  index++;

  if (count === limit) {
    return console.log(sum);
  }

  babySteps();
}

babySteps();
