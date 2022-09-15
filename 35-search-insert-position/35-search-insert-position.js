/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let bottom = 0;
    let higher = nums.length-1;
    let i = Math.round((higher-bottom)/2);
    
    while (target != nums[i] && higher-bottom>1) {        
        if (target > nums[i]) {
            bottom = i;
        }
        else {
            higher = i;
        }
        
        i = Math.round((higher-bottom)/2) + bottom;
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