/*
 * Author: Deean
 * Date: 2022/12/18 17:55
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (original.length !== m * n) {
        return [];
    }
    let grid = new Array(m).fill(0).map(()=>new Array(n).fill(0));
    let k = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = original[k++];
        }
    }
    return grid;
};

console.log(construct2DArray(original = [1,2,3,4], m = 2, n = 2));