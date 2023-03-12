const R = require('ramda');

const obj = {
    a : 1, b : 2, c : 3, d : 4
}

const pick = R.pick(['a', 'd']); //=> {a: 1, d: 4}
console.log('pick', pick(obj));

const pick2 = R.pick(['a', 'e', 'f']); //=> {a: 1}
console.log('pick2', pick2(obj));  // if not present, it returns nothing

const pickAll = R.pickAll(['a', 'e', 'f']); // => {a: 1, e: undefined, f: undefined}
console.log('pickBy', pickAll(obj));

// pickBy is similar to filer the object 
const isEven = (val, key) => val % 2 === 0;
const pickBy = R.pickBy(isEven);
console.log('is even pickBy', pickBy(obj));