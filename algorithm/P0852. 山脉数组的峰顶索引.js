/*
 * Author: Deean
 * Date: 2022-10-03 09:29
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) return i;
    }
};
console.log(peakIndexInMountainArray([0, 10, 5, 2]));
 