/*
 * Author: Deean
 * Date: 2022-09-27 23:01
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
    let nums = num.toString().split("").map(c => parseInt(c)).sort();
    return 10 * (nums[0] + nums[1]) + nums[2] + nums[3];
};

console.log(minimumSum(num = 4009));
 