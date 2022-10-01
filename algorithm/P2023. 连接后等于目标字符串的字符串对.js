/*
 * Author: Deean
 * Date: 2022-10-01 11:59
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function (nums, target) {
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && (nums[i] + nums[j] === target)) cnt++;
        }
    }
    return cnt;
};

console.log(numOfPairs(["123", "4", "12", "34"], "1234"));
 