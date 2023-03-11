const R = require('ramda');

const student = [
    {
        name : "Alice",
        gender : "Female",
        location : "Yangon", 
        mark : 60
    },
    {
        name : "Bob",
        gender : "Male",
        location : "Mandalay",
        mark : 85
    },
    {
        name : "Charlie",
        gender : "Male",
        location : "Yangon",
        mark : 95
    },
    {
        name : "Deano",
        gender : "Female",
        location : "Singapore",
        mark : 58
    },
];

const groupBy = (arr) => {
    return function (student) {
        student.name;
    }
}

const byLocation = R.groupBy(student => student.location);
const byMark = R.groupBy(student => {
    const mark = student.mark;
    return mark < 75 ? 'C' :
           mark > 75 && mark < 90 ? 'B' : 'A'
});

const group = propertyName => R.groupBy(student => R.prop(propertyName, student));
console.log("group by location", byLocation(student));
console.log("group by location", byMark(student));
const result = group('gender')(student);
console.log("group by property", result);



  