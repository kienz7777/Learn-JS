
// Rest parameters
// Là 1 hàm có thể gọi với số lượng tham số tùy ý

const sum = (...item) => {
    var result = 0;
    item.forEach((x) => result += x);
    return result;
}

console.log(sum(1,2,3,4,5)); // 15

///////////////////////

const addList = (list,...item) => {
   item.forEach( x => list.push(x));
   return list;
}

console.log(addList([0],1,2,3,5,4,6));  // [ 0, 1, 2, 3, 5, 4, 6 ]


/////////////////////////////

// arguments variable: 

//Arguments đơn giản là danh sách các tham số truyền vào khi gọi hàm
// Ko dùng đc forEach, arrow Function

function sumArg() {
    let total = 0;
    for (let argument of arguments){
        total += argument
    }
    return total;
}

console.log(sumArg(1,2,3,4,5)); // 15
