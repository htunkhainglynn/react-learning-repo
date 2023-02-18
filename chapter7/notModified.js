let arr = [1, 2, 3, 4, 5, 6, 99];

const isEven = x => x % 2 == 0;
const greaterThan100 = x => x > 100;

// all of these methods returns new array

let firstEven = arr.find(isEven);
console.log("First Even", firstEven);

let greaterThan100Element = arr.find(greaterThan100);
console.log("Greater than 100", greaterThan100Element);

let firstEvenIndex = arr.findIndex(isEven);
console.log("First even index", firstEvenIndex);

let greaterThan100Index = arr.findIndex(greaterThan100);
console.log("Greater than 100 index", greaterThan100Index);

let allEven = arr.every(isEven);
console.log("All even?", allEven);

let allGreaterThan100 = arr.every(greaterThan100);
console.log("All > 100", allGreaterThan100);

let someEven = arr.some(isEven);
console.log("Some even?", someEven);

let someGreaterThan100 = arr.some(greaterThan100);
console.log("Some > 100", someGreaterThan100);

let arr2 = [[1, 2], 3, 4, [5, 6]];
let flat = arr2.flat();
console.log("flatted arr", flat);

// just work for one layer
let arr3 = [[1, [2]], 3, 4, [5, 6]];
let flat2 = arr3.flat();
console.log("flatted arr", flat2);

console.log("concact arr", arr.concat([88, 77, 66]));

console.log("arr", arr);
console.log("slice(1, 3)", arr.slice(1, 3));
console.log("slice(1, 3)", arr.slice(-3, -1));

let indexOf3 = arr.indexOf(3);
console.log("indexOf3", indexOf3);

let indexOf0 = arr.indexOf(0);
console.log("indexOf3", indexOf0);
