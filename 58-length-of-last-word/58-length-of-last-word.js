/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let word_len = 0;
    let i = s.length-1;
    let char = s.charAt(i);
    
    
    let word_found = char!=" " ? true : false;
    
    for (let i=s.length-1; i>=0; i--)  {
        char = s.charAt(i);
        
        if (!word_found && char!==" ") {
            word_found = true;
        }
        else if (word_found && char===" ") {
            return word_len;
        }
        
        if (word_found) {
            word_len++;
        }
    }
    
    return word_len;
};