/*
 * Author: Deean
 * Date: 2022-10-01 18:55
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return [...map.keys()].filter((num) => map.get(num) === 1)[0];
};

console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
 