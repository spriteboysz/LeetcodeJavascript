/*
 * Author: Deean
 * Date: 2023-08-13 11:59
 * FilePath: algorithm
 * Description:1237. 找出给定方程的正整数解
 */


// This is the CustomFunction's API interface.
// You should not implement it, or speculate about its implementation
function CustomFunction() {
    /**
     * @param {Number} x
     * @param {Number} y
     * @return {Number}
     */
    this.f = function (x, y) {
        return x + y;
    };
}


/**
 * @param {CustomFunction} customfunction
 * @param {Number} z
 * @return {Number[][]}
 */
var findSolution = function (customfunction, z) {
    let ret = [];
    for (let i = 1; i <= 1000; i++) {
        for (let j = 1; j <= 1000; j++) {
            if (customfunction.f(i, j) === z) {
                ret.push([i, j]);
            }
        }
    }
    return ret;
};

let fun = new CustomFunction();
console.log(findSolution(fun, 5));