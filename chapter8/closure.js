function getCounter()
{
    let count = 0;
    return function next()
    {
        return count++;
    }
}

let counter = getCounter();

console.log(counter)

console.log("Counter ", counter());
console.log("Counter ", counter());
console.log("Counter ", counter());

