/*
 * Author: Deean
 * Date: 2023-08-03 22:50
 * FilePath: algorithm
 * Description:953. 验证外星语词典
 */


/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let arr = words.slice();
    arr.sort((a, b) => {
        let shorter = a.length > b.length ? b : a;
        for (let i = 0; i < shorter.length; i++) {
            if (order.indexOf(a[i]) < order.indexOf(b[i])) {
                return -1;
            } else if (order.indexOf(a[i]) > order.indexOf(b[i])) {
                return 1;
            }
        }
        return a.length < b.length ? -1 : 1;
    });
    
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== arr[i]) {
            return false;
        }
    }
    return true;
};

console.log(isAlienSorted(words = ["hello", "leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"));