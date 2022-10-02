/*
 * Author: Deean
 * Date: 2022-10-02 21:04
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
    let cnt = 0, n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(arr[i] - arr[j]) > a) continue;
            for (let k = j + 1; k < n; k++) {
                if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                    cnt++;
                }
            }
        }
    }
    return cnt;
};

let arr = [1, 1, 2, 2, 3], a = 0, b = 0, c = 1;
console.log(countGoodTriplets(arr, a, b, c));
console.log(countGoodTriplets(arr = [3, 0, 1, 1, 9, 7], a = 7, b = 2, c = 3));
 