/*
 * Author: Deean
 * Date: 2022-10-01 14:09
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    const map = new Map();
    for (const num of arr) {
        let n = num, value = 0;
        while (n > 0) {
            value += n & 1;
            n >>= 1;
        }
        map.set(num, value);
    }
    arr.sort((a, b) => {
        if (map.get(a) === map.get(b)) {
            return a - b;
        } else {
            return map.get(a) - map.get(b);
        }
    });
    return arr;
};

console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
 