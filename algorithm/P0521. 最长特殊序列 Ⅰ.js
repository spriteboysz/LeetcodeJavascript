/*
 * Author: Deean
 * Date: 2022-10-01 12:14
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
    return a !== b ? Math.max(a.length, b.length) : -1;
};

console.log(findLUSlength(a = "aaa", b = "bbb"));
 