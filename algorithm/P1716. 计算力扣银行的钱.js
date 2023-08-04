/*
 * Author: Deean
 * Date: 2023-08-02 23:03
 * FilePath: algorithm
 * Description: 1716. 计算力扣银行的钱
 */

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let money = 0, weekday = 1;
    for (let i = 1; i <= n; i++) {
        if (i > 1 && (i % 7) === 1) {
            weekday = Math.floor(i / 7) + 1;
        }
        money += weekday;
        weekday++;
    }
    return money;
};

console.log(totalMoney(n = 10));