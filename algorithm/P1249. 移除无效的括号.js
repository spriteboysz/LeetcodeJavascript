/*
 * Author: Deean
 * Date: 2023-08-11 23:08
 * FilePath: algorithm
 * Description:1249. 移除无效的括号
 */

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let ss = [], high = 0;
    for (let i = 0, n = s.length; i < n; i++) {
        if (s[i] === '(') {
            ss.push(s[i]);
            high++;
        } else if (s[i] === ')') {
            if (high > 0) {
                ss.push(s[i]);
                high--;
            }
        } else {
            ss.push(s[i]);
        }
    }
    s = ss.join("");
    ss = [];
    high = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ')') {
            ss.unshift(s[i]);
            high++;
        } else if (s[i] === '(') {
            if (high > 0) {
                ss.unshift(s[i]);
                high--;
            }
        } else {
            ss.unshift(s[i]);
        }
    }
    return ss.join("");
};

console.log(minRemoveToMakeValid(s = "lee(t(c)o)de)"));