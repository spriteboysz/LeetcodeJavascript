/*
 * Author: Deean
 * Date: 2023-06-16 22:15
 * FilePath: sword
 * Description:剑指 Offer 57 - II. 和为s的连续正数序列
 */

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
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

console.log(findContinuousSequence(15));