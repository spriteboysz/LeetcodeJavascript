/*
 * Author: Deean
 * Date: 2023-10-09 23:06
 * FilePath: LCP
 * Description: LCR 159. 库存管理 III
 */

/**
 * @param {number[]} stock
 * @param {number} cnt
 * @return {number[]}
 */
var inventoryManagement = function (stock, cnt) {
    return stock.sort((a, b) => a - b).slice(0, cnt);
};

console.log(inventoryManagement(stock = [2, 5, 7, 4], cnt = 1));