/*
 * Author: Deean
 * Date: 2022-10-05 17:45
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
    let fractions = expression.replace(/-/g, "+-").split("+").filter(item => item);

};
console.log(fractionAddition("-1/2+1/2+1/3"));
console.log(fractionAddition("-1/3-1/2"));
