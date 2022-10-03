/*
 * Author: Deean
 * Date: 2022-10-03 14:25
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
    let process = function (num) {
        let cnt = 0;
        while (num > 1) {
            if (num % 2 === 0) {
                num /= 2;
            } else {
                num = num * 3 + 1;
            }
            cnt++;
        }
        return cnt;
    }

    return new Array(hi - lo + 1).fill(0)
        .map((_, i) => lo + i)
        .sort((a, b) => {
            let wa = process(a), wb = process(b);
            if (wa === wb) {
                return a - b;
            } else {
                return wa - wb;
            }
        })[k - 1];
};

console.log(getKth(7, 11, 4));
 