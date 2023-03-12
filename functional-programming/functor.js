const R = require('ramda');

/**
 * In functional programming, it doesn't rely on outer variable, it is enclosed within it self.
 * So what if we need to use variables?
 * Then we can us factor function. It takes a values as input, it has a map function to work on with, valueOf function to return the value.
 */

// this is invalid in functional programming
let a = 2; // a can be changed outside of the scope
let add = x => x + a;

// this is how to solve, this is how object is returned => ({})
const Functor = x => ({
    value: x,
    map: fn => Functor(fn(x)),
    valueOf: () => x
})

/**
 * Functor(x) return Object. Writing .of() is not necessay 
 * but it is a good pratice writing with .of() when creating an object 
 * because it is standarized by javascript community. 
 * It is similar to java factory method. 
 * */

Functor.of = (x) => Functor(x);  
let counter = Functor.of(2);
console.log('counter', counter.valueOf());
let double = counter.map(x => x * 2);
console.log('double', double.valueOf());


/**
 * This has 2 rules.
 * 1) If the Identity function is passed to map, it value must be same with Identity function output.
 * 2) It satisfies composition == map().map()...map()
 * and then it becomes functor function.
 */

// rule 1
let identity = x => x;
counter = Functor.of(1);
let idCounter = counter.map(identity);
console.log('value == map output', idCounter.valueOf() === counter.valueOf());

// rule2

let addOne = x => x + 1;
double = x => x * x;

let addOneDouble = counter.map(addOne).map(double);  // i can call multiple map because my map returns Functor Object

let compose = (f, g) => (x) => f(g(x));
let composeFunctor = counter.map(compose(double, addOne));
console.log('composeFunctor == addOneDouble', composeFunctor.valueOf() == addOneDouble.valueOf());




