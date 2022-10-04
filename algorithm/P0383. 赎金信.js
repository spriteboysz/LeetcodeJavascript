/*
 * Author: Deean
 * Date: 2022-10-04 21:05
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const alphabet = new Array(26).fill(0);
    for (const c of magazine) {
        alphabet[c.charCodeAt(0) - 97]++;
    }
    for (const c of ransomNote) {
        alphabet[c.charCodeAt(0) - 97]--;
    }
    return alphabet.every(num => num >= 0);
};

console.log(canConstruct(ransomNote = "aa", magazine = "aab"));
 