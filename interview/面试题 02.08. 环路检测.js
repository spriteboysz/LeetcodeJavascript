/*
 * Author: Deean
 * Date: 2023-06-14 23:35
 * FilePath: interview
 * Description:面试题 02.08. 环路检测
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let seen = new Set();
    while (head) {
        if (seen.has(head)) {
            return head;
        }
        seen.add(head);
        head = head.next;
    }
    return null;
};

console.log(detectCycle(ListNode.create("[3,2,0,-4]")));