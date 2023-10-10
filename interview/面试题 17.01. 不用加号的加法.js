/*
 * Author: Deean
 * Date: 2022-10-05 18:24
 * FilePath: interview
 * Description: 
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
    while (b !== 0) {
        let carry = (a & b) << 1;
        a ^= b;
        b = carry;
    }
    return a;
};
console.log(add(dataA = 1, dataB = 1));
 