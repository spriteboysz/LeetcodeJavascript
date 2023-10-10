/*
 * Author: Deean
 * Date: 2023-09-18 23:16
 * FilePath: interview
 * Description: 面试题 01.08. 零矩阵
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let rows = new Set(), cols = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (rows.has(i) || cols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    console.log(matrix);
};

setZeroes(plants = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]);