// named as first class or as value (Higher order function)

// rule 1 : function can assign to a variable and can invoke with that variable
function hello()
{
    console.log("hello, world");
}

let greet = hello;  // do not need ()
console.log("greet is called")
greet();

// rule 2 : a function can be passed to a function as an argument
function acceptFunc(func)
{
    console.log("acceptFunc is called")
    func();
}

acceptFunc(hello);

// rule 3 : a function can be returned from a function
function returnFunc(func)
{
    console.log("returnFunc is called");
    return func;
}
returnFunc(hello)();

// another way
function getFunc()
{
    return function(){
        console.log("getFunc is called");
    }
}
getFunc()();