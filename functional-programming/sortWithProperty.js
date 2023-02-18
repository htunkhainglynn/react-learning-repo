let obj = [
    {
        name: "koko",
        age: 20
    },
    {
        name: "mama",
        age: 22
    },
    {
        name: "kyawgyi",
        age: 18
    },
    {
        name: "susu",
        age: 27
    }
];

const sortBy = property => (a, b) => a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0;

// same as

// function sortBy(property)
// {
//     return function comparator (a, b)
//     {
//         if (a[property] > b[property])
//         {
//             return 1;
//         }
//         else if (a[property] < b[property])
//         {
//             return -1;
//         }
//         else
//         {
//             return 0;
//         }
//     }
// }

// const sortBy = property => {  // sortBy takes one args (property)
//     (objA, objB) => {  // comaprator always needs 2 args to comapre
//         return (objA[property] > objB[property]) ? 1 : (objA[property] < objB[property]) ? -1 : 0;
//     }
// }

console.log("sortedObj", obj.sort(sortBy('age')));  // sortBy returns an function


arr = [10, 30, 200, 12, 40];
console.log("sorted arr", arr.sort((x, y) => x - y));