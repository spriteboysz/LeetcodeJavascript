/*
 * Author: Deean
 * Date: 2022-09-26 23:16
 * FilePath: LCP
 * Description: 
 */

/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function (guess, answer) {
    return guess.filter(
        (item, i) => item === answer[i]
    ).length;
};

console.log(game(guess = [2, 2, 3], answer = [3, 2, 1]));
 