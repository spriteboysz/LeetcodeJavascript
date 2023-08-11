/*
 * Author: Deean
 * Date: 2023-08-11 21:46
 * FilePath: algorithm
 * Description:2186. 使两字符串互为字母异位词的最少步骤数
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    let alphabet = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        alphabet[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < t.length; i++) {
        alphabet[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    let cnt = 0;
    for (let i = 0; i < 26; i++) {
        cnt += Math.abs(alphabet[i]);
    }
    return cnt;
};

console.log(minSteps(s = "leetcode", t = "coats"));