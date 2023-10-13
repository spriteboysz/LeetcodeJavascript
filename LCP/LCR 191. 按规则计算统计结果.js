/*
 * Author: Deean
 * Date: 2023-09-24 15:23
 * FilePath: LCP
 * Description:LCR 191. 按规则计算统计结果
 */

/**
 * @param {number[]} arrayA
 * @return {number[]}
 */
var statisticalResult = function (arrayA) {
    let map = new Map();
    for (let num of arrayA) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    if (map.get(0) > 1) {
        return new Array(arrayA.length).fill(0);
    } else if (map.get(0) === 1) {
        var product = 1;
        for (let num of arrayA) {
            if (num !== 0) {
                product *= num;
            }
        }
        var arrayB = [];
        for (let num of arrayA) {
            if (num === 0) {
                arrayB.push(product);
            } else {
                arrayB.push(0);
            }
        }
        return arrayB;
    } else {
        product = 1;
        for (let num of arrayA) {
            product *= num;
        }
        arrayB = [];
        for (let num of arrayA) {
            arrayB.push(product / num);
        }
        return arrayB;
    }
};
console.log(statisticalResult(arrayA = [2, 4, 6, 8, 10]));