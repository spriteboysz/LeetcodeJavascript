/*
 * Author: Deean
 * Date: 2023-07-01 11:14
 * FilePath: algorithm
 * Description:392. 判断子序列
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let m = s.length, n = t.length;
    if (m > n) return false;
    let pos2 = 0;
    for (let pos1 = 0; pos1 < n;) {
        if (t[pos1] === s[pos2]) {
            pos1++;
            pos2++;
        } else {
            pos1++;
        }
    }
    return pos2 === m;
};

console.log(isSubsequence(s = "abc", t = "ahbgdc"));