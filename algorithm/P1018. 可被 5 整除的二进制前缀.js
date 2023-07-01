/*
 * Author: Deean
 * Date: 2023-07-01 16:05
 * FilePath: algorithm
 * Description:1018. 可被 5 整除的二进制前缀
 */


/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
    let ans = [];
    let pref = 0;
    for (let i = 0; i < nums.length; i++) {
        pref = ((pref << 1) + nums[i]) % 5;
        ans.push(pref === 0);
    }
    return ans;
};

console.log(prefixesDivBy5(nums = [0, 1, 1]));