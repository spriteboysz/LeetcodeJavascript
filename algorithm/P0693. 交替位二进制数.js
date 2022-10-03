/*
 * Author: Deean
 * Date: 2022-10-03 21:50
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    let bin = n.toString(2);
    return !bin.includes("00") && !bin.includes("11");
};

console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(7));
