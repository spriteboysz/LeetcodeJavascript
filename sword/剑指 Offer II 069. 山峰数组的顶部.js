/*
 * Author: Deean
 * Date: 2022-10-03 09:14
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
            return i;
        }
    }
};

console.log(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]));
 