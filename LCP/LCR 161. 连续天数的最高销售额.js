/*
 * Author: Deean
 * Date: 2023-10-09 23:08
 * FilePath: LCP
 * Description: LCR 161. 连续天数的最高销售额
 */

/**
 * @param {number[]} sales
 * @return {number}
 */
var maxSales = function (sales) {
    let pref = 0, maximum = sales[0];
    sales.forEach((sale) => {
        pref = Math.max(pref + sale, sale);
        maximum = Math.max(maximum, pref);
    });
    return maximum;
};

console.log(maxSales(sales = [-2, 1, -3, 4, -1, 2, 1, -5, 4]));