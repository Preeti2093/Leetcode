/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let firstIndex = 0;
  let lastIndex = nums.length-1;
  while(firstIndex <= lastIndex){
    while(nums[firstIndex] === val && firstIndex < lastIndex)
    {
        swap(nums, firstIndex, lastIndex);
        lastIndex--;
    }
    firstIndex++;
  }
  for(let i =0; i<nums.length; i++)
  {
    if(nums[i] === val)
        return i;
  }
 
};

var swap = function (nums, firstIndex, lastIndex) {
    let temp = nums[lastIndex];
    nums[lastIndex] = nums[firstIndex]; 
    nums[firstIndex] = temp;
}; 



console.log(removeElement([1,2,2,1], 1));
