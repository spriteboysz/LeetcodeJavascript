/*
 * Author: Deean
 * Date: 2022-09-25 22:43
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
    return [...n].reduce((a, c) => Math.max(a, +c), 1);
};

console.log(minPartitions(n = "27346209830709182346"));
 