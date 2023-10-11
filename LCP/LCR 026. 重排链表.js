/*
 * Author: Deean
 * Date: 2023-10-07 23:10
 * FilePath: LCP
 * Description: LCR 026. 重排链表
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (head === null || head.next === null) return;
    let nodes1 = [], nodes2 = [];
    let cur = head;
    while (cur) {
        nodes1.push(cur);
        cur = cur.next;
    }
    const n = nodes1.length;
    for (let i = 0; i <= Math.floor(n / 2); i++) {
        nodes2.push(nodes1[i]);
        nodes2.push(nodes1[n - 1 - i]);
    }
    for (let i = 0; i < n - 1; i++) {
        nodes2[i].next = nodes2[i + 1];
    }
    nodes2[n - 1].next = null;
    console.log(head.toString());
};

reorderList(ListNode.create("[1,2,3,4]"));
reorderList(ListNode.create("[1,2,3,4,5]"));
console.log();