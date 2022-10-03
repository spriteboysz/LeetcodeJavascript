/*
 * Author: Deean
 * Date: 2022-10-03 17:20
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    let set = new Set();
    for (const num of nums) {
        if (set.has(num)) return num;
        set.add(num);
    }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
 