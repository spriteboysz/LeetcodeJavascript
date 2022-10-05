/*
 * Author: Deean
 * Date: 2022-10-05 16:29
 * FilePath: sword
 * Description: 
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let sum = [], carry = 0;
    let nums1 = a.split("").map(item => parseInt(item));
    let nums2 = b.split("").map(item => parseInt(item));
    while (nums1.length > 0 || nums2.length > 0 || carry) {
        let x = nums1.length > 0 ? nums1.pop() : 0;
        let y = nums2.length > 0 ? nums2.pop() : 0;
        sum.push((x + y + carry) % 2);
        carry = (x + y + carry) >> 1;
    }
    return sum.reverse().join("");
};

console.log(addBinary("1010", "1011"));
 