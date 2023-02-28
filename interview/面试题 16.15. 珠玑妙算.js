/*
 * Author: Deean
 * Date: 2023-02-27 21:55
 * FilePath: interview
 * Description: 
 */

/**
 * @param {string} solution
 * @param {string} guess
 * @return {number[]}
 */
var masterMind = function (solution, guess) {
    let res = [0, 0], map = {R: 0, G: 0, B: 0, Y: 0};
    for (let i = 0; i < solution.length; i++) {
        if (solution[i] === guess[i]) {
            res[0] += 1;
        } else {
            map[guess[i]]--;
            map[solution[i]]++;
        }
    }
    res[1] = 4 - Object.values(map).reduce((x, y) => x + Math.abs(y), 0) / 2 - res[0];
    return res;
};

console.log(masterMind(solution = "RGBY", guess = "GGRR"));