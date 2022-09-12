/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let filler = 9999;
    let previous = null;
    let current = null;
    
    for (let i=0; i<nums.length; i++) {
        current = nums[i];
        
        // console.log("-----------");
        // console.log("nums: ", nums);
        // console.log("previous: ", previous);
        // console.log("current: ", current);
        // console.log("i: ", i);
        
        
        if (previous == current) {
            // nums[i] = filler;
            nums.splice(i, 1);
            i--;
        }
        else {
            previous = current;
        }
    }    
};