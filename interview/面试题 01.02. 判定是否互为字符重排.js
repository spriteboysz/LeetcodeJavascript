/*
 * Author: Deean
 * Date: 2022-10-03 18:16
 * FilePath: interview
 * Description: 
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
    const alphabet = new Array(26).fill(0);
    for (const c of s1) {
        alphabet[c.charCodeAt(0) - 97]++;
    }
    for (const c of s2) {
        alphabet[c.charCodeAt(0) - 97]--;
    }
    return alphabet.every((item) => item === 0);
};

console.log(CheckPermutation("abc", "bca"));
 