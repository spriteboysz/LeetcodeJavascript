/*
 * Author: Deean
 * Date: 2022-10-03 23:17
 * FilePath: algorithm
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head) return;
    let nodes = [], cur = head;
    while (cur) {
        nodes.push(cur);
        cur = cur.next;
    }

    while (nodes.length > 2) {
        let h = nodes.shift(), t = nodes.pop();
        t.next = h.next;
        h.next = t;
    }
    nodes[nodes.length - 1].next = null;
    console.log(head.toString());
};

reorderList(ListNode.create("[1,2,3,4]"));
reorderList(ListNode.create("[1,2,3,4,5]"));
