/*
 * Author: Deean
 * Date: 2023-10-09 23:52
 * FilePath: LCP
 * Description: LCR 180. 文件组合
 */


/**
 * @param {number} target
 * @return {number[][]}
 */
var fileCombination = function (target) {
    let sequence = [];
    let temp = [];
    let sum = 0;
    for (let i = 1; i <= target; i++) {
        temp.push(i);
        sum = temp.reduce((pre, cur) => pre + cur);
        while (sum > target) {
            sum -= temp[0];
            temp.shift();
        }
        if (sum === target) {
            temp.length >= 2 && sequence.push([...temp])
        }
    }
    return sequence;
};

console.log(fileCombination(18));