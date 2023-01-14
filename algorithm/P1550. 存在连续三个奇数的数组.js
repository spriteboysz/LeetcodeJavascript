/*
 * Author: Deean
 * Date: 2023/1/13 23:25
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    for (let i = 2; i < arr.length; i++) {
        if (arr[i - 2] % 2 === 1 && arr[i - 1] % 2 === 1 && arr[i] % 2 === 1) {
            return true;
        }
    }
    return false;
};

console.log(threeConsecutiveOdds(arr = [1, 2, 34, 3, 4, 5, 7, 23, 12]));