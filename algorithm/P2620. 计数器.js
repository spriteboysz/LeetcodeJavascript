/*
 * Author: Deean
 * Date: 2023-06-11 22:33
 * FilePath: algorithm
 * Description:2620. 计数器
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    return function () {
        return n++;
    };
};

const counter = createCounter(10)
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12


