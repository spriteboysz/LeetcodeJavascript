/*
 * Author: Deean
 * Date: 2023-08-13 09:57
 * FilePath: algorithm
 * Description:1905. 统计子岛屿
 */

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
    const m = grid1.length, n = grid1[0].length;
    
    var dfs = function (i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || grid2[i][j] === 0) return;
        grid2[i][j] = 0;
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid1[i][j] === 0 && grid2[i][j] === 1) {
                dfs(i, j);
            }
        }
    }
    
    let cnt = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] === 1) {
                cnt++;
                dfs(i, j);
            }
        }
    }
    return cnt;
};

console.log(countSubIslands(grid1 = [
        [1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 1, 1]],
    grid2 = [
        [1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1],
        [0, 1, 0, 0, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0]]));