/*
 * Author: Deean
 * Date: 2022-10-04 11:12
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.nums.slice(left, right + 1).reduce((a, b) => a + b);
};

numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // return 1 ((-2) + 0 + 3)
console.log(numArray.sumRange(2, 5)); // return -1 (3 + (-5) + 2 + (-1))
console.log(numArray.sumRange(0, 5)); // return -3

 