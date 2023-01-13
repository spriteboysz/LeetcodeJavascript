/*
 * Author: Deean
 * Date: 2023/1/12 23:25
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    while (n !== 0) {
        if (n % 3 === 2) {
            return false;
        }
        n = Math.floor(n / 3);
    }
    return true;
};

console.log(checkPowersOfThree(n = 5));