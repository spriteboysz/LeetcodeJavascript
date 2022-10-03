/*
 * Author: Deean
 * Date: 2022-10-03 14:16
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    return new Array(n).fill(0).map((_, i) => {
        let num = i + 1;
        if (num % 3 === 0 && num % 5 === 0) {
            return "FizzBuzz";
        } else if (num % 3 === 0) {
            return "Fizz";
        } else if (num % 5 === 0) {
            return "Buzz";
        } else {
            return num.toString();
        }
    });
};

console.log(fizzBuzz(15));
 