/*
 * Author: Deean
 * Date: 2022/12/18 17:07
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let max = 0;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                let ax = points[i][0], ay = points[i][1];
                let bx = points[j][0], by = points[j][1];
                let cx = points[k][0], cy = points[k][1];
                let area = 0.5 * Math.abs(ax * by + bx * cy + cx * ay - ax * cy - bx * ay - cx * by);
                max = Math.max(max, area);
            }
        }
    }
    return max;
};

console.log(largestTriangleArea([[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]]));