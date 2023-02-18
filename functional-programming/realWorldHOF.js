const every = (arr, func) => {
    let result = true;
    for (const value of arr)
    {
        result = result && func(value);
    }

    return result;
}

let arr = [10, 20, 30, 40];
let everyIsEven = every(arr, (x) => x % 2 == 0);
console.log("every is even?", everyIsEven);

