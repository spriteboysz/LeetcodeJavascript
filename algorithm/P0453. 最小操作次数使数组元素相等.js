/*
 * Author: Deean
 * Date: 2023-08-13 18:50
 * FilePath: algorithm
 * Description:453. 最小操作次数使数组元素相等
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    const minimum = Math.min(...nums);
    let res = 0;
    for (const num of nums) {
        res += num - minimum;
    }
    return res;
};

console.log(minMoves(nums = [1, 2, 3]));