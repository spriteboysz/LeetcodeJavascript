/*
 * Author: Deean
 * Date: 2023-06-18 23:01
 * FilePath: sword
 * Description:剑指 Offer II 083. 没有重复元素集合的全排列
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let paths = [];
    var backtrace = function (start, path) {
        if (path.length === nums.length) {
            paths.push(path.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (path.includes(nums[i])) continue;
            path.push(nums[i]);
            backtrace(start + 1, path);
            path.pop();
        }
    }
    backtrace(0, []);
    return paths;
};

console.log(permute([1, 2, 3]));