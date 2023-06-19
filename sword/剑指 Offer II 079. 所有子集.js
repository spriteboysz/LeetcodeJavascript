/*
 * Author: Deean
 * Date: 2023-06-18 23:12
 * FilePath: sword
 * Description:剑指 Offer II 079. 所有子集
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let paths = [];
    var backtrace = function (start, path) {
        paths.push(path.slice());
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrace(i + 1, path);
            path.pop();
        }
    }
    backtrace(0, []);
    return paths;
};

console.log(subsets([1, 2, 3]));