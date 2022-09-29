/*
 * Author: Deean
 * Date: 2022-09-29 23:44
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    let nums = [], left = 0, right = s.length;
    for (const c of s) {
        if (c === "D") {
            nums.push(right);
            right--;
        } else {
            nums.push(left);
            left++;
        }
    }
    nums.push(left);
    return nums;
};

console.log(diStringMatch(s = "DDI"));
 