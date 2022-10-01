/*
 * Author: Deean
 * Date: 2022-10-01 14:18
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return [...map.keys()].filter((num) => map.get(num) === 1);
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
console.log(singleNumber([-1, 0]));
