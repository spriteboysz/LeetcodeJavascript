/*
 * Author: Deean
 * Date: 2023-07-03 23:24
 * FilePath: algorithm
 * Description:941. 有效的山脉数组
 */


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    let pos = 0, n = arr.length;
    while (pos < n && arr[pos] < arr[pos + 1]) {
        pos++;
    }
    if (pos === 0 || pos === n - 1) return false;
    while (pos < n && arr[pos] > arr[pos + 1]) {
        pos++;
    }
    return pos === n - 1;
};

console.log(validMountainArray(arr = [0, 3, 2, 1]));