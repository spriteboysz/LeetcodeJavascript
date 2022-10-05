/*
 * Author: Deean
 * Date: 2022-10-05 17:16
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        carry += digits[i];
        digits[i] = carry % 10;
        carry = Math.floor(carry / 10);
    }
    if (carry) digits.unshift(carry);
    return digits;
};

console.log(plusOne(digits = [4, 3, 2, 1]));
console.log(plusOne(digits = [0]));
console.log(plusOne(digits = [9, 9, 9, 9]));
