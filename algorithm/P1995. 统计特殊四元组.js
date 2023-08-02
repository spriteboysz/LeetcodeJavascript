/*
 * Author: Deean
 * Date: 2023-08-02 21:28
 * FilePath: algorithm
 * Description:1995. 统计特殊四元组
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
    let cnt = 0, n = nums.length;
    for (let a = 0; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
            for (let c = b + 1; c < n; c++) {
                for (let d = c + 1; d < n; d++) {
                    if (nums[a] + nums[b] + nums[c] === nums[d]) {
                        cnt++;
                    }
                }
            }
        }
    }
    return cnt;
};

console.log(countQuadruplets(nums = [1, 1, 1, 3, 5]));