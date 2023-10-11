/*
 * Author: Deean
 * Date: 2023-10-07 22:27
 * FilePath: LCP
 * Description: LCR 018. 验证回文串
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let ss = "";
    for (const c of s) {
        if (/[A-Za-z0-9]/.test(c)) {
            ss += c.toLowerCase();
        }
    }
    for (let i = 0, n = ss.length; i < n / 2; i++) {
        if (ss[i] !== ss[n - 1 - i]) return false;
    }
    return true;
};

console.log(isPalindrome(s = "A man, a plan, a canal: Panama"));