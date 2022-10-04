/*
 * Author: Deean
 * Date: 2022-10-04 09:54
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
    let cnt = 0;
    let grid = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (const index of indices) {
        for (let i = 0; i < m; i++) {
            grid[i][index[1]]++;
        }
        for (let j = 0; j < n; j++) {
            grid[index[0]][j]++;
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] % 2 === 1) cnt++;
        }
    }
    return cnt;
};

console.log(oddCells(m = 2, n = 3, indices = [[0, 1], [1, 1]]));
 