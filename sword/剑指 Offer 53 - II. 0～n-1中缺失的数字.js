/*
 * Author: Deean
 * Date: 2023-06-16 22:12
 * FilePath: sword
 * Description:剑指 Offer 53 - II. 0～n-1中缺失的数字
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sum = 0, cnt = 0;
    for (const num of nums) {
        sum += num;
        cnt += 1;
    }
    return (1 + cnt) * cnt / 2 - sum;
};
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]));