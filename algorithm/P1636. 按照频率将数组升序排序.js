/*
 * Author: Deean
 * Date: 2022-10-01 10:43
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let map = new Map();
    nums.forEach((num) => {
        map.set(num, (map.get(num) || 0) + 1);
    });
    nums.sort((a, b) => {
        if (map.get(a) === map.get(b)) {
            return b - a;
        } else {
            return map.get(a) - map.get(b);
        }
    });
    return nums;
};

console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
 