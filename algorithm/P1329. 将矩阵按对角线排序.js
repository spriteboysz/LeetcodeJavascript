/*
 * Author: Deean
 * Date: 2023-08-13 11:29
 * FilePath: algorithm
 * Description:1329. 将矩阵按对角线排序
 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
    const m = mat.length, n = mat[0].length;
    for (let k = 0; k < Math.min(m, n); k++) {
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (mat[i][j] > mat[i + 1][j + 1]) {
                    let tmp = mat[i][j];
                    mat[i][j] = mat[i + 1][j + 1];
                    mat[i + 1][j + 1] = tmp;
                }
            }
        }
    }
    return mat;
};


console.log(diagonalSort(mat = [[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]]));