let arr = ['1', '2', '3'];

console.log(arr.map(parseInt));  // [1, NaN, NaN]

// rewrite the function, if function have one arg give back the org function, else remove all args except the first one
const unary = (fn) => fn.length === 1 ? fn : (arg) => fn(arg);  

console.log(arr.map(unary(parseInt)));