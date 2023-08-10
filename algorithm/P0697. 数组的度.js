/*
 * Author: Deean
 * Date: 2023-08-10 23:01
 * FilePath: algorithm
 * Description:697. 数组的度
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let map = new Map();
    for (let i = 0, n = nums.length; i < n; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    let maximum = Math.max(...map.values());
    let nums2 = [];
    map.forEach((v, k) => {
        if (v === maximum) {
            nums2.push(k);
        }
    })
    let minimum = nums.length;
    for (let i = 0, m = nums2.length; i < m; i++) {
        minimum = Math.min(minimum, nums.lastIndexOf(nums2[i]) - nums.indexOf(nums2[i]));
    }
    return minimum + 1;
};

console.log(findShortestSubArray(nums = [1, 2, 2, 3, 1]));