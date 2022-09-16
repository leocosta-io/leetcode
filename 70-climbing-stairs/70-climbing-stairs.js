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
        // console.log();
        // console.log("n1: ", n1);
        // console.log("n2: ", n2);
        // console.log("permussions1: ", factorial(n1+n2));
        // console.log("permussions2: ",factorial(n1)*factorial(n2));
        
        result += factorial(n1+n2) / (factorial(n1)*factorial(n2));
        
        

        n1 -= 2;
        n2 += 1;
    }
    
    return result;
};