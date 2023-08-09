/*
 * Author: Deean
 * Date: 2023-08-09 21:22
 * FilePath: algorithm
 * Description:2099. 找到和最大的长度为 K 的子序列
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
    let hash = new Map();
    nums.forEach((v, i) => {
        if (hash.has(v)) hash.get(v).push(i);
        else hash.set(v, [i]);
    })
    hash = Array.from(hash).sort((x, y) => y[0] - x[0]);
    let ans = [];
    while (k) {
        let arr = hash.shift()[1].slice(0, k);
        ans = ans.concat(arr);
        k -= arr.length;
    }
    return ans.sort((x, y) => x - y).map((i) => nums[i]);
};

console.log(maxSubsequence(nums = [-1, -2, 3, 4], k = 3));