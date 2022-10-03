/*
 * Author: Deean
 * Date: 2022-10-03 22:14
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let negative = x < 0 ? -1 : 1;
    let num = parseInt(Math.abs(x)
        .toString()
        .split("")
        .reverse()
        .join("")) * negative;
    return (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) ? 0 : num;
};

console.log(reverse(-123));
console.log(reverse(120));
