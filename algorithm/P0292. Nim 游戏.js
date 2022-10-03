/*
 * Author: Deean
 * Date: 2022-10-03 09:50
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
    return n % 4 !== 0;
};

console.log(canWinNim(4));
console.log(canWinNim(2));
