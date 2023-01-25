/*
 * Author: Deean
 * Date: 2023/1/19 22:03
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
    function isPrime(num) {
        if (num === 1) {
            return false;
        } else if (num === 2) {
            return true;
        } else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }
    }
    
    let s = Math.sqrt(n);
    if (!(s % 1) && s !== 1 && s !== n) {
        return isPrime(s);
    }
    return false;
};

console.log(isThree(4));