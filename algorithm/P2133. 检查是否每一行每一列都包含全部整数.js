/*
 * Author: Deean
 * Date: 2022-10-05 15:19
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    for (const row of matrix) {
        if (new Set(row).size !== row.length) return false;
    }
    let n = matrix.length, matrix2 = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix2[j][i] = matrix[i][j];
        }
    }
    for (const row of matrix2) {
        if (new Set(row).size !== row.length) return false;
    }
    return true;
};

console.log(checkValid([[1, 2, 3], [3, 1, 2], [2, 3, 1]]));
 