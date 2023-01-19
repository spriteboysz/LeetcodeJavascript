/*
 * Author: Deean
 * Date: 2023/1/18 21:58
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
    let minimum = Math.min(...nums), maximum = Math.max(...nums);
    let cnt = 0;
    for (const num of nums) {
        if (num !== minimum && num !== maximum) {
            cnt++;
        }
    }
    return cnt;
};

console.log(countElements(nums = [11, 7, 2, 15]));