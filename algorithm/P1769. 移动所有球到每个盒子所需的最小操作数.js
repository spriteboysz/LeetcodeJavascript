/*
 * Author: Deean
 * Date: 2023-06-11 17:30
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    const n = boxes.length;
    var res = [];
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            if (boxes[j] === "1") {
                sum += Math.abs(j - i);
            }
        }
        res.push(sum);
    }
    return res;
};

console.log(minOperations(boxes = "110"));