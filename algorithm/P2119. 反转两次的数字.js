/*
 * Author: Deean
 * Date: 2022-10-01 11:05
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
    return num === 0 || num % 10 !== 0;
};

console.log(isSameAfterReversals(num = 1800));
 