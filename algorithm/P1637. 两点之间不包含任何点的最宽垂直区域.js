/*
 * Author: Deean
 * Date: 2023-06-11 18:24
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    points.sort((a, b) => a[0] - b[0]);
    let maximum = 0;
    for (let i = 1, n = points.length; i < n; i++) {
        maximum = Math.max(maximum, points[i][0] - points[i - 1][0]);
    }
    return maximum;
};

console.log(maxWidthOfVerticalArea(points = [[8, 7], [9, 9], [7, 4], [9, 7]]));