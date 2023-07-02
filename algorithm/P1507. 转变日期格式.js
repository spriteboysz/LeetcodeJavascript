/*
 * Author: Deean
 * Date: 2023-07-01 23:33
 * FilePath: algorithm
 * Description:1507. 转变日期格式
 */


/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dates = date.split(" ");
    let dd = dates[0].substring(0, dates[0].length - 2);
    let mm = months.indexOf(dates[1]) + 1;
    let yy = dates[2];
    return `${yy}-${mm > 9 ? mm : "0" + mm}-${parseInt(dd) > 9 ? parseInt(dd) : "0" + parseInt(dd)}`;
};

console.log(reformatDate(date = "2th Oct 2052"));