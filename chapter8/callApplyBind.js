let obj = {
    name: 'hkl',
    age: 21,
    greet:function(msg) {
        console.log(` ${msg} name : ${this.name}, age : ${this.age}`);
    }
}

let obj2 = {
    name: 'shwun',
    age: 21
}

obj.greet("hello");

let newGreet = obj.greet;
newGreet.apply(obj, ['hello']);

 let greet2 = obj.greet.bind(obj2);
 greet2('hello');