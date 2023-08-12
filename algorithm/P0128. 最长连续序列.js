/*
 * Author: Deean
 * Date: 2023-08-12 14:32
 * FilePath: algorithm
 * Description:128. 最长连续序列
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set(nums);
    let maximum = 0;
    for (const num of nums) {
        if (set.has(num - 1)) continue;
        let cur = num, cur_max = 1;
        while (set.has(cur + 1)) {
            cur++;
            cur_max++;
        }
        maximum = Math.max(maximum, cur_max);
    }
    return maximum;
};

console.log(longestConsecutive(nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));