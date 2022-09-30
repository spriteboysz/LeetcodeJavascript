/*
 * Author: Deean
 * Date: 2022-09-30 23:35
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    let alphabet = new Array(26).fill(0);
    s.split("").forEach((c) => {
        alphabet[c.charCodeAt(0) - 97]++;
    });
    t.split("").forEach((c) => {
        alphabet[c.charCodeAt(0) - 97]--;
    });
    let sum = 0;
    for (let i = 0; i < 26; i++) {
        if (alphabet[i] > 0) sum += alphabet[i];
    }
    return sum;
};

console.log(minSteps(s = "leetcode", t = "practice"));
 