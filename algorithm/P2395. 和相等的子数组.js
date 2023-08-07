/*
 * Author: Deean
 * Date: 2023-08-06 21:17
 * FilePath: algorithm
 * Description:2395. 和相等的子数组
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
    let set = new Set();
    for (let i = 1, n = nums.length; i < n; i++) {
        let sum = nums[i - 1] + nums[i];
        if (set.has(sum)) {
            return true;
        }
        set.add(sum);
        
    }
    return false;
};

console.log(findSubarrays(nums = [4, 2, 4]));
console.log(findSubarrays(nums = [1, 2, 3, 4, 5]));