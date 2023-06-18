/*
 * Author: Deean
 * Date: 2023-06-17 22:57
 * FilePath: algorithm
 * Description:680. 验证回文串 II
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    for (let i = 0, n = s.length; i < n / 2; i++) {
        if (s[i] !== s[n - 1 - i]) {
            return check(s.substring(0, i) + s.substring(i + 1)) ||
                check(s.substring(0, n - 1 - i) + s.substring(n - i));
        }
    }
    return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var check = function (s) {
    for (let i = 0, n = s.length; i < n / 2; i++) {
        if (s[i] !== s[n - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(validPalindrome("leetcode"));
console.log(validPalindrome("abca"));