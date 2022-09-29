/*
 * Author: Deean
 * Date: 2022-09-29 23:29
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let maximum = Math.max(...nums), minimum = Math.min(...nums);
    return gcd(minimum, maximum);
};

function gcd(a, b) {
    if (a % b === 0) return b;
    return gcd(b, a % b);
}

console.log(findGCD(nums = [2, 5, 6, 9, 10]));
 