/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let toChange = [];
    let newIntervalI = null;
    let inserted = false;
    
   
    for (let i=0; i<intervals.length; i++) {
        // console.log("intervals: ", intervals);
        // console.log("newInterval: ", newInterval);
        // console.log("checking: ", intervals[i]);
        
        // join intervals
        if ( (newInterval[0] >= intervals[i][0] && newInterval[0] <= intervals[i][1])
           || (newInterval[1] >= intervals[i][0] && newInterval[1] <= intervals[i][1]) 
           || (newInterval[0] <= intervals[i][0] && newInterval[1] >= intervals[i][1]) ) {


            smallest = newInterval[0] < intervals[i][0] ? newInterval[0] : intervals[i][0];
            biggest = newInterval[1] > intervals[i][1] ? newInterval[1] : intervals[i][1];

            newInterval = [smallest, biggest];
            
            // console.log("entered 1");

            if (newIntervalI != null) {
                // console.log("entered 2");
                intervals[newIntervalI] = newInterval;
                intervals.splice(i, 1);
                i--;
            }
            else {
                // console.log("entered 3");
                newIntervalI = i;
                intervals[newIntervalI] = newInterval;
            }

            inserted = true;
        }
        // current interval is bigger than newInterval, insert newInsert previous to the current
        else if (newInterval[1] < intervals[i][0] && !inserted) {
            intervals.splice(i, 0, newInterval);
            i++;
            inserted = true;        
        }
        
        // console.log("--------")
    }
    
    if (! inserted) {
        intervals.push(newInterval);
    }
    
    return intervals;
};