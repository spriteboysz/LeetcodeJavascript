/*
 * Author: Deean
 * Date: 2023/1/18 21:54
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    arr.sort((a, b) => a - b);
    return arr.slice(0, k);
};

console.log(getLeastNumbers(arr = [3, 2, 1], k = 2));