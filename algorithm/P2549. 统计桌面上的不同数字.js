/*
 * Author: Deean
 * Date: 2023-02-27 23:14
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function (n) {
    return n === 1 ? 1 : n - 1;
};

console.log(distinctIntegers(5));