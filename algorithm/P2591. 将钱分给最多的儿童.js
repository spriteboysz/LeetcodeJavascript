/*
 * Author: Deean
 * Date: 2023-08-11 21:29
 * FilePath: algorithm
 * Description:2591. 将钱分给最多的儿童
 */

/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
    if (money < children) return -1;
    money -= children;
    let res = Math.min(Math.floor(money / 7), children);
    
    money -= res * 7;
    children -= res;
    if (children === 0 && money > 0 || children === 1 && money === 3) {
        res--;
    }
    return res;
};

console.log(distMoney(money = 20, children = 3));