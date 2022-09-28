/*
 * Author: Deean
 * Date: 2022-09-28 22:17
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let running = [], cur = 0;
    for (const num of nums) {
        cur += num;
        running.push(cur);
    }
    return running;
};

console.log(runningSum([3, 1, 2, 10, 1]));
 