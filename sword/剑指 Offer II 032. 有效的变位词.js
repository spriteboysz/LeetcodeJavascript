/*
 * Author: Deean
 * Date: 2022-10-04 22:05
 * FilePath: sword
 * Description: 
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

console.log(isAnagram(s = "rat", t = "car"));
console.log(isAnagram(s = "rat", t = "rat"));
