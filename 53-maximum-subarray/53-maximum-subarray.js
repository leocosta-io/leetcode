/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0];
    let largest_sum = sum;
    
    for (let i=1; i<nums.length; i++) {
        // console.log("largest_sum", largest_sum);
        // console.log("sum", sum);
        // console.log("nums[i]", nums[i]);
        // console.log();
        
        sum = Math.max(nums[i], sum + nums[i]);
        largest_sum = Math.max(largest_sum, sum);

    }
        
    return largest_sum;
};