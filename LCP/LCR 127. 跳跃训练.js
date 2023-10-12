/*
 * Author: Deean
 * Date: 2023-10-08 23:15
 * FilePath: LCP
 * Description: LCR 127. 跳跃训练
 */


/**
 * @param {number} num
 * @return {number}
 */
var trainWays = function (num) {
    let nums = [1, 1]
    for (let i = 2; i <= num; i++) {
        nums[i] = (nums[i - 1] + nums[i - 2]) % (10 ** 9 + 7)
    }
    return nums[num];
};

console.log(trainWays(5));