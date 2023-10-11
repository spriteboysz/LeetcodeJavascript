/*
 * Author: Deean
 * Date: 2023-10-07 23:23
 * FilePath: LCP
 * Description: LCR 032. 有效的字母异位词
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s === t || s.length !== t.length) return false;
    const alphabet = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        alphabet[s.charCodeAt(i) - 97]++;
        alphabet[t.charCodeAt(i) - 97]--;
    }
    return alphabet.every(num => num === 0);
};

console.log(isAnagram(s = "anagram", t = "nagaram"));