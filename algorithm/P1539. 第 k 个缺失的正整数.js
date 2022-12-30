/*
 * Author: Deean
 * Date: 2022/12/19 23:25
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let list = [], num = 1;
    while (list.length <= k) {
        if (!arr.includes(num)) {
            list.push(num);
        }
        num++;
    }
    return list[k - 1];
};

console.log(findKthPositive([2, 3, 4, 7, 11], k = 5));