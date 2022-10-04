/*
 * Author: Deean
 * Date: 2022-10-04 21:32
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
    const alphabet_s = new Array(26).fill(0);
    const alphabet_t = new Array(26).fill(0);
    for (const c of s) {
        alphabet_s[c.charCodeAt(0) - 97]++;
    }
    for (const c of target) {
        alphabet_t[c.charCodeAt(0) - 97]++;
    }
    let minimum = s.length;
    for (let i = 0; i < 26; i++) {
        if (alphabet_t[i] === 0) continue;
        minimum = Math.min(minimum, Math.floor(alphabet_s[i] / alphabet_t[i]));
    }
    return minimum;
};

console.log(rearrangeCharacters("abcba", "abc"));
console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa"));
