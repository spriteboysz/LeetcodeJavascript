/*
 * Author: Deean
 * Date: 2023-06-18 23:25
 * FilePath: algorithm
 * Description:剑指 Offer II 080. 含有 k 个元素的组合
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let paths = [];
    var backtrace = function (start, path) {
        if (k === path.length) {
            paths.push(path.slice());
            return;
        }
        for (let i = start; i <= n; i++) {
            path.push(i);
            backtrace(i + 1, path);
            path.pop();
        }
    }
    backtrace(1, []);
    return paths;
};

console.log(combine(4, 2));