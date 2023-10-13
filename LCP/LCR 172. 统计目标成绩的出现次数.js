/*
 * Author: Deean
 * Date: 2023-10-09 23:21
 * FilePath: LCP
 * Description: LCR 172. 统计目标成绩的出现次数
 */

/**
 * @param {number[]} scores
 * @param {number} target
 * @return {number}
 */
var countTarget = function (scores, target) {
    let cnt = 0;
    for (let score of scores) {
        if (score === target) {
            cnt += 1;
        }
        if (score > target) {
            break;
        }
    }
    return cnt;
};

console.log(countTarget(scores = [2, 2, 3, 4, 4, 4, 5, 6, 6, 8], target = 4));