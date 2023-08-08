/*
 * Author: Deean
 * Date: 2023-08-08 23:14
 * FilePath: algorithm
 * Description:1016. 子串能表示从 1 到 N 数字的二进制串
 */

/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function (s, n) {
    for (let i = 1; i <= n; i++) {
        if (s.indexOf(i.toString(2)) === -1) {
            return false;
        }
    }
    return true;
};

console.log(queryString(s = "0110", n = 3));