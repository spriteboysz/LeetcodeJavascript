/*
 * Author: Deean
 * Date: 2023-08-13 22:53
 * FilePath: algorithm
 * Description:2765. 最长交替子序列
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
    let maximum = 0
    for (let i = 0, n = nums.length; i < n; i++) {
        if (i > 1 && nums[i] === nums[i - 2] && nums[i + 1] === nums[i - 1]) continue;
        let cnt = 1;
        for (let j = i + 1; j < n; j++) {
            if ((j - i) % 2 !== 0 && nums[j] === nums[i] + 1) {
                cnt++;
            } else if ((j - i) % 2 === 0 && nums[j] === nums[i]) {
                cnt++;
            } else {
                break;
            }
        }
        maximum = Math.max(maximum, cnt);
    }
    return maximum === 1 ? -1 : maximum;
};

console.log(alternatingSubarray(nums = [2, 3, 4, 3, 4]));