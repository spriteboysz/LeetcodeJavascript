/*
 * Author: Deean
 * Date: 2022-10-04 11:05
 * FilePath: sword
 * Description: 
 */

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.nums = [];
    this.size = size;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    if (this.nums.length === this.size) this.nums.shift();
    this.nums.push(val);
    return this.nums.reduce((a, b) => a + b) / this.nums.length;
};

movingAverage = new MovingAverage(3);
console.log(movingAverage.next(1)); // 返回 1.0 = 1 / 1
console.log(movingAverage.next(10)); // 返回 5.5 = (1 + 10) / 2
console.log(movingAverage.next(3)); // 返回 4.66667 = (1 + 10 + 3) / 3
console.log(movingAverage.next(5)); // 返回 6.0 = (10 + 3 + 5) / 3
 