/*
 * Author: Deean
 * Date: 2023-06-12 22:56
 * FilePath: algorithm
 * Description:2706. 购买两块巧克力
 */

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    let min1 = Infinity, min2 = Infinity;
    for (const price of prices) {
        if (price < min1) {
            min2 = min1
            min1 = price;
        } else if (price < min2) {
            min2 = price;
        }
    }
    return (min1 + min2) > money ? money : money - (min1 + min2);
};


console.log(buyChoco(prices = [1, 2, 2], money = 3));