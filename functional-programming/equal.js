const R = require('ramda');

const equal3 = R.equals(3);
const arr = [3, 3, 3];
const allEqual3 = R.all(equal3);

console.log('equal3 :', allEqual3(arr));