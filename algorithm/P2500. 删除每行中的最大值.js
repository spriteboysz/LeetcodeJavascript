/*
 * Author: Deean
 * Date: 2022/12/17 21:43
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    const m = grid.length, n = grid[0].length;
    for (let i = 0; i < m; i++) {
        grid[i].sort((a, b) => b - a);
    }
    // console.log(grid)
    let cnt = 0;
    for (let j = 0; j < n; j++) {
        let max = 0;
        for (let i = 0; i < m; i++) {
            max = Math.max(max, grid[i][j]);
        }
        cnt += max;
    }
    return cnt;
};

console.log(deleteGreatestValue(grid = [[1, 2, 4], [3, 3, 1]]));