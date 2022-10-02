/*
 * Author: Deean
 * Date: 2022-10-02 19:19
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
    return words.filter((word) => {
        return s.startsWith(word);
    }).length;
};

console.log(countPrefixes(words = ["a", "a"], s = "aa"));
 