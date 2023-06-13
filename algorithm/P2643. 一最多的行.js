/*
 * Author: Deean
 * Date: 2023-06-12 22:48
 * FilePath: algorithm
 * Description:2643. 一最多的行
 */

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    let maximum = 0, maximumIndex = 0;
    for (let i = 0; i < mat.length; i++) {
        let sum = 0;
        for (let j = 0; j < mat[0].length; j++) {
            sum += mat[i][j];
        }
        if (sum > maximum) {
            maximumIndex = i;
            maximum = sum;
        }
    }
    return [maximumIndex, maximum];
};


console.log(rowAndMaximumOnes(mat = [[0, 0, 0], [0, 1, 1]]));