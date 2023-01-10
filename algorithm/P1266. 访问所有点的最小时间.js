/*
 * Author: Deean
 * Date: 2023/1/10 23:13
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let cnt = 0;
    for (let i = 0; i < points.length - 1; i++) {
        let dx = Math.abs(points[i + 1][0] - points[i][0]);
        let dy = Math.abs(points[i + 1][1] - points[i][1]);
        cnt += Math.max(dx, dy);
    }
    return cnt;
};

console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]));