/*
 * Author: Deean
 * Date: 2023-03-01 22:43
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
    let cnt = 0, pre = nums[0];
    for (let i = 0; i < nums.length - 1; i++) {
        let [cur, next] = [nums[i], nums[i + 1]];
        if ((cur > pre && cur > next) || (cur < pre && cur < next)) {
            cnt++;
            pre = cur;
        }
    }
    return cnt;
};

console.log(countHillValley([2, 4, 1, 1, 6, 5]));