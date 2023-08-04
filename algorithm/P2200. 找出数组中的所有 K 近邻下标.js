/*
 * Author: Deean
 * Date: 2023-08-04 21:43
 * FilePath: algorithm
 * Description:2200. 找出数组中的所有 K 近邻下标
 */

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
    const set = new Set()
    const n = nums.length - 1
    nums.forEach((item, idx) => {
        if (item === key) {
            for (let i = Math.max(0, idx - k); i <= Math.min(idx + k, n); i++) {
                set.add(i);
            }
        }
    })
    return [...set];
};

console.log(findKDistantIndices(nums = [3, 4, 9, 1, 3, 9, 5], key = 9, k = 1));