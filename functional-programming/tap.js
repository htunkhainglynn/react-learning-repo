// using tap function makes debuging easier

const R = require('ramda');

const tap = (fn) => (x) => (fn(x), x);

const log = tap(console.log);

const add1 = x => x + 1;
const double = x => x * 2;

const addAndDouble = R.pipe(    
    log,
    add1,
    log, 
    double,
    log
);

addAndDouble(2);