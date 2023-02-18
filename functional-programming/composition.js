const appendHi = (str) => 'hi' + str;
const toUpper = (str) => str.toUpperCase();

const compose = (f, g) => (x) => f(g(x));

/*
    composition goes like this appendHi -> toUpper f(g(x))
    koko becomes x and hikoko becomes input for toUpper function
*/

let modify = compose(toUpper, appendHi);  
console.log("append hi and change to uppper", modify('koko'));


// add 1 and double
const add1 = (x) => x + 1;
const double = (x) => x * 2;

let addDouble = compose(double, add1);
console.log('add 1 and double', addDouble(3)); 