/*
 * Author: Deean
 * Date: 2023-07-03 23:03
 * FilePath: algorithm
 * Description:228. 汇总区间
 */


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let ranges = [];
    for (let i = 0, n = nums.length; i < n;) {
        let left = i;
        i++;
        while (i < n && nums[i] - nums[i - 1] === 1) {
            i++;
        }
        let right = i - 1;
        let temp = nums[left].toString();
        if (left < right) {
            temp += "->";
            temp += nums[right].toString();
        }
        ranges.push(temp);
    }
    return ranges;
};

console.log(summaryRanges(nums = [0, 1, 2, 4, 5, 7]));