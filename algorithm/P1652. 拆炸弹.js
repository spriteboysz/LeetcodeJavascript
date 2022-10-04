/*
 * Author: Deean
 * Date: 2022-10-04 16:39
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    let n = code.length, decode = Array(n).fill(0);
    if (k < 0) code.reverse();
    for (let i = 0; i < n; i++) {
        for (let c = 0; c < Math.abs(k); c++) {
            decode[i] += code[((i + 1) % n + c) % n];
        }
    }
    return k >= 0 ? decode : decode.reverse();
};

console.log(decrypt(code = [5, 7, 1, 4], k = 3));
console.log(decrypt(code = [1, 2, 3, 4], k = 0));
console.log(decrypt(code = [2, 4, 9, 3], k = -2));
