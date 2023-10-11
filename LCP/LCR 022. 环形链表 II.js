/*
 * Author: Deean
 * Date: 2023-10-07 22:31
 * FilePath: LCP
 * Description: LCR 022. 环形链表 II
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