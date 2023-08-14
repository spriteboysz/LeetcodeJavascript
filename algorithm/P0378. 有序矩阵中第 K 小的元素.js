/*
 * Author: Deean
 * Date: 2023-08-13 17:45
 * FilePath: algorithm
 * Description:378. 有序矩阵中第 K 小的元素
 */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let nums = [];
    for (let i = 0, m = matrix.length; i < m; i++) {
        for (let j = 0, n = matrix[i].length; j < n; j++) {
            nums.push(matrix[i][j]);
        }
    }
    return nums.sort((a, b) => a - b)[k - 1];
};

console.log(kthSmallest(matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]], k = 8));