/*
 * Author: Deean
 * Date: 2023-07-06 23:25
 * FilePath: algorithm
 * Description:1338. 数组大小减半
 */


/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
    let map = new Map();
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let nums = [...map.values()];
    nums.sort((a, b) => b - a);
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res += nums[i];
        if (res >= arr.length / 2) {
            return i + 1;
        }
    }
    return -1;
};

console.log(minSetSize(arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));