/*
 * Author: Deean
 * Date: 2023-06-11 23:02
 * FilePath: algorithm
 * Description:2629. 复合函数
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return function (x) {
        let ret = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            ret = functions[i](ret);
        }
        return ret;
    }
};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4));