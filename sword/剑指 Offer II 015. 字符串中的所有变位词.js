/*
 * Author: Deean
 * Date: 2023-06-17 23:26
 * FilePath: sword
 * Description:剑指 Offer II 015. 字符串中的所有变位词
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let index = [];
    let n = s.length, m = p.length;
    if (n < m) return index;
    let alphabet1 = new Array(26).fill(0);
    let alphabet2 = new Array(26).fill(0);
    for (let i = 0; i < m; i++) {
        alphabet1[s[i].charCodeAt(0) - 97] += 1;
        alphabet2[p[i].charCodeAt(0) - 97] += 1;
    }
    if (alphabet1.toString() === alphabet2.toString()) index.push(0);
    for (let i = m; i < n; i++) {
        alphabet1[s[i - m].charCodeAt(0) - 97] -= 1;
        alphabet1[s[i].charCodeAt(0) - 97] += 1;
        if (alphabet1.toString() === alphabet2.toString()) {
            index.push(i - m + 1);
        }
    }
    return index;
};

console.log(findAnagrams(s = "cbaebabacd", p = "abc"));