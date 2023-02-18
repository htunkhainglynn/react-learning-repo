function add(a, b)
{
    return a + b;
}

let add2 = (a, b) => a + b;

let doubleAndAdd = (a, b) => {
    return (a * a) + (b * b);
}

console.log("add", add(1, 2));
console.log("add2", add2(9, 10));
console.log("doubleAndAdd", doubleAndAdd(2, 3));

