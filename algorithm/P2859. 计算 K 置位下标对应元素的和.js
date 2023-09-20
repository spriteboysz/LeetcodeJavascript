/*
 * Author: Deean
 * Date: 2023-09-19 23:39
 * FilePath: algorithm
 * Description: 2859. 计算 K 置位下标对应元素的和
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
    var process = function (num) {
        var cnt = 0;
        while (num > 0) {
            cnt += num & 1;
            num >>= 1;
        }
        return cnt;
    }
    var sum = 0;
    for (let i = 0, n = nums.length; i < n; i++) {
        if (process(i) === k) {
            sum += nums[i];
        }
    }
    return sum;
};

console.log(sumIndicesWithKSetBits(nums = [5, 10, 1, 5, 2], k = 1));