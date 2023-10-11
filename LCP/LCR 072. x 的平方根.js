/*
 * Author: Deean
 * Date: 2023-10-08 22:42
 * FilePath: LCP
 * Description: LCR 072. x 的平方根
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0) return 0;
    let left = 0, right = x;
    while (left <= right) {
        let mid = (right + left) >> 1;
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};

console.log(mySqrt(4));
console.log(mySqrt(8));