/*
 * Author: Deean
 * Date: 2022-10-04 12:02
 * FilePath: interview
 * Description: 
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var maximum = function (a, b) {
    return ((Math.abs(a - b) + a + b) / 2);
};

console.log(maximum(1, 2));
 