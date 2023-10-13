/*
 * Author: Deean
 * Date: 2023-10-09 23:23
 * FilePath: LCP
 * Description: LCR 173. 点名
 */

/**
 * @param {number[]} records
 * @return {number}
 */
var takeAttendance = function (records) {
    let attendance = records.length;
    records.forEach((record, i) => {
        console.log(i, record)
        if (i !== record && attendance === records.length) {
            attendance = i;
        }
    });
    return attendance;
};

console.log(takeAttendance(records = [1, 2, 3, 4, 5]));