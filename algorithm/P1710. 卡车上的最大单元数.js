/*
 * Author: Deean
 * Date: 2023-08-02 23:08
 * FilePath: algorithm
 * Description:1710. 卡车上的最大单元数
 */

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let cnt = 0;
    for (const boxType of boxTypes) {
        let numberOfBoxes = boxType[0], numberOfUnitsPerBox = boxType[1];
        if (numberOfBoxes < truckSize) {
            cnt += numberOfBoxes * numberOfUnitsPerBox;
            truckSize -= numberOfBoxes;
        } else {
            cnt += truckSize * numberOfUnitsPerBox;
            break;
        }
    }
    return cnt;
};

console.log(maximumUnits(boxTypes = [[1, 3], [2, 2], [3, 1]], truckSize = 4));