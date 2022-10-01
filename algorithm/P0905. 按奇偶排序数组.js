/*
 * Author: Deean
 * Date: 2022-10-01 19:48
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let even = [], odd = [];
    for (const num of nums) {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    }
    return [...even, ...odd];
};
console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([0]));
