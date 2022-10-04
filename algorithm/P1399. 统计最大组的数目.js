/*
 * Author: Deean
 * Date: 2022-10-04 16:26
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
    let arr = new Array(101).fill(0);
    for (let i = 1; i <= n; i++) {
        let index = i.toString().split("").map(item => parseInt(item)).reduce((a, b) => a + b);
        arr[index]++;
    }
    let maximum = Math.max(...arr);
    return arr.filter(num => num === maximum).length;
};

console.log(countLargestGroup(15));
console.log(countLargestGroup(24));
