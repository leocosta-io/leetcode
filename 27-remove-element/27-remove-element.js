/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i=0; i<nums.length; i++) {
        // console.log(nums);
        // console.log(i);
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    console.log(nums);
    
    // return nums;
};