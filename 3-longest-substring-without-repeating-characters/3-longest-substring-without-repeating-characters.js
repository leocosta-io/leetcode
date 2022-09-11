/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestString = "";
    let currentString = "";
    let cutted = false;
    
    for (let i=0; i<s.length; i++) {
        // console.log("------------");
        // console.log("currentString ", currentString);
        // console.log("longestString ", longestString);
        
        currentChar = s.charAt(i);
        for (let o=0; o<currentString.length; o++) {
            if (currentString.charAt(o) == currentChar) {
                if (currentString.length > longestString.length) {
                    longestString = currentString;
                }
                currentString = currentString.slice(o+1);
        
            }
        }
        
        currentString = currentString.concat(currentChar);
        
    }
    
    if (currentString.length > longestString.length) {
        longestString = currentString;
    }
    
    return longestString.length;
};