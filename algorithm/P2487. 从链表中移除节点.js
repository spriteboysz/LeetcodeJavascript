/*
 * Author: Deean
 * Date: 2023-06-13 23:25
 * FilePath: algorithm
 * Description:2487. 从链表中移除节点
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
    if (head === null) return head;
    let nodes1 = [], nodes2 = [];
    while (head) {
        nodes1.push(head);
        head = head.next;
    }
    nodes2.push(nodes1.pop());
    while (nodes1.length > 0) {
        if (nodes1[nodes1.length - 1].val >= nodes2[0].val) {
            nodes2.unshift(nodes1.pop());
        } else {
            nodes1.pop();
        }
    }
    if (nodes2.length === 0) return null;
    for (let i = 0; i < nodes2.length - 1; i++) {
        nodes2[i].next = nodes2[i + 1];
    }
    nodes2[nodes2.length - 1].next = null;
    return nodes2[0];
};

console.log(removeNodes(ListNode.create("[5,2,13,3,8]")).toString());