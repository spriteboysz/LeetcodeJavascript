/*
 * Author: Deean
 * Date: 2023-09-22 22:49
 * FilePath: LCP
 * Description:LCP 77. 符文储备
 */

/**
 * @param {number[]} runes
 * @return {number}
 */
var runeReserve = function (runes) {
    var maximum = 1, cur = 1;
    runes.sort((a, b) => a - b);
    for (let i = 0, n = runes.length; i < n - 1; i++) {
        if (runes[i + 1] - runes[i] > 1) {
            cur = 1;
        } else {
            cur += 1;
            maximum = Math.max(maximum, cur);
        }
    }
    return maximum;
};

console.log(runeReserve([1, 3, 5, 4, 1, 7]));