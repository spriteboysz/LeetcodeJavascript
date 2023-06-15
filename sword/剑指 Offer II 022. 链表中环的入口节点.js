/*
 * Author: Deean
 * Date: 2023-06-14 23:13
 * FilePath: sword
 * Description:剑指 Offer II 022. 链表中环的入口节点
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