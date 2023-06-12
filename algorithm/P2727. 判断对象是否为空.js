/*
 * Author: Deean
 * Date: 2023-06-11 22:38
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    return JSON.stringify(obj).length === 2;
};

obj = {"x": 5, "y": 42}
console.log(isEmpty(obj));