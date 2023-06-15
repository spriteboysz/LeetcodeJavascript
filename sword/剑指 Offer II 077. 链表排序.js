/*
 * Author: Deean
 * Date: 2023-06-14 22:27
 * FilePath: sword
 * Description:剑指 Offer II 077. 链表排序
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (head === null) return head;
    let nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    nodes.sort((a, b) => a.val - b.val);
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
};

console.log(sortList(ListNode.create("[4,2,1,3]")).toString());