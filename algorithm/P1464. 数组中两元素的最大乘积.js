/*
 * Author: Deean
 * Date: 2022-09-28 23:43
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let max1 = 0, max2 = 0;
    for (const num of nums) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }
    return (max1 - 1) * (max2 - 1);
};

console.log(maxProduct([1, 5, 4, 5]));
 