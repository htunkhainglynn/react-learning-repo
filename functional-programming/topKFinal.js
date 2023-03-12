const R = require('ramda');

const nums = [1, 1, 1, 2, 2, 3];
let k = 2;

const result = R.pipe(
    // countBy is used to count the frequency by it's identity and returns as object
    R.countBy(R.identity),  // count using its identity[x => x] => {1:3, 2:2, 3:1} 
    R.toPairs,  // =>[[1,3], [2,2], [3,1]]
    R.sort((a, b) => b[1] - a[1]),  // sort using value =>[[1,3], [2,2], [3,1]]
    R.take(k),  // slice array => [[1,3], [2,2]]
    R.map(ele => ele[0]), // return all first elements as array => [1,2]
    R.map(R.unary(parseInt))
);
console.log(result(nums));
