const objStu = {
    id: 1,
    name: "cute"
};

// JSON.stringify() : obj -> string
const obj = JSON.stringify(objStu); 
console.log(obj); // {"id":1,"name":"cute"}

// Json.parse() : string -> obj
const objP = JSON.parse(obj);
console.log(objP); // { id: 1, name: 'cute' }

// Want copy arr contain obj -> deep copy
const arr = [
    {
        id: 1,
        name: "cute"
    },
    {
        id: 2,
        name: "Toe"
    }
];

const brr = JSON.parse(JSON.stringify(arr))
console.log(brr); // [ { id: 1, name: 'cute' }, { id: 2, name: 'Toe' } ]