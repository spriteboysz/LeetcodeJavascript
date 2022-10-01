/*
 * Author: Deean
 * Date: 2022-10-01 10:54
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const map = new Map();
    nums.forEach((num) => {
        map.set(num, (map.get(num) || 0) + 1);
    });
    return [...map.keys()].filter((num) => map.get(num) !== 1);
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
 