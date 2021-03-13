// const sumNestedArray = arr => arr.flat(Infinity).reduce((a,b)=> a+b, 0)

// console.log(sumNestedArray([1,2,[1,2[1,3]],4]))

var k = [1,2,[1,2,[1,3]],4];

const sumNestedArray = (arr) => {
    let sum = 0;
    arr.forEach(item => {
        if(Array.isArray(item)){
            sum += sumNestedArray(item);
        }
        else{
            sum += item; 
        }
    });
    return sum;
}

console.log(sumNestedArray(k));
