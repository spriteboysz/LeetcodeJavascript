/*
 * Author: Deean
 * Date: 2023-02-27 23:02
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
    while (k--) {
        gifts.sort((a, b) => a - b);
        gifts.push(Math.floor(Math.sqrt(gifts.pop())));
    }
    return gifts.reduce((x, y) => x + y, 0);
};

console.log(pickGifts(gifts = [25, 64, 9, 4, 100], k = 4));