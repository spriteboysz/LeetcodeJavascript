/*
 * Author: Deean
 * Date: 2022-09-27 22:52
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function (rectangle) {
    this.rectangle = rectangle;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (row1, col1, row2, col2, newValue) {
    for (let i = row1; i <= row2; i++) {
        for (let j = col1; j <= col2; j++) {
            this.rectangle[i][j] = newValue;
        }
    }
};

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
    return this.rectangle[row][col];
};

subrectangleQueries = new SubrectangleQueries([[1, 1, 1], [2, 2, 2], [3, 3, 3]]);
console.log(subrectangleQueries.getValue(0, 0)); // 返回 1
subrectangleQueries.updateSubrectangle(0, 0, 2, 2, 100);
console.log(subrectangleQueries.getValue(0, 0)); // 返回 100
console.log(subrectangleQueries.getValue(2, 2)); // 返回 100
subrectangleQueries.updateSubrectangle(1, 1, 2, 2, 20);
console.log(subrectangleQueries.getValue(2, 2)); // 返回 20
 