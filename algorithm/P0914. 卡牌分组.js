/*
 * Author: Deean
 * Date: 2023-07-02 23:10
 * FilePath: algorithm
 * Description:914. 卡牌分组
 */


/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    var gcd = function (a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    
    let map = new Map();
    for (const num of deck) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let nums = [...map.values()];
    let size = nums[0];
    return nums.every(i => (size = gcd(size, i)) > 1);
};

console.log(hasGroupsSizeX(deck = [1, 2, 3, 4, 4, 3, 2, 1]));