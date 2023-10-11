/*
 * Author: Deean
 * Date: 2023-10-07 22:36
 * FilePath: LCP
 * Description: LCR 024. 反转链表
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    for (let i = nodes.length - 1; i > 0; i--) {
        nodes[i].next = nodes[i - 1];
    }
    nodes[0].next = null;
    return nodes[nodes.length - 1];
};

console.log(reverseList(ListNode.create("[1,2,3,4,5]")).toString());