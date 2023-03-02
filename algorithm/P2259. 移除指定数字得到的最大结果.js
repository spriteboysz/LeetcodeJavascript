/*
 * Author: Deean
 * Date: 2023-03-01 22:13
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} number
 * @param {string} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
    let maximum = "0";
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            let sub = number.slice(0, i) + number.slice(i + 1);
            if (sub > maximum) {
                maximum = sub;
            }
        }
    }
    return maximum;
};

console.log(removeDigit("1231", "1"));