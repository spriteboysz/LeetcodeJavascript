/*
 * Author: Deean
 * Date: 2023-09-24 15:38
 * FilePath: algorithm
 * Description:2857. 统计距离为 k 的点对
 */

/**
 * @param {number[][]} coordinates
 * @param {number} k
 * @return {number}
 */
var countPairs = function (coordinates, k) {
    let cnt = 0;
    for (let i = 0, n = coordinates.length; i < n; i++) {
        const {0: x1, 1: y1} = coordinates[i];
        for (let j = i + 1; j < n; j++) {
            const {0: x2, 1: y2} = coordinates[j];
            if ((x1 ^ x2) + (y1 ^ y2) === k) {
                cnt++;
            }
        }
    }
    return cnt;
};

console.log(countPairs(coordinates = [[1, 2], [4, 2], [1, 3], [5, 2]], k = 5));