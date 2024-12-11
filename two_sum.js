/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumhashmap = (nums, target) => {
  let hashMap = new Map();
  let diff;
  for (let i = 0; i <= nums.length; i++) {
    diff = target - nums[i];
    if (hashMap.has(diff)) return [hashMap.get(diff), i];
    else {
      hashMap.set(nums[i], i);
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumPointer = function (nums, target) {
  const sortedarray = nums.sort((a, b) => a - b);
  let leftpointer = 0;
  let rightpointer = nums.length - 1;
  while (leftpointer <= rightpointer) {
    let currentsum = sortedarray[leftpointer] + sortedarray[rightpointer];
    if (currentsum === target) return [leftpointer, rightpointer];
    else if (currentsum < target) leftpointer++;
    else if (currentsum > target) rightpointer--;
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumNaive = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let firstnum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let secondnum = nums[j];
      if (firstnum + secondnum === target) return [i, j];
    }
  }
};

// console.log(twoSumNaive([1, 2, 4, 5], 7));
// console.log(twoSumPointer([1, 2, 4, 5], 7));
console.log(twoSumhashmap([1, 2, 4, 5], 7));
