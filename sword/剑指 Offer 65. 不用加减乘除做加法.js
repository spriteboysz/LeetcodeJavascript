/*
 * Author: Deean
 * Date: 2022-10-05 18:13
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
    while (b !== 0) {
        const carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a;
};
console.log(add(dataA = 1, dataB = 1));
 