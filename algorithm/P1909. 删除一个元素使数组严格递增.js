/*
 * Author: Deean
 * Date: 2023-08-05 22:28
 * FilePath: algorithm
 * Description:1909. 删除一个元素使数组严格递增
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
    var check = function (nums) {
        for (let i = 1, n = nums.length; i < n; i++) {
            if (nums[i - 1] >= nums[i]) {
                return false;
            }
        }
        return true;
    }
    
    for (let i = 1, n = nums.length; i < n; i++) {
        if (nums[i - 1] >= nums[i]) {
            return check([...nums.slice(0, i - 1), ...nums.slice(i)]) ||
                check([...nums.slice(0, i), ...nums.slice(i + 1)]);
        }
    }
    return true;
};

console.log(canBeIncreasing(nums = [1, 2, 10, 5, 7]));