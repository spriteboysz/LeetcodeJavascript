/*
 * Author: Deean
 * Date: 2022-10-02 18:45
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let sum = 0, n = mat.length;
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][i] + mat[i][n - i - 1];
    }
    if (n % 2 === 1) {
        sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }
    return sum;
};

console.log(diagonalSum([[1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]]));
console.log(diagonalSum([[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]))
 