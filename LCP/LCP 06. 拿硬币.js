/*
 * Author: Deean
 * Date: 2022-09-26 23:30
 * FilePath: LCP
 * Description: 
 */

/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
    let cnt = 0;
    for (const coin of coins) {
        cnt += Math.ceil(coin / 2);
    }
    return cnt;
};

console.log(minCount([2, 3, 10]));
 