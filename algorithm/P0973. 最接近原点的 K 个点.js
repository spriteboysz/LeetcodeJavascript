/*
 * Author: Deean
 * Date: 2023-08-08 23:17
 * FilePath: algorithm
 * Description:973. 最接近原点的 K 个点
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    points.sort((p1, p2) =>
        p1[0] ** 2 + p1[1] ** 2 - p2[0] ** 2 - p2[1] ** 2);
    return points.slice(0, k);
};

console.log(kClosest(points = [[3, 3], [5, -1], [-2, 4]], k = 2));