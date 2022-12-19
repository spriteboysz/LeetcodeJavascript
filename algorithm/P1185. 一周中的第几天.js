/*
 * Author: Deean
 * Date: 2022/12/18 23:19
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    let days = 365 * (year - 1971) + Math.floor((year - 1969) / 4);
    for (let i = 0; i < month - 1; ++i) {
        days += monthDays[i];
    }
    if ((year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) && month >= 3) {
        days += 1;
    }
    days += day;
    return week[(days + 3) % 7];
};

console.log(dayOfTheWeek(day = 18, month = 7, year = 1999));