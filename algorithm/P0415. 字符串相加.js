/*
 * Author: Deean
 * Date: 2022-10-05 16:55
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let arr1 = num1.split("").map(item => parseInt(item));
    let arr2 = num2.split("").map(item => parseInt(item));
    let sum = [], carry = 0;
    while (arr1.length > 0 || arr2.length > 0 || carry) {
        carry += arr1.length > 0 ? arr1.pop() : 0;
        carry += arr2.length > 0 ? arr2.pop() : 0;
        sum.push(carry % 10);
        carry = Math.floor(carry / 10);
    }
    return sum.reverse().join("");
};

console.log(addStrings(num1 = "456", num2 = "77"));
console.log(addStrings(num1 = "0", num2 = "0"));
