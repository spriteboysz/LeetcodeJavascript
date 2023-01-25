/*
 * Author: Deean
 * Date: 2023/1/19 21:52
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    let max = -1, sec = -1;
    for (let num of s) {
        if (num >= 0 && num <= 9) {
            if (num > max) {
                sec = max;
                max = num;
            }
            if (num < max && num > sec) {
                sec = num;
            }
        }
    }
    return max === sec ? -1 : sec;
};

console.log(secondHighest("dfa12321afd"));