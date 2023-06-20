/*
 * Author: Deean
 * Date: 2023-06-19 23:03
 * FilePath: algorithm
 * Description:剑指 Offer II 084. 含有重复元素集合的全排列
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (!nums || nums.length === 0) return [];
    const paths = [];
    const path = [];
    const visited = new Array(nums.length).fill(false);
    const arr = nums.slice().sort((a, b) => a - b);
    function backtrace(index) {
        if (index === arr.length) {
            paths.push(path.slice());
            return;
        }
        let last = null;
        for (let i = 0; i < arr.length; i++) {
            if (visited[i] === true || arr[i] === last) continue;
            path.push(arr[i]);
            visited[i] = true;
            last = arr[i];
            backtrace(index + 1);
            path.pop();
            visited[i] = false;
        }
    }
    backtrace(0);
    return paths;
};

console.log(permuteUnique([1,1,2]));