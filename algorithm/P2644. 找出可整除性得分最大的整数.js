/*
 * Author: Deean
 * Date: 2023-08-06 19:34
 * FilePath: algorithm
 * Description:2644. 找出可整除性得分最大的整数
 */

/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
    divisors = [...new Set(divisors)];
    let map = new Map();
    for (let i = 0; i < divisors.length; i++) {
        let cnt = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] % divisors[i] === 0) {
                cnt++;
            }
        }
        map.set(divisors[i], cnt);
    }
    divisors.sort((a, b) => map.get(a) === map.get(b) ? a - b : map.get(b) - map.get(a));
    return divisors[0];
};

console.log(maxDivScore(nums = [4, 7, 9, 3, 9], divisors = [5, 2, 3, 5]));