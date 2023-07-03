/*
 * Author: Deean
 * Date: 2023-07-02 22:51
 * FilePath: algorithm
 * Description:1089. 复写零
 */


/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    for (let i = 0, n = arr.length; i < n; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            i++;
            arr.pop();
        }
    }
    console.log(arr);
};

duplicateZeros(arr = [1, 0, 2, 3, 0, 4, 5, 0]);