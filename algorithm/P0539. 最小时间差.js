/*
 * Author: Deean
 * Date: 2022-10-03 18:55
 * FilePath: algorithm
 * Description: 
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
    let minimum = 1440;
    for (let i = 0; i < times.length; i++) {
        for (let j = 0; j < times.length; j++) {
            if (i === j) continue;
            let diff = Math.abs(times[i] - times[j]);
            minimum = Math.min(minimum, diff, 1440 - diff);
        }
    }
    return minimum;
};

console.log(findMinDifference(["23:59", "00:00"]));
 