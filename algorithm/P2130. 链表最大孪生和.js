/*
 * Author: Deean
 * Date: 2022-10-02 18:19
 * FilePath: algorithm
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    const values = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    let maximum = 0;
    for (let i = 0; i < values.length / 2; i++) {
        maximum = Math.max(maximum, values[i] + values[values.length - 1 - i]);
    }
    return maximum;
};

console.log(pairSum(ListNode.create("[4,2,2,3]")));
 