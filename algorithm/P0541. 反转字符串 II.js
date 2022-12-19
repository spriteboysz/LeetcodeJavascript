/*
 * Author: Deean
 * Date: 2022/12/19 23:12
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let dp = [], k_dp = [];
    for (let i = 0; i < s.length; i++) {
        k_dp.push(s[i]);
        if (k_dp.length === k || (k_dp.length < k && i === s.length - 1)) {
            k_dp.reverse();
        }
        if (k_dp.length === 2 * k || i === s.length - 1) {
            dp = dp.concat(k_dp);
            k_dp = [];
        }
    }
    return dp.join("");
};

console.log(reverseStr(s = "abcdefg", k = 2));
console.log(reverseStr(s = "abcd", k = 2));