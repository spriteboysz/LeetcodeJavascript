/*
 * Author: Deean
 * Date: 2023-06-14 22:22
 * FilePath: algorithm
 * Description:1721. 交换链表中的节点
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    let nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    let n = nodes.length;
    let node = nodes[k - 1];
    nodes[k - 1] = nodes[n - k];
    nodes[n - k] = node;
    for (let i = 0; i < n - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[n - 1].next = null;
    return nodes[0];
};

console.log(swapNodes(ListNode.create("[1,2,3,4,5]"), 2).toString());