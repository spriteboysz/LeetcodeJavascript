/*
 * Author: Deean
 * Date: 2023-06-11 22:02
 * FilePath: algorithm
 * Description:2697. 字典序最小回文串
 */

/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
    let ss = s.split('')
    for (let i = 0, n = s.length; i < Math.ceil(n / 2); i++) {
        ss[i] = ss[n - 1 - i] = s[i] < s[n - 1 - i] ? s[i] : s[n - 1 - i];
    }
    return ss.join('');
};

console.log(makeSmallestPalindrome(s = "leetcode"));