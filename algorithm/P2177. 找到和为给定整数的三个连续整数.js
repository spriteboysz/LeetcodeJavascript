/*
 * Author: Deean
 * Date: 2022-10-03 14:39
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function (num) {
    return num % 3 !== 0 ? [] : [num / 3 - 1, num / 3, num / 3 + 1];
};

console.log(sumOfThree(33));
console.log(sumOfThree(4));
