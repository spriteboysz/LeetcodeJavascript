/*
 * Author: Deean
 * Date: 2022/12/18 15:58
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let ss = "";
    for (const c of s) {
        ss += '' + c.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }
    let digits = ss.toString();
    for (let i = 0; i < k && digits.length > 1; i++) {
        let sum = 0;
        for (const c of digits) {
            sum += c.charCodeAt(0) - '0'.charCodeAt(0);
        }
        digits = '' + sum;
    }
    return parseInt(digits);
};

console.log(getLucky(s = "leetcode", k = 2));