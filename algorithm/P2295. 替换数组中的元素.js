/*
 * Author: Deean
 * Date: 2023-08-06 21:52
 * FilePath: algorithm
 * Description:2295. 替换数组中的元素
 */

/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function (nums, operations) {
    let map = new Map();
    for (let i = 0, n = nums.length; i < n; i++) {
        map.set(nums[i], i);
    }
    for (const operation of operations) {
        let [a, b] = operation;
        map.set(b, map.get(a));
        map.delete(a);
    }
    map.forEach((v, k) => {
        nums[v] = k;
    });
    return nums;
};

console.log(arrayChange(nums = [1, 2, 4, 6], operations = [[1, 3], [4, 7], [6, 1]]));