/*
 * Author: Deean
 * Date: 2023-06-12 23:24
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    for (let i = 0, n = matrix.length; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (let i = 0, n = matrix.length; i < n; i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }
    console.log(matrix);
};


rotate(plants = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);