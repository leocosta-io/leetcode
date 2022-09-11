/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    let uniques = [];
    
    while (nums.length > 0) {
        
        a = nums.pop();
        
        for (let o=0; o<uniques.length; o++) {
            if (a == uniques[o]) {
                return true;
            }
        }
        
        uniques.push(a);
    }
        
    return false;
}

// previous solution
// var containsDuplicate = function(nums) {
//     unique = new Set(nums);
        
//     if (unique.size == nums.length) {
//         return false
//     }
//     else {
//         return true
//     }
// };
