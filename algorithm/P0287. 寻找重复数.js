/*
 * Author: Deean
 * Date: 2023-08-06 12:00
 * FilePath: algorithm
 * Description:287. 寻找重复数
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return nums[i];
        }
        set.add(nums[i]);
    }
    return -1;
};

console.log(findDuplicate(nums = [1, 3, 4, 2, 2]));