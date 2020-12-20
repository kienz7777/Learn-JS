const arr = [1,3,4,6,8];

// filter() : get arr
const resultFilter = arr.filter(item => item > 3);
console.log(resultFilter);  // [ 4, 6, 8 ]

// find() : get first value 
const resultFind = arr.find(item => item > 3);
console.log(resultFind);  // 4

// include()
const resultInclude = arr.includes(4);
console.log(resultInclude);  // true