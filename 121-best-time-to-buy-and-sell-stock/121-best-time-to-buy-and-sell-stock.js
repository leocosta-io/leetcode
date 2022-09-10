/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let diff = 0;
    let leftmin = prices[0];

    for (let i=1; i<prices.length; i++) {
        diff = diff > prices[i]-leftmin ? diff : prices[i]-leftmin;
        leftmin = leftmin < prices[i] ? leftmin : prices[i];
    }
    
    return diff;
};