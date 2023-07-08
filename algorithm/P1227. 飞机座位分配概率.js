/*
 * Author: Deean
 * Date: 2023-07-07 23:20
 * FilePath: algorithm
 * Description:1227. 飞机座位分配概率
 */


/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function (n) {
    return n === 1 ? 1.0 : 0.5;
};

console.log(nthPersonGetsNthSeat(2));