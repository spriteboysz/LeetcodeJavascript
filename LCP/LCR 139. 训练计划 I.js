/*
 * Author: Deean
 * Date: 2023-10-08 23:36
 * FilePath: LCP
 * Description: LCR 139. 训练计划 I
 */

/**
 * @param {number[]} actions
 * @return {number[]}
 */
var trainingPlan = function (actions) {
    return actions.sort((a) => a % 2 === 1 ? -1 : 1);
};

console.log(trainingPlan(actions = [1, 2, 3, 4, 5]));