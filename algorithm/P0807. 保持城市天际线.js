/*
 * Author: Deean
 * Date: 2022-09-25 21:40
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    const n = grid.length
    const rows = new Array(n).fill(0)
    const cols = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rows[i] = Math.max(rows[i], grid[i][j]);
            cols[j] = Math.max(cols[j], grid[i][j]);
        }
    }

    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            cnt += Math.min(rows[i], cols[j]) - grid[i][j];
        }
    }
    return cnt;
};

console.log(maxIncreaseKeepingSkyline(grid =
    [[3, 0, 8, 4],
        [2, 4, 5, 7],
        [9, 2, 6, 3],
        [0, 3, 1, 0]]));
 