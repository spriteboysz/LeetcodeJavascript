/*
 * Author: Deean
 * Date: 2022-10-05 18:04
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let num2 = k.toString().split("").map(el => parseInt(el));
    let sum = [], carry = 0;
    while (num.length > 0 || num2.length > 0 || carry) {
        carry += num.length > 0 ? num.pop() : 0;
        carry += num2.length > 0 ? num2.pop() : 0;
        sum.push(carry % 10);
        carry = Math.floor(carry / 10);
    }
    return sum.reverse();
};

console.log(addToArrayForm(num = [2, 1, 5], k = 806));
 