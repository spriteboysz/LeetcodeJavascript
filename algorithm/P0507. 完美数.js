/*
 * Author: Deean
 * Date: 2023-07-01 11:51
 * FilePath: algorithm
 * Description:507. 完美数
 */


/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    let sum = 0;
    for (let i = 1; i * i < num; i++) {
        if (num % i === 0) {
            sum += i + (num / i);
        }
    }
    return sum === num * 2;
};

console.log(checkPerfectNumber(num = 28));