/*
 * Author: Deean
 * Date: 2023-06-14 23:19
 * FilePath: algorithm
 * Description:92. 反转链表 II
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    for (let i = left - 1; i < (left + right - 2) / 2; i++) {
        let node = nodes[i];
        nodes[i] = nodes[right + left - 2 - i];
        nodes[right + left - 2 - i] = node;
    }
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
};

console.log(reverseBetween(ListNode.create("[1,2,3,4,5]"), 2, 4).toString());