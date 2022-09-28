/*
 * Author: Deean
 * Date: 2022-09-28 22:24
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let cnt = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num -= 1;
        }
        cnt++;
    }
    return cnt;
};

console.log(numberOfSteps(num = 123));
 