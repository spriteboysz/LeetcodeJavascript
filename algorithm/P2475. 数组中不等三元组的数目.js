/*
 * Author: Deean
 * Date: 2023/1/11 23:07
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) continue;
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[j] !== nums[k] && nums[i] !== nums[k]) {
                    cnt++;
                }
            }
        }
    }
    return cnt;
};

console.log(unequalTriplets(nums = [4, 4, 2, 4, 3]));