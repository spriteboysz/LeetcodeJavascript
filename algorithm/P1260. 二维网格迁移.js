/*
 * Author: Deean
 * Date: 2023-07-02 22:40
 * FilePath: algorithm
 * Description:1260. 二维网格迁移
 */


/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    let nums = [];
    let m = grid.length, n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            nums.push(grid[i][j]);
        }
    }
    let grid2 = [];
    for (let i = 0, pos = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(nums[(pos + m * n - (k % (m * n))) % (m * n)]);
            pos++;
        }
        grid2.push(row);
    }
    return grid2;
};

console.log(shiftGrid(grid = [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], k = 4));