/*
 * Author: Deean
 * Date: 2022-10-01 19:52
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.map = new Map();
    nums.forEach((num, i) => {
        let v = this.map.has(num) ? this.map.get(num) : [];
        v.push(i);
        this.map.set(num, v);
    })
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    let indies = this.map.get(target);
    return indies[Math.floor(Math.random() * indies.length)];
};

solution = new Solution([1, 2, 3, 3, 3]);
console.log(solution.pick(3)); // 随机返回索引 2, 3 或者 4 之一。每个索引的返回概率应该相等。
console.log(solution.pick(1)); // 返回 0 。因为只有 nums[0] 等于 1 。
console.log(solution.pick(3));

 