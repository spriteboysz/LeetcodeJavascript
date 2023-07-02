/*
 * Author: Deean
 * Date: 2023-07-02 17:09
 * FilePath: algorithm
 * Description:1184. 公交站间的距离
 */


/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
    let src = Math.min(start, destination);
    let dst = Math.max(start, destination);
    let sum = 0, cur = 0;
    for (const di of distance) {
        sum += di;
    }
    for (let i = src; i < dst; i++) {
        cur += distance[i];
    }
    return Math.min(cur, sum - cur);
};

console.log(distanceBetweenBusStops(distance = [1, 2, 3, 4], start = 0, destination = 1));