/*
 * Author: Deean
 * Date: 2023-08-06 19:06
 * FilePath: algorithm
 * Description:73. 矩阵置零
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let m = matrix.length, n = matrix[0].length;
    let rows = new Set(), cols = new Set();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rows.has(i) || cols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    console.log(matrix);
};

setZeroes(matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]);
