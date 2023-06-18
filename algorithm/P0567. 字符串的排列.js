/*
 * Author: Deean
 * Date: 2023-06-17 23:20
 * FilePath: algorithm
 * Description:567. 字符串的排列
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let n = s1.length, m = s2.length;
    if (n > m) return false;
    let alphabet1 = new Array(26).fill(0);
    let alphabet2 = new Array(26).fill(0);
    for (let i = 0; i < n; i++) {
        alphabet1[s1[i].charCodeAt(0) - 97] += 1;
        alphabet2[s2[i].charCodeAt(0) - 97] += 1;
    }
    if (alphabet1.toString() === alphabet2.toString()) return true;
    for (let i = n; i < m; i++) {
        alphabet2[s2[i - n].charCodeAt(0) - 97] -= 1;
        alphabet2[s2[i].charCodeAt(0) - 97] += 1;
        if (alphabet1.toString() === alphabet2.toString()) {
            return true;
        }
    }
    return false;
};

console.log(checkInclusion(s1 = "ab", s2 = "eidbaooo"));