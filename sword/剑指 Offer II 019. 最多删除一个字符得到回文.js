/*
 * Author: Deean
 * Date: 2023-06-17 22:48
 * FilePath: sword
 * Description:剑指 Offer II 019. 最多删除一个字符得到回文
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    for (let i = 0, n = s.length; i < n / 2; i++) {
        if (s[i] !== s[n - i - 1]) {
            return process(s.substring(0, i) + s.substring(i + 1)) ||
                process(s.substring(0, n - 1 - i) + s.substring(n - i));
        }
    }
    return true;
};

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

console.log(validPalindrome(s = "abca"));