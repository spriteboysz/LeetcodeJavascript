/*
 * Author: Deean
 * Date: 2023-06-14 23:38
 * FilePath: algorithm
 * Description:203. 移除链表元素
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) return head;
    let nodes = [];
    while (head) {
        if (head.val !== val) {
            nodes.push(head);
        }
        head = head.next;
    }
    if (nodes.length === 0) return null;
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
};

console.log(removeElements(ListNode.create("[1,2,6,3,4,5,6]"), 6).toString());