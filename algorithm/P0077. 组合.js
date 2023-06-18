/*
 * Author: Deean
 * Date: 2023-06-18 23:29
 * FilePath: algorithm
 * Description:77. 组合
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let paths = [];
    var backtrace = function (start, path) {
        if (path.length === k) {
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