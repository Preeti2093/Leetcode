/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let hasMap = new Map();
  let target = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    if (hasMap.has(nums[i])) {
      hasMap.set(nums[i], hasMap.get(nums[i]) + 1);
    } else {
      hasMap.set(nums[i], 1);
    }
  }
  for (const [num, count] of hasMap) {
    if (count > target) {
      return num;
    }
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

var majorityElementtwo = function (nums) {
  let i = 0;
  let count = 1;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] === nums[i]) {
      count++;
    } else {
      count--;
    }
    if(count === 0){
        i = j;
        count = 1;
    }
  }
  return(nums[i]);
};

console.log(majorityElementtwo([2, 2, 1, 1, 1, 2, 2]));
