/*
 * Author: Deean
 * Date: 2023-06-18 23:33
 * FilePath: algorithm
 * Description:剑指 Offer II 081. 允许重复选择元素的组合
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let paths = [];
    var backtrace = function (start, sum, path) {
        if (target === sum) {
            paths.push(path.slice());
            return;
        }
        if (target <= sum) return;
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrace(i, sum + candidates[i], path);
            path.pop();
        }
    }
    backtrace(0, 0, []);
    return paths;
};

console.log(combinationSum(candidates = [2, 3, 6, 7], target = 7));