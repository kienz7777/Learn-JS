const someArr = [1,2,3];
let newArr = someArr.map(item => item*2);

const myMap = (arr,cb) => {
    let newArrMap = [];
    for(let i in arr){
        newArrMap.push(cb(arr[i]));
    }
    return newArrMap;
}

let newArrWithMap = myMap(someArr, x => x*2);
console.log(newArrWithMap);

