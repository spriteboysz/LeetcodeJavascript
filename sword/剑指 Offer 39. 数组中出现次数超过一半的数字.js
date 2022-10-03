/*
 * Author: Deean
 * Date: 2022-10-03 10:27
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return [...map.keys()].filter((num) => map.get(num) > nums.length / 2)[0];
};

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));
 