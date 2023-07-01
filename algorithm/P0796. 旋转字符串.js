/*
 * Author: Deean
 * Date: 2023-07-01 13:04
 * FilePath: algorithm
 * Description:796. 旋转字符串
 */


/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    return s.length === goal.length && (s + s).includes(goal);
};

console.log(rotateString(s = "abcde", goal = "cdeab"));