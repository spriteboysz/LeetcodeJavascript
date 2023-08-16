/*
 * Author: Deean
 * Date: 2023-08-14 23:12
 * FilePath: interview
 * Description:面试题 05.06. 整数转换
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var convertInteger = function (a, b) {
    let n = a ^ b;
    let cnt = 0;
    while (n) {
        n &= n - 1;
        cnt++;
    }
    return cnt;
};

console.log(convertInteger(29, 15));