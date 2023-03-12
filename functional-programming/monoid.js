var Sum = { empty: () => 0, concat: (x, y) => x + y};
var add = { empty: () => 1, concat: (x, y) => x * y};

var result = [1, 2, 3, 4, 5, 6].reduce(Sum.concat, Sum.empty()); // Sum.empty() = 0; it becomes accumulator for Sum.concat
console.log('result', result);
