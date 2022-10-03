/*
 * Author: Deean
 * Date: 2022-10-03 18:19
 * FilePath: sword
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
    for (let i = 0; i < timePoints.length; i++) {
        for (let j = 0; j < timePoints.length; j++) {
            if (i === j) continue;
            let diff = Math.abs(times[i] - times[j])
            minimum = Math.min(minimum, diff, 1440 - diff);
        }
    }
    return minimum;
};

console.log(findMinDifference(["00:00", "23:59", "00:00"]));
 