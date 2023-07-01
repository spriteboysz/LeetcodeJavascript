/*
 * Author: Deean
 * Date: 2023-07-01 10:04
 * FilePath: algorithm
 * Description:374. 猜数字大小
 */


/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return         -1 if num is higher than the picked number
 *                  1 if num is lower than the picked number
 *               otherwise return 0
 */
var guess = function (num) {
    if (num > 6) {
        return -1;
    } else if (num < 6) {
        return 1;
    } else {
        return 0;
    }
    
}

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let left = 1, right = n;
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (guess(mid) <= 0) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

console.log(guessNumber(n = 10));