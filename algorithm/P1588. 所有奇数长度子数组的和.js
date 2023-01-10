/*
 * Author: Deean
 * Date: 2023/1/10 23:17
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let sum = 0;
    for (let start = 0; start < arr.length; start++) {
        for (let length = 1; start + length <= arr.length; length += 2) {
            const end = start + length - 1;
            for (let i = start; i <= end; i++) {
                sum += arr[i];
            }
        }
    }
    return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));