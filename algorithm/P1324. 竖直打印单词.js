/*
 * Author: Deean
 * Date: 2023-08-08 22:50
 * FilePath: algorithm
 * Description:1324. 竖直打印单词
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
    let words = s.split(" ")
    let n = words.length, m = Math.max(...words.map((word) => word.length));
    let grid = new Array(m);
    for (let i = 0; i < m; i++) {
        grid[i] = new Array(n).fill(" ");
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            grid[j][i] = words[i][j];
        }
    }
    for (let i = 0; i < m; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += !grid[i][j] ? " " : grid[i][j];
        }
        grid[i] = row.trimEnd();
    }
    return grid;
};

console.log(printVertically(s = "TO BE OR NOT TO BE"));