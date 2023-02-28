/*
 * Author: Deean
 * Date: 2023-02-27 23:19
 * FilePath: algorithm
 * Description: 
 */


/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
    const bulky = Math.max(length, width, height) >= 10 ** 4 || length * width * height >= 10 ** 9;
    const heavy = mass >= 100;
    if (bulky && heavy) return "Both";
    if (bulky) return "Bulky";
    if (heavy) return "Heavy";
    return "Neither";
};

console.log(categorizeBox(length = 1000, width = 35, height = 700, mass = 300));