/*
 * Author: Deean
 * Date: 2023-10-08 23:06
 * FilePath: LCP
 * Description: LCR 121. 寻找目标值 - 二维数组
 */


/**
 * @param {number[][]} plants
 * @param {number} target
 * @return {boolean}
 */
var findTargetIn2DPlants = function (plants, target) {
    for (let i = 0; i < plants.length; i++) {
        for (let j = 0; j < plants[0].length; j++) {
            if (plants[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};

console.log(findTargetIn2DPlants(plants = [[2, 3, 6, 8], [4, 5, 8, 9], [5, 9, 10, 12]], target = 8));