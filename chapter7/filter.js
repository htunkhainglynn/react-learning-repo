let arr = [1, 2, 3, 4, 5];

const isEven = (x) => (x % 2) == 0;
const doubleFunc = (x) => x * x;

const evenList = arr.filter(isEven);
const doubleList = arr.map(doubleFunc);
const evenDouble = arr.filter(isEven).map(doubleFunc);

console.log("evenList", evenList);
console.log("doubleList", doubleList);
console.log("evenDouble", evenDouble);