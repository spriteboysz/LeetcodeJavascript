/*
 * Author: Deean
 * Date: 2022-10-02 21:12
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
    return s.split("").reverse().join("") === s ? 1 : 2;
};


console.log(removePalindromeSub("baabb"));
 