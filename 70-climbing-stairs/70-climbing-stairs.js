/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let n1 = n;
    let n2 = 0;
    let result = 0;
    
    factorial = function (x) {
        let r=1;
        for (let i=x; i>=1; i--) {
            r = r * i;
        }
        return r;
    }
    
    while (n1 >= 0) {
        // permutation
        result += factorial(n1+n2) / (factorial(n1)*factorial(n2));
        n1 -= 2;
        n2 += 1;
    }
    
    return result;
};