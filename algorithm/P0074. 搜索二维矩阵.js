/*
 * Author: Deean
 * Date: 2023-08-12 14:19
 * FilePath: algorithm
 * Description:74. 搜索二维矩阵
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    for (let i = 0, m = matrix.length; i < m; i++) {
        for (let j = 0, n = matrix[i].length; j < n; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};

console.log(searchMatrix(matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3));