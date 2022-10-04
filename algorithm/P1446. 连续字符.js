/*
 * Author: Deean
 * Date: 2022-10-04 21:12
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    const count = new Array(s.length).fill(1);
    for (let i = 1; i < s.length; i++) {
        if (s.charAt(i) === s.charAt(i - 1)) {
            count[i] += count[i - 1];
        }
    }
    return Math.max(...count);
};

console.log(maxPower("abbcccddddeeeeedcba"));
 