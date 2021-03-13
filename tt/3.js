// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []
// Example 4:

// Input: candidates = [1], target = 1
// Output: [[1]]
// Example 5:

// Input: candidates = [1], target = 2
// Output: [[1,1]]

var candidates = [2, 5, 6], target = 12;

const combinationSum = (nums, target) => {
    let combinations = [];
    nums.sort((a, b) => a - b);
    function backtrack(tempList, remaining, start) {
        for (let i = start; i < nums.length && nums[i] <= remaining; i++) {
            if (nums[i] === remaining) {
                combinations.push([...tempList, nums[i]]);
            } else {
                backtrack([...tempList, nums[i]], remaining - nums[i], i);
            }
        }
    }

    backtrack([], target, 0);
    return combinations;
}

console.log(combinationSum(candidates,target));

// console.log([...candidates,[9]]);