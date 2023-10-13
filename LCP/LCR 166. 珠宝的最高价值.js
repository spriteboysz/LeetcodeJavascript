/*
 * Author: Deean
 * Date: 2023-10-09 23:11
 * FilePath: LCP
 * Description: LCR 166. 珠宝的最高价值
 */

/**
 * @param {number[][]} frame
 * @return {number}
 */
var jewelleryValue = function (frame) {
    for (let i = 0, m = frame.length; i < m; i++) {
        for (let j = 0, n = frame[0].length; j < n; j++) {
            if (i === 0 && j === 0) {

            } else if (i === 0) {
                frame[i][j] += frame[i][j - 1];
            } else if (j === 0) {
                frame[i][j] += frame[i - 1][j];
            } else {
                frame[i][j] += Math.max(frame[i - 1][j], frame[i][j - 1]);
            }
        }
    }
    return frame[frame.length - 1][frame[0].length - 1];
};

console.log(jewelleryValue(frame = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]));