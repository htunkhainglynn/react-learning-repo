let array = [1, 2, 3, 4]; 
let result = array.reduce((arr, element) => {
    return element % 2 == 0 ? ((arr.push(element)), arr) : arr
}, []); 
console.log('result', result);