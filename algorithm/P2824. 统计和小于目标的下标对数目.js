/*
 * Author: Deean
 * Date: 2023-09-21 22:54
 * FilePath: algorithm
 * Description:2824. 统计和小于目标的下标对数目
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
    var cnt = 0;
    for (let i = 0, n = nums.length; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] < target) {
                cnt++;
            }
        }
    }
    return cnt;
};
console.log(countPairs(nums = [-1, 1, 2, 3, 1], target = 2));