/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let s_ind = 0;
    let t_ind = 0;
    
    // s = [...s];
    t = [...t];
    
    if (s.length !== t.length) {
        return false;
    }
    
    // console.log("s: ", s);
    while (s_ind < s.length) {      
        // console.log("s_ind: ", s[s_ind]);
        // console.log("t: ", t);
        // console.log();
        
        t_ind = 0;
        
        // while (s.charAt(s_ind) !== t.charAt(t_ind) && t_ind < t.length) {
        while (s.charAt(s_ind) !== t[t_ind] && t_ind < t.length) {
            t_ind++;
        }
        
        // if (s.charAt(s_ind) === t.charAt(t_ind)) {
        if (s.charAt(s_ind) === t[t_ind]) {
            // t = t.slice(0, t_ind) + t.slice(t_ind+1);
            t.splice(t_ind, 1);
        }
        else {
            return false;
        }
        
        s_ind++;
    }
    return true;
};