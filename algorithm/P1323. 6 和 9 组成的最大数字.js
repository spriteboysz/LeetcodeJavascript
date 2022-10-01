/*
 * Author: Deean
 * Date: 2022-10-01 10:40
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    return parseInt(num.toString().replace("6", "9"));
};

console.log(maximum69Number(9996));
 