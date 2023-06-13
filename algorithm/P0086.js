/*
 * Author: Deean
 * Date: 2023-06-13 23:49
 * FilePath: algorithm
 * Description:86. 分隔链表
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (head === null) return head;
    let nodes = [], gt = [];
    while (head) {
        if (head.val < x) {
            nodes.push(head);
        } else {
            gt.push(head);
        }
        head = head.next;
    }
    while (gt.length > 0) {
        nodes.push(gt.shift());
    }
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
};

let head = ListNode.create("[1,4,3,2,5,2]");
console.log(partition(head, 3).toString());