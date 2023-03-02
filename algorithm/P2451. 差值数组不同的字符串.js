/*
 * Author: Deean
 * Date: 2023-03-01 22:53
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
    let map1 = new Map();
    for (let i = 0; i < words.length; i++) {
        let value = [];
        for (let j = 0; j < words[i].length - 1; j++) {
            value.push(words[i][j + 1].charCodeAt(0) - words[i][j].charCodeAt(0));
        }
        map1.set(i, value.join(','));
    }
    const map2 = new Map();
    map1.forEach(value => {
        map2.set(value, (map2.get(value) ?? 0) + 1);
    })
    const join = Array.from(map2.entries()).find(item => item[1] === 1)[0];
    const index = Array.from(map1.entries()).find(item => item[1] === join)[0];
    return words[index];
};

console.log(oddString(["adc", "wzy", "abc"]));