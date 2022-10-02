/*
 * Author: Deean
 * Date: 2022-10-02 18:43
 * FilePath: sword
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return [...map.keys()].filter((num) => map.get(num) === 1)[0];
};

console.log(singleNumber([9, 1, 7, 9, 7, 9, 7]));
 