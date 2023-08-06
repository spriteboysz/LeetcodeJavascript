/*
 * Author: Deean
 * Date: 2023-08-06 17:29
 * FilePath: algorithm
 * Description:118. 杨辉三角
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let triangle = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle.push(row);
    }
    return triangle;
};

console.log(generate(5));