/*
 * Author: Deean
 * Date: 2023-08-06 21:26
 * FilePath: algorithm
 * Description:2389. 和有限的最长子序列
 */


/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
    nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < queries.length; i++) {
        let pref = 0;
        for (let j = 0; j < nums.length; j++) {
            pref += nums[j];
            if (pref > queries[i]) {
                ans.push(j);
                break;
            }
        }
        if (pref <= queries[i]) {
            ans.push(nums.length);
        }
    }
    return ans;
};

console.log(answerQueries(nums = [4, 5, 2, 1], queries = [3, 10, 21]));