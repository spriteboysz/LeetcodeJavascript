/*
 * Author: Deean
 * Date: 2023-07-01 23:16
 * FilePath: algorithm
 * Description:1646. 获取生成数组中的最大值
 */


/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
    if (n === 0) return 0;
    const nums = new Array(n + 1).fill(0);
    nums[1] = 1;
    for (let i = 2; i <= n; ++i) {
        nums[i] = nums[Math.floor(i / 2)] + i % 2 * nums[Math.floor(i / 2) + 1];
    }
    return Math.max(...nums);
};

console.log(getMaximumGenerated(7));