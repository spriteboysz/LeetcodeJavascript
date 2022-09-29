/*
 * Author: Deean
 * Date: 2022-09-29 22:59
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    return num.split("").every((s, i) =>
        parseInt(s) === num.split(i + '').length - 1
    );
};

console.log(digitCount(num = "1210"));
 