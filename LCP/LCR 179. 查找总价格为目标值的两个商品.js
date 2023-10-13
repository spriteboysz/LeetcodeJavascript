/*
 * Author: Deean
 * Date: 2023-10-09 23:49
 * FilePath: LCP
 * Description: LCR 179. 查找总价格为目标值的两个商品
 */

/**
 * @param {number[]} price
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (price, target) {
    let left = 0, right = price.length - 1;
    while (left < right) {
        if (price[left] + price[right] < target) {
            left += 1;
        } else if (price[left] + price[right] > target) {
            right -= 1;
        } else {
            return [price[left], price[right]];
        }
    }
    return [-1, -1];
};

console.log(twoSum(price = [3, 9, 12, 15], target = 18));