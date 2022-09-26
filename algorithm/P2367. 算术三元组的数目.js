/*
 * Author: Deean
 * Date: 2022-09-26 23:21
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
    let cnt = 0, n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[j] - nums[i] !== diff) continue;
            for (let k = j + 1; k < n; k++) {
                if (nums[k] - nums[j] === diff) {
                    cnt++;
                }
            }
        }
    }
    return cnt;
};

console.log(arithmeticTriplets(nums = [4, 5, 6, 7, 8, 9], diff = 2));
 