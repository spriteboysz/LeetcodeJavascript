/*
 * Author: Deean
 * Date: 2023-07-05 21:50
 * FilePath: algorithm
 * Description:1437. 是否所有 1 都至少相隔 k 个元素
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let last = -1, minimum = nums.length;
    for (let i = 0, n = nums.length; i < n; i++) {
        if (nums[i] === 1) {
            if (last !== -1 && i - last - 1 < k) {
                return false;
            }
            last = i;
        }
    }
    return minimum - 1 >= k;
};

console.log(kLengthApart(nums = [1, 0, 0, 0, 1, 0, 0, 1], k = 2));