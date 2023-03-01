/*
 * Author: Deean
 * Date: 2023-02-28 23:03
 * FilePath: algorithm
 * Description: 
 */

var haveConflict = function (event1, event2) {
    return !(event1[0] > event2[1] || event2[0] > event1[1]);
};

console.log(haveConflict(event1 = ["01:15", "02:00"], event2 = ["02:00", "03:00"]));