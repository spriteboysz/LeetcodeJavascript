/*
 * Author: Deean
 * Date: 2023-08-06 11:38
 * FilePath: algorithm
 * Description:441. 排列硬币
 */

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let left = 1, right = n;
    while (left < right) {
        let mid = left + Math.floor((right - left + 1) / 2);
        if (mid * (mid + 1) <= n * 2) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
};

console.log(arrangeCoins(n = 8));