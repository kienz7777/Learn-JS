const arr = [1,3,4,6,8];

// map() : change each element in the array 
const resultMap = arr.map(x => x * 3);
console.log(resultMap); // [ 3, 9, 12, 18, 24 ]

// join() : joins the array into a string 
const resultJoin = arr.join('-');
console.log(resultJoin); // 1-3-4-6-8