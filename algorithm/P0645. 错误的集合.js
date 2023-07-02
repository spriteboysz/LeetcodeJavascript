/*
 * Author: Deean
 * Date: 2023-07-02 18:00
 * FilePath: algorithm
 * Description:645. 错误的集合
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let n = nums.length;
    let digits = new Array(n + 1).fill(0);
    for (const num of nums) {
        digits[num] += 1;
    }
    let lose = -1, duplicate = -1;
    for (let i = 1; i <= n; i++) {
        if (digits[i] === 0) lose = i;
        if (digits[i] === 2) duplicate = i;
    }
    return [duplicate, lose];
};

console.log(findErrorNums(nums = [1, 2, 2, 4]));