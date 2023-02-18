function print({name, age})  // address will not use in this func
{
    console.log(`Name : ${name}, Age : ${age}`);
}

let obj = {
    name: "someone",
    age: 10,
    address: "somewhere"
};

print(obj);  // jsut pass entire object and destruct in arg list
