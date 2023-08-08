/*
 * Author: Deean
 * Date: 2023-08-08 23:24
 * FilePath: algorithm
 * Description:477. 汉明距离总和
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
    let hamming = 0;
    for (let i = 0, n = nums.length; i < 30; ++i) {
        let c = 0;
        for (const val of nums) {
            c += (val >> i) & 1;
        }
        hamming += c * (n - c);
    }
    return hamming;
};

console.log(totalHammingDistance(nums = [4, 14, 2]));