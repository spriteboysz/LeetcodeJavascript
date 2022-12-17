/*
 * Author: Deean
 * Date: 2022/12/17 21:31
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    return [celsius + 273.15, celsius*1.80 + 32.00]
};

console.log(convertTemperature(36.50));