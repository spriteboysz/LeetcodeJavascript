/*
 * Author: Deean
 * Date: 2023-09-20 23:46
 * FilePath: algorithm
 * Description:2839. 判断通过操作能否让字符串相等 I
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function (s1, s2) {
    return ((s1[0] === s2[0] && s1[2] === s2[2]) || (s1[0] === s2[2] && s1[2] === s2[0])) &&
        ((s1[1] === s2[1] && s1[3] === s2[3]) || (s1[1] === s2[3] && s1[3] === s2[1]));
};

console.log(canBeEqual(s1 = "abcd", s2 = "cdab"));