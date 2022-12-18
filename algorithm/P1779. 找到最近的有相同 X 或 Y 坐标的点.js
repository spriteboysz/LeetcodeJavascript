/*
 * Author: Deean
 * Date: 2022/12/18 15:45
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
    let minVal = Infinity, minIndex = -1;
    for (let i = 0; i < points.length; i++) {
        let dx = points[i][0], dy = points[i][1];
        if (x === dx || y === dy) {
            let distance = Math.abs(x - dx) + Math.abs(y - dy);
            if (minVal > distance) {
                minVal = distance;
                minIndex = i;
            }
        }
    }
    return minIndex;
};

console.log(nearestValidPoint(x = 3, y = 4, points = [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]]));