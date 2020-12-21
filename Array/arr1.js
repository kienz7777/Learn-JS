const arr = [1,3,4,6,8];

// map() : change each element in the array , no change first arr
const resultMap = arr.map(x => x * 3);
console.log(resultMap); // [ 3, 9, 12, 18, 24 ]
console.log(arr);// [1,3,4,6,8]

// join() : joins the array into a string 
const resultJoin = arr.join('-');
console.log(resultJoin); // 1-3-4-6-8

// splice(x,y) : cut element (x:index start,y:number) 
// Change first arr
const resultSplice = arr.splice(2,2);
console.log(resultSplice); // [ 4, 6 ]
console.log(arr); // [ 1, 3, 8 ]
