/*
 * Author: Deean
 * Date: 2022-10-04 08:57
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(" ");
};


console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"))
 