/*
 * Author: Deean
 * Date: 2023-10-06 22:09
 * FilePath: LCP
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return [...map.keys()].filter((num) => map.get(num) === 1)[0];
};

console.log(singleNumber(nums = [2, 2, 3, 2]));
console.log(singleNumber(nums = [0, 1, 0, 1, 0, 1, 100]));