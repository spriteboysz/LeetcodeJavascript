/*
 * Author: Deean
 * Date: 2023-07-02 22:18
 * FilePath: algorithm
 * Description:1475. 商品折扣后的最终价格
 */


/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let final = [];
    for (let i = 0, n = prices.length; i < n; i++) {
        let discount = 0;
        for (let j = i + 1; j < n; j++) {
            if (prices[i] >= prices[j]) {
                discount = prices[j];
                break;
            }
        }
        final.push(prices[i] - discount);
    }
    return final;
};

console.log(finalPrices(prices = [8, 4, 6, 2, 3]));