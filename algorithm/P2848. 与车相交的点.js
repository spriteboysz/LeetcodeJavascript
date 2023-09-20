/*
 * Author: Deean
 * Date: 2023-09-20 23:19
 * FilePath: algorithm
 * Description:2848. 与车相交的点
 */

/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
    var seen = new Set();
    for (let num of nums) {
        for (let i = num[0]; i <= num[1]; i++) {
            seen.add(i);
        }
    }
    return seen.size;
};

console.log(numberOfPoints([[1, 3], [5, 8]]));