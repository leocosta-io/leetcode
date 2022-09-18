/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let s_ind = 0;
    let t_ind = 0;
    
    if (s.length !== t.length) {
        return false;
    }
    
    while (s_ind < s.length) {      
        t_ind = 0;
        
        while (s.charAt(s_ind) !== t.charAt(t_ind) && t_ind < t.length) {
            t_ind++;
        }
        
        if (s.charAt(s_ind) === t.charAt(t_ind)) {
            t = t.slice(0, t_ind) + t.slice(t_ind+1);
        }
        else {
            return false;
        }
        
        s_ind++;
    }
    return true;
};