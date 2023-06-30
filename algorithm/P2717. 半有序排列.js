/*
 * Author: Deean
 * Date: 2023-06-29 23:13
 * FilePath: algorithm
 * Description:2717. 半有序排列
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
    let index1 = -1, index2 = -1, n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) index1 = i;
        if (nums[i] === n) index2 = i;
    }
    let diff = index1 + n - 1 - index2;
    return index1 < index2 ? diff : diff - 1;
};

console.log(semiOrderedPermutation(nums = [2, 1, 4, 3]));