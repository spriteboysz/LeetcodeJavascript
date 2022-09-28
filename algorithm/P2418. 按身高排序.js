/*
 * Author: Deean
 * Date: 2022-09-28 22:45
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    let hash = names.map((name, i) => {
        return {name: name, height: heights[i]}
    });
    hash.sort((a, b) => b.height - a.height);
    return hash.map(item => item.name);
};

console.log(sortPeople(names = ["Alice", "Bob", "Bob"], heights = [155, 185, 150]));
 