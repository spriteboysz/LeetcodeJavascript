/*
 * Author: Deean
 * Date: 2023-08-13 16:48
 * FilePath: algorithm
 * Description:1109. 航班预订统计
 */

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
    const nums = new Array(n).fill(0);
    for (const booking of bookings) {
        let [start, end, num] = booking;
        nums[start - 1] += num;
        if (end < n) {
            nums[end] -= num;
        }
    }
    for (let i = 1; i < n; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};

console.log(corpFlightBookings(bookings = [[1, 2, 10], [2, 3, 20], [2, 5, 25]], n = 5));