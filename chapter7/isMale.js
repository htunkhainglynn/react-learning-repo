let student = [
    {
        name: "mgmg",
        age: 10,
        gender: "male"
    },
    {
        name: "mama",
        age: 12,
        gender: "female"
    },
    {
        name: "koko",
        age: 20,
        gender: "male"
    },
    {
        name: "shwun",
        age: 21,
        gender: "female"
    },
];

const isMale = obj => obj.gender == "male";
const getMale = obj => obj.gender;

const maleList = student.filter(isMale)
                        .map(getMale);

console.log("Male List: ", maleList)