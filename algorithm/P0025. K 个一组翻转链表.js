/*
 * Author: Deean
 * Date: 2023-06-15 23:16
 * FilePath: algorithm
 * Description:25. K 个一组翻转链表
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (head === null || k === 1) return head;
    let nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    for (let i = 0; i + k <= nodes.length; i += k) {
        for (let j = 0; j < k / 2; j++) {
            let node = nodes[i + j];
            nodes[i + j] = nodes[i + k - 1 - j];
            nodes[i + k - 1 - j] = node;
        }
    }
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
};

console.log(reverseKGroup(ListNode.create("[1,2,3,4,5]"), 2).toString());
console.log(reverseKGroup(ListNode.create("[1,2,3,4,5]"), 3).toString());