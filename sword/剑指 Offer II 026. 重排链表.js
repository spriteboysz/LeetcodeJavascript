/*
 * Author: Deean
 * Date: 2023-06-13 23:40
 * FilePath: sword
 * Description:剑指 Offer II 026. 重排链表
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (head === null) return;
    let nodes1 = [], nodes2 = [];
    while (head) {
        nodes1.push(head);
        head = head.next;
    }
    while (nodes1.length > 0) {
        if (nodes1.length > 0) nodes2.push(nodes1.shift());
        if (nodes1.length > 0) nodes2.push(nodes1.pop());
    }
    for (let i = 0; i < nodes2.length - 1; i++) {
        nodes2[i].next = nodes2[i + 1];
    }
    nodes2[nodes2.length - 1].next = null;
    console.log(nodes2[0].toString());
};

reorderList(ListNode.create("[1,2,3,4]"));
reorderList(ListNode.create("[1,2,3,4,5]"));