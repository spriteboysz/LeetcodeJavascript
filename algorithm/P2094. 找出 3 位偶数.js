/*
 * Author: Deean
 * Date: 2022-10-05 15:31
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
    let count = new Array(10).fill(0);
    for (const digit of digits) {
        count[digit]++;
    }
    let even = [];
    for (let i = 100; i < 999; i += 2) {
        let temp = [...count];
        let [a, b, c] = i.toString().split("").map(item => parseInt(item));
        temp[a]--;
        temp[b]--;
        temp[c]--;
        if (temp.every(num => num >= 0)) even.push(i);
    }
    return even;
};

console.log(findEvenNumbers([2, 2, 8, 8, 2]));
console.log(findEvenNumbers([3, 7, 5]));
