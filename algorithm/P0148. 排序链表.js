/*
 * Author: Deean
 * Date: 2022-10-03 23:35
 * FilePath: algorithm
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!head) return head;
    let nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    nodes.sort((a, b) => a.val - b.val);
    for (let i = 1; i < nodes.length; i++) {
        nodes[i - 1].next = nodes[i];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
};

console.log(sortList(ListNode.create("[-1,5,3,4,0]")).toString());
 