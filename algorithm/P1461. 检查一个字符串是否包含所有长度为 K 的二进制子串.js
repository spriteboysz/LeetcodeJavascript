/*
 * Author: Deean
 * Date: 2023-08-07 23:30
 * FilePath: algorithm
 * Description:1461. 检查一个字符串是否包含所有长度为 K 的二进制子串
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    let set = new Set();
    for (let i = 0, n = s.length; i + k <= n; i++) {
        set.add(s.slice(i, i + k));
    }
    return set.size === 2 ** k;
};

console.log(hasAllCodes(s = "00110110", k = 2));