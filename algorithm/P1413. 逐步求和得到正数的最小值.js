/*
 * Author: Deean
 * Date: 2022-10-01 14:06
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
    let accSum = 0, minimum = 0;
    for (const num of nums) {
        accSum += num;
        minimum = Math.min(minimum, accSum);
    }
    return -minimum + 1;
};

console.log(minStartValue([1, -2, -3]));
 