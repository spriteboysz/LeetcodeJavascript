/*
 * Author: Deean
 * Date: 2022-10-04 14:05
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let depth = 0;
    for (const log of logs) {
        if ('./' === log) {

        } else if ('../' === log) {
            if (depth > 0) {
                depth--;
            }
        } else {
            depth++;
        }
    }
    return depth;
};

console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]));
 