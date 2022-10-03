/*
 * Author: Deean
 * Date: 2022-10-03 13:53
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    return s.split('')
        .sort((a, b) => order.indexOf(a) - order.indexOf(b))
        .join('');
};

console.log(customSortString(order = "cbafg", s = "abcd"));
console.log(customSortString("exv", "xwvee"));
 