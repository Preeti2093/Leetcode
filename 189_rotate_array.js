/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //edge case if K value is greater than array length
  let actualK = k % nums.length;
  let rotatePosition = nums.length - actualK;
  let result = [];
  //insert the rotate position first
  while (rotatePosition < nums.length) {
    result.push(nums[rotatePosition]);
    rotatePosition++;
  }
  //insert remaining array elements 
  for (let i = 0; i < nums.length - actualK; i++) {
    result.push(nums[i]);
  }
  // to return original array 
  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i];
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 4));
