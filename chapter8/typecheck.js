function add (a, b)
{
    if (add.length != arguments.length)
    {
        console.warn(`not enough parameter, required ${add.length} but spplied ${arguments.length}`);
        return 0;
    }
    console.log("add.length == arguments.length", add.length == arguments.length);
    return a + b;
}

console.log("add(1)", add(1));  // add.length = 2, arguments.length = 1;
console.log("add(1, 2)", add(1, 2));
