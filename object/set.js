//Set là tập hợp các giá trị không bị trùng lặp, 
//nghĩa là trong một set không thể có hai giá trị bằng nhau.

const s = new Set(['red', 'blue', 'sweet', 'red', 'you'])
console.log(s) // Set (4) {'red', 'blue', 'sweet', 'you'}

console.log([...s]); // [ 'red', 'blue', 'sweet', 'you' ]