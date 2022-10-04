/*
 * Author: Deean
 * Date: 2022-10-04 16:54
 * FilePath: sword
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
            left++;
        } else if (numbers[left] + numbers[right] > target) {
            right--;
        } else {
            return [left, right];
        }
    }
};

console.log(twoSum([2, 3, 4], 6));
 