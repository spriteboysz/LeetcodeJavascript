/*
 * Author: Deean
 * Date: 2023-08-09 21:41
 * FilePath: algorithm
 * Description:1232. 缀点成线
 */

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    const dx = coordinates[0][0], dy = coordinates[0][1];
    const n = coordinates.length;
    for (let i = 0; i < n; i++) {
        coordinates[i][0] -= dx;
        coordinates[i][1] -= dy;
    }
    const a = coordinates[1][1], b = -coordinates[1][0];
    for (let i = 2; i < n; i++) {
        const [x, y] = [coordinates[i][0], coordinates[i][1]];
        if (a * x + b * y !== 0) {
            return false;
        }
    }
    return true;
};

console.log(checkStraightLine(coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]));