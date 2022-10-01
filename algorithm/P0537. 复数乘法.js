/*
 * Author: Deean
 * Date: 2022-10-01 11:07
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
    let [a, b] = num1.replace("i", "").split("+").map(num => parseInt(num));
    let [c, d] = num2.replace("i", "").split("+").map(num => parseInt(num));
    let real = a * c - b * d, img = a * d + b * c;
    return real.toString() + "+" + img.toString() + "i";
};

console.log(complexNumberMultiply("1+-1i", "1+-1i"));
 