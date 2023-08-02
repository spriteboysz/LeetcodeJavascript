/*
 * Author: Deean
 * Date: 2023-08-02 21:31
 * FilePath: algorithm
 * Description:1863. 找出所有子集的异或总和再求和
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    let list = []
    for (let i of nums) {
        list.push(...list.map(item => item ^ i), i);
    }
    return list.reduce((s, c) => s + c);
};

console.log(subsetXORSum(nums = [3, 4, 5, 6, 7, 8]));