/*
 * Author: Deean
 * Date: 2023-07-02 16:55
 * FilePath: algorithm
 * Description:1360. 日期之间隔几天
 */


/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
    /**
     * @param {number} year
     * @return {boolean}
     */
    var isLeap = function (year) {
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    }
    /**
     * @param {string} date
     * @return {number}
     */
    var process = function (date) {
        let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let yy = parseInt(date.substring(0, 4));
        let mm = parseInt(date.substring(5, 7));
        let days = parseInt(date.substring(8, 10));
        for (let i = 1970; i < yy; i++) {
            if (isLeap(i)) {
                days += 366;
            } else {
                days += 365;
            }
        }
        if (isLeap(yy)) months[1] = 29;
        for (let i = 0; i < mm - 1; i++) {
            days += months[i];
        }
        return days;
    }
    
    return Math.abs(process(date1) - process(date2));
};

console.log(daysBetweenDates(date1 = "2019-06-29", date2 = "2019-06-30"));