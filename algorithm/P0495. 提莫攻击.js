/*
 * Author: Deean
 * Date: 2023-08-09 22:20
 * FilePath: algorithm
 * Description:495. 提莫攻击
 */

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let time = 0, expired = 0;
    for (let i = 0; i < timeSeries.length; ++i) {
        if (timeSeries[i] >= expired) {
            time += duration;
        } else {
            time += timeSeries[i] + duration - expired;
        }
        expired = timeSeries[i] + duration;
    }
    return time;
};

console.log(findPoisonedDuration(timeSeries = [1,2], duration = 2));