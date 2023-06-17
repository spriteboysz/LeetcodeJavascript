/*
 * Author: Deean
 * Date: 2023-06-17 22:14
 * FilePath: sword
 * Description:151. 反转字符串中的单词
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(" ");
};

console.log(reverseWords("a good   example"));