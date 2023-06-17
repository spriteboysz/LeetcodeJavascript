/*
 * Author: Deean
 * Date: 2023-06-16 21:40
 * FilePath: algorithm
 * Description:2733. 既不是最小值也不是最大值
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
    let maximum = Math.max(...nums);
    let minimum = Math.min(...nums);
    for (const num of nums) {
        if (num !== maximum && num !== minimum) {
            return num;
        }
    }
    return -1;
};

console.log(findNonMinOrMax(nums = [3, 2, 1, 4]));