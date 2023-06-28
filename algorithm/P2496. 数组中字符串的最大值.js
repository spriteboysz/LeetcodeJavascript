/*
 * Author: Deean
 * Date: 2022/12/17 21:56
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    let max = 0, tmp = 0;
    for (let s of strs) {
        if (isNaN(s)) {
            tmp = s.length;
        } else {
            tmp = parseInt(s);
        }
        max = Math.max(max, tmp);
    }
    return max;
};

console.log(maximumValue(["alic3", "bob", "3", "4", "00000"]));