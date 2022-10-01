/*
 * Author: Deean
 * Date: 2022-10-01 20:18
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
    let alphabet = new Array(26).fill(0);
    for (const c of word1.split("")) {
        alphabet[c.charCodeAt(0) - 97]++;
    }
    for (const c of word2.split("")) {
        alphabet[c.charCodeAt(0) - 97]--;
    }
    return alphabet.every((item) => Math.abs(item) <= 3);
};

console.log(checkAlmostEquivalent(word1 = "abcdeef", word2 = "abaaacc"));
console.log(checkAlmostEquivalent(word1 = "cccddabba", word2 = "babababab"));
