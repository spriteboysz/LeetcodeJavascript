/*
 * Author: Deean
 * Date: 2023-06-16 21:48
 * FilePath: algorithm
 * Description:240. 搜索二维矩阵 II
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) return false;
    let col = 0, row = matrix[0].length - 1;
    while (col < matrix.length && row >= 0) {
        if (matrix[col][row] > target) {
            row--;
        } else if (matrix[col][row] < target) {
            col++
        } else {
            return true;
        }
    }
    return false;
};

console.log(searchMatrix(plants = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 5));