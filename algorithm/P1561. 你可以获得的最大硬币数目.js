/*
 * Author: Deean
 * Date: 2022-09-29 23:10
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
    piles.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < Math.floor(piles.length * 2 / 3); i += 2) {
        sum += piles[i + 1];
    }
    return sum;
};

console.log(maxCoins(piles = [9, 8, 7, 6, 5, 1, 2, 3, 4]));
console.log(maxCoins([9, 5, 6, 8, 10, 1, 4, 10, 7]))    // 24
 