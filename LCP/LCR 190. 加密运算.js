/*
 * Author: Deean
 * Date: 2023-10-10 22:43
 * FilePath: LCP
 * Description: LCR 190. 加密运算
 */

/**
 * @param {number} dataA
 * @param {number} dataB
 * @return {number}
 */
var encryptionCalculate = function (dataA, dataB) {
    while (dataB) {
        const carry = (dataA & dataB) << 1;
        dataA = dataA ^ dataB;
        dataB = carry;
    }
    return dataA;
};

console.log(encryptionCalculate(5, -1));