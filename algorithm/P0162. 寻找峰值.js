/*
 * Author: Deean
 * Date: 2022-10-04 09:04
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = left + right >> 1;
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
 