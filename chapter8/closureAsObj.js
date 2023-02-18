function Stack()
{
    let items = [];

    function push(element)
    {
        items.push(element);
    }

    function pop()
    {
        return items.pop();
    }

    return {
        push, pop
    }
}

let stack = Stack();
stack.push(100);
stack.push(200);

console.log("stack.pop()", stack.pop());
console.log("stack.pop()", stack.pop());