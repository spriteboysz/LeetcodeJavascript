/*
 * Author: Deean
 * Date: 2023-06-17 22:10
 * FilePath: sword
 * Description:剑指 Offer 58 - I. 翻转单词顺序
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(" ");
};

console.log(reverseWords("  hello world!  "));