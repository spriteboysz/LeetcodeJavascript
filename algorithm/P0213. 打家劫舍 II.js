/*
 * Author: Deean
 * Date: 2023-08-12 15:39
 * FilePath: algorithm
 * Description:213. 打家劫舍 II
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const robRange = (start, end) => {
        let first = nums[start], second = Math.max(nums[start], nums[start + 1]);
        for (let i = start + 2; i <= end; i++) {
            let tmp = second;
            second = Math.max(second, first + nums[i]);
            first = tmp;
        }
        return second;
    }
    
    let n = nums.length;
    if (n === 1) return nums[0];
    if (n === 2) return Math.max(nums[0], nums[1]);
    return Math.max(robRange(0, n - 2), robRange(1, n - 1));
};

console.log(rob(nums = [1, 2, 3, 1]));