/*
 * Author: Deean
 * Date: 2023-08-15 23:00
 * FilePath: interview
 * Description:面试题 16.11. 跳水板
 */

/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
    if (k === 0) return [];
    if (shorter === longer) return [shorter * k];
    var diving = [];
    for (let i = 0; i <= k; i++) {
        diving.push(i * longer + (k - i) * shorter);
    }
    return diving;
};

console.log(divingBoard(1, 2, 3));