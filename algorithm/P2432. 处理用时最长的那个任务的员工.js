/*
 * Author: Deean
 * Date: 2023-03-02 22:52
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
    let arr = [[logs[0][0], logs[0][1]]];
    for (let i = 0; i < logs.length - 1; i++) {
        let j = i + 1;
        arr.push([logs[j][0], logs[j][1] - logs[i][1]]);
    }
    arr.sort((a, b) => {
        return a[1] === b[1] ? b[0] - a[0] : a[1] - b[1];
    })
    return arr[arr.length - 1][0];
};

console.log(hardestWorker(n = 10, logs = [[0, 3], [2, 5], [0, 9], [1, 15]]));