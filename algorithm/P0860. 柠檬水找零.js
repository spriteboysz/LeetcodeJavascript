/*
 * Author: Deean
 * Date: 2022/12/19 23:10
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0, ten = 0;
    for (const bill of bills) {
        if (bill === 5) {
            five += 1;
        } else if (bill === 10) {
            if (five === 0) {
                return false;
            }
            five -= 1;
            ten += 1;
        } else {
            if (five > 0 && ten > 0) {
                five -= 1;
                ten -= 1;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};

console.log(lemonadeChange(bills = [5, 5, 5, 10, 20]));