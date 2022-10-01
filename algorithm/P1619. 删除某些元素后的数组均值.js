/*
 * Author: Deean
 * Date: 2022-10-01 18:59
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    arr.sort((a, b) => a - b);
    let sum = 0, n = arr.length;
    for (let i = n / 20; i < 19 * n / 20; i++) {
        sum += arr[i];
    }
    return sum / (n * 0.9);
};

console.log(trimMean([6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4]));
 