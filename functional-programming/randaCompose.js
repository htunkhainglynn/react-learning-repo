const R = require('ramda');

const toUpper = (x) => x.toUpperCase();
const appendHi = x => x + "hi";

const appendHiAndToUpper = R.compose(toUpper, appendHi);
const toUpperAndAppendHi = R.pipe(toUpper, appendHi);
console.log('appendHiAndToUpper : ', appendHiAndToUpper('hello')); 
console.log('toUpperAndAppendHi : ', toUpperAndAppendHi('hello')); 