/**
 * Currying process is make multiple inputs to single input.
 */

const R = require('ramda');
// const add = x => y => x + y;
const add = (x) => {  // curry function
    return function(y) {
        return x + y;
    }
}
const add3 = add(3); // partial function (needs another input)

console.log("add3 to 2 :", add3(2));
console.log("ramda add1", R.add(2, 3)); // randa automatically does currying process
console.log("ramda add2", R.add(2)(3));