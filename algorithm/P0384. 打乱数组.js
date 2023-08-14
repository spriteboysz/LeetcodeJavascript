/*
 * Author: Deean
 * Date: 2023-08-13 17:51
 * FilePath: algorithm
 * Description:384. 打乱数组
 */

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums;
    this.original = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.original.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    for (let i = 0; i < this.nums.length; ++i) {
        const j = Math.floor(Math.random() * (this.nums.length - i)) + i;
        const temp = this.nums[i];
        this.nums[i] = this.nums[j];
        this.nums[j] = temp;
    }
    return this.nums;
};

var obj = new Solution([1, 2, 3]);
console.log(obj.shuffle());
console.log(obj.reset());
console.log(obj.shuffle());