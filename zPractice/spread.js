
//sao chép mảng 
const fruits = ['🍏','🍊','🍌','🍉','🍍']
//sao chép mảng fruits sang mảng moreFruits
const moreFruits = [...fruits]; 
console.log(moreFruits) // Array(5) [ "🍏", "🍊", "🍌", "🍉", "🍍" ]



////////Thêm phần tử vào mảng
const fewFruit = ['🍏','🍊','🍌']
const fewMoreFruit = ['🍉', '🍍', ...fewFruit] //thêm các phần tử của mảng fewFruit vào mảng fewMoreFruit
console.log(fewMoreFruit) //  Array(5) [ "🍉", "🍍", "🍏", "🍊", "🍌" ]



//Kết hợp 2 hay nhiều object với nhau
const objectOne = {hello: "🤪"}
const objectTwo = {world: "🐻"}

// Kết hợp objectOne, objectTwo lại trong objectThree và thêm thuộc tính laugh
const objectThree = {...objectOne, ...objectTwo, laugh: "😂"}
console.log(objectThree) // Object { hello: "🤪", world: "🐻", laugh: "😂" }

// Tương tự chúng ta có objectFour, với laugh là một hàm
const objectFour = {...objectOne, ...objectTwo, laugh: () => {console.log("😂".repeat(5))}}
objectFour.laugh() // 😂😂😂😂😂