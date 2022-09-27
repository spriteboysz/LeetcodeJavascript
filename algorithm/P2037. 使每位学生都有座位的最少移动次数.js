/*
 * Author: Deean
 * Date: 2022-09-27 23:39
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    let cnt = 0;
    for (let i = 0; i < seats.length; i++) {
        cnt += Math.abs(seats[i] - students[i]);
    }
    return cnt;
};

console.log(minMovesToSeat(seats = [4, 1, 5, 9], students = [1, 3, 2, 6]));
 