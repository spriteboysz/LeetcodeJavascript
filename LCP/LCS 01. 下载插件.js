/*
 * Author: Deean
 * Date: 2022/12/19 23:29
 * FilePath: LCP
 * Description: 
 */

/**
 * @param {number} n
 * @return {number}
 */
var leastMinutes = function (n) {
    let speed = 1, steps = 0;
    while (true) {
        if (speed >= n) {
            break;
        }
        speed *= 2;
        steps++;
    }
    return steps + 1;
};

console.log(leastMinutes(2));
console.log(leastMinutes(4));