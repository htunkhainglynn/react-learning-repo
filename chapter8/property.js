// same as static in java

function nextId()
{
    return nextId.count++;
}

nextId.count = 0;  // nextId() becomes object like function

console.log("type of nextId()", typeof nextId);
console.log("nextId()", nextId());
console.log("nextId()", nextId());
console.log("nextId()", nextId());
