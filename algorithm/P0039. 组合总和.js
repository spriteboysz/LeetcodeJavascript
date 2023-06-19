/*
 * Author: Deean
 * Date: 2023-06-18 23:43
 * FilePath: algorithm
 * Description:39. 组合总和
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let paths = [];
    var backtrace = function (start, sum, path) {
        if (sum === target) {
            paths.push(path.slice());
            return;
        }
        if (sum > target) return;
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