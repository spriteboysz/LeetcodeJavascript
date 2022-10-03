/*
 * Author: Deean
 * Date: 2022-10-03 19:19
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
    let nums = s.split(" ").map(item => parseInt(item)).filter(item => item);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) return false;
    }
    return true;
};

console.log(areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"));
 