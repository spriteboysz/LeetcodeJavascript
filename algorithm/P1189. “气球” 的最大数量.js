/*
 * Author: Deean
 * Date: 2022-10-03 15:45
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let b = 0, a = 0, l = 0, o = 0, n = 0;
    for (const c of text) {
        switch (c) {
            case "b":
                b++;
                break;
            case "a":
                a++;
                break;
            case "l":
                l += 0.5;
                break;
            case "o":
                o += 0.5;
                break;
            case "n":
                n++;
                break;
        }
    }
    return Math.min(...[b, a, l, o, n].map(item => Math.floor(item)));
};

console.log(maxNumberOfBalloons("loonbalxballpoon"));
 