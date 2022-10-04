/*
 * Author: Deean
 * Date: 2022-10-04 20:42
 * FilePath: sword
 * Description: 
 */

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let nums = num.split("").map(c => parseInt(c));
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] % 2 === 0) {
            nums.pop();
        } else {
            break;
        }
    }
    return nums.join("");
};


console.log(largestOddNumber("4206"));
console.log(largestOddNumber("4276"));
