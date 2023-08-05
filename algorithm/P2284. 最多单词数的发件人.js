/*
 * Author: Deean
 * Date: 2023-08-04 22:32
 * FilePath: algorithm
 * Description:2284. 最多单词数的发件人
 */

/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function (messages, senders) {
    let map = new Map();
    messages.forEach((message, i) => {
        const num = message.split(' ').length;
        map.set(senders[i], (map.get(senders[i]) || 0) + num);
    });
    let max = -Infinity, name = '';
    map.forEach((value, key) => {
        if (value > max) {
            max = value;
            name = key;
        } else if (value === max && key > name) {
            name = key;
        }
    });
    return name;
};

console.log(largestWordCount(messages = ["Hello userTwooo", "Hi userThree", "Wonderful day Alice", "Nice day userThree"],
    senders = ["Alice", "userTwo", "userThree", "Alice"]));