/*
 * Author: Deean
 * Date: 2023-06-20 22:54
 * FilePath: algorithm
 * Description:2739. 总行驶距离
 */

/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
    return (mainTank + Math.min(Math.floor((mainTank - 1) / 4), additionalTank)) * 10;
};


console.log(distanceTraveled(mainTank = 5, additionalTank = 10));