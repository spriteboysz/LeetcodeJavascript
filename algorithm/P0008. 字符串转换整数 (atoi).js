/*
 * Author: Deean
 * Date: 2022-10-03 22:22
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let ret = parseInt(s.trim());
    if (!ret) return 0;
    if (ret > (Math.pow(2, 31) - 1)) {
        return Math.pow(2, 31) - 1
    }
    if (ret < Math.pow(-2, 31)) {
        return Math.pow(-2, 31)
    } else {
        return ret;
    }
};

console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("ab with words"));
