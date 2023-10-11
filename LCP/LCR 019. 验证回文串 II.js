/*
 * Author: Deean
 * Date: 2023-10-07 22:28
 * FilePath: LCP
 * Description: LCR 019. 验证回文串 II
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    /**
     * @param {string} s
     * @return {boolean}
     */
    var process = function (s) {
        for (let i = 0, n = s.length; i < n / 2; i++) {
            if (s[i] !== s[n - 1 - i]) return false;
        }
        return true;
    }

    for (let i = 0, n = s.length; i < n / 2; i++) {
        if (s[i] !== s[n - i - 1]) {
            return process(s.substring(0, i) + s.substring(i + 1)) ||
                process(s.substring(0, n - 1 - i) + s.substring(n - i));
        }
    }
    return true;
};

console.log(validPalindrome(s = "aba"));