/*
 * Author: Deean
 * Date: 2023-10-07 23:40
 * FilePath: LCP
 * Description: LCR 035. 最小时间差
 */

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    if (new Set(timePoints).size < timePoints.length) return 0;
    let times = timePoints.map((time) => {
        let [hh, mm] = time.split(":").map(item => parseInt(item));
        return hh * 60 + mm;
    });
    times.sort((a, b) => a - b);
    let minimum = 1440;
    for (let i = 0; i < timePoints.length - 1; i++) {
        minimum = Math.min(minimum, times[i + 1] - times[i]);
    }
    return Math.min(minimum, 1440 + times[0] - times[times.length - 1]);
};

console.log(findMinDifference(timePoints = ["00:00", "23:59", "00:00"]));
console.log(findMinDifference(timePoints = ["00:00", "23:59", "00:02"]));