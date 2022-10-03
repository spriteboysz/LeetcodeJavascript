/*
 * Author: Deean
 * Date: 2022-10-03 17:23
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var findTheDifference = function (s, t) {
    const alphabet = new Array(26).fill(0);
    for (const c of s) {
        alphabet[c.charCodeAt(0) - 97]--;
    }
    for (const c of t) {
        alphabet[c.charCodeAt(0) - 97]++;
    }
    return String.fromCharCode(alphabet.indexOf(1) + 97);
};

console.log(findTheDifference(s = "", t = "y"));
 