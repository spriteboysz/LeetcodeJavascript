/*
 * Author: Deean
 * Date: 2023-07-01 22:51
 * FilePath: algorithm
 * Description:1886. 判断矩阵经轮转后是否一致
 */


/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
    /**
     * @param {number[][]} mat
     * @return void
     */
    var process = function (mat) {
        let n = mat.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < i; j++) {
                let num = mat[i][j];
                mat[i][j] = mat[j][i];
                mat[j][i] = num;
            }
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n / 2; j++) {
                let num = mat[i][j];
                mat[i][j] = mat[i][n - 1 - j];
                mat[i][n - 1 - j] = num;
            }
        }
    }
    
    let n = mat.length;
    for (let k = 0; k < 4; k++) {
        process(mat);
        let flag = true;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] !== target[i][j]) {
                    flag = false;
                    break;
                }
            }
            if (!flag) break;
        }
        if (flag) {
            return true;
        }
    }
    return false;
};

console.log(findRotation(mat = [[0, 0, 0], [0, 1, 0], [1, 1, 1]],
    target = [[1, 1, 1], [0, 1, 0], [0, 0, 0]]));