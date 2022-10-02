/*
 * Author: Deean
 * Date: 2022-10-02 18:32
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    return word1.reduce((a, b) => a + b) === word2.reduce((a, b) => a + b);
};

console.log(arrayStringsAreEqual(word1 = ["abc", "d", "defg"], word2 = ["abcddefg"]));
 