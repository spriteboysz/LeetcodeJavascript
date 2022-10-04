/*
 * Author: Deean
 * Date: 2022-10-04 11:49
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let words = s.split(" ");
    return words.map(word => word.split("").reverse().join("")).join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
 