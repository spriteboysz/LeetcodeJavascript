/*
 * Author: Deean
 * Date: 2023-08-11 21:17
 * FilePath: algorithm
 * Description:2769. 找出最大的可达成数字
 */

/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function (num, t) {
    return num + t * 2;
};

console.log(theMaximumAchievableX(num = 3, t = 2));