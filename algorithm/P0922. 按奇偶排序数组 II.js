/*
 * Author: Deean
 * Date: 2022-10-03 08:51
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    let even = [], odd = [], nums2 = [];
    for (const num of nums) {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    }
    for (let i = 0; i < even.length; i++) {
        nums2.push(even[i], odd[i]);
    }
    return nums2;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
 