/*
 * Author: Deean
 * Date: 2023-07-02 17:35
 * FilePath: algorithm
 * Description:976. 三角形的最大周长
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    nums.sort((a, b) => b - a);
    for (let i = 2; i < nums.length; i++) {
        if (nums[i - 2] < nums[i - 1] + nums[i]) {
            return nums[i - 2] + nums[i - 1] + nums[i];
        }
    }
    return 0;
};

console.log(largestPerimeter(nums = [2, 1, 2]));