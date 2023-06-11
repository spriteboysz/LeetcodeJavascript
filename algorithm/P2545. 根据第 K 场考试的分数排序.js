/*
 * Author: Deean
 * Date: 2023-06-11 18:08
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
    return score.sort((a, b) => b[k] - a[k]);
};

console.log(sortTheStudents([[10, 6, 9, 1], [7, 5, 11, 2], [4, 8, 3, 15]], 2));