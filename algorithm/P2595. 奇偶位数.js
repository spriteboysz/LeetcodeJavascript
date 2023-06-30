/*
 * Author: Deean
 * Date: 2023-06-29 23:26
 * FilePath: algorithm
 * Description:2595. 奇偶位数
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
    let bits = [...n.toString(2)].reverse();
    let n1 = 0, n2 = 0;
    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === '0') continue;
        i % 2 ? n2++ : n1++;
    }
    return [n1, n2];
};

console.log(evenOddBit(n = 17));