/*
 * Author: Deean
 * Date: 2023-08-08 23:27
 * FilePath: algorithm
 * Description:371. 两整数之和
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    while (b !== 0) {
        let carry = (a & b) << 1;
        a ^= b;
        b = carry;
    }
    return a;
};

console.log(getSum(1, 2));