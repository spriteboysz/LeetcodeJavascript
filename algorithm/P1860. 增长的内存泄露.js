/*
 * Author: Deean
 * Date: 2022-09-29 23:55
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function (memory1, memory2) {
    let time = 1;
    while (time <= memory1 || time <= memory2) {
        if (memory1 < memory2) {
            memory2 -= time;
        } else {
            memory1 -= time;
        }
        time++;
    }
    return [time, memory1, memory2];
};

console.log(memLeak(memory1 = 8, memory2 = 11));
 