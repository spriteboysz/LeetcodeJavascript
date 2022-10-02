/*
 * Author: Deean
 * Date: 2022-10-02 20:59
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let process = function (num) {
        for (const number of num.toString().split("").map(item => parseInt(item))) {
            if (num % number !== 0) {
                return false;
            }
        }
        return true;
    }
    let nums = [];
    for (let i = left; i <= right; i++) {
        if (process(i)) nums.push(i);
    }
    return nums;
};

console.log(selfDividingNumbers(42, 85));
 