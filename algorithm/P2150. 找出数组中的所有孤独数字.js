/*
 * Author: Deean
 * Date: 2023-08-05 22:19
 * FilePath: algorithm
 * Description:2150. 找出数组中的所有孤独数字
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function (nums) {
    let map = new Map();
    nums.forEach((num) => {
        map.set(num, (map.get(num) || 0) + 1);
    });
    let lonely = [];
    map.forEach((v, k) => {
        if (v === 1 && !map.get(k + 1) && !map.get(k - 1)) {
            lonely.push(k);
        }
    });
    return lonely;
};

console.log(findLonely(nums = [10, 6, 5, 8]));