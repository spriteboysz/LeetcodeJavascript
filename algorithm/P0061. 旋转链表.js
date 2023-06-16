/*
 * Author: Deean
 * Date: 2023-06-15 23:06
 * FilePath: algorithm
 * Description:61. 旋转链表
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null || k === 0) return head;
    let nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    let n = nodes.length;
    k %= n;
    if (k === 0) return nodes[0];
    nodes[nodes.length - 1].next = nodes[0];
    nodes[nodes.length - k - 1].next = null;
    return nodes[nodes.length - k];
};

console.log(rotateRight(ListNode.create("[1,2,3,4,5]"), 2).toString());