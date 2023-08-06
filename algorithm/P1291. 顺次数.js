/*
 * Author: Deean
 * Date: 2023-08-05 22:42
 * FilePath: algorithm
 * Description:1291. 顺次数
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    let nums = [];
    for (let i = 1; i <= 9; i++) {
        let num = i;
        for (let j = i + 1; j <= 9; j++) {
            num = num * 10 + j;
            if (num >= low && num <= high) {
                nums.push(num);
            }
        }
    }
    nums.sort((a, b) => {
        return a - b;
    });
    return nums;
};

console.log(sequentialDigits(low = 1000, high = 13000));