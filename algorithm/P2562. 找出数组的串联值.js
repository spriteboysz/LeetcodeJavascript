/*
 * Author: Deean
 * Date: 2023-02-27 22:50
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
    let concVal = 0, left = 0, right = nums.length - 1;
    while (left <= right) {
        if (left === right) {
            concVal += nums[left];
        } else {
            concVal += Number(String(nums[left]) + String(nums[right]));
        }
        left++;
        right--;
    }
    return concVal;
};

console.log(findTheArrayConcVal([7, 52, 2, 4]));