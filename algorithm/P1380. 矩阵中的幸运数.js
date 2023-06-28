/*
 * Author: Deean
 * Date: 2022-09-29 23:58
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let rows, cols = [];
    rows = matrix.map(row => Math.min(...row));
    for (let i = 0; i < matrix[0].length; i++) {
        let col = []
        for (let j = 0; j < matrix.length; j++) {
            col.push(matrix[j][i])
        }
        cols.push(Math.max(...col));
    }
    let lucky = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === rows[i] && matrix[i][j] === cols[j]) {
                lucky.push(matrix[i][j]);
            }
        }
    }
    return lucky;
};

console.log(luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]));
 