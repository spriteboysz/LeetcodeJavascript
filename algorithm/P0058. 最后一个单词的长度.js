/*
 * Author: Deean
 * Date: 2023-06-30 22:36
 * FilePath: algorithm
 * Description:58. 最后一个单词的长度
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    return s.trim().split(" ").at(-1).length;
};


console.log(lengthOfLastWord(s = "   fly me   to   the moon  "));