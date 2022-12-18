/*
 * Author: Deean
 * Date: 2022/12/18 23:04
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
    let target = [];
    for (const num of nums) {
        if (num % 6 === 0) {
            target.push(num);
        }
    }
    return target.length === 0 ? 0 : Math.floor(target.reduce((a, b) => a + b, 0) / target.length);
};

console.log(averageValue([1, 3, 6, 10, 12, 15]));