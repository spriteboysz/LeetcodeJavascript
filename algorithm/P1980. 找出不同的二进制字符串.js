/*
 * Author: Deean
 * Date: 2023-08-13 09:32
 * FilePath: algorithm
 * Description:1980. 找出不同的二进制字符串
 */

/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    let set = new Set(nums);
    const n = nums[0].length;
    for (let i = 0; i < 2 ** n; i++) {
        let bin = i.toString(2);
        bin = "0".repeat(n - bin.length) + bin;
        if (!set.has(bin)) {
            return bin;
        }
    }
    return "-1";
};

console.log(findDifferentBinaryString(nums = ["111", "011", "001"]));