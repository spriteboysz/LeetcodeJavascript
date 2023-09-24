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
    var product = 1;
    for (let num of arrayA) {
        product *= num;
    }
    var arrayB = [];
    for (let num of arrayA) {
        arrayB.push(product / num);
    }
    return arrayB;

};
console.log(statisticalResult(arrayA = [2, 4, 6, 8, 10]));