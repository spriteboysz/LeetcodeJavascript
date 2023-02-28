/*
 * Author: Deean
 * Date: 2023-02-27 22:41
 * FilePath: algorithm
 * Description: 
 */

var minMaxDifference = function (num) {
    let minimum = num + "", maximum = num + "";
    for (const c of maximum) {
        if (c !== '9') {
            maximum = maximum.replaceAll(c, '9');
            break;
        }
    }
    minimum = minimum.replaceAll(minimum[0], "0");
    // console.log(maximum, minimum);
    return maximum - minimum;
};

console.log(minMaxDifference(num = 11891));