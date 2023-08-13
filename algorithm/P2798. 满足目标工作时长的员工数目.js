/*
 * Author: Deean
 * Date: 2023-08-13 22:37
 * FilePath: algorithm
 * Description:2798. 满足目标工作时长的员工数目
 */

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
    let cnt = 0;
    for (const hour of hours) {
        if (hour >= target) {
            cnt++;
        }
    }
    return cnt;
};

console.log(numberOfEmployeesWhoMetTarget(hours = [0, 1, 2, 3, 4], target = 2));