let arr = [23, 1, 100, 12, 4, 89];
let sorted_arr = [...arr].sort((x, y) => x - y);  // sort needs comparator function [cmd + click on sort()]
console.log("sorted arr", sorted_arr);

let student = [
    {
        name: "mgmg",
        age: 30,
        gender: "male"
    },
    {
        name: "mama",
        age: 12,
        gender: "female"
    },
    {
        name: "koko",
        age: 24,
        gender: "male"
    },
    {
        name: "shwun",
        age: 21,
        gender: "female"
    },
];

function compare(objA, objB)
{
    if (objA.age != objB.age)
    {
        return objA.age - objB.age;
    }
    return objA.name.localeComapre(objB.name);  // same how compare function works
};

let sorted_student = [...student].sort(compare);
console.log("Sorted student", sorted_student);
sorted_student.reverse();
console.log("Reverse student", sorted_student);