/*
 * Author: Deean
 * Date: 2022-10-02 18:25
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
    let nums = new Array(m).fill(0).map((_, i) => i + 1);
    let indies = [];
    for (let i = 0; i < queries.length; i++) {
        let index = nums.indexOf(queries[i]);
        nums.unshift(...nums.splice(index, 1));
        indies.push(index);
    }
    return indies;
};

console.log(processQueries(queries = [7, 5, 5, 8, 3], m = 8));
 