/*
 * Author: Deean
 * Date: 2023-09-18 23:26
 * FilePath: interview
 * Description:面试题 01.03. URL化
 */

/**
 * @param {string} s
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (s, length) {
    return s.slice(0, length).replaceAll(" ", "%20");
};

console.log(replaceSpaces("Mr John Smith    ", 13));