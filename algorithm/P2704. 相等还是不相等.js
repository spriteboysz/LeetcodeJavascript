/*
 * Author: Deean
 * Date: 2023-06-20 23:20
 * FilePath: algorithm
 * Description:2704. 相等还是不相等
 */

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: (val2) => {
            if (val === val2) {
                return true;
            } else {
                throw "Not Equal";
            }
        },
        notToBe: (val2) => {
            if (val !== val2) {
                return true;
            } else {
                throw "Equal";
            }
        }
    }
};


console.log(expect("5").toBe(5));
console.log(expect("5").notToBe(5));