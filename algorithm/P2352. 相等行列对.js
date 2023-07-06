/*
 * Author: Deean
 * Date: 2023-07-05 22:38
 * FilePath: algorithm
 * Description:2352. 相等行列对
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    let m = grid.length, n = grid[0].length;
    let rows = new Array(m).fill("");
    let cols = new Array(n).fill("");
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rows[i] += grid[i][j] + "#";
            cols[j] += grid[i][j] + "#";
        }
    }
    let cnt = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rows[i] === cols[j]) {
                cnt++;
            }
        }
    }
    return cnt;
};

console.log(equalPairs(grid = [[3, 2, 1], [1, 7, 6], [2, 7, 7]]));