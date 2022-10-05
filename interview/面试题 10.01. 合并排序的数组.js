/*
 * Author: Deean
 * Date: 2022-10-05 15:27
 * FilePath: interview
 * Description: 
 */

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
    for (let i = m; i < m + n; i++) {
        A[i] = B[i - m];
    }
    A.sort((a, b) => a - b);
    console.log(A);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
 