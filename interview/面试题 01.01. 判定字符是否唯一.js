/*
 * Author: Deean
 * Date: 2022-10-01 19:46
 * FilePath: interview
 * Description: 
 */

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
    return new Set(astr.split("")).size === astr.length;
};
console.log(isUnique("abc"));
console.log(isUnique("leetcode"));
