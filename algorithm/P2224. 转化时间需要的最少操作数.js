/*
 * Author: Deean
 * Date: 2022-10-04 14:31
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
    let start = current.split(":").map(item => parseInt(item)).reduce((a, b) => a * 60 + b);
    let end = correct.split(":").map(item => parseInt(item)).reduce((a, b) => a * 60 + b);
    let cnt = 0, diff = end - start;
    for (const mm of [60, 15, 5, 1]) {
        cnt += Math.floor(diff / mm);
        diff %= mm;
    }
    return cnt;
};

console.log(convertTime("02:30", "04:35"));
 