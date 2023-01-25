/*
 * Author: Deean
 * Date: 2023/1/19 21:57
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    const hash = new Map();
    for (const num of nums) {
        if (num & 1) continue;
        let v = hash.has(num) ? hash.get(num) : 0;
        v += 1;
        hash.set(num, v);
    }
    let ans = [-1, 0];
    for (let [k, v] of hash) {
        if (ans[1] <= v) {
            ans[0] = (ans[1] === v) ? Math.min(ans[0], k) : k;
            ans[1] = v;
        }
    }
    return ans[0];
};

console.log(mostFrequentEven(nums = [0, 1, 2, 2, 4, 4, 1]));