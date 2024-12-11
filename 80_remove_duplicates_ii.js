/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 1;
  let count = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j - 1] === nums[j]) {
      count++;
    } else {
      count = 1;
    }
    if (count <= 2) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
