/*
 * Author: Deean
 * Date: 2023-06-13 23:21
 * FilePath: algorithm
 * Description:147. 对链表进行插入排序
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
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

console.log(insertionSortList(ListNode.create("[4,1,2,3]")).toString());