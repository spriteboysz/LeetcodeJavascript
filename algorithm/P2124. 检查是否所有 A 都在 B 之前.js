/*
 * Author: Deean
 * Date: 2022-10-03 14:14
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
    return s.indexOf('ba') < 0;
};

console.log(checkString("abab"));
 