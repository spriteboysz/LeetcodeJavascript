/*
 * Author: Deean
 * Date: 2023-10-09 23:03
 * FilePath: LCP
 * Description: LCR 158. 库存管理 II
 */

/**
 * @param {number[]} stock
 * @return {number}
 */
var inventoryManagement = function (stock) {
    let ans = 0, count = 0;
    for (let i = 0; i < stock.length; i++) {
        if (!count) {
            ans = stock[i];
            count++;
        } else {
            count += stock[i] === ans ? 1 : -1;
        }
    }
    return ans;
};

console.log(inventoryManagement(stock = [6, 1, 3, 1, 1, 1]));