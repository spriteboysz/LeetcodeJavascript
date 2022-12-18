/*
 * Author: Deean
 * Date: 2022/12/18 16:56
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    let m = mat.length, n = mat[0].length;
    let rows = new Array(m).fill(0), cols = Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rows[i] += mat[i][j];
            cols[j] += mat[i][j];
        }
    }
    let cnt = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1) {
                cnt += 1;
            }
        }
    }
    return cnt;
};

console.log(numSpecial(mat =
    [[1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]]));