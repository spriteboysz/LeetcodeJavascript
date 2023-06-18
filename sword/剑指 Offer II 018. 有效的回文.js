/*
 * Author: Deean
 * Date: 2023-06-17 22:39
 * FilePath: sword
 * Description:剑指 Offer II 018. 有效的回文
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

console.log(isPalindrome("A man, a plan, a canal: Panama"));