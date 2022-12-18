/*
 * Author: Deean
 * Date: 2022/12/18 22:55
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let set = new Set();
    while (n !== 1) {
        if (set.has(n)) {
            return false;
        }
        set.add(n);
        n = (n + '').split('').reduce((l, i) => l + i * i, 0);
    }
    return true;
};

console.log(isHappy(n = 19));