/*
 * Author: Deean
 * Date: 2023-07-04 22:52
 * FilePath: algorithm
 * Description:1037. 有效的回旋镖
 */


/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
    let [[x1, y1], [x2, y2], [x3, y3]] = points;
    return (x2 - x1) * (y3 - y1) !== (x3 - x1) * (y2 - y1);
};

console.log(isBoomerang(points = [[1, 1], [2, 3], [3, 2]]));