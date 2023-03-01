/*
 * Author: Deean
 * Date: 2023-02-28 23:01
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function (n) {
    if (n === 1) return 0;
    return n % 2 === 0 ? n / 2 : n;
};

console.log(numberOfCuts(4));