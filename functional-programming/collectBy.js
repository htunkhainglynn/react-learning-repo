const R = require('ramda');

const student = [
    {
        name : 'alice',
        gender : 'female'
    },
    {
        name : 'bob',
        gender : 'male'
    },
    {
        name : 'charlie',
        gender : 'male'
    },
    {
        name : 'david',
        gender : 'male'
    }
]

const collectByGender = R.collectBy(R.prop('gender'));
console.log(collectByGender(student));