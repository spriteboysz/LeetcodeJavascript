/*
 * Author: Deean
 * Date: 2022-10-03 15:01
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
    const states = Math.floor(minutesToTest / minutesToDie) + 1;
    return Math.ceil(Math.log(buckets) / Math.log(states) - 1e-5);
};

console.log(poorPigs(4, 15, 15));
console.log(poorPigs(4, 15, 30));
