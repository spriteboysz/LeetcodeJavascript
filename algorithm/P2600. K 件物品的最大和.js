/*
 * Author: Deean
 * Date: 2023-08-06 20:02
 * FilePath: algorithm
 * Description:2600. K 件物品的最大和
 */

/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
    let item = [...new Array(numOnes).fill(1), ...new Array(numZeros).fill(0), ...new Array(numNegOnes).fill(-1)];
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += item[i];
    }
    return sum;
};

console.log(kItemsWithMaximumSum(numOnes = 3, numZeros = 2, numNegOnes = 0, k = 2));