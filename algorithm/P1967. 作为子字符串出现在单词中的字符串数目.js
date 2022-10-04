/*
 * Author: Deean
 * Date: 2022-10-04 10:42
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
    return patterns.filter((pattern) => word.includes(pattern)).length;
};

console.log(numOfStrings(patterns = ["a", "b", "c"], word = "aaaaabbbbb"));
 