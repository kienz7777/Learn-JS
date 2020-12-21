const arr = [1,3,4];

// const brr = arr;    // shallow copy 
// brr.push(5);
// console.log(arr, brr); // [ 1, 3, 4, 5 ] [ 1, 3, 4, 5 ]

// const brr = arr.slice() // deep copy
// brr.push(5);
// console.log(arr, brr); // [ 1, 3, 4 ] [ 1, 3, 4, 5 ]

const brr = [...arr] // spread operator (es6)
brr.push(5);
console.log(arr, brr);// [ 1, 3, 4 ] [ 1, 3, 4, 5 ]

/// spread operator > deep copy > shallow copy 