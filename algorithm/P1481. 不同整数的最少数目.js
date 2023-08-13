/*
 * Author: Deean
 * Date: 2023-08-13 10:37
 * FilePath: algorithm
 * Description:1481. 不同整数的最少数目
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    let map = new Map();
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let cnt = Array.from(map.values()).sort((a, b) => a - b);
    for (let i = 0, n = cnt.length; i < n; i++) {
        k -= cnt[i];
        if (k < 0) {
            return n - i;
        }
    }
    return 0;
};

console.log(findLeastNumOfUniqueInts(arr = [4, 3, 1, 1, 3, 3, 2], k = 3));