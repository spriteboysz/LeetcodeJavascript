/*
 * Author: Deean
 * Date: 2023-07-01 11:45
 * FilePath: algorithm
 * Description:566. 重塑矩阵
 */


/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    let m = mat.length, n = mat[0].length;
    if (m * n !== r * c) return mat;
    const mat2 = new Array(r).fill(0).map(() => new Array(c).fill(0));
    for (let x = 0; x < m * n; ++x) {
        mat2[Math.floor(x / c)][x % c] = mat[Math.floor(x / n)][x % n];
    }
    return mat2;
};

console.log(matrixReshape(mat = [[1, 2], [3, 4]], r = 1, c = 4));