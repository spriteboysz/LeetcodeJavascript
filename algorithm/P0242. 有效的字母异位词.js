/*
 * Author: Deean
 * Date: 2022-10-03 19:37
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const alphabet = new Array(26).fill(0);
    for (const c of s) {
        alphabet[c.charCodeAt(0) - 97]++;
    }
    for (const c of t) {
        alphabet[c.charCodeAt(0) - 97]--;
    }
    return alphabet.every((cnt) => cnt === 0);
};
console.log(isAnagram(s = "anagram", t = "nagaram"));
 