/*
 * Author: Deean
 * Date: 2022-10-01 20:01
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    let nums = n % 2 === 0 ? [] : [0];
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        nums.push(-i, i);
    }
    return nums;
};

console.log(sumZero(1));
console.log(sumZero(3));
console.log(sumZero(4));
console.log(sumZero(5));
