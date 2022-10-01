/*
 * Author: Deean
 * Date: 2022-10-01 19:38
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
    const map = new Map();
    for (let num = lowLimit; num <= highLimit; num++) {
        let key = num.toString().split("").map(item => parseInt(item)).reduce((a, b) => a + b);
        map.set(key, (map.get(key) || 0) + 1);
    }
    return Math.max(...map.values());
};

console.log(countBalls(19, 28));
 