/*
 * Author: Deean
 * Date: 2022-10-05 16:50
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let num1 = a.split("").map(item => parseInt(item));
    let num2 = b.split("").map(item => parseInt(item));
    let sum = [], carry = 0;
    while (num1.length > 0 || num2.length > 0 || carry) {
        let x = num1.length > 0 ? num1.pop() : 0;
        let y = num2.length > 0 ? num2.pop() : 0;
        sum.push((x + y + carry) % 2);
        carry = (x + y + carry) >> 1;
    }
    return sum.reverse().join("");
};

console.log(addBinary(dataA = "11", dataB = "1"));
 