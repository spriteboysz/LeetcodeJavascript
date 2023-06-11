/*
 * Author: Deean
 * Date: 2023-06-11 18:39
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            sum += i;
        }
    }
    return sum;
};
console.log(sumOfMultiples(10));