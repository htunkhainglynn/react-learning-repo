let factorial = (n) => {
    let result = 1;
    console.log("computer factorial ", n);
    for (let i = 1; i <= n; i++)
    {
        result *= n;
    }
    return result;
}

console.log('factorial(3)', factorial(3));
console.log('factorial(3)', factorial(3));

// memorize in catche (fp rule3 single input => single output)
// trade time with space
let memoize = (fn) => {
    const lookupTable = {};
    return (arg) =>
    {
        if(lookupTable[arg] === undefined)
        {
            lookupTable[arg] = fn(arg);
            return lookupTable[arg];
        }
        return lookupTable[arg];
    }
}

let fact = memoize(factorial);
console.log('fact(3)', fact(3));
console.log('fact(3)', fact(3));