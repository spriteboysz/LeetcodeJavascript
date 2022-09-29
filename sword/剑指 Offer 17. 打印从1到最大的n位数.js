/*
 * Author: Deean
 * Date: 2022-09-29 23:19
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let nums = [];
    for (let i = 1; i < Math.pow(10, n); i++) {
        nums.push(i);
    }
    return nums;
};

console.log(printNumbers(2));
 