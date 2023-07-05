/*
 * Author: Deean
 * Date: 2023-07-04 23:21
 * FilePath: algorithm
 * Description:1736. 替换隐藏数字得到的最晚时间
 */


/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
    for (let i = 24 * 60 - 1; i >= 0; i--) {
        let div = Math.floor(i / 60), mod = i % 60;
        let hh = div >= 10 ? div.toString() : "0" + div.toString();
        let mm = mod >= 10 ? mod.toString() : "0" + mod.toString();
        let curr = hh + ":" + mm;
        let flag = true;
        for (let j = 0; j < 5; j++) {
            if (time[j] !== "?" && time[j] !== curr[j]) {
                flag = false;
                break;
            }
        }
        if (flag) return curr;
    }
    return "";
};

console.log(maximumTime(time = "2?:?0"));