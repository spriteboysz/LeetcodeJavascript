/*
 * Author: Deean
 * Date: 2023-08-06 20:47
 * FilePath: algorithm
 * Description:2578. 最小和分割
 */

/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
    let nums = num.toString().split("").map((num) => +num);
    let s1 = "", s2 = "";
    nums.sort((a, b) => b - a);
    while (nums.length > 0) {
        if (s1.length === s2.length) {
            s1 += nums.pop();
        } else {
            s2 += nums.pop();
        }
    }
    return +s1 + +s2;
};

console.log(splitNum(4325));