// let div = (a, b) => a == 0 || b == 0 ? [new Error("div by zero"), undefined] : [undefined, a/b];

function div(a, b)
{
    if (a != 0 && b != 0)
    {
        return [undefined, a/b];
    }
    return [new Error("div by zero"), undefined];
}

let [err, ans] = div(0, 2);  // array destructuring 
if (err)
{
    console.log("Div by zero", err);
}
else
{
    console.log("ans", ans);
}