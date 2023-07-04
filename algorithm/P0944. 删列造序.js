/*
 * Author: Deean
 * Date: 2023-07-03 23:28
 * FilePath: algorithm
 * Description:944. 删列造序
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    let cnt = 0;
    for (let j = 0; j < strs[0].length; j++) {
        for (let i = 0; i < strs.length - 1; i++) {
            if (strs[i][j] > strs[i + 1][j]) {
                cnt += 1;
                break;
            }
        }
    }
    return cnt;
};

console.log(minDeletionSize(strs = ["zyx", "wvu", "tsr"]));