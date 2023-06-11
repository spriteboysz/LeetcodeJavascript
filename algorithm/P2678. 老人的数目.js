/*
 * Author: Deean
 * Date: 2023-06-11 18:32
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    let cnt = 0;
    for (const detail of details) {
        if (parseInt(detail.substring(11, 13)) > 60) {
            cnt += 1;
        }
    }
    return cnt;
};

console.log(countSeniors(details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"]));