/*
 * Author: Deean
 * Date: 2023-07-01 11:36
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    let min1 = m, min2 = n;
    for (const [x, y] of ops) {
        min1 = Math.min(min1, x);
        min2 = Math.min(min2, y);
    }
    return min1 * min2;
};

console.log(maxCount(m = 3, n = 3, ops = [[2, 2], [3, 3]]));