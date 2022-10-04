/*
 * Author: Deean
 * Date: 2022-10-04 17:54
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    return (salary.reduce((a, b) => a + b) - Math.max(...salary) - Math.min(...salary)) / (salary.length - 2);
};
console.log(average([8000, 9000, 2000, 3000, 6000, 1000]));
 