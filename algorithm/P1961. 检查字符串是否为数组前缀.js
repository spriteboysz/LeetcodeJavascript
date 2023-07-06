/*
 * Author: Deean
 * Date: 2023-07-05 22:15
 * FilePath: algorithm
 * Description:1961. 检查字符串是否为数组前缀
 */


/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
    let ss = "";
    for (const word of words) {
        ss += word;
        if (ss === s) {
            return true;
        }
    }
    return false;
};

console.log(isPrefixString(s = "iloveleetcode", words = ["i", "love", "leetcode", "apples"]));