/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i_a = a.length-1;
    let i_b = b.length-1;
    let aItem = 0;
    let bItem = 0;
    let plus1 = 0;
    let totalItem = 0;
    let total = "";
    
    console.log("a: ", a);
    console.log("b: ", b);
    
    while ( i_a>=0 || i_b>=0 || plus1>0 ) {
        console.log();
        console.log("i_a: ", i_a);
        console.log("i_b: ", i_b);
        console.log("plus1: ", plus1);
        
        
        totalItem = 0;
        
        aItem = i_a>=0 ? parseInt(a[i_a]) : 0;
        bItem = i_b>=0 ? parseInt(b[i_b]) : 0;
        
        
        totalItem = aItem + bItem + plus1;
        
        console.log(totalItem);
        
        if (totalItem===0) {
            total = "0" + total;
            plus1 = 0;
        }
        else if (totalItem===1) {
            total = "1" + total;
            plus1 = 0;
        }
        else if (totalItem===2) {
            total = "0" + total;
            plus1 = 1;
        }
        else if (totalItem===3) {
            total = "1" + total;
            plus1 = 1;
        }
        
        i_a--;
        i_b--;
    }
    
    return total;
};