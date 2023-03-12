const R = require('ramda');

const person = {
    location :  {
        address :  {
            city : "Yangon"
        }
    }
}

console.log(R.path(['location', 'address', 'city'])(person));  // => present ? value : undefined

let isYangonThar = R.pathEq(['location', 'address', 'city'], 'Yangon');
console.log("is yangon thar", isYangonThar(person));