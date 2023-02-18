let arr = [1, 2, 3, 4];

arr.push(5, 6);
console.log("arr.push()", arr);

arr.pop();
console.log("arr.pop()", arr);

// remove from start
arr.shift();
console.log("arr.shift()", arr);

// add from start
arr.unshift(90, 200);
console.log("arr.unshift()", arr);

// splice(ဘယ်indexကစ, ဘယ်နှလုံးဖျက်, ကျန်တာအကုန် အဲ့ index ကပြန်ထည့်)
let array = [1, 2, 3, 4, 5, 6];
array.splice(1, 2, 100, 200, 300);
console.log("splice(1, 2, 100, 200, 300)", array);

let arr2 = new Array(10);
arr2.fill(9, 3);  // element, from
console.log("arr2.fill()", arr2);