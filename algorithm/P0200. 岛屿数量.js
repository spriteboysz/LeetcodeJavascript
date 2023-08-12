/*
 * Author: Deean
 * Date: 2023-08-12 15:19
 * FilePath: algorithm
 * Description:200. 岛屿数量
 */

/**
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const m = grid.length, n = grid[0].length;
    var dfs = function (x, y) {
        if (x < 0 || x >= m || y < 0 || y >= n) return;
        if (grid[x][y] !== "1") return;
        grid[x][y] = "0";
        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
    }
    
    let cnt = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                cnt++;
                dfs(i, j);
            }
        }
    }
    return cnt;
};

console.log(numIslands(grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]));