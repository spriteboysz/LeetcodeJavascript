/*
 * Author: Deean
 * Date: 2023-07-03 23:34
 * FilePath: algorithm
 * Description:1013. 将数组分成和相等的三个部分
 */


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    if (sum % 3 !== 0) return false;
    let cnt = 0;
    for (let i = 0, acc = 0; i < arr.length; i++) {
        acc += arr[i];
        if (acc === sum / 3) {
            acc = 0;
            cnt += 1;
        }
    }
    return cnt >= 3;
};

console.log(canThreePartsEqualSum(arr = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4]));