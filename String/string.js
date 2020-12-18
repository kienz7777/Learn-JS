var str = "Hello every body tod";

// split() : cut string -> arr
console.log(str.split(' '));//['Hello', 'every','body','today']

// subString(i,j) : cut string with start:i, end:j
console.log(str.substring(6,11)); // every

// slice(i,j) : cut string with start:i, end:j
console.log(str.slice(6,11)); // every

// subStr(i,l) : cut string with start:i, length:l
console.log(str.substr(6,5)); // every

// Different bw subString and slice
// substring(11,6) -> substring(6,11) 
// slice(11,6) != slice(6,11)
// substring(6,-11) -> substring(6,0) -> substring(0,6) // Hello 
// slice(6,-11) -> j = str.length - Math.abs(-11) = 20 - 11 = 9 //
// str.slice(6,-11) -> slice(6,9) // eve