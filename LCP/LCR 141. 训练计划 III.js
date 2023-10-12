/*
 * Author: Deean
 * Date: 2023-10-08 23:41
 * FilePath: LCP
 * Description: LCR 141. 训练计划 III
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var trainningPlan = function (head) {
    if (!head || !head.next) return head;
    let nodes = [];
    while (head) {
        nodes.unshift(head);
        head = head.next;
    }
    for (let i = 0, n = nodes.length; i < n - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
};

console.log(trainningPlan(ListNode.create("[1,2,3,4,5]")).toString());