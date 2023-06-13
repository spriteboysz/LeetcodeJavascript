/*
 * Author: Deean
 * Date: 2023-06-13 23:16
 * FilePath: algorithm
 * Description:24. 两两交换链表中的节点
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null) return head;
    let nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    for (let i = 0, n = nodes.length; i + 2 <= n; i += 2) {
        let node = nodes[i];
        nodes[i] = nodes[i + 1];
        nodes[i + 1] = node;
    }
    for (let i = 0, n = nodes.length; i < n - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
};

console.log(swapPairs(ListNode.create("[1,2,3,4]")).toString());
console.log(swapPairs(ListNode.create("[1,2,3]")).toString());