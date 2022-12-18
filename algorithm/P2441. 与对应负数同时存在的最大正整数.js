/*
 * Author: Deean
 * Date: 2022/12/18 12:52
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let set = new Set(nums);
    let max = -1;
    for (const num of set) {
        if (set.has(-num)) {
            max = Math.max(max, num);
        }
    }
    return max;
};

console.log(findMaxK([-1,10,6,7,-7,1]));