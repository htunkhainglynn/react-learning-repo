const R = require('ramda');

const div = (x, y) => x / y;

const arr = [0, 1, 2, 3, 4];

const avg = R.converge(div, [R.sum, R.length]);

console.log('average :', avg(arr));