/*
 * Author: Deean
 * Date: 2022-10-04 21:18
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let map = new Map();
    [...new Set(arr.slice().sort((a, b) => a - b))]
        .forEach((num, i) => {
            map.set(num, i + 1);
        });

    return arr.map(num => map.get(num));
};

console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]));
 