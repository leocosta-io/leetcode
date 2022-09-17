/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let ind1 = 0;
    let ind2 = 0;
    
    while (ind2 < n) {
        // console.log("nums1: ", nums1);
        // console.log("ind1: ", nums1[ind1]);
        // console.log("nums2: ", nums2);
        // console.log("ind2: ", nums2[ind2]);
        // console.log();
        
        if (nums2[ind2] <= nums1[ind1]) {
            nums1.splice(ind1, 0, nums2[ind2]);
            nums1.pop();
            m++;
            ind2++;
        } 
        else if (ind1 == m) {
            nums1.splice(ind1, 0, nums2[ind2]);
            nums1.pop();
            m++;
            ind2++;
        }
        
        ind1++;
    }
    
    return nums1;
    
};