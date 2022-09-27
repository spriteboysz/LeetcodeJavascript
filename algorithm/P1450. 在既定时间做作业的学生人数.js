/*
 * Author: Deean
 * Date: 2022-09-27 23:33
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
    let cnt = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
            cnt++;
        }
    }
    return cnt;
};

console.log(busyStudent(startTime = [9, 8, 7, 6, 5, 4, 3, 2, 1], endTime = [10, 10, 10, 10, 10, 10, 10, 10, 10], queryTime = 5));
 