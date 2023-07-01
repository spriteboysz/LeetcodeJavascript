/*
 * Author: Deean
 * Date: 2023-06-30 23:00
 * FilePath: algorithm
 * Description:459. 重复的子字符串
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let ss = s + s;
    return ss.substring(1, ss.length - 1).includes(s);
};

console.log(repeatedSubstringPattern(s = "abab"));