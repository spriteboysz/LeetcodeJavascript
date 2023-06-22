/*
 * Author: Deean
 * Date: 2023-06-21 22:52
 * FilePath: algorithm
 * Description:2639. 查询网格图中每一列的宽度
 */

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
    let width = [];
    for (let j = 0; j < grid[0].length; j++) {
        let maximum = 0;
        for (let i = 0; i < grid.length; i++) {
            maximum = Math.max(maximum, grid[i][j].toString().length);
        }
        width.push(maximum);
    }
    return width;
};


console.log(findColumnWidth([[-15, 1, 3], [15, 7, 12], [5, 6, -2]]));