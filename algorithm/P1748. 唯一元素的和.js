/*
 * Author: Deean
 * Date: 2022-10-02 21:18
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return nums.filter((num) => map.get(num) === 1)
        .reduce((a, b) => {
            return a + b;
        }, 0);
};

console.log(sumOfUnique([1, 1, 1, 1, 1]));
console.log(sumOfUnique([1, 2, 3, 4, 5]));
