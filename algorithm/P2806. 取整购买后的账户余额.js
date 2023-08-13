/*
 * Author: Deean
 * Date: 2023-08-13 22:31
 * FilePath: algorithm
 * Description:2806. 取整购买后的账户余额
 */

/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function (purchaseAmount) {
    return 100 - Math.floor((purchaseAmount + 5) / 10) * 10;
};

console.log(accountBalanceAfterPurchase(purchaseAmount = 15));