/*
 * Author: Deean
 * Date: 2022-10-01 20:07
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num >= 10) {
        num = num.toString().split("").map(item => parseInt(item)).reduce((a, b) => a + b);
    }
    return num;
};

console.log(addDigits(38));
console.log(addDigits(0));
