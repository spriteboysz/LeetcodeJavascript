/*
 * Author: Deean
 * Date: 2023-03-02 23:01
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    function process(date) {
        let s = date.split("-"), days = 0;
        for (let i = 0; i < parseInt(s[0]); i++) {
            days += month[i];
        }
        return days + parseInt(s[1]);
    }
    
    return Math.max(0,
        Math.min(process(leaveAlice), process(leaveBob))
        - Math.max(process(arriveAlice), process(arriveBob)) + 1);
};

console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"));