/*
 * Author: Deean
 * Date: 2023/1/18 21:40
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    var noZero = function (n) {
        return (n + '').indexOf('0') === -1;
    };
    for (let i = 0; i <= n; i++) {
        if (noZero(i) && (noZero(n - i))) {
            return [i, n - i];
        }
    }
};

console.log(getNoZeroIntegers(2));