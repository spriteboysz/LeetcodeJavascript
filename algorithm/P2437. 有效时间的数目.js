/*
 * Author: Deean
 * Date: 2023-02-28 23:06
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
    let cnt = 0;
    for (let i = 0; i < 60 * 24; i++) {
        let hh = Math.floor(i / 60), mm = i % 60;
        let cur = hh.toString().padStart(2, '0') + ":" + mm.toString().padStart(2, '0');
        // console.log(cur)
        let flag = true;
        for (let j = 0; j < 5; j++) {
            if (time[j] !== '?' && time[j] !== cur[j]) {
                flag = false;
                break;
            }
        }
        if (flag) cnt++;
    }
    return cnt;
};

console.log(countTime(time = "0?:0?"));