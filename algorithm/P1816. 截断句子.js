/*
 * Author: Deean
 * Date: 2022-10-01 14:51
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    return s.split(" ").slice(0, k).join(" ");
};

console.log(truncateSentence("What is the solution to this problem", 4));
 