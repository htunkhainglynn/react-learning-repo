// let arr = [10, 20, 30, 40];

// const add = function(a, b)
// {
//     return a + b;
// };

// const total = arr.reduce(add);
// console.log("total", total); 

// how reduce works 
// a = 10
// b = 20 
// result = 30 = a
// b = 30
// result = 60 = a
// b = 40
// result = 100

// find smallest 
let test_arr = [9, 4, 3, 6, 7, 1, 2, 8];

const smallest = function(a, b)
{
    return a < b ? a : b;
}

const result = test_arr.reduce(smallest);
console.log("smallest", result);

// wrong a little bit read this 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce