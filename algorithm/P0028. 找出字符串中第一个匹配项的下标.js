/*
 * Author: Deean
 * Date: 2023-08-12 12:26
 * FilePath: algorithm
 * Description:28. 找出字符串中第一个匹配项的下标
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

console.log(strStr(haystack = "sadbutsad", needle = "sad"));