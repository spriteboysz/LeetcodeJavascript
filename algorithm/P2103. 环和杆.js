/*
 * Author: Deean
 * Date: 2022-10-04 09:44
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
    let rods = new Array(10).fill(0);
    for (let i = 0; i < rings.length; i += 2) {
        let index = parseInt(rings.charAt(i + 1));
        if (rings.charAt(i) === "R") rods[index] |= 1;
        if (rings.charAt(i) === "G") rods[index] |= 2;
        if (rings.charAt(i) === "B") rods[index] |= 4;
    }
    return rods.filter(num => num === 7).length;
};

console.log(countPoints("B0R0G0R9R0B0G0"));
 