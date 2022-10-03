/*
 * Author: Deean
 * Date: 2022-10-03 18:09
 * FilePath: interview
 * Description: 
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var multiply = function (a, b) {
    if (a === 0 || b === 0) return 0;
    return a < b ? b + multiply(a - 1, b) : a + multiply(a, b - 1);
};

console.log(multiply(3, 4));
 