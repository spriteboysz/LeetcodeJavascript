/*
 * Author: Deean
 * Date: 2022-10-03 14:58
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return [...map.keys()].filter((num) => map.get(num) === 1);
};

console.log(singleNumbers([1, 2, 10, 4, 1, 4, 3, 3]));
 