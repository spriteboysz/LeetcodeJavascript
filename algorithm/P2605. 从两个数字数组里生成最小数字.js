/*
 * Author: Deean
 * Date: 2023-06-21 23:06
 * FilePath: algorithm
 * Description:2605. 从两个数字数组里生成最小数字
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
    let digits = new Array(10).fill(0);
    for (const num of nums1) {
        digits[num] |= 1;
    }
    for (const num of nums2) {
        digits[num] |= 2;
    }
    let a = -1, b = -1;
    for (let i = 0; i < 10; i++) {
        if (digits[i] === 3) return i;
        if (a === -1 && digits[i] === 1) a = i;
        if (b === -1 && digits[i] === 2) b = i;
    }
    return Math.min(10 * a + b, 10 * b + a);
};
console.log(minNumber(nums1 = [4, 1, 3], nums2 = [5, 7]));
console.log(minNumber(nums1 = [3, 5, 2, 6], nums2 = [3, 1, 7]))
console.log(minNumber(nums1 = [9], nums2 = [8]))