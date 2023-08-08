/*
 * Author: Deean
 * Date: 2023-08-07 23:06
 * FilePath: algorithm
 * Description:1807. 替换字符串中的括号内容
 */

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
    let map = new Map();
    for (const element of knowledge) {
        let [s, d] = element;
        map.set(s, d);
    }
    let flag = false, key = "", ss = "";
    for (let i = 0, n = s.length; i < n; i++) {
        const c = s[i];
        if (c === '(') {
            flag = true;
        } else if (c === ')') {
            ss += map.has(key) ? map.get(key) : "?";
            flag = false;
            key = "";
        } else {
            if (flag) {
                key += c;
            } else {
                ss += c;
            }
        }
    }
    return ss;
};

console.log(evaluate(s = "(name) is (age) years old", knowledge = [["name", "bob"], ["age", "two"]]));