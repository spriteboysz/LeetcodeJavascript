/*
 * Author: Deean
 * Date: 2023-10-08 23:44
 * FilePath: LCP
 * Description: LCR 142. 训练计划 IV
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var trainningPlan = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let nodes = [];
    while (l1) {
        nodes.push(l1);
        l1 = l1.next;
    }
    while (l2) {
        nodes.push(l2);
        l2 = l2.next;
    }
    nodes.sort((a, b) => a.val - b.val);
    for (let i = 0, n = nodes.length; i < n - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
};

console.log(trainningPlan(ListNode.create("[1,2,4]"), ListNode.create("[1,3,4]")).toString());