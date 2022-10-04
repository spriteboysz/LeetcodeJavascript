/*
 * Author: Deean
 * Date: 2022-10-04 16:50
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let m = matrix.length, n = matrix[0].length;
    let matrix2 = new Array(n).fill(0).map(() => new Array(m).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            matrix2[j][i] = matrix[i][j];
        }
    }
    return matrix2;
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose([[1, 2, 3], [4, 5, 6]]));
