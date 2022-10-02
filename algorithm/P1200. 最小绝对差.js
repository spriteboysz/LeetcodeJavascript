/*
 * Author: Deean
 * Date: 2022-10-02 23:17
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b);
    let minimum = Number.MAX_VALUE;
    for (let i = 1; i < arr.length; i++) {
        minimum = Math.min(minimum, arr[i] - arr[i - 1]);
    }
    let diff = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === minimum) {
            diff.push([arr[i - 1], arr[i]]);
        }
    }
    return diff;
};

console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));
 