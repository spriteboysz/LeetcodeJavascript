/*
 * Author: Deean
 * Date: 2022-10-04 17:44
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    return new Array(num).fill(0).filter((_, i) => {
        return (i + 1).toString()
            .split("")
            .map(item => parseInt(item))
            .reduce((a, b) => a + b) % 2 === 0;
    }).length;
};

console.log(countEven(30));
 