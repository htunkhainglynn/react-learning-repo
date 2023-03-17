const R = require('ramda');

const Functor = v =>  ({
    value: v,
    map: (fn) => Functor.of(fn(v)),
    valueOf: () => v
})

Functor.of = x => Functor(x);

const add = (x, y) => x + y;
const curryingAdd = R.curry(add);

const result = Functor.of(20)
                        .map(curryingAdd);  // => return a function that requests y

console.log('result ', result.value(2));


// usecase are coming soon 