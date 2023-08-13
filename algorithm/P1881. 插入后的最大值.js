/*
 * Author: Deean
 * Date: 2023-08-13 10:12
 * FilePath: algorithm
 * Description:1881. 插入后的最大值
 */

/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function (n, x) {
    if (n > 0) {
        for (let i = 0; i < n.length; i++) {
            if (n[i] < x) {
                return n.slice(0, i) + x + n.slice(i);
            }
        }
    } else {
        for (let i = 1; i < n.length; i++) {
            if (n[i] > x) {
                return n.slice(0, i) + x + n.slice(i);
            }
        }
    }
    return n + x;
};

console.log(maxValue(n = "99", x = 9));
console.log(maxValue(n = "-132", x = 2));