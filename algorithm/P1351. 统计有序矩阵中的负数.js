/*
 * Author: Deean
 * Date: 2022-10-01 11:26
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let cnt = 0;
    grid.forEach((v) => {
        v.forEach((num) => {
            cnt += num < 0 ? 1 : 0;
        });
    });
    return cnt;
};

console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]));
 