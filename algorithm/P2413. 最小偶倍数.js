/*
 * Author: Deean
 * Date: 2022-09-25 21:34
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
    return n % 2 === 0 ? n : n * 2;
};

console.log(smallestEvenMultiple(4));
console.log(smallestEvenMultiple(5));