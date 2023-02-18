let str = "1234567890";
let arr = [...str];
console.log("arr", arr);

// new Array(10) != new Array(10, 20)
let arr1 = new Array(10);  //  this is 10 x empty array
console.log("arr1", arr1);

let arr2 = new Array(10, 20);  // this is [10, 20]
console.log("arr2", arr2);

let arr3 = Array.from(arr2);
console.log("arr3", arr3);

console.log(arr2 == arr3);