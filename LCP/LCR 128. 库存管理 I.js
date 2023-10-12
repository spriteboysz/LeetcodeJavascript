/*
 * Author: Deean
 * Date: 2023-10-08 23:25
 * FilePath: LCP
 * Description: LCR 128. 库存管理 I
 */


/**
 * @param {number[]} stock
 * @return {number}
 */
var stockManagement = function (stock) {
    return stock.sort((a, b) => a - b)[0];
};

console.log(stockManagement(stock = [4, 5, 8, 3, 4]));