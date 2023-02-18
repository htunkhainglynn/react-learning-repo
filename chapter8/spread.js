let arr = [100, 200, 300];

console.log(...arr);  // ...arr => 100 200 300

console.log("Math.max", Math.max(...arr));  // es6

console.log("Math.max", Math.max.apply(Math, arr));  // before es6
 
