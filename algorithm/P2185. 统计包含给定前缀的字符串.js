/*
 * Author: Deean
 * Date: 2022-09-28 23:29
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    return words.filter((word) => word.startsWith(pref)).length;
};

console.log(prefixCount(words = ["leetcode", "win", "loops", "success"], pref = "code"));
 