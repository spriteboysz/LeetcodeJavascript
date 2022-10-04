/*
 * Author: Deean
 * Date: 2022-10-04 14:09
 * FilePath: LCP
 * Description: 
 */

/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function (cont) {
    function recursion(cont, i) {
        if (i === cont.length - 1) return [cont[i], 1];
        let next = recursion(cont, i + 1);
        return [cont[i] * next[0] + next[1], next[0]];
    }

    return recursion(cont, 0);
};

console.log(fraction([0, 0, 3]));
 