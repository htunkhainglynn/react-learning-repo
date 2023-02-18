let arr = ['1', '2', '3'];

console.log(arr.map(parseInt));  // [1, NaN, NaN]

const unary = (fn) => fn.length === 1 ? fn : (arg) => fn(arg);  // rewrite the function

console.log(arr.map(unary(parseInt)));