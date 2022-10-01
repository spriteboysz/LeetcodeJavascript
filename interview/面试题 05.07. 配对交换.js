/*
 * Author: Deean
 * Date: 2022-10-01 20:16
 * FilePath: interview
 * Description: 
 */

/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function (num) {
    return ((num & 0xaaaaaaaa) >> 1) | ((num & 0x55555555) << 1);
};

console.log(exchangeBits(2));
console.log(exchangeBits(3));
