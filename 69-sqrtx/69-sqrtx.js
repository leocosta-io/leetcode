/**
 * @param {number} x
 * @return {number}
 */

// var mySqrt = function(x) {
//     let i=1;
//     while (i*i<=x) {
//         i++;
//     }
//     return --i;
// };

var mySqrt = function(x) {
    let i=1;
    let sqrt = 0;
    
    while (x-i >= 0) {
        x = x - i;
        i = i + 2;
        sqrt++;
    }
    return sqrt;
};