// python zip function implements in js

const zip = (left, right, fn) => {
    let result = [];
    for (let i = 0; i < Math.min(left.length, right.length); i++)
    {
        result.push(fn(left[i], right[i]));
    }
    return result;
}

const pair = (a, b) => [a, b];

let arr1 = [1, 2, 3];
let arr2 = ['one', 'two', 'three', 'four'];

let paired_arr = zip(arr1, arr2, pair);
console.log("paired arr", paired_arr);