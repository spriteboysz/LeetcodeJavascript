/*
 * Author: Deean
 * Date: 2022-10-04 20:17
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
    let process = function (num) {
        let cnt = 0;
        while (num) {
            cnt += num & 1;
            num >>= 1;
        }
        return cnt;
    }

    let times = [];
    for (let i = 0; i < 12 * 60; i++) {
        let hh = Math.floor(i / 60), mm = i % 60;
        if (process(hh) + process(mm) === turnedOn) {
            times.push(hh + ":" + (mm < 10 ? "0" : "") + mm);
        }
    }
    return times;
};

console.log(readBinaryWatch(1));
 