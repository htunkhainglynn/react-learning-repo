const R = require('ramda');

/**
 * Flip support currying
 * flip(f) {
    return function(x, y) {
      return f(y, x);
    }
 */

const lessThan0 = R.flip(R.lt)(0);  // partial flip function
const lessThan2 = R.flip(R.lt)(2);

console.log('Any less than 0', R.any(lessThan0)([1, 2])); //=> false
console.log('Any less than 2', R.any(lessThan2)([1, 2])); //=> true

