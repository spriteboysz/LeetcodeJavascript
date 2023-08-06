/*
 * Author: Deean
 * Date: 2023-08-06 11:45
 * FilePath: algorithm
 * Description:319. 灯泡开关
 */

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n + 0.5));
};

console.log(bulbSwitch(n = 3));