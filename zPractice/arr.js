const arr = [1,3,4,6,8];


// filter()
// const filter = arr.filter(x => x > 3);
// console.log(filter);    // [ 4, 6, 8 ]

// slice()
// No change default arr
// const slice = arr.slice(1,3); // cut: (start,end-1, , No contain end)
// console.log(slice); //[ 3, 4 ]
// console.log(arr); // [ 1, 3, 4, 6, 8 ]; No change default arr

// splice()
// Change arr
// const splice = arr.splice(1,3); //cut element (x:index start,y:number) 
// console.log(splice); //[ 3, 4, 6 ]
// console.log(arr); //[ 1, 8 ]    ; Change arr


// shift()
// Change arr
// const shift = arr.shift();  // get and remove the first element
// console.log(shift); // 1
// console.log(arr);   // [ 3, 4, 6, 8 ]

// unshift()
// Change arr
// const unShift = arr.unshift(7,4,2);
// console.log(unShift);   // 8 : length of arr
// console.log(arr); // [7, 4, 2, 1, 3, 4, 6, 8]

// indexOf()
// No change arr
// const indexOf = arr.indexOf(4); // find index of X, if no exit return -1
// console.log(indexOf);   // 2


// reduce() 
// dùng để thực thi một hàm lên từng phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất.

// const reduce = arr.reduce((accumulator,currentValue,currentIndex,array) => {
//     return accumulator + currentValue;
// },0);
// console.log(reduce);    // 22

