/*
 * Author: Deean
 * Date: 2022-10-04 14:17
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let sum = numBottles;
    while (numBottles >= numExchange) {
        let div = Math.floor(numBottles / numExchange);
        sum += div;
        numBottles = numBottles % numExchange + div;
    }
    return sum;
};

console.log(numWaterBottles(15, 4));
 