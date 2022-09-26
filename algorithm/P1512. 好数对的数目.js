/*
 * Author: Deean
 * Date: 2022-09-26 22:49
 * FilePath: algorithm
 * Description: 
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                cnt++;
            }
        }
    }
    return cnt;
};

console.log(numIdenticalPairs(nums = [1, 1, 1, 1]));
 