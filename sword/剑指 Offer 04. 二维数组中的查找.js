/*
 * Author: Deean
 * Date: 2023-06-16 21:46
 * FilePath: sword
 * Description:剑指 Offer 04. 二维数组中的查找
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};

let plants = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]
console.log(findNumberIn2DArray(plants, 5));