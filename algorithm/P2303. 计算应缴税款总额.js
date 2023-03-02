/*
 * Author: Deean
 * Date: 2023-03-01 22:22
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
    let tax = 0, lower = 0;
    for (const bracket of brackets) {
        let upper = bracket[0], percent = bracket[1];
        let cur = (Math.min(income, upper) - lower) * percent;
        tax += cur;
        lower = upper;
        if (income <= upper) break;
    }
    return tax / 100.0;
};

console.log(calculateTax([[3, 50], [7, 10], [12, 25]], 10));