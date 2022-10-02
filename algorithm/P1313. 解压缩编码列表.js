/*
 * Author: Deean
 * Date: 2022-10-02 14:02
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    let decompress = [];
    for (let i = 0; i < nums.length; i += 2) {
        decompress = decompress.concat(new Array(nums[i]).fill(nums[i + 1]));
    }
    return decompress;
};
console.log(decompressRLElist([1, 1, 2, 3]));
 