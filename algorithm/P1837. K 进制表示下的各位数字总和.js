/*
 * Author: Deean
 * Date: 2022-09-28 23:15
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
    let sum = 0;
    n.toString(k).split("").map((c) => parseInt(c)).forEach((num) => {
        return sum += num;
    }, 0)
    return sum;
};

console.log(sumBase(n = 34, k = 6));
 