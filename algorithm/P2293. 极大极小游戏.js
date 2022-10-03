/*
 * Author: Deean
 * Date: 2022-10-03 14:42
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
    while (nums.length !== 1) {
        for (let i = 0; i < nums.length; i += 4) {
            nums[i] = Math.min(nums[i], nums[i + 1]);
            nums[i + 1] = -1;
            nums[i + 2] = Math.max(nums[i + 2], nums[i + 3]);
            nums[i + 3] = -1;
        }
        nums = nums.filter((num) => num > 0);
    }
    return nums[0];
};

console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2]));
 