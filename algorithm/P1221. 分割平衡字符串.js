/*
 * Author: Deean
 * Date: 2022-09-26 22:51
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let balance = 0, cnt = 0;
    for (const c of s) {
        if (c === "R") {
            balance++;
        } else {
            balance--;
        }
        if (balance === 0) {
            cnt++;
        }
    }
    return cnt;
};

console.log(balancedStringSplit(s = "RLLLLRRRLR"));
 