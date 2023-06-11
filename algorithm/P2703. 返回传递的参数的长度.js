/*
 * Author: Deean
 * Date: 2023-06-11 17:09
 * FilePath: algorithm
 * Description: 
 */

/**
 * @return {number}
 */
var argumentsLength = function (...args) {
    return args.length;
};

console.log(argumentsLength({}, null, "3"));