/*
 * Author: Deean
 * Date: 2023-09-20 23:57
 * FilePath: algorithm
 * Description:2828. 判别首字母缩略词
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
    if (words.length !== s.length) return false;
    for (let i = 0; i < words.length; i++) {
        if (words[i].charAt(0) !== s.charAt(i)) {
            return false;
        }
    }
    return true;
};
console.log(isAcronym(words = ["never", "gonna", "give", "up", "on", "you"], s = "ngguoy"));