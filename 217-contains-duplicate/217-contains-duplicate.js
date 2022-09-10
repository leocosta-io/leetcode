/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    unique = new Set(nums);
        
    if (unique.size == nums.length) {
        return false
    }
    else {
        return true
    }
};