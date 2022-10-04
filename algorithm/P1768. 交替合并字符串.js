/*
 * Author: Deean
 * Date: 2022-10-04 11:15
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let ss = "", maximum = Math.max(word1.length, word2.length);
    for (let i = 0; i < maximum; i++) {
        if (word1.charAt(i)) ss += word1.charAt(i);
        if (word2.charAt(i)) ss += word2.charAt(i);
    }
    return ss;
};

console.log(mergeAlternately(word1 = "ab", word2 = "pqrs"));
console.log(mergeAlternately(word1 = "abcd", word2 = "pq"));
