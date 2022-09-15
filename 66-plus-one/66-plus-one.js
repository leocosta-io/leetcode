/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    cont_adding = true;
    i = digits.length-1;
    
    while (cont_adding) {        
        if (digits[i]+1<10) {
            digits[i] += 1;
            cont_adding=false;
        }
        else {
            digits[i] = 0;
            
            if (i==0) {
                digits.unshift(1);
                cont_adding=false;
            }
        }
        
        i--;
    }
    
    return digits;
};