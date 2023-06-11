/*
 * Author: Deean
 * Date: 2023-06-11 17:56
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
    return (arrivalTime + delayedTime) % 24;
};

console.log(findDelayedArrivalTime(arrivalTime = 13, delayedTime = 11));