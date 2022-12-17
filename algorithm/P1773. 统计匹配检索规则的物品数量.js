/*
 * Author: Deean
 * Date: 2022/12/17 21:34
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    const index = {"type":0, "color":1, "name":2}[ruleKey];
    let cnt = 0;
    for (const item of items) {
        if (item[index] === ruleValue) {
            cnt++;
        }
    }
    return cnt;
};

console.log(countMatches(items = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]],
    ruleKey = "color",
    ruleValue = "silver"));