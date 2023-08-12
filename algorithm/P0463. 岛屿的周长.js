/*
 * Author: Deean
 * Date: 2023-08-12 11:48
 * FilePath: algorithm
 * Description:463. 岛屿的周长
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
    let cnt = 0;
    for (let i = 0, m = grid.length; i < m; i++) {
        for (let j = 0, n = grid[0].length; j < n; j++) {
            if (grid[i][j] === 0) continue;
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k], ny = j + dy[k];
                if (nx < 0 || nx >= m || ny < 0 || ny >= n || grid[nx][ny] === 0) {
                    cnt++;
                }
            }
        }
    }
    return cnt;
};

console.log(islandPerimeter(grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]));