/*
 * Author: Deean
 * Date: 2023-07-01 16:27
 * FilePath: algorithm
 * Description:747. 至少是其他数字两倍的最大数
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    if (nums.length === 1) return nums[0];
    let map = [];
    for (let i = 0; i < nums.length; i++) {
        map.push([nums[i], i]);
    }
    map.sort((a, b) => b[0] - a[0]);
    if (map[0][0] >= 2 * map[1][0]) {
        return map[0][1];
    }
    return -1;
};

console.log(dominantIndex(nums = [3, 6, 1, 0]));
console.log(dominantIndex(nums = [1, 2, 3, 4]));