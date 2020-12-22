let arrStu = [
    {name:"a",age:11,gender:1},
    {name:"ka",age:12,gender:0},
    {name:"b",age:15,gender:1},
    {name:"nh",age:9,gender:0},
    {name:"abh",age:18,gender:0},
    {name:"ga",age:22,gender:0},
    {name:"gga",age:14,gender:1},
];

/**
 * gender 1:boy, 0:girl
 * 
 * 1. Sum age arrStu
 * 2. Sum age of gender girl
 * 3. Avg age of gender girl
 */

 //1
 let resultTotalAge = arrStu.reduce((accumulator,currentValue) => {
    //console.log(accumulator,currentValue.age);
    return accumulator + currentValue.age;
 },0);

console.log(resultTotalAge); // 101

//2
let resultTotalAgeGirl = arrStu.reduce((accumulator,currentValue) => {
    if(currentValue.gender == 0){
        //console.log(accumulator,currentValue.age);
        return accumulator + currentValue.age;
    }
    return accumulator;
},0);

console.log(resultTotalAgeGirl); // 61

//3
let count = 0;
let resultAverageAgeGirl = arrStu.reduce((accumulator,currentValue) => {
    if(currentValue.gender == 0){
        count++;
        return accumulator + currentValue.age;
    }
    return accumulator;
},0);
console.log(resultAverageAgeGirl/count);

 