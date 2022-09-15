/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let bottom = 0;
    let higher = nums.length-1;
    let i = Math.round((higher-bottom)/2);
    
    console.log("target: ", target);
    
    while (target != nums[i] && higher-bottom>1) {
    // while (target != nums[i] && higher!=bottom) {
        console.log();
        console.log("bottom: ", bottom);
        console.log("higher: ", higher);
        console.log("nums[i]: ", nums[i]);
        console.log("i: ", i);
        
        
        if (target > nums[i]) {
            bottom = i;
        }
        else {
            higher = i;
        }
        
        // i = Math.round((higher-bottom)/2 + bottom);
        i = Math.round((higher-bottom)/2) + bottom;
        console.log("i after round: ", i);
        console.log("bottom after round: ", bottom);
        console.log("higher after round: ", higher);
    }
    
    if (target <= nums[bottom]) {
        return bottom;
    }
    else if (target > nums[i]) {
        return higher+1;
    }
    else {
        return i;
    }
    
};