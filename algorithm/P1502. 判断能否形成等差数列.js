/*
 * Author: Deean
 * Date: 2022-10-03 10:13
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
    arr.sort((a, b) => a - b);
    let diff = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (diff !== arr[i] - arr[i - 1]) {
            return false;
        }
    }
    return true;
};


console.log(canMakeArithmeticProgression([3, 5, 1]));
 