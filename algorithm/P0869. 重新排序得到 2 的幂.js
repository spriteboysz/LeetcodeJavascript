/*
 * Author: Deean
 * Date: 2023-08-06 09:28
 * FilePath: algorithm
 * Description:869. 重新排序得到 2 的幂
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
    /**
     * @param {number} n
     * @return {string}
     */
    var process = function (n) {
        let digits = [];
        while (n > 0) {
            digits.push(n % 10);
            n = Math.floor(n / 10);
        }
        digits.sort((a, b) => a - b);
        return digits.join("");
    }
    
    let set = new Set();
    for (let i = 0; 2 ** i <= 10 ** 9; i++) {
        set.add(process(2 ** i));
    }
    return set.has(process(n));
};

console.log(reorderedPowerOf2(n = 1));