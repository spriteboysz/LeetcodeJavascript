/*
 * Author: Deean
 * Date: 2023-08-13 11:16
 * FilePath: algorithm
 * Description:1344. 时钟指针的夹角
 */

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
    let angle1 = 30 * hour + minutes / 2;
    let angle2 = 6 * minutes;
    let diff = Math.abs(angle1 - angle2);
    return Math.min(diff, 360 - diff);
};

console.log(angleClock(hour = 3, minutes = 15));