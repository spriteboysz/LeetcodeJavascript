/*
 * Author: Deean
 * Date: 2023-07-05 21:18
 * FilePath: algorithm
 * Description:1608. 特殊数组的特征值
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    nums.sort((a, b) => b - a);
    for (let i = 1, n = nums.length; i <= n; i++) {
        if (nums[i - 1] >= i && (i === n || nums[i] < i)) {
            return i;
        }
    }
    return -1;
};

console.log(specialArray(nums = [3, 5]));