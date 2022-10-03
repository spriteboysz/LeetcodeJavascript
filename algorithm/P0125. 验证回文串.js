/*
 * Author: Deean
 * Date: 2022-10-03 23:02
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let ss = [];
    for (const c of s.toLowerCase()) {
        let cur = c.charCodeAt(0);
        if (cur >= "a".charCodeAt(0) && cur <= "z".charCodeAt(0) ||
            cur >= "0".charCodeAt(0) && cur <= "9".charCodeAt(0)) {
            ss.push(c);
        }
    }
    return ss.join("") === ss.reverse().join("");
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
 