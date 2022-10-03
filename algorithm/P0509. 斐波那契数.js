/*
 * Author: Deean
 * Date: 2022-10-03 17:41
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n <= 1) return n;
    let pre = 0, cur = 1;
    for (let i = 2; i <= n; i++) {
        let sum = pre + cur;
        pre = cur;
        cur = sum;
    }
    return cur;
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
