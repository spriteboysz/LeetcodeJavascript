/*
 * Author: Deean
 * Date: 2022-10-01 14:39
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
    return Math.max(...s.split("0").map((item) => item.length)) >
        Math.max(...s.split("1").map((item) => item.length))
};

console.log(checkZeroOnes("110100010"));
 