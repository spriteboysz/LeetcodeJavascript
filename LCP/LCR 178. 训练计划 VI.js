/*
 * Author: Deean
 * Date: 2023-10-09 23:47
 * FilePath: LCP
 * Description: LCR 178. 训练计划 VI
 */

/**
 * @param {number[]} actions
 * @return {number}
 */
var trainingPlan = function (actions) {
    let map = new Map();
    for (let action of actions) {
        map.set(action, (map.get(action) || 0) + 1);
    }
    for (let action of actions) {
        if (map.get(action) === 1) {
            return action;
        }
    }
    return -1;
};

console.log(trainingPlan(actions = [5, 7, 5, 5]));