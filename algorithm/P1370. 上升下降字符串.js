/*
 * Author: Deean
 * Date: 2022-10-04 10:45
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
    let alphabet = new Array(26).fill(0);
    for (const c of s) {
        alphabet[c.charCodeAt(0) - 97]++;
    }
    let ss = "";
    while (ss.length < s.length) {
        for (let i = 0; i < 26; i++) {
            if (alphabet[i]) {
                ss += String.fromCharCode(i + 'a'.charCodeAt(0));
                alphabet[i]--;
            }
        }
        for (let i = 25; i >= 0; i--) {
            if (alphabet[i]) {
                ss += String.fromCharCode(i + 'a'.charCodeAt(0));
                alphabet[i]--;
            }
        }
    }
    return ss;
};

console.log(sortString("leetcode"));
 