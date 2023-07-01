/*
 * Author: Deean
 * Date: 2023-06-30 23:26
 * FilePath: algorithm
 * Description:409. 最长回文串
 */


/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let map = new Map();
    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    let cnt = 0, flag = 0;
    for (const value of map.values()) {
        if (value % 2 === 1) flag = 1;
        cnt += value >> 1 << 1;
    }
    return cnt + flag;
};

console.log(longestPalindrome(s = "abccccdd"));