/*
 * Author: Deean
 * Date: 2022-10-03 22:29
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    return x.toString() === x.toString().split("").reverse().join("");
};
console.log(isPalindrome(x = -121));
console.log(isPalindrome(x = 10));
