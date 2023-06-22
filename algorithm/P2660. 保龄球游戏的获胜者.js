/*
 * Author: Deean
 * Date: 2023-06-21 22:48
 * FilePath: algorithm
 * Description:2660. 保龄球游戏的获胜者
 */

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
    var process = function (arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if ((i > 0 && arr[i - 1] === 10) || (i > 1 && arr[i - 2] === 10)) {
                sum += 2 * arr[i];
            } else {
                sum += arr[i];
            }
        }
        return sum;
    }
    let player1Sum = process(player1), player2Sum = process(player2);
    if (player1Sum > player2Sum) {
        return 1;
    }
    if (player1Sum < player2Sum) {
        return 2;
    }
    return 0;
};

console.log(isWinner(player1 = [4, 10, 7, 9], player2 = [6, 5, 2, 3]));