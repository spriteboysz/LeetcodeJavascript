/*
 * Author: Deean
 * Date: 2023-10-06 21:58
 * FilePath: LCP
 * Description: 
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let sum = [], carry = 0;
    let num1 = a.split("").map(item => parseInt(item));
    let num2 = b.split("").map(item => parseInt(item));
    while (num1.length > 0 || num2.length > 0 || carry > 0) {
        if (num1.length > 0) {
            carry += num1.pop();
        }
        if (num2.length > 0) {
            carry += num2.pop();
        }
        sum.push(carry % 2);
        carry >>= 1;
    }
    return sum.reverse().join("");
};

console.log(addBinary(dataA = "1010", dataB = "1011"));