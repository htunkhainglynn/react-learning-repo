function add(a, b)
{
    console.log("a + b", a + b);
}

function greet(msg)
{
    console.log(`hello ${msg}`);
}

function checkArgs(func)
{
    return function()
    {
        if (func.length == arguments.length)
        {
            return func.apply(null, arguments);
        }
        console.warn(`function ${func.name} requires ${func.length} but spplies ${arguments.length}`);
        return 0;
    }
}

newAdd = checkArgs(add);
newGreet = checkArgs(greet)
newAdd();
newAdd(1, 2);
newGreet();
newGreet("world");


