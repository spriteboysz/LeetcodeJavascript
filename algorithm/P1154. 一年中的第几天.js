/*
 * Author: Deean
 * Date: 2022/12/18 23:13
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    const year = +date.slice(0, 4);
    const month = +date.slice(5, 7);
    const day = +date.slice(8);
    
    const amount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        ++amount[1];
    }
    
    let days = day;
    for (let i = 0; i < month - 1; ++i) {
        days += amount[i];
    }
    return days;
};

console.log(dayOfYear(date = "2019-01-09"));