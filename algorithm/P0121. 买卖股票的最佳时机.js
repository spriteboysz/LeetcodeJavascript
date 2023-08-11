/*
 * Author: Deean
 * Date: 2023-08-10 22:49
 * FilePath: algorithm
 * Description:121. 买卖股票的最佳时机
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let n = prices.length;
    if (n < 2) return 0;
    let ret = 0, minimum = prices[0];
    for (let i = 1; i < n; i++) {
        ret = Math.max(ret, prices[i] - minimum);
        minimum = Math.min(minimum, prices[i]);
    }
    return ret;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));