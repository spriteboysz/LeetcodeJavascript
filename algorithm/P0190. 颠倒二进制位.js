/*
 * Author: Deean
 * Date: 2022-10-02 23:53
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    return parseInt((n.toString(2) + '')
        .padStart(32, '0')
        .split('')
        .reverse()
        .join(''), 2);
};
console.log(reverseBits(43261596));
 