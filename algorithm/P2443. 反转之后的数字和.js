/*
 * Author: Deean
 * Date: 2023-08-11 21:32
 * FilePath: algorithm
 * Description:2443. 反转之后的数字和
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function (num) {
    var process = function (num) {
        let rev = 0;
        while (num > 0) {
            rev = rev * 10 + num % 10;
            num = Math.floor(num / 10);
        }
        return rev;
    }
    
    for (let i = 0; i <= num; i++) {
        if (i + process(i) === num) {
            return true;
        }
    }
    return false;
};

console.log(sumOfNumberAndReverse(num = 181));
console.log(sumOfNumberAndReverse(num = 443));