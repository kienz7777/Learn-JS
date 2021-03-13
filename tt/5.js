//For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, 
// return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.

//Two sum problem

// const k = [3, 5, 2, -4, 8, 11];
// const sum = 7;

// const twoSum = (arr,t) => {
//     var result = [];
//     for(var i =0;i<arr.length-1;i++){
//         for(var j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j] == t){
//                 result.push([arr[i],arr[j]]);
//             }
//         }
//     }
//     return result;
// }

// console.log(twoSum(k,sum));

// all pairs in the array that sum up to S
function twoSum(arr, S) {

    var sums = [];
    var hashTable = {};
  
    // check each element in array
    for (var i = 0; i < arr.length; i++) {
   
      // calculate S - current element
      var sumMinusElement = S - arr[i];
  
      // check if this number exists in hash table
      // if so then we found a pair of numbers that sum to S
      if (hashTable[sumMinusElement.toString()] !== undefined) { 
        sums.push([arr[i], sumMinusElement]);
      }
  
      // add the current number to the hash table
      hashTable[arr[i].toString()] = arr[i];
  
    }
  
    // return all pairs of integers that sum to S
    return sums;
  
  }
  
console.log(twoSum([3, 5, 2, -4, 8, 11], 7));  