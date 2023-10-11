/*
 * Author: Deean
 * Date: 2023-10-06 22:24
 * FilePath: LCP
 * Description: 
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        if (numbers[left] + numbers[right] < target) {
            left += 1;
        } else if (numbers[left] + numbers[right] > target) {
            right -= 1;
        } else {
            return [left, right];
        }
    }
    return [-1, -1];
};

console.log(twoSum(numbers = [1, 2, 4, 6, 10], target = 8));