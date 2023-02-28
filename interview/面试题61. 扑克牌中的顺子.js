/*
 * Author: Deean
 * Date: 2023-02-27 21:37
 * FilePath: interview
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    let kingsCount = 0, numsCount = 5;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < numsCount - 1; i++) {
        if (nums[i] === 0) {
            kingsCount += 1;
        } else if (nums[i] === nums[i + 1]) {
            return false;
        }
    }
    return nums[4] - nums[kingsCount] < 5;
};

console.log(isStraight([1, 2, 3, 4, 5]));