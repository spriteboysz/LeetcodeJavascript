/*
 * Author: Deean
 * Date: 2023-03-01 21:50
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} ranks
 * @param {string[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    const suitsSet = new Set();
    for (const suit of suits) {
        suitsSet.add(suit);
    }
    if (suitsSet.size === 1) {
        return "Flush";
    }
    const map = new Map();
    for (const rank of ranks) {
        map.set(rank, (map.get(rank) || 0) + 1);
    }
    if (map.size === 5) {
        return "High Card";
    }
    for (const value of map.values()) {
        if (value > 2) {
            return "Three of a Kind";
        }
    }
    return "Pair";
};

console.log(bestHand(ranks = [13,2,3,1,9], suits = ["a","a","a","a","a"]));