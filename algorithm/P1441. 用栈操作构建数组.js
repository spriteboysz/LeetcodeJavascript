/*
 * Author: Deean
 * Date: 2023-08-11 21:11
 * FilePath: algorithm
 * Description:1441. 用栈操作构建数组
 */

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let operator = [], prev = 0;
    for (const num of target) {
        for (let i = 0; i < num - prev - 1; i++) {
            operator.push("Push");
            operator.push("Pop");
        }
        operator.push("Push");
        prev = num;
    }
    return operator;
};

console.log(buildArray(target = [1, 3], n = 3));