/*
 * Author: Deean
 * Date: 2022-10-01 11:00
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    return new Array(n).fill(0).map((_, i) => i + 1).sort();
};

console.log(lexicalOrder(13));
 