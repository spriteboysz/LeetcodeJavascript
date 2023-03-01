/*
 * Author: Deean
 * Date: 2023-02-28 23:38
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
    let s = num.toString();
    let even = [], odd = [], evenIndex = [], oddIndex = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] % 2 === 0) {
            even.push(s[i]);
            evenIndex.push(i);
        } else {
            odd.push(s[i])
            oddIndex.push(i);
        }
    }
    even.sort((a, b) => b - a);
    odd.sort((a, b) => b - a);
    let largest = Array(s.length);
    for (let i = 0; i < even.length; i++) {
        largest[evenIndex[i]] = even[i];
    }
    for (let i = 0; i < odd.length; i++) {
        largest[oddIndex[i]] = odd[i];
    }
    return Number(largest.join(""));
};

console.log(largestInteger(65875));