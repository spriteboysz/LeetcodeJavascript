/*
 * Author: Deean
 * Date: 2022-09-25 22:08
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
    let cnt = new Array(queries.length).fill(0);
    for (let i = 0; i < queries.length; i++) {
        let x = queries[i][0], y = queries[i][1], r = queries[i][2];
        for (let j = 0; j < points.length; j++) {
            let a = points[j][0], b = points[j][1];
            if ((x - a) ** 2 + (y - b) ** 2 <= r ** 2) {
                cnt[i] += 1;
            }
        }
    }
    return cnt;
};

console.log(countPoints(points = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]],
    queries = [[1, 2, 2], [2, 2, 2], [4, 3, 2], [4, 3, 3]]));
 