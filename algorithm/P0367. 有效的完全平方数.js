/*
 * Author: Deean
 * Date: 2023-07-01 11:08
 * FilePath: algorithm
 * Description:367. 有效的完全平方数
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let left = 0, right = num;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (mid * mid > num) {
            right = mid - 1;
        } else if (mid * mid < num) {
            left = mid + 1
        } else {
            return true;
        }
    }
    return false;
};

console.log(isPerfectSquare(64));