/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let insertionPosition = 1;
  let length = nums.length;
  for (let j = 1; j < length; j++) {
    if(nums[j-1]!== nums[j])
    {
      nums[insertionPosition] = nums[j];
      insertionPosition++;
    }
  }
  return insertionPosition;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
