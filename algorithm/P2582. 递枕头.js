/*
 * Author: Deean
 * Date: 2023-06-29 23:30
 * FilePath: algorithm
 * Description:2582. 递枕头
 */


/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    let cur = 1, direction = 1;
    for (let i = 1; i <= time; i++) {
        if (cur === 1) direction = 1;
        if (cur === n) direction = -1;
        cur += direction;
    }
    return cur;
};

console.log(passThePillow(n = 4, time = 5));