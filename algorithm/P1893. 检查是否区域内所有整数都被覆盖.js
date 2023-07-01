/*
 * Author: Deean
 * Date: 2023-07-01 22:43
 * FilePath: algorithm
 * Description:1893. 检查是否区域内所有整数都被覆盖
 */


/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    let visited = new Array(51).fill(0);
    for (const [s, t] of ranges) {
        for (let i = s; i <= t; i++) {
            visited[i] |= 1;
        }
    }
    for (let i = left; i <= right; i++) {
        if (visited[i] === 0) {
            return false;
        }
    }
    return true;
};

console.log(isCovered(ranges = [[1, 2], [3, 4], [5, 6]], left = 2, right = 5));