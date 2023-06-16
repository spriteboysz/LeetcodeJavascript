/*
 * Author: Deean
 * Date: 2023-06-15 23:02
 * FilePath: algorithm
 * Description:83. 删除排序链表中的重复元素
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null) return null;
    let seen = new Set();
    let nodes = [];
    while (head) {
        if (!seen.has(head.val)) {
            nodes.push(head);
        }
        seen.add(head.val);
        head = head.next;
    }
    if (nodes.length === 0) return null;
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
};

console.log(deleteDuplicates(ListNode.create("[1,1,2,3,3]")).toString());