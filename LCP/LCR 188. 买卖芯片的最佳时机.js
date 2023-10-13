/*
 * Author: Deean
 * Date: 2023-10-10 23:00
 * FilePath: LCP
 * Description: LCR 188. 买卖芯片的最佳时机
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var bestTiming = function (prices) {
    let n = prices.length;
    if (n < 2) return 0;
    let ret = 0, minimum = prices[0];
    for (let i = 1; i < n; i++) {
        ret = Math.max(ret, prices[i] - minimum);
        minimum = Math.min(minimum, prices[i]);
    }
    return ret;
};

console.log(bestTiming(prices = [3, 6, 2, 9, 8, 5]));