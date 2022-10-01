/*
 * Author: Deean
 * Date: 2022-10-01 14:48
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let neg = 0;
    for (const num of nums) {
        if (num === 0) {
            return 0;
        } else if (num < 0) {
            neg++;
        }
    }
    return neg % 2 === 1 ? -1 : 1;
};

console.log(arraySign([-1, 1, -1, 1, -1]));
 