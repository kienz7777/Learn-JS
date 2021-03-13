
var k = {
    one: 1,
    two: 2,
    three: 3
};

const sumObj = (obj) => {
    let sum = 0;
    for(var pro in obj){
        sum += obj[pro];
    }
    return sum
}

console.log(sumObj(k));

