
// The reduce() method executes the callback once for 
//each assigned value present in the array, taking four arguments:
//  1.accumulator
//  2.currentValue
//  3.currentIndex
//  4.array
// The first time the callback is called, 
//accumulator and currentValue can be one of two values. 
//If initialValue is provided in the call to reduce(), 
//then accumulator will be equal to initialValue, 
//and currentValue will be equal to the first value in the array. 
//If no initialValue is provided, then accumulator will be equal 
//to the first value in the array, and currentValue will be equal 
//to the second.

// Note: If initialValue is not provided, reduce() will execute 
//the callback function starting at index 1, skipping the first 
//index. If initialValue is provided, it will start at index 0.

const arr = [1,3,4,6,8];

const resultReduce = arr.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
},0);

// initialValue : 0 ( ...},0);)
console.log('Total is: ' + resultReduce);

var divide = [{x: 1}, {x:2}, {x:3}].reduce((accumulator,currentValue,index,array) =>
    accumulator * currentValue.x
,1)

console.log(divide);

