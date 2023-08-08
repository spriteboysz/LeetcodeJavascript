/*
 * Author: Deean
 * Date: 2023-08-07 22:45
 * FilePath: algorithm
 * Description:1503. 所有蚂蚁掉下来前的最后一刻
 */

/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
    return Math.max(Math.max(...left), n - Math.min(...right));
};

console.log(getLastMoment(n = 4, left = [4, 3], right = [0, 1]));