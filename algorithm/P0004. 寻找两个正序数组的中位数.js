/*
 * Author: Deean
 * Date: 2023-08-12 15:50
 * FilePath: algorithm
 * Description:4. 寻找两个正序数组的中位数
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let nums = [...nums1, ...nums2];
    nums.sort((a, b) => a - b);
    let n = nums.length;
    if (n % 2 === 0) {
        return (nums[n / 2] + nums[n / 2 - 1]) / 2;
    } else {
        return nums[Math.floor(n / 2)];
    }
};

console.log(findMedianSortedArrays(nums1 = [1, 2], nums2 = [3, 4]));