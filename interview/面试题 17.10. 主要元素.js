/*
 * Author: Deean
 * Date: 2022-10-05 14:32
 * FilePath: interview
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > nums.length / 2)
            return num;
    }
    return -1;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3, 2]));
