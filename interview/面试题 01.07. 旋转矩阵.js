/*
 * Author: Deean
 * Date: 2023-07-05 23:12
 * FilePath: interview
 * Description:面试题 01.07. 旋转矩阵
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let num = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = num;
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            let num = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = num;
        }
    }
    console.log(matrix);
};

rotate(matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);